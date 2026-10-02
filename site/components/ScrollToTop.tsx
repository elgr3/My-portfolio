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
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-mint text-bg flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(45,212,191,0.5)]"
    >
      <ArrowUp className="w-5 h-5 sm:w-7 sm:h-7" />
    </button>
  );
}
