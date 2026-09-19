import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/config/site";
import { navItems } from "@/data/content";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const whatsappHref = buildWhatsAppUrl();

  return (
    <header className={cn("header-shell", scrolled ? "is-scrolled" : "is-top")}>
      <div className="container-shell grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 md:h-[4.25rem]">
        <a href="#inicio" aria-label="Fresquito, inicio">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden justify-center xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-[0.88rem] font-medium text-graphite/70 hover:text-graphite"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 justify-self-end xl:block">
          <ButtonLink
            href={whatsappHref}
            variant="heroPrimary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "header" })}
          >
            {site.ctas.primary}
          </ButtonLink>
        </div>

        <div className="flex items-center justify-end gap-2 xl:hidden">
          <ButtonLink
            href={whatsappHref}
            variant="heroPrimary"
            className="min-h-11 px-3 text-sm"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "header_mobile" })}
          >
            WhatsApp
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-graphite"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "mobile-drawer fixed inset-0 z-50 bg-ivory xl:hidden",
          open ? "is-open pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
        {...(!open ? { inert: true } : {})}
      >
        <div className="container-shell flex h-full flex-col pt-6">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              ref={closeButtonRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-graphite"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          <nav className="mt-12 flex flex-1 flex-col gap-1" aria-label="Móvil">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-1 py-3 font-display text-2xl font-medium tracking-[-0.03em] text-graphite"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ButtonLink
            href={whatsappHref}
            className="mb-8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("whatsapp_click", { location: "mobile_menu" });
              setOpen(false);
            }}
          >
            {site.ctas.primary}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
