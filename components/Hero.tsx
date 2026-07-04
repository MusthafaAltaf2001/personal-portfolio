"use client";

import { motion, useReducedMotion } from "motion/react";
import { Magnetic } from "@/components/Magnetic";
import { hero, siteConfig } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="flex min-h-svh flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          className="label mb-6"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Full-Stack Developer · {siteConfig.location}
        </motion.p>

        <motion.h1
          className="display text-[clamp(2.6rem,8vw,7rem)] text-ink"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {hero.statement}
          <motion.span
            className="text-gold"
            initial={reduce ? false : { opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, type: "spring", bounce: 0.55 }}
          >
            .
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-lg text-ink-muted"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {hero.subline}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-5"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Magnetic>
            <a
              href="#projects"
              className="inline-block rounded-full bg-gold px-7 py-3.5 font-medium text-ground transition-transform hover:scale-[1.03]"
            >
              See my work
            </a>
          </Magnetic>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="label link-draw pb-1 text-ink"
          >
            Resume ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
