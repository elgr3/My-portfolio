"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Pipeline } from "@/components/motion/Pipeline";
import { Typewriter, CountUp } from "@/components/motion/AnimatedText";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="flex items-center gap-3 mb-6">
        <HeroAvatar />
        <Badge tone="lime" pulse>
          {t("available")} · @BNP Paribas Cardif
        </Badge>
      </div>

      <h1 className="font-bold tracking-tighter text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
        Rody Brayan
        <br />
        <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] bg-clip-text text-transparent">
          DAMA
        </span>
      </h1>

      <p className="mt-6 font-mono text-sm md:text-base text-[var(--color-text-muted)]">
        <span className="text-[var(--color-accent)]">{"> "}</span>
        {t("tagline")}
      </p>
      <p className="mt-2 font-mono text-base md:text-lg">
        <span className="text-[var(--color-accent)]">{"> "}</span>
        <Typewriter text={t("typewriter")} />
      </p>

      <div className="mt-10 grid grid-cols-3 gap-3 md:gap-4 max-w-xl">
        <KpiCard value={<CountUp to={9} suffix=" mo" />} label="@ BNP" />
        <KpiCard value={<CountUp to={3} suffix="×" />} label="Azure cert." />
        <KpiCard value={<CountUp to={7} suffix="+" />} label="stack data" />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Button asLink={{ href: "#projects" }}>{t("ctaProjects")} →</Button>
        <Button variant="secondary" asLink={{ href: "#contact" }}>
          {t("ctaContact")}
        </Button>
      </div>

      <div className="mt-16">
        <Pipeline />
      </div>
    </section>
  );
}

function HeroAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative shrink-0"
    >
      <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-[var(--color-accent)]/40 transition-all hover:ring-[var(--color-accent)] hover:shadow-[0_0_24px_-4px_rgba(0,217,255,0.55)]">
        <Image
          src="/profile/rody.jpg"
          alt="Rody Brayan DAMA"
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-1 -z-10 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,217,255,0.35), transparent 70%)",
        }}
      />
    </motion.div>
  );
}

function KpiCard({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      <div className="text-2xl md:text-3xl font-mono text-[var(--color-accent)]">{value}</div>
      <div className="mt-1 text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
