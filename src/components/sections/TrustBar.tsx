import { trustItems } from "@/data/content";

export function TrustBar() {
  return (
    <section aria-label="Criterios de trabajo" className="border-b border-line bg-ivory">
      <div className="container-shell py-14 md:py-16">
        <ol className="grid gap-10 sm:grid-cols-3 lg:gap-12">
          {trustItems.map((item) => (
            <li key={item.title}>
              <p className="font-display text-[0.95rem] font-medium tracking-[-0.02em] text-graphite">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
