import { skills } from "@/lib/data";

export function SkillsList() {
  return (
    <div className="flex flex-col flex-wrap items-center text-[#F3F4F6] my-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill.name} className="about-skills-div">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="about-skills-div-img" src={skill.logo} alt="" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
