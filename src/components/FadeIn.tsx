import type { ReactNode } from "react";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

interface FadeInProps {
  children: ReactNode;
  className?: string;
}

// Wraps content to fade/slide in once it scrolls into view. Respects reduced-motion via CSS.
export function FadeIn({ children, className = "" }: FadeInProps) {
  const { ref, isVisible } = useScrollFadeIn<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? "animate-fade-in" : "opacity-0"
      } motion-reduce:opacity-100 motion-reduce:animate-none`}
    >
      {children}
    </div>
  );
}
