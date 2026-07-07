"use client";

import { useEffect, useRef } from "react";

const GLOW_RADIUS = 600;

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.opacity = "1";
      el.style.transform = `translate3d(${e.clientX - GLOW_RADIUS}px, ${
        e.clientY - GLOW_RADIUS
      }px, 0)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      <div
        ref={ref}
        className="h-[1200px] w-[1200px] opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at center, rgba(234, 179, 8, 0.1), rgba(180, 83, 9, 0.05) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
