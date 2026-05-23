"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asLink?: { href: string; external?: boolean };
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", className, children, asLink, ...rest },
  ref
) {
  const base =
    "inline-flex items-center gap-2 rounded-md font-medium px-5 py-2.5 text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";
  const styles = {
    primary:
      "bg-[var(--color-accent-2)] text-[var(--color-bg)] hover:brightness-110 hover:shadow-[0_0_24px_-4px_var(--color-accent-2)]",
    secondary:
      "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
    ghost:
      "text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
  }[variant];

  if (asLink) {
    return (
      <a
        href={asLink.href}
        target={asLink.external ? "_blank" : undefined}
        rel={asLink.external ? "noopener noreferrer" : undefined}
        className={cn(base, styles, className)}
      >
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} className={cn(base, styles, className)} {...rest}>
      {children}
    </button>
  );
});
