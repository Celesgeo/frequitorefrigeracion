import { site } from "@/config/site";
import { testimonials } from "@/data/content";

export function Testimonials() {
  if (!site.features.showTestimonials || !testimonials.enabled || testimonials.items.length === 0) {
    return null;
  }

  return (
    <section id="opiniones" className="bg-paper py-16 md:py-24">
      <div className="container-shell grid gap-5 md:grid-cols-3">
        {testimonials.items.map((item) => (
          <blockquote key={item.author} className="surface-card p-6">
            <p className="text-sm leading-relaxed text-ink">{item.quote}</p>
            <footer className="mt-4 text-sm font-semibold text-night">
              {item.author}
              <span className="block font-normal text-muted">{item.context}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
