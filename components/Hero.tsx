import type { CSSProperties } from "react";
import Image from "next/image";
import { Magnetic } from "@/components/Magnetic";
import { hero, siteConfig } from "@/lib/data";
import portrait from "@/public/images/image_me.jpeg";

const delay = (s: string) => ({ "--anim-delay": s }) as CSSProperties;

const LETTER_STEP = 0.03;

function Letters({ text }: { text: string }) {
  const words = text.split(" ");
  let letterIndex = 0;
  return (
    <span aria-hidden="true">
      {words.map((word, w) => (
        <span key={w}>
          <span className="inline-block">
            {word.split("").map((char) => {
              const d = (letterIndex++ * LETTER_STEP).toFixed(2);
              return (
                <span
                  key={`${w}-${char}-${d}`}
                  className="anim-letter inline-block"
                  style={delay(`${d}s`)}
                >
                  {char}
                </span>
              );
            })}
          </span>
          {w < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const letterCount = hero.statement.replace(/ /g, "").length;
  const periodDelay = (letterCount * LETTER_STEP + 0.2).toFixed(2);

  return (
    <section id="top" className="flex min-h-svh flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div
          className="anim-fade-up mb-6 flex items-center gap-4"
          style={delay("0.1s")}
        >
          <Image
            src={portrait}
            alt="Musthafa Altaf"
            sizes="56px"
            priority
            className="h-14 w-14 rounded-full border border-line object-cover"
          />
          <p className="label">
            Full-Stack Developer · {siteConfig.location}
          </p>
        </div>

        <h1
          className="display text-[clamp(3rem,8vw,7.5rem)] text-ink"
          aria-label={`${hero.statement}.`}
        >
          <Letters text={hero.statement} />
          <span
            aria-hidden="true"
            className="anim-pop inline-block text-gold"
            style={delay(`${periodDelay}s`)}
          >
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
