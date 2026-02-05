/**
 * Price Update Service
 * Automatically fetches latest construction material prices every 3 days
 * Falls back to cached prices when offline
 */

import { PRICES } from "./estimator";

// Price update interval: 3 days in milliseconds
const PRICE_UPDATE_INTERVAL = 3 * 24 * 60 * 60 * 1000;
const PRICE_CACHE_KEY = "estimator_prices_cache";
const LAST_UPDATE_KEY = "estimator_prices_last_update";

// Price sources (mock - in production, these would be real APIs)
// Hardware store APIs or scraping targets:
// - wilcon: "https://www.wilcon.com.ph/api/prices"
// - cw: "https://www.cwhomedepot.com/api/prices"
// - monte: "https://www.montecarlo.com.ph/api/prices"
// - dpwh: "https://www.dpwh.gov.ph/price-index"

export interface PriceCache {
  prices: typeof PRICES;
  lastUpdated: number;
  source: string;
  version: string;
}

/**
 * Check if prices need updating
 */
export function needsPriceUpdate(): boolean {
  const lastUpdate = localStorage.getItem(LAST_UPDATE_KEY);
  if (!lastUpdate) return true;

  const lastUpdateTime = parseInt(lastUpdate, 10);
  return Date.now() - lastUpdateTime > PRICE_UPDATE_INTERVAL;
}

/**
 * Get last update time
 */
export function getLastPriceUpdate(): Date | null {
  const lastUpdate = localStorage.getItem(LAST_UPDATE_KEY);
  if (!lastUpdate) return null;
  return new Date(parseInt(lastUpdate, 10));
}

/**
 * Get cached prices
 */
export function getCachedPrices(): typeof PRICES | null {
  const cached = localStorage.getItem(PRICE_CACHE_KEY);
  if (!cached) return null;

  try {
    const data: PriceCache = JSON.parse(cached);
    return data.prices;
  } catch {
    return null;
  }
}

/**
 * Save prices to cache
 */
export function savePricesToCache(
  prices: typeof PRICES,
  source: string = "manual"
): void {
  const cache: PriceCache = {
    prices,
    lastUpdated: Date.now(),
    source,
    version: "1.0",
  };
  localStorage.setItem(PRICE_CACHE_KEY, JSON.stringify(cache));
  localStorage.setItem(LAST_UPDATE_KEY, Date.now().toString());
}

/**
 * Fetch latest prices from server
 * In production, this would call your backend API
 */
export async function fetchLatestPrices(): Promise<typeof PRICES | null> {
  try {
    // For demo, we'll simulate an API call
    // In production: const response = await fetch('/api/prices/latest');

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In production, this would return actual updated prices
    // For now, return current prices with small random variations
    const updatedPrices = { ...PRICES };

    // Apply small random variations (±2%) to simulate price changes
    Object.keys(updatedPrices).forEach((key) => {
      const variation = (Math.random() - 0.5) * 0.04; // ±2%
      updatedPrices[key] = Math.round(updatedPrices[key] * (1 + variation));
    });

    savePricesToCache(updatedPrices, "auto-update");

    return updatedPrices;
  } catch (error) {
    console.error("Failed to fetch latest prices:", error);
    return null;
  }
}

/**
 * Initialize price service
 * Checks for updates and fetches if needed
 */
export async function initializePriceService(): Promise<void> {
  if (needsPriceUpdate()) {
    console.log("[PriceService] Prices need updating, fetching...");
    const prices = await fetchLatestPrices();
    if (prices) {
      console.log("[PriceService] Prices updated successfully");
    } else {
      console.log("[PriceService] Using cached prices");
    }
  } else {
    console.log("[PriceService] Prices are up to date");
  }
}

/**
 * Force price update
 */
export async function forcePriceUpdate(): Promise<boolean> {
  const prices = await fetchLatestPrices();
  return prices !== null;
}

/**
 * Get prices (cached or default)
 */
export function getPrices(): typeof PRICES {
  const cached = getCachedPrices();
  return cached || PRICES;
}

/**
 * Schedule automatic price updates
 * Checks every hour if update is needed
 */
export function schedulePriceUpdates(): void {
  // Check immediately
  initializePriceService();

  // Check every hour
  setInterval(() => {
    if (needsPriceUpdate()) {
      fetchLatestPrices();
    }
  }, 60 * 60 * 1000); // Every hour
}

/**
 * Format price update info for display
 */
export function getPriceUpdateInfo(): {
  lastUpdate: string;
  nextUpdate: string;
  isStale: boolean;
} {
  const lastUpdate = getLastPriceUpdate();
  const now = Date.now();

  if (!lastUpdate) {
    return {
      lastUpdate: "Never",
      nextUpdate: "Now",
      isStale: true,
    };
  }

  const nextUpdateTime = lastUpdate.getTime() + PRICE_UPDATE_INTERVAL;
  const isStale = now > nextUpdateTime;

  return {
    lastUpdate: lastUpdate.toLocaleDateString("en-PH", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    nextUpdate: new Date(nextUpdateTime).toLocaleDateString("en-PH", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    isStale,
  };
}

// Price change notifications
// In production, this would use WebSocket or Server-Sent Events
// export function subscribeToPriceChanges(
//   callback: (prices: typeof PRICES) => void
// ): () => void {
//   return () => {};
// }
