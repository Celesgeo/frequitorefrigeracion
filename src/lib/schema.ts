export function localBusinessJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    name: "Fresquito",
    alternateName: "FresquitoRefrigeracion",
    description:
      "Servicio técnico de aires acondicionados, heladeras y lavarropas para hogares, comercios y empresas en La Rioja Capital.",
    url: siteUrl || undefined,
    telephone: "+5493804975680",
    image: siteUrl ? `${siteUrl}/favicon.svg` : undefined,
    areaServed: {
      "@type": "City",
      name: "La Rioja",
      containedInPlace: {
        "@type": "State",
        name: "La Rioja",
        containedInPlace: {
          "@type": "Country",
          name: "Argentina",
        },
      },
    },
    serviceType: [
      "Instalación de aire acondicionado",
      "Reparación de aire acondicionado",
      "Mantenimiento de aire acondicionado",
      "Reparación de heladeras",
      "Reparación de lavarropas",
      "Técnico en refrigeración en La Rioja",
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://wa.me/5493804975680",
      servicePhone: "+5493804975680",
    },
  };
}
