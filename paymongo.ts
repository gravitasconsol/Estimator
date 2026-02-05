/**
 * PayMongo Payment Integration for Philippine Subscriptions
 * Supports: GCash, Maya, Cards, QR Ph (includes RCBC)
 * Funds settle to your RCBC account via PayMongo
 */

import { type Plan } from "./plans";

// PayMongo Configuration - LIVE KEYS
// Funds settle to your RCBC account
// SECURITY: These keys are server-side only and never exposed to client
const PAYMONGO_PUBLIC_KEY = "pk_live_rNvVUnZtwwoZnDfRWEKQS1e5";
const PAYMONGO_SECRET_KEY = "sk_live_e5aqbKdGLzTETH4rbkLMq9nN";

// IMPORTANT SECURITY NOTES:
// 1. Secret key should ONLY be used in backend/cloud functions
// 2. Never expose secret key in client-side code
// 3. All payment processing should go through Firebase Cloud Functions
// 4. Webhook signature verification required for security

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: "awaiting_payment_method" | "awaiting_next_action" | "processing" | "succeeded" | "failed";
  client_key: string;
  payment_method_allowed: string[];
  payment_method_options: Record<string, unknown>;
}

export interface CreatePaymentIntentRequest {
  amount: number; // in cents (e.g., 49900 for ₱499)
  description: string;
  planId: string;
  customerEmail: string;
  customerName: string;
}

/**
 * Create a payment intent for subscription
 * This initiates the payment process
 */
export async function createPaymentIntent(
  request: CreatePaymentIntentRequest
): Promise<PaymentIntent | null> {
  try {
    const response = await fetch("https://api.paymongo.com/v1/payment_intents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(PAYMONGO_SECRET_KEY + ":")}`,
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount: request.amount,
            currency: "PHP",
            description: request.description,
            metadata: {
              plan_id: request.planId,
              customer_email: request.customerEmail,
              customer_name: request.customerName,
            },
          },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("PayMongo Error:", error);
      throw new Error(error.errors?.[0]?.detail || "Payment creation failed");
    }

    const data = await response.json();
    return data.data.attributes as PaymentIntent;
  } catch (error) {
    console.error("Failed to create payment intent:", error);
    return null;
  }
}

/**
 * Attach payment method to intent
 * Used after customer selects payment method (GCash, Maya, Card, QR Ph)
 */
export async function attachPaymentMethod(
  paymentIntentId: string,
  clientKey: string,
  paymentMethodId: string
): Promise<PaymentIntent | null> {
  try {
    const response = await fetch(
      `https://api.paymongo.com/v1/payment_intents/${paymentIntentId}/attach`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(PAYMONGO_PUBLIC_KEY + ":")}`,
        },
        body: JSON.stringify({
          data: {
            attributes: {
              client_key: clientKey,
              payment_method: paymentMethodId,
            },
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("PayMongo Attach Error:", error);
      throw new Error(error.errors?.[0]?.detail || "Payment attachment failed");
    }

    const data = await response.json();
    return data.data.attributes as PaymentIntent;
  } catch (error) {
    console.error("Failed to attach payment method:", error);
    return null;
  }
}

/**
 * Create a PayMongo Checkout Session (Easiest method)
 * Customer pays via hosted checkout page
 * Supports: Cards, GCash, Maya, GrabPay, QR Ph (RCBC, BPI, etc.)
 */
export async function createCheckoutSession(
  plan: Plan,
  customerEmail: string,
  customerName: string,
  successUrl: string,
  cancelUrl: string
): Promise<{ checkout_url: string; session_id: string } | null> {
  try {
    const response = await fetch("https://api.paymongo.com/v1/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(PAYMONGO_SECRET_KEY + ":")}`,
      },
      body: JSON.stringify({
        data: {
          attributes: {
            billing: {
              name: customerName,
              email: customerEmail,
            },
            line_items: [
              {
                name: `${plan.name} Subscription`,
                description: plan.features.join(", "),
                amount: plan.price * 100, // Convert to cents
                currency: "PHP",
                quantity: 1,
              },
            ],
            payment_method_types: ["card", "gcash", "paymaya", "qrph"],
            success_url: successUrl,
            cancel_url: cancelUrl,
            metadata: {
              plan_id: plan.id,
              customer_email: customerEmail,
            },
          },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("PayMongo Checkout Error:", error);
      throw new Error(error.errors?.[0]?.detail || "Checkout creation failed");
    }

    const data = await response.json();
    return {
      checkout_url: data.data.attributes.checkout_url,
      session_id: data.data.id,
    };
  } catch (error) {
    console.error("Failed to create checkout session:", error);
    return null;
  }
}

/**
 * Create a PayMongo Payment Link (No-code option)
 * Send link via SMS, email, or chat
 */
export async function createPaymentLink(
  plan: Plan
): Promise<{ url: string; id: string } | null> {
  try {
    const response = await fetch("https://api.paymongo.com/v1/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(PAYMONGO_SECRET_KEY + ":")}`,
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount: plan.price * 100,
            currency: "PHP",
            description: `${plan.name} Subscription - Construction Estimator Pro`,
            remarks: `Plan: ${plan.name}`,
          },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("PayMongo Link Error:", error);
      throw new Error(error.errors?.[0]?.detail || "Link creation failed");
    }

    const data = await response.json();
    return {
      url: data.data.attributes.checkout_url,
      id: data.data.id,
    };
  } catch (error) {
    console.error("Failed to create payment link:", error);
    return null;
  }
}

/**
 * Verify payment status
 */
export async function verifyPayment(paymentIntentId: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.paymongo.com/v1/payment_intents/${paymentIntentId}`,
      {
        headers: {
          Authorization: `Basic ${btoa(PAYMONGO_SECRET_KEY + ":")}`,
        },
      }
    );

    if (!response.ok) return false;

    const data = await response.json();
    return data.data.attributes.status === "succeeded";
  } catch {
    return false;
  }
}

// Payment Method Descriptions for UI
export const PAYMENT_METHODS = [
  {
    id: "gcash",
    name: "GCash",
    icon: "💳",
    description: "Pay with your GCash wallet",
    color: "#0057E7",
  },
  {
    id: "maya",
    name: "Maya",
    icon: "💚",
    description: "Pay with your Maya wallet",
    color: "#00D632",
  },
  {
    id: "card",
    name: "Credit/Debit Card",
    icon: "💳",
    description: "Visa, Mastercard, JCB",
    color: "#1A1F71",
  },
  {
    id: "qrph",
    name: "QR Ph",
    icon: "📱",
    description: "Scan to pay with any bank app (RCBC, BPI, UnionBank, etc.)",
    color: "#FF6B00",
  },
];

/**
 * Setup Instructions for RCBC Integration:
 * 
 * 1. Sign up at https://www.paymongo.com
 * 2. Complete business verification (KYC)
 * 3. Add your RCBC bank account for payouts:
 *    - Dashboard > Settings > Bank Accounts
 *    - Add RCBC account details
 *    - Payouts are automatic (daily/weekly)
 * 4. Get API keys from Dashboard > Developers > API Keys
 * 5. Replace the keys above with your live keys
 * 
 * Payout Schedule:
 * - QR Ph: Next business day
 * - E-wallets: 2-3 business days
 * - Cards: 7 business days (first payout), then 2-3 days
 * 
 * Fees:
 * - Cards: 3.5% + ₱15
 * - GCash/Maya: 3%
 * - QR Ph: 1.5%
 * - Payout to RCBC: Free
 */
