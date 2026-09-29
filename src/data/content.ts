export const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#empresas", label: "Empresas" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const tickerPhrases = [
  "Aires acondicionados, heladeras y lavarropas",
  "Diagnóstico primero",
  "Instalación de aires acondicionados",
  "Reparación de equipos",
  "Hogares, comercios y empresas",
  "Atención en La Rioja Capital",
] as const;

export const trustItems = [
  {
    title: "Diagnóstico primero",
    text: "Vemos el equipo antes de proponer una solución.",
  },
  {
    title: "Aires acondicionados",
    text: "Instalación, reparación y mantenimiento, con puesta en marcha controlada.",
  },
  {
    title: "Heladeras y lavarropas",
    text: "Se identifica la falla antes de cambiar piezas.",
  },
] as const;

export const servicesIntro = {
  kicker: "Servicios",
  title: "Aires acondicionados, heladeras y lavarropas. Cada uno se revisa distinto.",
  lead:
    "No empezamos cambiando piezas ni adelantando el trabajo sin ver el equipo. Revisamos, identificamos la posible causa y te explicamos qué conviene hacer antes de avanzar.",
} as const;

export const services = [
  {
    id: "aires",
    title: "Aires acondicionados",
    headline: "Instalación, reparación y mantenimiento.",
    paragraphs: [
      "Relevamos el ambiente, ubicamos las unidades y hacemos una colocación segura. Después verificamos la puesta en marcha.",
      "Si no enfría, gotea, hace ruido o corta, el primer paso es el diagnóstico. Recién ahí se propone la reparación o el mantenimiento.",
    ],
    cta: "Consultar por un aire acondicionado",
    whatsappMessage:
      "Hola, FresquitoRefrigeración. Quisiera consultar por un aire acondicionado. El equipo se encuentra en La Rioja Capital.",
  },
  {
    id: "heladeras",
    title: "Heladeras",
    headline: "Si no enfría, gotea o perdió frío, se revisa la causa.",
    paragraphs: [
      "Revisamos termostato, motor, circuito y estado general antes de recomendar una carga de gas o un recambio.",
      "Después del diagnóstico te explicamos qué encontramos y qué conviene hacer, para que decidas cómo seguir.",
    ],
    cta: "Consultar por una heladera",
    whatsappMessage:
      "Hola, FresquitoRefrigeración. Quisiera consultar por una heladera. El equipo se encuentra en La Rioja Capital.",
  },
  {
    id: "lavarropas",
    title: "Lavarropas",
    headline: "No centrifuga, no desagota o pierde agua: primero el diagnóstico.",
    paragraphs: [
      "Revisamos desagüe, motor, programador y pérdidas antes de cambiar piezas.",
      "El trabajo se define en el equipo, no en un recambio automático.",
    ],
    cta: "Consultar por un lavarropas",
    whatsappMessage:
      "Hola, FresquitoRefrigeración. Quisiera consultar por un lavarropas. El equipo se encuentra en La Rioja Capital.",
  },
] as const;

export const servicesClose = {
  title: "Una revisión clara antes de cualquier intervención.",
  text: "Sin soluciones automáticas. Sin cambiar componentes porque sí. Con información para que sepas qué necesita realmente tu equipo.",
  note: "Atención en La Rioja Capital · Hogares, comercios y empresas",
} as const;

export const processSteps = [
  {
    number: "01",
    title: "Consulta",
    text: "Contás qué le pasa al equipo. Te orientamos y, si hace falta, coordinamos la visita.",
  },
  {
    number: "02",
    title: "Diagnóstico en el lugar",
    text: "Revisamos el equipo y te explicamos qué conviene hacer.",
  },
  {
    number: "03",
    title: "Trabajo justificado",
    text: "Recién ahí se instala, repara o hace mantenimiento.",
  },
] as const;

export const audienceCards = [
  {
    id: "hogares",
    title: "Hogares",
    text: "Aires acondicionados, heladeras y lavarropas para el uso diario de la casa.",
  },
  {
    id: "comercios",
    title: "Comercios",
    text: "Reparación coordinada para no frenar la atención al público ni la operatoria del local.",
  },
  {
    id: "empresas",
    title: "Empresas",
    text: "Varios equipos —aires acondicionados, heladeras o lavarropas— con diagnóstico claro y visitas coordinadas.",
  },
] as const;

export const faqs = [
  {
    question: "¿En qué zona trabajan?",
    answer:
      "En Ciudad de La Rioja, Capital. Las visitas se coordinan según disponibilidad y tipo de trabajo.",
  },
  {
    question: "¿Qué equipos atienden?",
    answer:
      "Aires acondicionados, heladeras y lavarropas. En aires acondicionados también hacemos instalación y mantenimiento. En heladeras y lavarropas el trabajo es diagnóstico y reparación.",
  },
  {
    question: "¿Instalan aires acondicionados nuevos?",
    answer:
      "Sí. Relevamos el espacio, hacemos el montaje, la puesta en marcha y verificamos que funcione.",
  },
  {
    question: "¿Qué problemas atienden?",
    answer:
      "Aires acondicionados que no enfrían, cortan o gotean. Heladeras que perdieron frío o hacen ruido. Lavarropas que no centrifugan, no desagotan o pierden agua. El primer paso es el diagnóstico.",
  },
  {
    question: "¿Cómo pido una visita?",
    answer:
      "Por WhatsApp o el formulario. Contanos localidad, qué equipo es y qué le sucede.",
  },
] as const;

export const clientTypes = [
  { value: "hogar", label: "Hogar" },
  { value: "comercio", label: "Comercio" },
  { value: "empresa", label: "Empresa" },
] as const;

export const equipmentTypes = [
  { value: "aire", label: "Aire acondicionado" },
  { value: "heladera", label: "Heladera" },
  { value: "lavarropas", label: "Lavarropas" },
] as const;

export const serviceOptions = [
  { value: "diagnostico", label: "Diagnóstico" },
  { value: "instalacion", label: "Instalación" },
  { value: "reparacion", label: "Reparación" },
  { value: "mantenimiento", label: "Mantenimiento" },
] as const;

export const worksGallery = {
  enabled: false,
  items: [] as Array<{
    src: string;
    alt: string;
    title: string;
    category: "instalacion" | "reparacion" | "mantenimiento";
  }>,
};

export const beforeAfterGallery = {
  enabled: false,
  items: [] as Array<{
    beforeSrc: string;
    afterSrc: string;
    alt: string;
    title: string;
  }>,
};

export const testimonials = {
  enabled: false,
  items: [] as Array<{
    quote: string;
    author: string;
    context: string;
  }>,
};
