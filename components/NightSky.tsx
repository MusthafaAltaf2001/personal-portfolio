"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  gold: boolean;
  speed: number;
  phase: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

const METEOR_SPEED = 950;
const METEOR_TAIL = 150;

export function NightSky() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let stars: Star[] = [];
    let meteor: Meteor | null = null;
    let raf = 0;

    const genStars = () => {
      const count = Math.round(
        (window.innerWidth * window.innerHeight) / 14000,
      );
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: 0.4 + Math.random() * 0.9,
        a: 0.15 + Math.random() * 0.5,
        gold: Math.random() < 0.06,
        speed: 0.3 + Math.random() * 1.2,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const drawStars = (t: number) => {
      for (const s of stars) {
        const tw = reduce ? 1 : 0.7 + 0.3 * Math.sin((t / 1000) * s.speed + s.phase);
        ctx.globalAlpha = s.a * tw;
        ctx.fillStyle = s.gold ? "#eab308" : "#f4f3ef";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      genStars();
      if (reduce) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        drawStars(0);
      }
    };

    const spawnMeteor = () => {
      const fromLeft = Math.random() < 0.5;
      const x = fromLeft
        ? window.innerWidth * (0.05 + Math.random() * 0.3)
        : window.innerWidth * (0.65 + Math.random() * 0.3);
      const y = window.innerHeight * (0.05 + Math.random() * 0.25);
      const angle = (fromLeft ? 1 : Math.PI - 1) * (0.55 + Math.random() * 0.2);
      meteor = {
        x,
        y,
        vx: Math.cos(angle) * METEOR_SPEED,
        vy: Math.sin(angle) * METEOR_SPEED,
        life: 0,
      };
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduce) {
      return () => window.removeEventListener("resize", resize);
    }

    let last = performance.now();
    const frame = (t: number) => {
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      drawStars(t);

      if (meteor) {
        const m = meteor;
        m.x += m.vx * dt;
        m.y += m.vy * dt;
        m.life += dt;
        const tailX = m.x - (m.vx / METEOR_SPEED) * METEOR_TAIL;
        const tailY = m.y - (m.vy / METEOR_SPEED) * METEOR_TAIL;
        const g = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        g.addColorStop(0, "rgba(234,179,8,0)");
        g.addColorStop(1, "rgba(234,179,8,0.9)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
        ctx.fillStyle = "rgba(234,179,8,0.95)";
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        if (
          m.x < -200 ||
          m.x > window.innerWidth + 200 ||
          m.y > window.innerHeight + 200 ||
          m.life > 3
        ) {
          meteor = null;
        }
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    let meteorTimer: ReturnType<typeof setTimeout>;
    const scheduleMeteor = (minMs: number, maxMs: number) => {
      meteorTimer = setTimeout(
        () => {
          spawnMeteor();
          scheduleMeteor(12_000, 28_000);
        },
        minMs + Math.random() * (maxMs - minMs),
      );
    };
    scheduleMeteor(2_000, 9_000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(meteorTimer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-svh w-screen"
    />
  );
}
