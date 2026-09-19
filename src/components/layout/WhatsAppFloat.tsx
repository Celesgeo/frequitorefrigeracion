import { site } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex h-12 w-12 items-center justify-center bg-whatsapp text-white hover:bg-whatsapp-hover md:right-6"
      aria-label={`Solicitar diagnóstico por WhatsApp al ${site.whatsapp.display}`}
      onClick={() => trackEvent("whatsapp_click", { location: "float" })}
    >
      <MessageCircle size={20} />
    </a>
  );
}
