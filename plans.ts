/**
 * Subscription Plans Configuration
 */

export interface Plan {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  estimatesPerMonth: number;
  features: string[];
  popular?: boolean;
}

export const PLANS: Record<string, Plan> = {
  free: {
    id: "free",
    name: "Free",
    price: 0,
    priceDisplay: "₱0/month",
    estimatesPerMonth: 5,
    features: [
      "5 estimates per month",
      "Basic project types",
      "Email support",
      "Save up to 10 estimates",
    ],
  },
  pro: {
    id: "pro",
    name: "Pro",
    price: 499,
    priceDisplay: "₱499/month",
    estimatesPerMonth: 50,
    features: [
      "50 estimates per month",
      "All project types",
      "Priority email support",
      "Unlimited saved estimates",
      "Export to PDF",
      "Custom branding",
    ],
    popular: true,
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    price: 1499,
    priceDisplay: "₱1,499/month",
    estimatesPerMonth: -1, // Unlimited
    features: [
      "Unlimited estimates",
      "All project types",
      "Priority phone & email support",
      "Unlimited saved estimates",
      "Export to PDF & Excel",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Team collaboration (up to 10 users)",
    ],
  },
};

export function getPlanById(id: string): Plan {
  return PLANS[id] || PLANS.free;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 0,
  }).format(price);
}
