import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ParallaxBannerProps = {
  image: string;
  children: ReactNode;
  position?: string;
  className?: string;
};

export function ParallaxBanner({
  image,
  children,
  position = "center right",
  className,
}: ParallaxBannerProps) {
  return (
    <section
      className={cn("parallax-section", className)}
      style={
        {
          "--parallax-image": `url(${image})`,
          backgroundPosition: position,
        } as CSSProperties
      }
    >
      <div className="parallax-veil" />
      <div className="container-shell relative z-10 flex min-h-[inherit] items-center py-16">
        {children}
      </div>
    </section>
  );
}
