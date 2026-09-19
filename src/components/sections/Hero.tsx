import { images } from "@/assets";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="inicio" className="hero-stage">
      <div className="hero-layout">
        <div className="hero-main">
          <div className="hero-copy">
            <p className="hero-place">{site.heroPlace}</p>
            <h1 className="hero-title">{site.heroTitle}</h1>

            <ul className="hero-audiences">
              {site.heroAudiences.map((audience) => (
                <li key={audience}>{audience}</li>
              ))}
            </ul>

            <p className="hero-method">{site.heroMethod}</p>

            <div className="hero-actions">
              <ButtonLink
                href={buildWhatsAppUrl()}
                variant="heroPrimary"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
              >
                {site.heroCtaPrimary}
              </ButtonLink>
              <ButtonLink href="#servicios" variant="heroSecondary">
                {site.heroCtaSecondary}
              </ButtonLink>
            </div>

            <p className="hero-contact-note">
              WhatsApp {site.whatsapp.display}. Coordinamos la visita según el equipo y el
              espacio.
            </p>
          </div>

          <div className="hero-media">
            <img
              src={images.technicianOutdoor}
              alt="Técnico revisando una unidad exterior de aire acondicionado, imagen ilustrativa"
              className="hero-photo"
              width={2400}
              height={1350}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
