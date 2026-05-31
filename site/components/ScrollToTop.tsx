"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--color-cyan)] text-[var(--color-bg)] flex items-center justify-center shadow-lg hover:brightness-110 transition-all"
    >
      <ArrowUp size={20} />
    </button>
  );
}
