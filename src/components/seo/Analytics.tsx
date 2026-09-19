import { analyticsConfig } from "@/config/site";
import { isGa4Enabled, isMetaPixelEnabled } from "@/lib/analytics";
import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    if (isGa4Enabled()) {
      loadGa4(analyticsConfig.ga4Id);
    }

    if (isMetaPixelEnabled()) {
      loadMetaPixel(analyticsConfig.metaPixelId);
    }
  }, []);

  return null;
}

function loadGa4(id: string) {
  if (document.getElementById("ga4-src")) return;

  const src = document.createElement("script");
  src.id = "ga4-src";
  src.async = true;
  src.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(src);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
}

function loadMetaPixel(id: string) {
  if (document.getElementById("meta-pixel")) return;

  const script = document.createElement("script");
  script.id = "meta-pixel";
  script.innerHTML = `
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${id}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
}
