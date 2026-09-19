import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section id="proceso" className="border-t border-line bg-ivory py-20 md:py-28">
      <div className="container-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          kicker="Cómo trabajamos"
          title="Consulta, visita y trabajo."
          lead="Sin adelantar lo que el diagnóstico no justifique."
        />

        <ol>
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="grid gap-3 border-t border-line py-7 first:border-t-0 first:pt-0 md:grid-cols-[3.5rem_1fr] md:gap-8"
            >
              <p className="quiet-index pt-1">{step.number}</p>
              <div>
                <h3 className="font-display text-lg font-medium text-graphite">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
