import { cn } from "@/lib/cn";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32", className)}
    >
      {(eyebrow || title) && (
        <header className="mb-12 md:mb-16">
          {eyebrow && (
            <p className="font-mono text-sm text-[var(--color-accent)] mb-3">
              <span className="opacity-60">// </span>
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
