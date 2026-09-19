export const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#empresas", label: "Empresas" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const tickerPhrases = [
  "Diagnóstico primero",
  "Instalación responsable",
  "Mantenimiento preventivo",
  "Hogares, comercios y empresas",
  "Atención en La Rioja Capital",
  "Tu confort, nuestra prioridad",
] as const;

export const trustItems = [
  {
    title: "Diagnóstico primero",
    text: "Vemos el equipo antes de proponer una solución.",
  },
  {
    title: "Instalación prolija",
    text: "Montaje, desagüe y puesta en marcha controlada.",
  },
  {
    title: "Mantenimiento a tiempo",
    text: "Limpieza y control para que rinda cuando más se exige.",
  },
] as const;

export const servicesIntro = {
  kicker: "Servicios",
  title: "Cada equipo necesita una respuesta diferente.",
  lead:
    "No empezamos cambiando piezas ni recomendando una carga de refrigerante sin saber qué está pasando. Revisamos el equipo, identificamos la posible causa y te explicamos qué conviene hacer antes de avanzar.",
} as const;

export const services = [
  {
    id: "instalacion",
    title: "Instalación de aire acondicionado",
    headline: "Una buena instalación empieza antes de encender el equipo.",
    paragraphs: [
      "Evaluamos el ambiente, la ubicación de las unidades y las condiciones para una colocación segura y funcional. Una vez instalado, verificamos la puesta en marcha y el funcionamiento.",
    ],
    cta: "Consultar por una instalación",
    whatsappMessage:
      "Hola, FresquitoRefrigeración. Quisiera consultar por una instalación de aire acondicionado. El equipo se encuentra en La Rioja Capital.",
  },
  {
    id: "diagnostico",
    title: "Diagnóstico y reparación",
    headline: "Encontrar la causa es más importante que disimular la falla.",
    paragraphs: [
      "Si el equipo no enfría, pierde agua, hace ruidos, se apaga o funciona de manera irregular, revisamos sus principales componentes para identificar qué está provocando el problema.",
      "Después del diagnóstico te explicamos qué encontramos y cuál es la alternativa recomendada, para que puedas decidir cómo continuar.",
    ],
    cta: "Solicitar un diagnóstico",
    whatsappMessage:
      "Hola, FresquitoRefrigeración. Quisiera solicitar un diagnóstico. El equipo se encuentra en La Rioja Capital.",
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
    text: "Revisamos el aire y te explicamos qué conviene hacer.",
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
    text: "Instalación y servicio para el día a día, con el menor ruido posible.",
  },
  {
    id: "comercios",
    title: "Comercios",
    text: "Reparación y mantenimiento coordinados para no frenar la atención al público.",
  },
  {
    id: "empresas",
    title: "Empresas",
    text: "Varios equipos, revisiones programadas y un diagnóstico claro.",
  },
] as const;

export const faqs = [
  {
    question: "¿En qué zona trabajan?",
    answer:
      "En Ciudad de La Rioja, Capital. Las visitas se coordinan según disponibilidad y tipo de trabajo.",
  },
  {
    question: "¿Instalan equipos nuevos?",
    answer:
      "Sí. Relevamos el espacio, hacemos el montaje, la puesta en marcha y verificamos que funcione.",
  },
  {
    question: "¿Qué problemas atienden?",
    answer:
      "Equipos que no enfrían, cortan, gotean, hacen ruido o perdieron rendimiento. El primer paso es el diagnóstico.",
  },
  {
    question: "¿Cómo pido una visita?",
    answer:
      "Por WhatsApp o el formulario. Contanos localidad, tipo de espacio y qué le sucede al aire.",
  },
] as const;

export const clientTypes = [
  { value: "hogar", label: "Hogar" },
  { value: "comercio", label: "Comercio" },
  { value: "empresa", label: "Empresa" },
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
