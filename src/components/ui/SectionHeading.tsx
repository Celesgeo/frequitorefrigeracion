import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  lead?: string;
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  lead,
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className={cn("section-kicker", invert && "text-white/60")}>{kicker}</p>
      <h2 className={cn("section-title mt-4", invert && "text-white")}>{title}</h2>
      {lead ? (
        <p className={cn("section-lead mt-4", invert && "text-white/72")}>{lead}</p>
      ) : null}
    </div>
  );
}
