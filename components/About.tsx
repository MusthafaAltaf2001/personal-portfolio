import { Reveal } from "@/components/Reveal";
import { about } from "@/lib/data";

export function About() {
  const parts = about.paragraph.split(/\*\*(.+?)\*\*/g);
  return (
    <section id="about" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="label mb-8 border-b border-gold-soft pb-3 w-fit">
            About
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-3xl text-xl leading-relaxed text-ink-muted md:text-2xl [&>strong]:font-medium [&>strong]:text-ink">
            {parts.map((part, i) =>
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
            )}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <ul className="mt-10 flex max-w-3xl flex-wrap gap-2.5" aria-label="Tech stack">
            {about.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
