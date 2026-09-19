import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section className="border-t border-line bg-ivory py-20 md:py-24">
      <div className="container-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="section-kicker">Siguiente paso</p>
          <h2 className="font-display mt-4 text-3xl font-medium tracking-[-0.045em] text-graphite md:text-[2.35rem]">
            Solicitá un diagnóstico en La Rioja Capital.
          </h2>
          <p className="mt-4 text-muted">
            Escritorio o celular, el camino más directo es WhatsApp. Contá el problema y coordinamos la visita.
          </p>
          <p className="mt-3 text-sm text-graphite">WhatsApp {site.whatsapp.display}</p>
        </div>
        <ButtonLink
          href={buildWhatsAppUrl()}
          variant="heroPrimary"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "final_cta" })}
        >
          {site.ctas.primary}
        </ButtonLink>
      </div>
    </section>
  );
}
