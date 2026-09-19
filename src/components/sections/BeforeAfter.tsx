import { site } from "@/config/site";
import { beforeAfterGallery } from "@/data/content";

export function BeforeAfter() {
  if (!site.features.showBeforeAfter || !beforeAfterGallery.enabled || beforeAfterGallery.items.length === 0) {
    return null;
  }

  return (
    <section id="antes-despues" className="bg-paper py-16 md:py-24">
      <div className="container-shell grid gap-6 md:grid-cols-2">
        {beforeAfterGallery.items.map((item) => (
          <article key={item.title} className="surface-card overflow-hidden">
            <div className="grid grid-cols-2">
              <img src={item.beforeSrc} alt={`Antes: ${item.alt}`} className="aspect-square object-cover" />
              <img src={item.afterSrc} alt={`Después: ${item.alt}`} className="aspect-square object-cover" />
            </div>
            <h3 className="font-display p-5 font-semibold text-night">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
