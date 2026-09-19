import { analyticsConfig, site } from "@/config/site";
import { localBusinessJsonLd } from "@/lib/schema";
import { useEffect } from "react";

export function DocumentHead() {
  useEffect(() => {
    document.title = site.seo.title;

    upsertMeta("name", "description", site.seo.description);
    upsertMeta("name", "keywords", site.seo.keywords.join(", "));
    upsertMeta("property", "og:title", site.seo.title);
    upsertMeta("property", "og:description", site.seo.description);

    if (site.siteUrl) {
      upsertLink("canonical", site.siteUrl);
      upsertMeta("property", "og:url", site.siteUrl);
    }

    if (analyticsConfig.searchConsoleVerification) {
      upsertMeta(
        "name",
        "google-site-verification",
        analyticsConfig.searchConsoleVerification,
      );
    }
  }, []);

  const jsonLd = localBusinessJsonLd(site.siteUrl);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}
