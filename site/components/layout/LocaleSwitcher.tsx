"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const other = locale === "fr" ? "en" : "fr";

  function switchTo() {
    const withoutLocale = pathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
    const next = other === "fr" ? withoutLocale : `/en${withoutLocale === "/" ? "" : withoutLocale}`;
    router.push(next);
  }

  return (
    <button
      onClick={switchTo}
      aria-label={`Switch to ${other.toUpperCase()}`}
      className="font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition px-2 py-1 border border-[var(--color-border)] rounded"
    >
      {locale.toUpperCase()} / {other.toUpperCase()}
    </button>
  );
}
