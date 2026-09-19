import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/config/site";
import { audienceCards } from "@/data/content";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Audiences() {
  return (
    <section id="empresas" className="border-t border-line bg-ivory py-20 md:py-28">
      <div className="container-shell max-w-3xl">
        <SectionHeading
          kicker="Para quién"
          title="Hogares, comercios y empresas."
          lead="El mismo criterio técnico, coordinado según el espacio."
        />

        <ol className="mt-12">
          {audienceCards.map((item) => (
            <li key={item.id} className="border-t border-line py-6 last:border-b">
              <p className="font-display text-[0.95rem] font-medium text-graphite">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>

        <ButtonLink
          href={buildWhatsAppUrl()}
          variant="secondaryDark"
          className="mt-8"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "audiences" })}
        >
          Consultar por WhatsApp
        </ButtonLink>
        <p className="mt-4 text-sm text-muted">{site.locationLabel}</p>
      </div>
    </section>
  );
}
