"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function ProfileAvatar({ size = 280 }: { size?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
      style={{ width: size, height: size }}
    >
      <motion.svg
        className="absolute inset-0 overflow-visible"
        width={size}
        height={size}
        viewBox="0 0 160 160"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-hidden
      >
        <defs>
          <linearGradient id="profile-frame-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#00d9ff" />
            <stop offset="1" stopColor="#c7ff3e" />
          </linearGradient>
        </defs>
        <motion.rect
          x="2"
          y="2"
          width="156"
          height="156"
          rx="18"
          fill="none"
          stroke="url(#profile-frame-grad)"
          strokeWidth="1.5"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 1.4, ease: "easeOut" },
            },
          }}
        />
      </motion.svg>

      <div
        className="absolute overflow-hidden rounded-[14px] bg-[var(--color-surface)]"
        style={{ inset: 10 }}
      >
        <Image
          src="/profile/rody.jpg"
          alt="Rody Brayan DAMA"
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority={false}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 110%, rgba(0,217,255,0.18), transparent 60%)",
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-full blur-2xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,217,255,0.35), rgba(199,255,62,0.25))",
        }}
      />

      <motion.div
        aria-hidden
        className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full border border-[var(--color-accent-2)]/40 bg-[var(--color-bg)] px-2.5 py-1 font-mono text-[10px] text-[var(--color-accent-2)] shadow-[0_0_24px_-8px_rgba(199,255,62,0.5)]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
        online
      </motion.div>
    </motion.div>
  );
}
