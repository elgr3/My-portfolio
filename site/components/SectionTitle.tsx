import { cn } from "@/lib/cn";

export function SectionTitle({
  subtitle,
  title,
  centered = false,
}: {
  subtitle: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-16", centered && "text-center")}>
      <span className="text-mint font-tech text-xs font-bold tracking-[0.3em] uppercase block mb-3">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-tech font-extrabold text-white leading-tight">
        {title}
      </h2>
    </div>
  );
}
