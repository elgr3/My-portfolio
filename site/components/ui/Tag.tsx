import { cn } from "@/lib/cn";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-0.5 text-[11px] font-mono text-[var(--color-text-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
