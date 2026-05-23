import { cn } from "@/lib/cn";

type Tone = "default" | "accent" | "lime" | "alert" | "muted";

export function Badge({
  children,
  tone = "default",
  pulse = false,
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  pulse?: boolean;
  className?: string;
}) {
  const tones: Record<Tone, string> = {
    default: "border-[var(--color-border)] text-[var(--color-text-muted)]",
    accent: "border-[var(--color-accent)]/40 text-[var(--color-accent)] bg-[var(--color-accent)]/5",
    lime: "border-[var(--color-accent-2)]/40 text-[var(--color-accent-2)] bg-[var(--color-accent-2)]/5",
    alert: "border-[var(--color-alert)]/40 text-[var(--color-alert)] bg-[var(--color-alert)]/5",
    muted: "border-[var(--color-border)] text-[var(--color-text-muted)] bg-[var(--color-surface)]",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-mono",
        tones[tone],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
