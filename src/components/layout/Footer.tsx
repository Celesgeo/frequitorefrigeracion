import { Logo } from "@/components/brand/Logo";
import { site } from "@/config/site";
import { navItems } from "@/data/content";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Clock3, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory text-graphite">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            {site.trade} para hogares, comercios y empresas en {site.serviceArea}.
          </p>
          <p className="mt-3 text-sm text-graphite">{site.slogan}</p>
        </div>

        <div>
          <p className="quiet-index">Secciones</p>
          <ul className="mt-5 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="text-sm text-muted transition-colors hover:text-graphite" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="quiet-index">Contacto</p>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-graphite"
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
              >
                <MessageCircle size={16} />
                WhatsApp {site.whatsapp.display}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock3 size={16} />
              {site.hoursLabel}
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-graphite"
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
                {site.instagramHandle}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-sm text-muted">{site.locationLabel}</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-shell flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.brandName}. {site.serviceArea}.
          </p>
          <p>
            Diseño y desarrollo por{" "}
            <a
              className="underline-offset-4 transition-colors hover:text-graphite hover:underline"
              href={site.footerCreditUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              CSTUDIODEVS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
