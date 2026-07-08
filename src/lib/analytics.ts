export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

export function isGoogleAnalyticsEnabled() {
  return Boolean(GA_MEASUREMENT_ID);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackPageView(url: string, measurementId: string) {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("config", measurementId, {
    page_path: url,
  });
}
