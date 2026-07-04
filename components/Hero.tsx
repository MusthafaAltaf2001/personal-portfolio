import type { CSSProperties } from "react";
import { Magnetic } from "@/components/Magnetic";
import { hero, siteConfig } from "@/lib/data";

const delay = (s: string) => ({ "--anim-delay": s }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="flex min-h-svh flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-6xl">
        <p className="label anim-fade-up mb-6" style={delay("0.1s")}>
          Full-Stack Developer · {siteConfig.location}
        </p>

        <h1 className="display anim-fade-up text-[clamp(3rem,8vw,7.5rem)] text-ink">
          {hero.statement}
          <span className="anim-pop inline-block text-gold" style={delay("0.7s")}>
            .
          </span>
        </h1>

        <p
          className="anim-fade-up mt-8 max-w-xl text-lg text-ink-muted"
          style={delay("0.35s")}
        >
          {hero.subline}
        </p>

        <div
          className="anim-fade-up mt-12 flex flex-wrap items-center gap-5"
          style={delay("0.5s")}
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
            className="label rounded-full border border-line px-6 py-3.5 text-ink transition-colors hover:border-gold-soft hover:text-gold"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
