import isotipo from "@/assets/logo/isotipo-circular.png";
import logoMono from "@/assets/logo/logo-horizontal-monocromo.png";
import logoNegativo from "@/assets/logo/logo-horizontal-negativo.png";
import { cn } from "@/lib/cn";

type LogoProps = {
  inverted?: boolean;
  compact?: boolean;
  className?: string;
};

export function Logo({ inverted = false, compact = false, className }: LogoProps) {
  if (compact) {
    return (
      <img
        src={isotipo}
        alt=""
        width={40}
        height={40}
        className={cn("h-10 w-10", className)}
      />
    );
  }

  return (
    <img
      src={inverted ? logoNegativo : logoMono}
      alt="Fresquito Refrigeración"
      width={367}
      height={121}
      className={cn("h-8 w-auto max-w-[10.5rem] sm:h-9 sm:max-w-[12rem] md:h-10 md:max-w-[13.5rem]", className)}
    />
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={isotipo}
      alt=""
      width={249}
      height={247}
      className={cn("h-10 w-10", className)}
    />
  );
}
