"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { now, siteConfig } from "@/lib/data";

function useLocalTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: siteConfig.timeZone,
      hour: "numeric",
      minute: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Now() {
  const time = useLocalTime();

  return (
    <section id="now" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="label mb-8 border-b border-gold-soft pb-3 w-fit">Now</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-3xl text-xl leading-relaxed text-ink-muted md:text-2xl">
            {now.paragraph}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="label mt-10" suppressHydrationWarning>
            {time ? `${time} in ${siteConfig.location}` : siteConfig.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
