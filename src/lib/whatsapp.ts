import { site } from "@/config/site";

export function buildWhatsAppUrl(message = site.whatsapp.defaultMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp.e164}?text=${encoded}`;
}

export function buildServiceWhatsAppUrl(serviceName: string) {
  return buildWhatsAppUrl(
    `Hola, FresquitoRefrigeración. Quisiera consultar el servicio de ${serviceName}. El equipo se encuentra en La Rioja Capital.`,
  );
}

export function buildContactWhatsAppMessage(fields: {
  name: string;
  phone: string;
  locality: string;
  clientType: string;
  service: string;
  brandModel?: string;
  description: string;
}) {
  const lines = [
    site.whatsapp.defaultMessage,
    "",
    `Nombre: ${fields.name}`,
    `Teléfono: ${fields.phone}`,
    `Localidad: ${fields.locality}`,
    `Tipo de cliente: ${fields.clientType}`,
    `Servicio requerido: ${fields.service}`,
  ];

  if (fields.brandModel?.trim()) {
    lines.push(`Marca/modelo: ${fields.brandModel.trim()}`);
  }

  lines.push("", "Descripción del problema:", fields.description.trim());

  return lines.join("\n");
}
