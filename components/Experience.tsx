import { Reveal } from "@/components/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="label mb-4 border-b border-gold-soft pb-3 w-fit">
            Experience
          </p>
          <h2 className="display mb-14 text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
            Three years, five teams, real products
            <span className="text-gold">.</span>
          </h2>
        </Reveal>

        <ol className="divide-y divide-line border-y border-line">
          {experience.map((role, i) => (
            <li key={role.company}>
              <Reveal delay={i * 0.05}>
                <div className="group grid gap-3 py-9 transition-colors md:grid-cols-[220px_1fr] md:gap-10">
                  <div>
                    <p className="label pt-1">{role.period}</p>
                    <p className="label mt-1">{role.location}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ink">
                      {role.title}
                      <span className="text-ink-muted"> · </span>
                      {role.href ? (
                        <a
                          href={role.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-draw pb-0.5 transition-colors group-hover:text-gold"
                        >
                          {role.company} ↗
                        </a>
                      ) : (
                        <span>{role.company}</span>
                      )}
                    </h3>
                    <p className="mt-3 max-w-2xl text-ink-muted">{role.blurb}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                      {role.chips.map((chip) => (
                        <li key={chip} className="chip">
                          {chip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
