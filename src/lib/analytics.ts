import { analyticsConfig } from "@/config/site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function isGa4Enabled() {
  return Boolean(analyticsConfig.ga4Id);
}

export function isMetaPixelEnabled() {
  return Boolean(analyticsConfig.metaPixelId);
}

export function trackEvent(name: string, params?: Record<string, string>) {
  if (isGa4Enabled() && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  if (isMetaPixelEnabled() && typeof window.fbq === "function") {
    window.fbq("trackCustom", name, params);
  }
}
