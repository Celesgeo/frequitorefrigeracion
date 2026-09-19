export type AnalyticsConfig = {
  ga4Id: string;
  metaPixelId: string;
  searchConsoleVerification: string;
};

export type SiteConfig = {
  brandName: string;
  brandFullName: string;
  slogan: string;
  trade: string;
  eyebrow: string;
  heroPlace: string;
  heroTitle: string;
  heroDescription: string;
  heroAudiences: readonly [string, string, string];
  heroMethod: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  locationLabel: string;
  serviceArea: string;
  hoursLabel: string;
  instagramUrl: string;
  instagramHandle: string;
  whatsapp: {
    display: string;
    e164: string;
    defaultMessage: string;
  };
  ctas: {
    primary: string;
    secondary: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  footerCredit: string;
  footerCreditUrl: string;
  siteUrl: string;
  features: {
    showEmail: boolean;
    showAddress: boolean;
    showTestimonials: boolean;
    showBeforeAfter: boolean;
    showWorksGallery: boolean;
    showLegalName: boolean;
    showLandline: boolean;
  };
};
