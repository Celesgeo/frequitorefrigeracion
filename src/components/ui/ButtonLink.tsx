import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "secondaryDark" | "whatsapp" | "heroPrimary" | "heroSecondary";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  target,
  rel,
  ariaLabel,
}: ButtonLinkProps) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    secondaryDark: "btn-secondary-dark",
    whatsapp: "btn-whatsapp",
    heroPrimary: "hero-btn-primary",
    heroSecondary: "hero-btn-secondary",
  }[variant];

  return (
    <a
      href={href}
      className={cn("btn", variantClass, className)}
      onClick={onClick}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
