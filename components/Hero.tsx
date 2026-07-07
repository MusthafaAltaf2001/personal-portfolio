import type { CSSProperties } from "react";
import Image from "next/image";
import { Magnetic } from "@/components/Magnetic";
import { hero, siteConfig } from "@/lib/data";
import portrait from "@/public/images/image_me.png";

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
    <section
      id="top"
      className="flex min-h-svh flex-col justify-center px-6 pt-24 pb-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-y-10 md:grid-cols-[1fr_auto] md:gap-x-16 md:gap-y-0">
        <div className="md:col-start-1">
          <p className="label anim-fade-up mb-6" style={delay("0.1s")}>
            Full-Stack Developer · {siteConfig.location}
          </p>

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
        </div>

        <div
          className="anim-fade-up justify-self-center md:col-start-2 md:row-span-2 md:row-start-1 md:justify-self-auto"
          style={delay("0.2s")}
        >
          <Image
            src={portrait}
            alt="Musthafa Altaf"
            sizes="(max-width: 768px) 176px, 288px"
            priority
            className="aspect-[3/4] w-44 rounded-xl border border-line object-cover md:w-72"
          />
        </div>

        <div className="md:col-start-1">
          <p
            className="anim-fade-up max-w-xl text-lg text-ink-muted md:mt-8"
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
      </div>
    </section>
  );
}
