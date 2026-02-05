import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  Calculator,
  Home,
  User,
  LogOut,
  Menu,
  Check,
  Star,
  Building2,
  FileText,
  History,
  ChevronRight,
  Settings,
  RefreshCw,
  WifiOff,
} from "lucide-react";
import {
  calculateEstimate,
  type EstimateResult,
  type EstimateInput,
  type BuildingType,
  type QualityTier,
  type UserType,
  BUILDING_TYPE_LABELS,
  BUILDING_TYPE_DEFAULTS,
  USER_TYPE_LABELS,
} from "@/lib/estimator-v3";
import { PLANS, formatPrice } from "@/lib/plans";
import {
  schedulePriceUpdates,
  getPriceUpdateInfo,
  forcePriceUpdate,
} from "@/lib/priceService";
import { createCheckoutSession } from "@/lib/paymongo";
import { AdminPanel } from "@/pages/AdminPanel";
import "./App.css";

// ============================================================================
// LANDING PAGE
// ============================================================================

function LandingPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Estimator Pro</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => onNavigate("features")} className="text-slate-600 hover:text-slate-900">Features</button>
              <button onClick={() => onNavigate("pricing")} className="text-slate-600 hover:text-slate-900">Pricing</button>
              <Button onClick={() => onNavigate("login")} variant="outline">Sign In</Button>
              <Button onClick={() => onNavigate("register")}>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            For Philippine Contractors
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Construction Estimates
            <span className="text-blue-600 block">Made Simple</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Generate accurate construction cost estimates in minutes. Built for Filipino contractors 
            with 2025 Philippine material prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("register")} className="gap-2">
              Start Free Trial <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate("pricing")}>
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need</h2>
            <p className="text-slate-600">Professional estimation tools at your fingertips</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Calculator, title: "Accurate Calculations", desc: "Based on 2025 Philippine construction material prices" },
              { icon: Building2, title: "Multiple Project Types", desc: "Residential, commercial, and renovation projects" },
              { icon: FileText, title: "Professional Reports", desc: "Export detailed estimates to PDF for your clients" },
              { icon: History, title: "Save & Track", desc: "Keep all your estimates organized in one place" },
              { icon: Star, title: "Quality Tiers", desc: "Basic, Standard, Above Standard, and Premium options" },
              { icon: Check, title: "Fast & Easy", desc: "Get estimates in minutes, not hours" },
            ].map((feature, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple Pricing</h2>
            <p className="text-slate-600">Choose the plan that fits your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(PLANS).map((plan) => (
              <Card key={plan.id} className={`relative ${plan.popular ? "border-blue-500 border-2" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-slate-900">{plan.priceDisplay.split("/")[0]}</span>
                    <span className="text-slate-500">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => onNavigate("register")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Calculator className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white">Estimator Pro</span>
            </div>
            <p className="text-sm">Built for Philippine contractors. 2025 Material Prices.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// AUTH PAGES
// ============================================================================

function LoginPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const success = await login(email, password);
    if (success) {
      toast.success("Welcome back!");
      onNavigate("dashboard");
    } else {
      toast.error("Invalid credentials. Try demo@example.com / demo123");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <p className="text-center mt-4 text-sm text-slate-600">
            Don't have an account?{" "}
            <button onClick={() => onNavigate("register")} className="text-blue-600 hover:underline">
              Sign up
            </button>
          </p>
          <div className="mt-6 p-4 bg-slate-100 rounded-lg text-sm text-slate-600">
            <p className="font-medium mb-2">Demo Credentials:</p>
            <p>Email: demo@example.com</p>
            <p>Password: demo123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function RegisterPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    companyName: "",
    userType: "contractor" as UserType,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const success = await register(formData);
    if (success) {
      toast.success("Account created! Welcome to Estimator Pro.");
      onNavigate("dashboard");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-xl">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>Start your free trial today</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="userType">I am a...</Label>
              <Select
                value={formData.userType}
                onValueChange={(v) => setFormData({ ...formData, userType: v as UserType })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(USER_TYPE_LABELS).map(([key, label]) => (
                    <SelectItem key={key} value={key}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Your Construction Company"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>
          <p className="text-center mt-4 text-sm text-slate-600">
            Already have an account?{" "}
            <button onClick={() => onNavigate("login")} className="text-blue-600 hover:underline">
              Sign in
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// ============================================================================
// DASHBOARD
// ============================================================================

function Dashboard({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { user, logout, getRemainingEstimates, getUserPlan } = useAuth();
  const [estimates, setEstimates] = useState<EstimateResult[]>([]);

  useEffect(() => {
    // Load saved estimates from localStorage
    const saved = localStorage.getItem("estimates");
    if (saved) {
      try {
        setEstimates(JSON.parse(saved));
      } catch {
        setEstimates([]);
      }
    }
  }, []);

  const handleLogout = () => {
    logout();
    onNavigate("home");
  };

  const plan = getUserPlan();
  const remaining = getRemainingEstimates();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Calculator className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">Estimator Pro</span>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="hidden sm:inline-flex">
                {plan.name} Plan
              </Badge>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="flex items-center gap-3 pb-4 border-b">
                      <div className="bg-slate-100 p-2 rounded-full">
                        <User className="h-5 w-5 text-slate-600" />
                      </div>
                      <div>
                        <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                        <p className="text-sm text-slate-500">{user?.email}</p>
                      </div>
                    </div>
                    <button onClick={() => onNavigate("dashboard")} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100">
                      <Home className="h-5 w-5" /> Dashboard
                    </button>
                    <button onClick={() => onNavigate("estimator")} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100">
                      <Calculator className="h-5 w-5" /> New Estimate
                    </button>
                    <button onClick={() => onNavigate("pricing")} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100">
                      <Star className="h-5 w-5" /> Upgrade Plan
                    </button>
                    <button onClick={() => onNavigate("settings")} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100">
                      <Settings className="h-5 w-5" /> Settings
                    </button>
                    {user?.isAdmin && (
                      <button onClick={() => onNavigate("admin")} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 text-purple-600">
                        <Star className="h-5 w-5" /> Admin Panel
                      </button>
                    )}
                    <Separator />
                    <button onClick={handleLogout} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 text-red-600">
                      <LogOut className="h-5 w-5" /> Sign Out
                    </button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600">Total Estimates</p>
              <p className="text-3xl font-bold">{estimates.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600">Remaining This Month</p>
              <p className="text-3xl font-bold">{remaining}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-slate-600">Current Plan</p>
              <p className="text-3xl font-bold">{plan.name}</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <Button size="lg" className="w-full sm:w-auto gap-2" onClick={() => onNavigate("estimator")}>
            <Calculator className="h-5 w-5" /> Create New Estimate
          </Button>
        </div>

        {/* Recent Estimates */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Estimates</CardTitle>
            <CardDescription>Your saved construction estimates</CardDescription>
          </CardHeader>
          <CardContent>
            {estimates.length === 0 ? (
              <div className="text-center py-12">
                <Calculator className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 mb-2">No estimates yet</p>
                <p className="text-sm text-slate-500 mb-4">Create your first estimate to get started</p>
                <Button onClick={() => onNavigate("estimator")}>Create Estimate</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {estimates.slice(0, 5).map((estimate, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium">{estimate.projectName || estimate.buildingType}</p>
                      <p className="text-sm text-slate-500">
                        {estimate.floorArea} sqm • {estimate.qualityTier} • {new Date(estimate.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{formatPrice(estimate.totalCost)}</p>
                      <p className="text-sm text-slate-500">{formatPrice(estimate.costPerSqm)}/sqm</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

// ============================================================================
// ESTIMATOR PAGE (COMPREHENSIVE V2)
// ============================================================================

function EstimatorPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { user, canCreateEstimate, incrementEstimateCount, getRemainingEstimates } = useAuth();
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

  // Comprehensive form data
  const [formData, setFormData] = useState<EstimateInput>({
    projectName: "",
    buildingType: "bungalow",
    qualityTier: "Standard",
    userType: "contractor",
    floorArea: 100,
    numFloors: 1,
    ceilingHeight: 2.7,
    numBedrooms: 3,
    numBathrooms: 2,
    numKitchens: 1,
    numLivingRooms: 1,
    numDiningRooms: 1,
    numOffices: 0,
    numStorageRooms: 0,
    numWindows: 8,
    windowType: "aluminum",
    numDoors: 4,
    doorType: "standard",
    // Kitchen
    hasDirtyKitchen: true,
    dirtyKitchenArea: 8,
    hasBuiltInAppliances: false,
    // Pool
    hasPool: false,
    poolArea: 0,
    poolType: "concrete",
    hasPoolHeater: false,
    hasPoolFountain: false,
    hasPoolWaterfall: false,
    // Basement
    hasBasement: false,
    basementArea: 0,
    basementHeight: 2.6,
    hasBasementWaterproofing: false,
    hasBasementElevator: false,
    // Exterior
    hasGarage: true,
    garageArea: 18,
    hasCarport: false,
    carportArea: 0,
    hasBalcony: false,
    balconyArea: 0,
    // Plumbing
    septicType: "concrete_3chamber",
    hasWaterHeater: false,
    numWaterHeaters: 0,
    waterHeaterType: "standard",
    // Electrical
    numLights: 20,
    hasAircon: false,
    numAirconUnits: 0,
    airconType: "split",
    hasEmergencyLights: false,
    hasCCTV: false,
    hasGenerator: false,
    generatorSize: "5kva",
    // Roofing
    roofType: "longspan",
    hasCeilingInsulation: false,
    insulationType: "foam",
    // Structural
    hasMetalStructure: false,
    metalStructureType: "i_beam",
    hasRetainingWall: false,
    retainingWallLength: 0,
    retainingWallHeight: 0,
    // Flooring
    floorType: "tiles",
    // Fence & Gate
    hasFence: false,
    fenceLength: 0,
    fenceType: "concrete",
    hasGate: false,
    gateType: "simple",
    hasAutomaticGate: false,
    hasIntercom: false,
    // Landscaping
    hasLandscaping: false,
    landscapeArea: 0,
    hasGazebo: false,
    hasPergola: false,
    hasDeck: false,
    deckArea: 0,
    hasGardenFountain: false,
    hasOutdoorLighting: false,
    // Special
    hasElevator: false,
    hasFireExit: false,
    hasSprinkler: false,
    hasFireAlarm: false,
    // Location
    location: "metro_manila",
    // Disclaimer
    disclaimerAcknowledged: false,
  });

  // Apply defaults when building type changes
  const handleBuildingTypeChange = (type: BuildingType) => {
    const defaults = BUILDING_TYPE_DEFAULTS[type];
    setFormData((prev) => ({
      ...prev,
      buildingType: type,
      ...defaults,
    }));
  };

  const handleCalculate = () => {
    if (!canCreateEstimate()) {
      setShowUpgradeDialog(true);
      return;
    }

    if (!formData.disclaimerAcknowledged) {
      toast.error("Please acknowledge the disclaimer before calculating.");
      return;
    }

    const estimate = calculateEstimate(formData, user?.id || "anonymous");
    setResult(estimate);
    incrementEstimateCount();

    // Save to localStorage
    const existing = localStorage.getItem("estimates");
    const estimates = existing ? JSON.parse(existing) : [];
    estimates.unshift(estimate);
    localStorage.setItem("estimates", JSON.stringify(estimates.slice(0, 50)));

    toast.success("Estimate calculated successfully!");
  };

  const remaining = getRemainingEstimates();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => onNavigate("dashboard")}>
                <ChevronRight className="h-5 w-5 rotate-180" />
              </Button>
              <span className="text-lg font-bold text-slate-900">New Estimate</span>
            </div>
            <Badge variant={typeof remaining === "number" && remaining < 3 ? "destructive" : "outline"}>
              {remaining} remaining
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>Enter your project specifications</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-6 mb-6">
                    <TabsTrigger value="basic">Basic</TabsTrigger>
                    <TabsTrigger value="rooms">Rooms</TabsTrigger>
                    <TabsTrigger value="systems">Systems</TabsTrigger>
                    <TabsTrigger value="exterior">Exterior</TabsTrigger>
                    <TabsTrigger value="special">Special</TabsTrigger>
                    <TabsTrigger value="landscape">Landscape</TabsTrigger>
                  </TabsList>

                  {/* Basic Tab */}
                  <TabsContent value="basic" className="space-y-4">
                    <div>
                      <Label>Project Name</Label>
                      <Input
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        placeholder="e.g., Santos Residence"
                      />
                    </div>

                    <div>
                      <Label>Building Type</Label>
                      <Select
                        value={formData.buildingType}
                        onValueChange={(v) => handleBuildingTypeChange(v as BuildingType)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(BUILDING_TYPE_LABELS).map(([key, label]) => (
                            <SelectItem key={key} value={key}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Quality Tier</Label>
                      <Select
                        value={formData.qualityTier}
                        onValueChange={(v) => setFormData({ ...formData, qualityTier: v as QualityTier })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Basic">Basic</SelectItem>
                          <SelectItem value="Standard">Standard</SelectItem>
                          <SelectItem value="Above Standard">Above Standard</SelectItem>
                          <SelectItem value="Premium">Premium</SelectItem>
                          <SelectItem value="Luxury">Luxury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Floor Area per Floor (sqm)</Label>
                      <Input
                        type="number"
                        value={formData.floorArea}
                        onChange={(e) => setFormData({ ...formData, floorArea: parseInt(e.target.value) || 0 })}
                        min={10}
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        Enter area for ONE floor. Total will be calculated automatically.
                      </p>
                    </div>

                    <div>
                      <Label>Number of Floors</Label>
                      <Select
                        value={formData.numFloors.toString()}
                        onValueChange={(v) => setFormData({ ...formData, numFloors: parseInt(v) })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((n) => (
                            <SelectItem key={n} value={n.toString()}>{n} Floor{n > 1 ? "s" : ""}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Location</Label>
                      <Select
                        value={formData.location}
                        onValueChange={(v) => setFormData({ ...formData, location: v as EstimateInput["location"] })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="metro_manila">Metro Manila</SelectItem>
                          <SelectItem value="provincial_city">Provincial City</SelectItem>
                          <SelectItem value="rural">Rural Area</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  {/* Rooms Tab */}
                  <TabsContent value="rooms" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Bedrooms</Label>
                        <Select
                          value={formData.numBedrooms.toString()}
                          onValueChange={(v) => setFormData({ ...formData, numBedrooms: parseInt(v) })}
                        >
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                              <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Bathrooms</Label>
                        <Select
                          value={formData.numBathrooms.toString()}
                          onValueChange={(v) => setFormData({ ...formData, numBathrooms: parseInt(v) })}
                        >
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                              <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Kitchens</Label>
                        <Select
                          value={formData.numKitchens.toString()}
                          onValueChange={(v) => setFormData({ ...formData, numKitchens: parseInt(v) })}
                        >
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {[0, 1, 2, 3].map((n) => (
                              <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Living Rooms</Label>
                        <Select
                          value={formData.numLivingRooms.toString()}
                          onValueChange={(v) => setFormData({ ...formData, numLivingRooms: parseInt(v) })}
                        >
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {[0, 1, 2, 3].map((n) => (
                              <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Windows</Label>
                        <Input
                          type="number"
                          value={formData.numWindows}
                          onChange={(e) => setFormData({ ...formData, numWindows: parseInt(e.target.value) || 0 })}
                          min={0}
                        />
                      </div>
                      <div>
                        <Label>Doors</Label>
                        <Input
                          type="number"
                          value={formData.numDoors}
                          onChange={(e) => setFormData({ ...formData, numDoors: parseInt(e.target.value) || 0 })}
                          min={0}
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Window Type</Label>
                      <Select
                        value={formData.windowType}
                        onValueChange={(v) => setFormData({ ...formData, windowType: v as EstimateInput["windowType"] })}
                      >
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aluminum">Aluminum Sliding</SelectItem>
                          <SelectItem value="upvc">uPVC Sliding</SelectItem>
                          <SelectItem value="jalousie">Jalousie</SelectItem>
                          <SelectItem value="tempered">Tempered Glass</SelectItem>
                          <SelectItem value="laminated">Laminated Glass</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Door Type</Label>
                      <Select
                        value={formData.doorType}
                        onValueChange={(v) => setFormData({ ...formData, doorType: v as EstimateInput["doorType"] })}
                      >
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic Panel</SelectItem>
                          <SelectItem value="standard">Standard Panel</SelectItem>
                          <SelectItem value="premium">Premium Panel</SelectItem>
                          <SelectItem value="solid_wood">Solid Wood</SelectItem>
                          <SelectItem value="mahogany">Mahogany</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  {/* Systems Tab */}
                  <TabsContent value="systems" className="space-y-4">
                    <div>
                      <Label>Septic System</Label>
                      <Select
                        value={formData.septicType}
                        onValueChange={(v) => setFormData({ ...formData, septicType: v as EstimateInput["septicType"] })}
                      >
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="concrete_3chamber">Concrete 3-Chamber</SelectItem>
                          <SelectItem value="fiberglass">Fiberglass</SelectItem>
                          <SelectItem value="plastic">Plastic</SelectItem>
                          <SelectItem value="biodigester">Biodigester</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Number of Lights</Label>
                        <Input
                          type="number"
                          value={formData.numLights}
                          onChange={(e) => setFormData({ ...formData, numLights: parseInt(e.target.value) || 0 })}
                          min={0}
                        />
                      </div>
                      <div>
                        <Label>Roof Type</Label>
                        <Select
                          value={formData.roofType}
                          onValueChange={(v) => setFormData({ ...formData, roofType: v as EstimateInput["roofType"] })}
                        >
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="longspan">Metal Longspan</SelectItem>
                            <SelectItem value="longspan_insulated">Insulated Longspan</SelectItem>
                            <SelectItem value="tile">Concrete/Clay Tile</SelectItem>
                            <SelectItem value="asphalt_shingle">Asphalt Shingle</SelectItem>
                            <SelectItem value="metal_shingle">Metal Shingle</SelectItem>
                            <SelectItem value="spanish_tile">Spanish Tile</SelectItem>
                            <SelectItem value="slate">Slate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label>Floor Type</Label>
                      <Select
                        value={formData.floorType}
                        onValueChange={(v) => setFormData({ ...formData, floorType: v as EstimateInput["floorType"] })}
                      >
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tiles">Ceramic Tiles</SelectItem>
                          <SelectItem value="vinyl">Vinyl</SelectItem>
                          <SelectItem value="wood">Wood Parquet</SelectItem>
                          <SelectItem value="epoxy">Epoxy (Office)</SelectItem>
                          <SelectItem value="concrete">Polished Concrete</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasWaterHeater}
                        onCheckedChange={(v) => setFormData({ ...formData, hasWaterHeater: v })}
                      />
                      <Label>Water Heater</Label>
                    </div>

                    {formData.hasWaterHeater && (
                      <>
                        <div>
                          <Label>Number of Water Heaters</Label>
                          <Input
                            type="number"
                            value={formData.numWaterHeaters}
                            onChange={(e) => setFormData({ ...formData, numWaterHeaters: parseInt(e.target.value) || 0 })}
                            min={1}
                          />
                        </div>
                        <div>
                          <Label>Water Heater Type</Label>
                          <Select
                            value={formData.waterHeaterType}
                            onValueChange={(v) => setFormData({ ...formData, waterHeaterType: v as EstimateInput["waterHeaterType"] })}
                          >
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="standard">Standard Tank</SelectItem>
                              <SelectItem value="tankless">Tankless</SelectItem>
                              <SelectItem value="solar">Solar</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasAircon}
                        onCheckedChange={(v) => setFormData({ ...formData, hasAircon: v })}
                      />
                      <Label>Air Conditioning</Label>
                    </div>

                    {formData.hasAircon && (
                      <>
                        <div>
                          <Label>Number of AC Units</Label>
                          <Input
                            type="number"
                            value={formData.numAirconUnits}
                            onChange={(e) => setFormData({ ...formData, numAirconUnits: parseInt(e.target.value) || 0 })}
                            min={1}
                          />
                        </div>
                        <div>
                          <Label>AC Type</Label>
                          <Select
                            value={formData.airconType}
                            onValueChange={(v) => setFormData({ ...formData, airconType: v as EstimateInput["airconType"] })}
                          >
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="window">Window Type</SelectItem>
                              <SelectItem value="split">Split Type</SelectItem>
                              <SelectItem value="cassette">Cassette (Office)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasEmergencyLights}
                        onCheckedChange={(v) => setFormData({ ...formData, hasEmergencyLights: v })}
                      />
                      <Label>Emergency Lights</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasCCTV}
                        onCheckedChange={(v) => setFormData({ ...formData, hasCCTV: v })}
                      />
                      <Label>CCTV System</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasGenerator}
                        onCheckedChange={(v) => setFormData({ ...formData, hasGenerator: v })}
                      />
                      <Label>Backup Generator</Label>
                    </div>
                    {formData.hasGenerator && (
                      <div>
                        <Label>Generator Size</Label>
                        <Select
                          value={formData.generatorSize}
                          onValueChange={(v) => setFormData({ ...formData, generatorSize: v as EstimateInput["generatorSize"] })}
                        >
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5kva">5 kVA</SelectItem>
                            <SelectItem value="10kva">10 kVA</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </TabsContent>

                  {/* Exterior Tab */}
                  <TabsContent value="exterior" className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasGarage}
                        onCheckedChange={(v) => setFormData({ ...formData, hasGarage: v })}
                      />
                      <Label>Garage</Label>
                    </div>

                    {formData.hasGarage && (
                      <div>
                        <Label>Garage Area (sqm)</Label>
                        <Input
                          type="number"
                          value={formData.garageArea}
                          onChange={(e) => setFormData({ ...formData, garageArea: parseInt(e.target.value) || 0 })}
                          min={0}
                        />
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasCarport}
                        onCheckedChange={(v) => setFormData({ ...formData, hasCarport: v })}
                      />
                      <Label>Carport</Label>
                    </div>

                    {formData.hasCarport && (
                      <div>
                        <Label>Carport Area (sqm)</Label>
                        <Input
                          type="number"
                          value={formData.carportArea}
                          onChange={(e) => setFormData({ ...formData, carportArea: parseInt(e.target.value) || 0 })}
                          min={0}
                        />
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasBalcony}
                        onCheckedChange={(v) => setFormData({ ...formData, hasBalcony: v })}
                      />
                      <Label>Balcony</Label>
                    </div>

                    {formData.hasBalcony && (
                      <div>
                        <Label>Balcony Area (sqm)</Label>
                        <Input
                          type="number"
                          value={formData.balconyArea}
                          onChange={(e) => setFormData({ ...formData, balconyArea: parseInt(e.target.value) || 0 })}
                          min={0}
                        />
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasFence}
                        onCheckedChange={(v) => setFormData({ ...formData, hasFence: v })}
                      />
                      <Label>Perimeter Fence</Label>
                    </div>

                    {formData.hasFence && (
                      <>
                        <div>
                          <Label>Fence Length (meters)</Label>
                          <Input
                            type="number"
                            value={formData.fenceLength}
                            onChange={(e) => setFormData({ ...formData, fenceLength: parseInt(e.target.value) || 0 })}
                            min={0}
                          />
                        </div>
                        <div>
                          <Label>Fence Type</Label>
                          <Select
                            value={formData.fenceType}
                            onValueChange={(v) => setFormData({ ...formData, fenceType: v as EstimateInput["fenceType"] })}
                          >
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="concrete">Concrete Wall</SelectItem>
                              <SelectItem value="metal">Metal Fence</SelectItem>
                              <SelectItem value="hog_wire">Hog Wire</SelectItem>
                              <SelectItem value="glass">Glass Fence</SelectItem>
                              <SelectItem value="brick">Brick Wall</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasGate}
                        onCheckedChange={(v) => setFormData({ ...formData, hasGate: v })}
                      />
                      <Label>Main Gate</Label>
                    </div>

                    {formData.hasGate && (
                      <div>
                        <Label>Gate Type</Label>
                        <Select
                          value={formData.gateType}
                          onValueChange={(v) => setFormData({ ...formData, gateType: v as EstimateInput["gateType"] })}
                        >
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="simple">Simple Metal</SelectItem>
                            <SelectItem value="ornate">Ornate/Decorative</SelectItem>
                            <SelectItem value="automatic">Automatic Gate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {formData.numFloors >= 4 && (
                      <>
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={formData.hasElevator}
                            onCheckedChange={(v) => setFormData({ ...formData, hasElevator: v })}
                          />
                          <Label>Elevator</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={formData.hasFireExit}
                            onCheckedChange={(v) => setFormData({ ...formData, hasFireExit: v })}
                          />
                          <Label>Fire Exit</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={formData.hasSprinkler}
                            onCheckedChange={(v) => setFormData({ ...formData, hasSprinkler: v })}
                          />
                          <Label>Fire Sprinkler System</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={formData.hasFireAlarm}
                            onCheckedChange={(v) => setFormData({ ...formData, hasFireAlarm: v })}
                          />
                          <Label>Fire Alarm System</Label>
                        </div>
                      </>
                    )}
                  </TabsContent>

                  {/* Special Tab */}
                  <TabsContent value="special" className="space-y-4">
                    {/* Pool */}
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="font-medium text-blue-900 mb-3">🏊 Swimming Pool</p>
                      <div className="flex items-center space-x-2 mb-3">
                        <Switch
                          checked={formData.hasPool}
                          onCheckedChange={(v) => setFormData({ ...formData, hasPool: v })}
                        />
                        <Label>Include Swimming Pool</Label>
                      </div>
                      {formData.hasPool && (
                        <div className="space-y-3">
                          <div>
                            <Label>Pool Area (sqm)</Label>
                            <Input
                              type="number"
                              value={formData.poolArea}
                              onChange={(e) => setFormData({ ...formData, poolArea: parseInt(e.target.value) || 0 })}
                              min={10}
                            />
                          </div>
                          <div>
                            <Label>Pool Type</Label>
                            <Select
                              value={formData.poolType}
                              onValueChange={(v) => setFormData({ ...formData, poolType: v as EstimateInput["poolType"] })}
                            >
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="concrete">Concrete</SelectItem>
                                <SelectItem value="fiberglass">Fiberglass</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={formData.hasPoolHeater}
                              onCheckedChange={(v) => setFormData({ ...formData, hasPoolHeater: v })}
                            />
                            <Label>Pool Heater</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={formData.hasPoolFountain}
                              onCheckedChange={(v) => setFormData({ ...formData, hasPoolFountain: v })}
                            />
                            <Label>Pool Fountain</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={formData.hasPoolWaterfall}
                              onCheckedChange={(v) => setFormData({ ...formData, hasPoolWaterfall: v })}
                            />
                            <Label>Pool Waterfall</Label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Basement */}
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="font-medium text-slate-900 mb-3">🏠 Basement / Underground</p>
                      <div className="flex items-center space-x-2 mb-3">
                        <Switch
                          checked={formData.hasBasement}
                          onCheckedChange={(v) => setFormData({ ...formData, hasBasement: v })}
                        />
                        <Label>Include Basement</Label>
                      </div>
                      {formData.hasBasement && (
                        <div className="space-y-3">
                          <div>
                            <Label>Basement Area (sqm)</Label>
                            <Input
                              type="number"
                              value={formData.basementArea}
                              onChange={(e) => setFormData({ ...formData, basementArea: parseInt(e.target.value) || 0 })}
                              min={10}
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={formData.hasBasementWaterproofing}
                              onCheckedChange={(v) => setFormData({ ...formData, hasBasementWaterproofing: v })}
                            />
                            <Label>Waterproofing</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              checked={formData.hasBasementElevator}
                              onCheckedChange={(v) => setFormData({ ...formData, hasBasementElevator: v })}
                            />
                            <Label>Basement Elevator</Label>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Dirty Kitchen */}
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <p className="font-medium text-orange-900 mb-3">🍳 Dirty Kitchen</p>
                      <div className="flex items-center space-x-2 mb-3">
                        <Switch
                          checked={formData.hasDirtyKitchen}
                          onCheckedChange={(v) => setFormData({ ...formData, hasDirtyKitchen: v })}
                        />
                        <Label>Include Dirty Kitchen</Label>
                      </div>
                      {formData.hasDirtyKitchen && (
                        <div>
                          <Label>Dirty Kitchen Area (sqm)</Label>
                          <Input
                            type="number"
                            value={formData.dirtyKitchenArea}
                            onChange={(e) => setFormData({ ...formData, dirtyKitchenArea: parseInt(e.target.value) || 0 })}
                            min={4}
                          />
                        </div>
                      )}
                    </div>

                    {/* Metal Structure */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-900 mb-3">🔩 Metal Structure</p>
                      <div className="flex items-center space-x-2 mb-3">
                        <Switch
                          checked={formData.hasMetalStructure}
                          onCheckedChange={(v) => setFormData({ ...formData, hasMetalStructure: v })}
                        />
                        <Label>Use Metal Structure (I-Beams, C-Channels)</Label>
                      </div>
                      {formData.hasMetalStructure && (
                        <div>
                          <Label>Metal Structure Type</Label>
                          <Select
                            value={formData.metalStructureType}
                            onValueChange={(v) => setFormData({ ...formData, metalStructureType: v as EstimateInput["metalStructureType"] })}
                          >
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="i_beam">I-Beam Steel</SelectItem>
                              <SelectItem value="c_channel">C-Channel Steel</SelectItem>
                              <SelectItem value="metal_decking">Metal Decking</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>

                    {/* Retaining Wall */}
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasRetainingWall}
                        onCheckedChange={(v) => setFormData({ ...formData, hasRetainingWall: v })}
                      />
                      <Label>Retaining Wall</Label>
                    </div>
                    {formData.hasRetainingWall && (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Length (m)</Label>
                          <Input
                            type="number"
                            value={formData.retainingWallLength}
                            onChange={(e) => setFormData({ ...formData, retainingWallLength: parseInt(e.target.value) || 0 })}
                            min={0}
                          />
                        </div>
                        <div>
                          <Label>Height (m)</Label>
                          <Input
                            type="number"
                            value={formData.retainingWallHeight}
                            onChange={(e) => setFormData({ ...formData, retainingWallHeight: parseInt(e.target.value) || 0 })}
                            min={0}
                          />
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  {/* Landscape Tab */}
                  <TabsContent value="landscape" className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasLandscaping}
                        onCheckedChange={(v) => setFormData({ ...formData, hasLandscaping: v })}
                      />
                      <Label>Include Landscaping</Label>
                    </div>
                    {formData.hasLandscaping && (
                      <div>
                        <Label>Landscape Area (sqm)</Label>
                        <Input
                          type="number"
                          value={formData.landscapeArea}
                          onChange={(e) => setFormData({ ...formData, landscapeArea: parseInt(e.target.value) || 0 })}
                          min={10}
                        />
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasGazebo}
                        onCheckedChange={(v) => setFormData({ ...formData, hasGazebo: v })}
                      />
                      <Label>Gazebo</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasPergola}
                        onCheckedChange={(v) => setFormData({ ...formData, hasPergola: v })}
                      />
                      <Label>Pergola</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasDeck}
                        onCheckedChange={(v) => setFormData({ ...formData, hasDeck: v })}
                      />
                      <Label>Deck</Label>
                    </div>
                    {formData.hasDeck && (
                      <div>
                        <Label>Deck Area (sqm)</Label>
                        <Input
                          type="number"
                          value={formData.deckArea}
                          onChange={(e) => setFormData({ ...formData, deckArea: parseInt(e.target.value) || 0 })}
                          min={5}
                        />
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasGardenFountain}
                        onCheckedChange={(v) => setFormData({ ...formData, hasGardenFountain: v })}
                      />
                      <Label>Garden Fountain</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.hasOutdoorLighting}
                        onCheckedChange={(v) => setFormData({ ...formData, hasOutdoorLighting: v })}
                      />
                      <Label>Outdoor Lighting</Label>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Disclaimer */}
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800 font-medium mb-2">⚠️ Important Notice</p>
                  <p className="text-xs text-amber-700 mb-3">
                    This estimate is for <strong>MATERIAL QUANTITY AND PRICE REFERENCE ONLY</strong>. 
                    It does NOT include labor costs, contractor overhead, profit margin, or other fees. 
                    Actual construction costs may vary. Please consult a licensed contractor for a complete quotation.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.disclaimerAcknowledged}
                      onCheckedChange={(v) => setFormData({ ...formData, disclaimerAcknowledged: v })}
                    />
                    <Label className="text-sm text-amber-800">
                      I understand this is for material estimates only
                    </Label>
                  </div>
                </div>

                <Button 
                  className="w-full mt-4" 
                  size="lg" 
                  onClick={handleCalculate}
                  disabled={!formData.disclaimerAcknowledged}
                >
                  <Calculator className="h-5 w-5 mr-2" /> Calculate Estimate
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {result ? (
              <Card>
                <CardHeader>
                  <CardTitle>{result.projectName || "Estimate Result"}</CardTitle>
                  <CardDescription>{result.buildingType} • {new Date(result.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-3xl font-bold text-blue-600">{formatPrice(result.totalCost)}</p>
                    <p className="text-slate-500 text-sm">{formatPrice(result.costPerSqm)} per sqm</p>
                    <p className="text-xs text-slate-400 mt-1">{result.totalArea} sqm total area</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">Structural</span>
                      <span className="font-semibold">{formatPrice(result.structural.cost)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">Architectural</span>
                      <span className="font-semibold">{formatPrice(result.architectural.cost)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">Electrical</span>
                      <span className="font-semibold">{formatPrice(result.electrical.cost)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">Plumbing</span>
                      <span className="font-semibold">{formatPrice(result.plumbing.cost)}</span>
                    </div>
                    {result.mechanical.cost > 0 && (
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm text-slate-600">Mechanical</span>
                        <span className="font-semibold">{formatPrice(result.mechanical.cost)}</span>
                      </div>
                    )}
                    {result.exterior.cost > 0 && (
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm text-slate-600">Exterior</span>
                        <span className="font-semibold">{formatPrice(result.exterior.cost)}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">Miscellaneous</span>
                      <span className="font-semibold">{formatPrice(result.miscellaneous.cost)}</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <h4 className="font-semibold mb-3">Material Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Cement Bags</span>
                        <span className="font-medium">{result.materials.cementBags.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Sand (cu.m)</span>
                        <span className="font-medium">{result.materials.sandCuM}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Gravel (cu.m)</span>
                        <span className="font-medium">{result.materials.gravelCuM}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Rebar (kg)</span>
                        <span className="font-medium">{result.materials.rebarKg.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">CHB (pcs)</span>
                        <span className="font-medium">{result.materials.chbPcs.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Roofing (sqm)</span>
                        <span className="font-medium">{result.materials.roofingSqm}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Tiles (sqm)</span>
                        <span className="font-medium">{result.materials.tilesSqm}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Paint (liters)</span>
                        <span className="font-medium">{result.materials.paintLiters}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4" variant="outline">
                    <FileText className="h-4 w-4 mr-2" /> Save Estimate
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <div className="text-center">
                  <Calculator className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Enter project details and click Calculate</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Upgrade Dialog */}
      <Dialog open={showUpgradeDialog} onOpenChange={setShowUpgradeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upgrade Your Plan</DialogTitle>
            <DialogDescription>
              You've reached your monthly estimate limit. Upgrade to create more estimates.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Card className="border-blue-500 border-2">
              <CardHeader>
                <CardTitle>Pro Plan</CardTitle>
                <CardDescription>₱499/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 50 estimates per month</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> PDF export</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Custom branding</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="w-full" onClick={() => setShowUpgradeDialog(false)}>
              Maybe Later
            </Button>
            <Button className="w-full" onClick={() => onNavigate("pricing")}>
              View Plans
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ============================================================================
// PRICING PAGE
// ============================================================================

function PricingPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { user, updateUser } = useAuth();

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSelectPlan = async (planId: string) => {
    if (!user) {
      onNavigate("register");
      return;
    }

    // Free plan - just update
    if (planId === "free") {
      toast.success("You're on the Free plan!");
      updateUser({ plan: planId });
      onNavigate("dashboard");
      return;
    }

    // Paid plan - redirect to PayMongo checkout
    setIsProcessing(true);
    toast.loading("Preparing checkout...", { id: "checkout" });

    const plan = PLANS[planId];
    const successUrl = `${window.location.origin}/dashboard?payment=success&plan=${planId}`;
    const cancelUrl = `${window.location.origin}/pricing?payment=cancelled`;

    const session = await createCheckoutSession(
      plan,
      user.email,
      `${user.firstName} ${user.lastName}`,
      successUrl,
      cancelUrl
    );

    if (session) {
      toast.dismiss("checkout");
      // Redirect to PayMongo checkout
      window.location.href = session.checkout_url;
    } else {
      toast.dismiss("checkout");
      toast.error("Failed to create checkout. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => onNavigate(user ? "dashboard" : "home")}>
                <ChevronRight className="h-5 w-5 rotate-180" />
              </Button>
              <span className="text-lg font-bold text-slate-900">Pricing</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Plan</h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Start free and upgrade as your business grows. All plans include access to our Philippine construction price database.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(PLANS).map((plan) => (
            <Card key={plan.id} className={`relative ${plan.popular ? "border-blue-500 border-2" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-slate-900">₱{plan.price}</span>
                  <span className="text-slate-500">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleSelectPlan(plan.id)}
                  disabled={isProcessing}
                >
                  {isProcessing 
                    ? "Processing..." 
                    : user?.plan === plan.id 
                      ? "Current Plan" 
                      : "Select Plan"
                  }
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Questions? Contact us at support@estimatorpro.ph
          </p>
        </div>
      </main>
    </div>
  );
}

// ============================================================================
// SETTINGS PAGE
// ============================================================================

function SettingsPage({
  onNavigate,
  priceInfo,
  onPriceUpdate,
}: {
  onNavigate: (page: string) => void;
  priceInfo: { lastUpdate: string; nextUpdate: string; isStale: boolean };
  onPriceUpdate: () => void;
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [notifications, setNotifications] = useState({
    priceUpdates: true,
    subscriptionAlerts: true,
    estimateReminders: false,
  });

  const handlePriceUpdate = async () => {
    setIsUpdating(true);
    const success = await forcePriceUpdate();
    if (success) {
      toast.success("Prices updated successfully!");
      onPriceUpdate();
    } else {
      toast.error("Failed to update prices");
    }
    setIsUpdating(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => onNavigate("dashboard")}>
                <ChevronRight className="h-5 w-5 rotate-180" />
              </Button>
              <span className="text-lg font-bold text-slate-900">Settings</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Price Update Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" /> Price Updates
            </CardTitle>
            <CardDescription>Manage construction material prices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm text-slate-600">Last Updated</p>
                <p className="font-medium">{priceInfo.lastUpdate}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600">Next Update</p>
                <p className="font-medium">{priceInfo.nextUpdate}</p>
              </div>
            </div>

            {priceInfo.isStale && (
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-700">
                  Prices are outdated. Update now for accurate estimates.
                </p>
              </div>
            )}

            <Button
              onClick={handlePriceUpdate}
              disabled={isUpdating}
              className="w-full"
              variant={priceInfo.isStale ? "default" : "outline"}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isUpdating ? "animate-spin" : ""}`} />
              {isUpdating ? "Updating..." : "Check for Updates"}
            </Button>

            <p className="text-xs text-slate-500">
              Prices are automatically updated every 3 days. Enterprise users can update weekly for offline use.
            </p>
          </CardContent>
        </Card>

        {/* Notifications Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Choose what notifications you receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Price Updates</p>
                <p className="text-sm text-slate-500">Get notified when material prices change</p>
              </div>
              <Switch
                checked={notifications.priceUpdates}
                onCheckedChange={(v) => setNotifications({ ...notifications, priceUpdates: v })}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Subscription Alerts</p>
                <p className="text-sm text-slate-500">Payment reminders and plan changes</p>
              </div>
              <Switch
                checked={notifications.subscriptionAlerts}
                onCheckedChange={(v) =>
                  setNotifications({ ...notifications, subscriptionAlerts: v })
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Estimate Reminders</p>
                <p className="text-sm text-slate-500">Reminders to follow up on estimates</p>
              </div>
              <Switch
                checked={notifications.estimateReminders}
                onCheckedChange={(v) =>
                  setNotifications({ ...notifications, estimateReminders: v })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* App Info */}
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-slate-600">Version</span>
              <span className="font-medium">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Build Date</span>
              <span className="font-medium">February 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Support</span>
              <a href="mailto:support@estimatorpro.ph" className="text-blue-600 hover:underline">
                support@estimatorpro.ph
              </a>
            </div>
            <Separator />
            <p className="text-xs text-slate-500 text-center">
              Construction Estimator Pro for Philippine Contractors
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

// ============================================================================
// MAIN APP
// ============================================================================

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [priceInfo, setPriceInfo] = useState(getPriceUpdateInfo());
  const { isAuthenticated, isLoading, user } = useAuth();

  // Register PWA service worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("[PWA] Service Worker registered:", registration.scope);
        })
        .catch((error) => {
          console.error("[PWA] Service Worker registration failed:", error);
        });
    }
  }, []);

  // Initialize price service
  useEffect(() => {
    schedulePriceUpdates();
  }, []);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast.success("You're back online!");
    };
    const handleOffline = () => {
      setIsOnline(false);
      toast.warning("You're offline. Some features may be limited.");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Redirect to dashboard if authenticated and on public pages
  useEffect(() => {
    if (isAuthenticated && ["home", "login", "register"].includes(currentPage)) {
      setCurrentPage("dashboard");
    }
  }, [isAuthenticated, currentPage]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Show offline indicator
  const OfflineIndicator = () =>
    !isOnline ? (
      <div className="fixed bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50">
        <WifiOff className="h-4 w-4" />
        <span className="text-sm">Offline Mode</span>
      </div>
    ) : null;

  switch (currentPage) {
    case "home":
      return (
        <>
          <LandingPage onNavigate={navigate} />
          <OfflineIndicator />
        </>
      );
    case "login":
      return (
        <>
          <LoginPage onNavigate={navigate} />
          <OfflineIndicator />
        </>
      );
    case "register":
      return (
        <>
          <RegisterPage onNavigate={navigate} />
          <OfflineIndicator />
        </>
      );
    case "dashboard":
      return isAuthenticated ? (
        <>
          <Dashboard onNavigate={navigate} />
          <OfflineIndicator />
        </>
      ) : (
        <LoginPage onNavigate={navigate} />
      );
    case "estimator":
      return isAuthenticated ? (
        <>
          <EstimatorPage onNavigate={navigate} />
          <OfflineIndicator />
        </>
      ) : (
        <LoginPage onNavigate={navigate} />
      );
    case "pricing":
      return (
        <>
          <PricingPage onNavigate={navigate} />
          <OfflineIndicator />
        </>
      );
    case "settings":
      return isAuthenticated ? (
        <>
          <SettingsPage onNavigate={navigate} priceInfo={priceInfo} onPriceUpdate={() => setPriceInfo(getPriceUpdateInfo())} />
          <OfflineIndicator />
        </>
      ) : (
        <LoginPage onNavigate={navigate} />
      );
    case "admin":
      return isAuthenticated && user?.isAdmin ? (
        <>
          <AdminPanel onNavigate={navigate} />
          <OfflineIndicator />
        </>
      ) : (
        <Dashboard onNavigate={navigate} />
      );
    default:
      return (
        <>
          <LandingPage onNavigate={navigate} />
          <OfflineIndicator />
        </>
      );
  }
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
