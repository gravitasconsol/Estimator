/**
 * Admin Panel for Managing Prices and Subscriptions
 * Only accessible to admin users
 */

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import {
  DollarSign,
  Users,
  TrendingUp,
  RefreshCw,
  Save,
  Download,
  ArrowLeft,
  Package,
  CreditCard,
} from "lucide-react";
import { PRICES } from "@/lib/estimator";
import {
  getPriceUpdateInfo,
  forcePriceUpdate,
  savePricesToCache,
  getCachedPrices,
} from "@/lib/priceService";
import { PLANS, formatPrice } from "@/lib/plans";

interface Subscriber {
  id: string;
  email: string;
  name: string;
  plan: string;
  status: "active" | "cancelled" | "past_due";
  joinedAt: string;
  lastPayment: string;
  totalPaid: number;
}

interface RevenueStats {
  totalRevenue: number;
  monthlyRecurring: number;
  activeSubscribers: number;
  churnRate: number;
}

export function AdminPanel({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { user } = useAuth();
  const [prices, setPrices] = useState<Record<string, number>>(PRICES);
  const [editedPrices, setEditedPrices] = useState<Record<string, number>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [priceInfo, setPriceInfo] = useState(getPriceUpdateInfo());
  const [activeTab, setActiveTab] = useState("prices");

  // Mock data - in production, fetch from backend
  const [subscribers] = useState<Subscriber[]>([
    {
      id: "1",
      email: "juan@contractor.ph",
      name: "Juan Dela Cruz",
      plan: "pro",
      status: "active",
      joinedAt: "2025-01-15",
      lastPayment: "2025-02-01",
      totalPaid: 998,
    },
    {
      id: "2",
      email: "maria@buildcorp.ph",
      name: "Maria Santos",
      plan: "enterprise",
      status: "active",
      joinedAt: "2025-01-10",
      lastPayment: "2025-02-01",
      totalPaid: 2998,
    },
    {
      id: "3",
      email: "pedro@construction.ph",
      name: "Pedro Reyes",
      plan: "pro",
      status: "cancelled",
      joinedAt: "2024-12-01",
      lastPayment: "2025-01-01",
      totalPaid: 499,
    },
  ]);

  const [revenueStats] = useState<RevenueStats>({
    totalRevenue: 4495,
    monthlyRecurring: 1997,
    activeSubscribers: 2,
    churnRate: 33.3,
  });

  // Group prices by category
  const priceCategories = {
    "Structural Materials": [
      "cement_40kg",
      "sand_cu_m",
      "gravel_cu_m",
      "chb_4in",
      "chb_6in",
      "rebar_10mm_kg",
      "rebar_12mm_kg",
      "rebar_16mm_kg",
      "rebar_20mm_kg",
      "tie_wire_kg",
    ],
    Roofing: [
      "roof_longspan_04mm",
      "roof_longspan_05mm",
      "roof_longspan_06mm",
      "roof_gi_corrugated",
      "roof_clay_tile",
      "roof_concrete_tile",
      "gutter_metal",
      "downspout",
      "ridge_roll",
    ],
    Flooring: [
      "tiles_20x20",
      "tiles_30x30",
      "tiles_40x40",
      "tiles_60x60",
      "tiles_60x60_premium",
      "granite_tiles",
      "marble_tiles",
      "vinyl_tiles",
      "wood_parquet",
      "tile_adhesive",
      "tile_grout",
    ],
    "Paint & Finishes": [
      "paint_latex_basic",
      "paint_latex_standard",
      "paint_latex_premium",
      "paint_enamel_standard",
      "paint_epoxy",
      "paint_elastomeric",
      "paint_primer",
      "ceiling_gypsum",
      "ceiling_hardiflex",
      "ceiling_pvc",
    ],
    "Doors & Windows": [
      "door_panel_basic",
      "door_panel_standard",
      "door_panel_premium",
      "door_jamb",
      "door_knob_standard",
      "window_sliding_standard",
      "window_sliding_premium",
    ],
    "Kitchen & Bath": [
      "kitchen_sink_standard",
      "kitchen_sink_premium",
      "kitchen_faucet_standard",
      "water_closet_basic",
      "water_closet_standard",
      "water_closet_premium",
      "lavatory_basic",
      "lavatory_standard",
      "shower_set_basic",
      "shower_set_standard",
    ],
    Plumbing: [
      "pvc_pipe_1_2",
      "pvc_pipe_3_4",
      "pvc_pipe_1",
      "pvc_pipe_2",
      "pipe_fittings",
      "gate_valve",
      "water_meter",
      "water_tank_1000L",
      "septic_tank",
    ],
    Electrical: [
      "wire_14_2",
      "wire_12_2",
      "conduit_pvc",
      "outlet_double",
      "switch_single",
      "led_downlight_standard",
      "led_downlight_premium",
      "panel_board_standard",
      "breaker_20A",
    ],
  };

  const formatPriceName = (key: string): string => {
    return key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .replace(/Kg/g, "kg")
      .replace(/Sqm/g, "sqm")
      .replace(/Cu M/g, "cu.m")
      .replace(/Mm/g, "mm")
      .replace(/Pcs/g, "pcs");
  };

  const handlePriceChange = (key: string, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      setEditedPrices((prev) => ({ ...prev, [key]: numValue }));
    }
  };

  const savePriceChanges = () => {
    const updatedPrices = { ...prices, ...editedPrices };
    setPrices(updatedPrices);
    savePricesToCache(updatedPrices, "admin-manual");
    setEditedPrices({});
    setIsEditing(false);
    toast.success("Prices updated successfully!");
  };

  const handleAutoUpdate = async () => {
    setIsUpdating(true);
    const success = await forcePriceUpdate();
    if (success) {
      const cached = getCachedPrices();
      if (cached) {
        setPrices(cached);
      }
      setPriceInfo(getPriceUpdateInfo());
      toast.success("Prices updated from server!");
    } else {
      toast.error("Failed to update prices. Using cached values.");
    }
    setIsUpdating(false);
  };

  const exportPrices = () => {
    const dataStr = JSON.stringify(prices, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `prices-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Prices exported!");
  };

  const exportSubscribers = () => {
    const csv = [
      ["ID", "Name", "Email", "Plan", "Status", "Joined", "Last Payment", "Total Paid"].join(","),
      ...subscribers.map((s) =>
        [s.id, s.name, s.email, s.plan, s.status, s.joinedAt, s.lastPayment, s.totalPaid].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `subscribers-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Subscribers exported!");
  };

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You don't have permission to access this page.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => onNavigate("dashboard")}>Go to Dashboard</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => onNavigate("dashboard")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-lg font-bold text-slate-900">Admin Panel</h1>
                <p className="text-xs text-slate-500">Manage prices and subscribers</p>
              </div>
            </div>
            <Badge variant="default" className="bg-purple-600">
              Admin
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="prices" className="gap-2">
              <Package className="h-4 w-4" /> Prices
            </TabsTrigger>
            <TabsTrigger value="subscribers" className="gap-2">
              <Users className="h-4 w-4" /> Subscribers
            </TabsTrigger>
            <TabsTrigger value="revenue" className="gap-2">
              <TrendingUp className="h-4 w-4" /> Revenue
            </TabsTrigger>
          </TabsList>

          {/* Prices Tab */}
          <TabsContent value="prices" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Material Prices</CardTitle>
                    <CardDescription>
                      Last updated: {priceInfo.lastUpdate} | Next update: {priceInfo.nextUpdate}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={exportPrices}>
                      <Download className="h-4 w-4 mr-2" /> Export
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleAutoUpdate}
                      disabled={isUpdating}
                    >
                      <RefreshCw className={`h-4 w-4 mr-2 ${isUpdating ? "animate-spin" : ""}`} />
                      {isUpdating ? "Updating..." : "Auto Update"}
                    </Button>
                    <Button
                      variant={isEditing ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        if (isEditing) {
                          savePriceChanges();
                        } else {
                          setIsEditing(true);
                        }
                      }}
                    >
                      {isEditing ? (
                        <>
                          <Save className="h-4 w-4 mr-2" /> Save Changes
                        </>
                      ) : (
                        "Edit Prices"
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px]">
                  <div className="space-y-6">
                    {Object.entries(priceCategories).map(([category, keys]) => (
                      <div key={category}>
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Package className="h-4 w-4 text-blue-600" />
                          {category}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {keys.map((key) => (
                            <div key={key} className="space-y-1">
                              <Label className="text-xs text-slate-500">
                                {formatPriceName(key)}
                              </Label>
                              {isEditing ? (
                                <Input
                                  type="number"
                                  value={editedPrices[key] ?? prices[key]}
                                  onChange={(e) => handlePriceChange(key, e.target.value)}
                                  className="h-8"
                                />
                              ) : (
                                <div className="text-sm font-medium">
                                  ₱{(editedPrices[key] ?? prices[key]).toLocaleString()}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <Separator className="mt-4" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscribers Tab */}
          <TabsContent value="subscribers" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-slate-600">Total Subscribers</p>
                  <p className="text-3xl font-bold">{subscribers.length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-slate-600">Active</p>
                  <p className="text-3xl font-bold text-green-600">
                    {subscribers.filter((s) => s.status === "active").length}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-slate-600">Cancelled</p>
                  <p className="text-3xl font-bold text-red-600">
                    {subscribers.filter((s) => s.status === "cancelled").length}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-slate-600">Pro Plan</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {subscribers.filter((s) => s.plan === "pro").length}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Subscriber List</CardTitle>
                  <Button variant="outline" size="sm" onClick={exportSubscribers}>
                    <Download className="h-4 w-4 mr-2" /> Export CSV
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subscribers.map((subscriber) => (
                    <div
                      key={subscriber.id}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{subscriber.name}</p>
                        <p className="text-sm text-slate-500">{subscriber.email}</p>
                        <div className="flex gap-2 mt-1">
                          <Badge
                            variant={subscriber.status === "active" ? "default" : "secondary"}
                          >
                            {subscriber.status}
                          </Badge>
                          <Badge variant="outline">{PLANS[subscriber.plan]?.name || subscriber.plan}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{formatPrice(subscriber.totalPaid)}</p>
                        <p className="text-sm text-slate-500">
                          Joined {new Date(subscriber.joinedAt).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-slate-400">
                          Last payment: {new Date(subscriber.lastPayment).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Revenue Tab */}
          <TabsContent value="revenue" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-slate-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-green-600">
                    {formatPrice(revenueStats.totalRevenue)}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-slate-600">Monthly Recurring</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {formatPrice(revenueStats.monthlyRecurring)}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-slate-600">Active Subscribers</p>
                  <p className="text-3xl font-bold">{revenueStats.activeSubscribers}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-slate-600">Churn Rate</p>
                  <p className="text-3xl font-bold text-orange-600">
                    {revenueStats.churnRate}%
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>By payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <CreditCard className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">QR Ph (Banks)</p>
                        <p className="text-sm text-slate-500">RCBC, BPI, UnionBank, etc.</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatPrice(2247)}</p>
                      <p className="text-sm text-green-600">1.5% fee</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <DollarSign className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">GCash & Maya</p>
                        <p className="text-sm text-slate-500">E-wallet payments</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatPrice(1497)}</p>
                      <p className="text-sm text-green-600">3% fee</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <CreditCard className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">Credit/Debit Cards</p>
                        <p className="text-sm text-slate-500">Visa, Mastercard, JCB</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatPrice(751)}</p>
                      <p className="text-sm text-orange-600">3.5% + ₱15 fee</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-green-800">Your Net Profit</p>
                    <p className="text-sm text-green-600">After all fees</p>
                  </div>
                  <p className="text-2xl font-bold text-green-700">
                    {formatPrice(4312)}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PayMongo Dashboard</CardTitle>
                <CardDescription>Manage payouts and view transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  View detailed transaction history, manage payouts to your RCBC account, and download
                  reports from the PayMongo dashboard.
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://dashboard.paymongo.com", "_blank")}
                >
                  Open PayMongo Dashboard
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
