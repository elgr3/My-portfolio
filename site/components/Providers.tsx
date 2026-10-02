"use client";
import { MotionConfig } from "framer-motion";

// reducedMotion="user" : les animations de déplacement sont coupées
// pour les visiteurs qui ont activé « réduire les animations ».
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
