"use client";
import { motion } from "framer-motion";

export function Pipeline() {
  return (
    <svg
      viewBox="0 0 600 100"
      className="w-full max-w-md opacity-80"
      role="img"
      aria-label="Data pipeline animation"
    >
      <defs>
        <linearGradient id="pipeline-grad" x1="0" x2="1">
          <stop offset="0%" stopColor="#00d9ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#00d9ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#c7ff3e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="10" y="40" width="80" height="20" rx="4" fill="none" stroke="#2a2a35" />
      <rect x="260" y="40" width="80" height="20" rx="4" fill="none" stroke="#2a2a35" />
      <rect x="510" y="40" width="80" height="20" rx="4" fill="none" stroke="#2a2a35" />
      <text x="50" y="54" textAnchor="middle" fontSize="10" fill="#8a8a9a" fontFamily="monospace">
        source
      </text>
      <text x="300" y="54" textAnchor="middle" fontSize="10" fill="#8a8a9a" fontFamily="monospace">
        transform
      </text>
      <text x="550" y="54" textAnchor="middle" fontSize="10" fill="#8a8a9a" fontFamily="monospace">
        sink
      </text>
      <line x1="90" y1="50" x2="260" y2="50" stroke="#2a2a35" strokeWidth="1" />
      <line x1="340" y1="50" x2="510" y2="50" stroke="#2a2a35" strokeWidth="1" />
      <motion.circle
        r="3"
        fill="#00d9ff"
        animate={{ cx: [90, 510] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        cy="50"
      />
      <motion.circle
        r="3"
        fill="#c7ff3e"
        animate={{ cx: [90, 510] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        cy="50"
      />
    </svg>
  );
}
