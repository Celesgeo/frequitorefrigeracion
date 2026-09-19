import { images } from "@/assets";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, servicesClose, servicesIntro } from "@/data/content";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const servicePhotos = [
  {
    src: images.serviceAire,
    alt: "Técnico revisando un aire acondicionado de techo",
    position: "center 35%",
  },
  {
    src: images.serviceHeladera,
    alt: "Reparación de un equipo de refrigeración",
    position: "center",
  },
] as const;

export function Services() {
  return (
    <section id="servicios" className="bg-ivory py-20 md:py-28">
      <div className="container-shell">
        <SectionHeading
          className="max-w-3xl"
          kicker={servicesIntro.kicker}
          title={servicesIntro.title}
        />
        <p className="section-lead mt-5 max-w-2xl">{servicesIntro.lead}</p>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {services.map((service, index) => {
            const photo = servicePhotos[index];
            const reverse = index % 2 === 1;

            return (
              <article
                key={service.id}
                className="grid items-center gap-8 border-t border-line pt-12 md:grid-cols-2 md:gap-16 md:pt-16 lg:gap-20"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`editorial-photo aspect-[4/3] min-h-0 max-h-[380px] ${reverse ? "md:order-2" : ""}`}
                  style={{ objectPosition: photo.position }}
                />
                <div className={reverse ? "md:order-1" : undefined}>
                  <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-graphite md:text-[1.7rem]">
                    {service.title}
                  </h3>
                  <p className="font-display mt-4 max-w-md text-[1.05rem] font-medium leading-snug tracking-[-0.02em] text-graphite">
                    {service.headline}
                  </p>
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-graphite underline-offset-4 hover:underline"
                    onClick={() => trackEvent("whatsapp_click", { location: `service_${service.id}` })}
                  >
                    {service.cta}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="mt-20 max-w-2xl border-t border-line pt-12 md:mt-24">
          <p className="font-display text-xl font-medium tracking-[-0.03em] text-graphite md:text-2xl">
            {servicesClose.title}
          </p>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">{servicesClose.text}</p>
          <p className="mt-6 text-sm text-mineral">{servicesClose.note}</p>
        </aside>
      </div>
    </section>
  );
}
