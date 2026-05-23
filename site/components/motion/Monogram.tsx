"use client";
import { motion } from "framer-motion";

export function Monogram({ size = 160 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-visible"
    >
      <defs>
        <linearGradient id="rbd-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#00d9ff" />
          <stop offset="1" stopColor="#c7ff3e" />
        </linearGradient>
      </defs>
      <motion.rect
        x="2"
        y="2"
        width="156"
        height="156"
        rx="14"
        fill="none"
        stroke="url(#rbd-grad)"
        strokeWidth="1.5"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { duration: 1.4, ease: "easeOut" } },
        }}
      />
      <motion.text
        x="80"
        y="98"
        textAnchor="middle"
        fontFamily="var(--font-geist-sans)"
        fontWeight="700"
        fontSize="64"
        fill="url(#rbd-grad)"
        variants={{
          hidden: { opacity: 0, y: 8 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } },
        }}
      >
        RBD
      </motion.text>
    </motion.svg>
  );
}
