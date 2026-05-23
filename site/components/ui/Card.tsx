import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-200",
        interactive &&
          "hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface-hover)] hover:shadow-[0_0_32px_-8px_rgba(0,217,255,0.3)]",
        className
      )}
    >
      {children}
    </div>
  );
}
