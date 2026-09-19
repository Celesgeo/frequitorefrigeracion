import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/content";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="preguntas" className="border-t border-line bg-ivory py-20 md:py-28">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          kicker="Preguntas"
          title="Lo que suelen consultar."
          lead="Zona, instalación y cómo pedir una visita."
        />
        <div className="border-t border-line">
          {faqs.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              open={open === index}
              onToggle={() => setOpen((current) => (current === index ? -1 : index))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: { question: string; answer: string };
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = `${panelId}-button`;

  return (
    <div className="border-b border-line">
      <h3>
        <button
          id={buttonId}
          type="button"
          className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-medium text-graphite"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.question}</span>
          <ChevronDown
            size={18}
            className={open ? "rotate-180 text-mineral" : "text-mineral"}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className="pb-5">
        {open ? <p className="text-sm leading-relaxed text-muted">{item.answer}</p> : null}
      </div>
    </div>
  );
}
