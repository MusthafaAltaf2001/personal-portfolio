import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { featuredProjects, otherProjects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="label mb-4 border-b border-gold-soft pb-3 w-fit">
            Projects
          </p>
          <h2 className="display mb-14 text-[clamp(2rem,4.5vw,3.5rem)] text-ink">
            Selected work<span className="text-gold">.</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-20">
          {featuredProjects.map((project, i) => {
            const cardClasses = `group grid items-center gap-8 transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none md:grid-cols-2 md:gap-14 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`;
            const inner = (
              <>
                <div
                  className={`overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 group-hover:border-gold-soft ${
                    project.image ? "" : "flex aspect-[16/10] items-center justify-center"
                  }`}
                  style={
                    project.imageBg
                      ? { backgroundColor: project.imageBg }
                      : undefined
                  }
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      sizes="(max-width: 768px) 100vw, 540px"
                      className={`aspect-[16/10] w-full transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                        project.imageFit === "contain"
                          ? "object-contain p-10"
                          : "object-cover object-top"
                      }`}
                    />
                  ) : (
                    <span className="display text-3xl text-ink-muted md:text-4xl">
                      {project.title}
                      <span className="text-gold">.</span>
                    </span>
                  )}
                </div>
                <div>
                  <h3
                    className={`display text-2xl text-ink transition-colors md:text-3xl ${
                      project.href ? "group-hover:text-gold" : ""
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="label mt-2">{project.tagline}</p>
                  <p className="mt-5 max-w-xl text-ink-muted">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.chips.map((chip) => (
                      <li key={chip} className="chip">
                        {chip}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            );
            return (
              <Reveal key={project.title}>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cardClasses}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClasses}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-24">
          <p className="label mb-6">More projects</p>
          <ul className="divide-y divide-line border-y border-line">
            {otherProjects.map((project) => (
              <li key={project.title}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-1 py-6 transition-colors md:flex-row md:items-baseline md:justify-between md:gap-8"
                >
                  <span className="font-medium text-ink transition-colors group-hover:text-gold">
                    {project.title} ↗
                  </span>
                  <span className="flex-1 text-sm text-ink-muted md:text-right">
                    {project.tagline}
                  </span>
                  <span className="label md:w-56 md:text-right">
                    {project.chips.join(" · ")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
