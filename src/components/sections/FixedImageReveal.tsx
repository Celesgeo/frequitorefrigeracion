import { videos } from "@/assets";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useEffect, useRef } from "react";

const consultMessage =
  "Hola, FresquitoRefrigeración. Les cuento lo que le sucede a mi aire para recibir asesoramiento.";

export function FixedImageReveal() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const whatsappUrl = buildWhatsAppUrl(consultMessage);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (media.matches) {
        video.pause();
        return;
      }
      void video.play().catch(() => undefined);
    };

    syncPlayback();
    const onVisibility = () => {
      if (document.visibilityState === "visible") syncPlayback();
    };
    document.addEventListener("visibilitychange", onVisibility);
    media.addEventListener("change", syncPlayback);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      media.removeEventListener("change", syncPlayback);
    };
  }, []);

  return (
    <section className="fixed-image-reveal" aria-labelledby="asesoramiento-title">
      <div className="fixed-image-reveal__background" aria-hidden="true">
        <video
          ref={videoRef}
          className="fixed-image-reveal__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={videos.workPoster}
        >
          <source src={videos.work} type="video/mp4" />
        </video>
      </div>
      <div className="fixed-image-reveal__overlay" aria-hidden="true" />

      <div className="fixed-image-reveal__content">
        <h2 id="asesoramiento-title">Contanos, ¿qué le sucede a tu aire?</h2>

        <p>Te mandamos asesoramiento según lo que nos cuentes, de forma gratuita.</p>

        <a
          href={whatsappUrl}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "fixed_image_reveal" })}
        >
          Contanos por WhatsApp
        </a>
      </div>
    </section>
  );
}
