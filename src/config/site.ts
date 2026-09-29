import type { AnalyticsConfig, SiteConfig } from "./types";

export const analyticsConfig: AnalyticsConfig = {
  ga4Id: import.meta.env.VITE_GA4_ID?.trim() || "",
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID?.trim() || "",
  searchConsoleVerification:
    import.meta.env.VITE_SEARCH_CONSOLE_VERIFICATION?.trim() || "",
};

const siteUrl = import.meta.env.VITE_SITE_URL?.trim() || "";

export const site: SiteConfig = {
  brandName: "Fresquito",
  brandFullName: "FresquitoRefrigeracion",
  slogan: "Tu confort, nuestra prioridad",
  trade: "Servicio técnico de aires acondicionados, heladeras y lavarropas",
  eyebrow: "Servicio técnico residencial y comercial",
  heroPlace: "La Rioja Capital",
  heroTitle: "Aires acondicionados, heladeras y lavarropas.",
  heroDescription: "Instalación, reparación y mantenimiento.",
  heroAudiences: ["Hogares", "Comercios", "Empresas"],
  heroMethod: "Trabajamos de inmediato. ¡Coordiná tu visita!",
  heroCtaPrimary: "Pedir diagnóstico por WhatsApp",
  heroCtaSecondary: "Ver servicios",
  locationLabel: "Atención en Ciudad de La Rioja, Capital",
  serviceArea: "Ciudad de La Rioja, Capital",
  hoursLabel: "Atención con coordinación previa",
  instagramUrl: "https://www.instagram.com/fresquito.ref/",
  instagramHandle: "@fresquito.ref",
  whatsapp: {
    display: "+54 9 3804 975680",
    e164: "5493804975680",
    defaultMessage:
      "Hola, FresquitoRefrigeración. Quisiera solicitar un diagnóstico. El equipo (aire acondicionado, heladera o lavarropas) se encuentra en La Rioja Capital y presenta el siguiente problema:",
  },
  ctas: {
    primary: "Solicitar diagnóstico",
    secondary: "Conocer servicios",
  },
  seo: {
    title:
      "Aires acondicionados, heladeras y lavarropas en La Rioja | FresquitoRefrigeracion",
    description:
      "Servicio técnico de aires acondicionados, heladeras y lavarropas en La Rioja Capital. Instalación, reparación y mantenimiento para hogares, comercios y empresas.",
    keywords: [
      "reparación de aire acondicionado en La Rioja",
      "reparación de heladeras en La Rioja",
      "reparación de lavarropas en La Rioja",
      "técnico en refrigeración en La Rioja",
      "instalación de aire acondicionado en La Rioja",
    ],
  },
  footerCredit: "Diseño y desarrollo por CSTUDIODEVS",
  footerCreditUrl: "https://www.cestudiodevs.com",
  siteUrl,
  features: {
    showEmail: false,
    showAddress: false,
    showTestimonials: false,
    showBeforeAfter: false,
    showWorksGallery: false,
    showLegalName: false,
    showLandline: false,
  },
};
