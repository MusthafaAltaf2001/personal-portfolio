import { SkillsList } from "@/components/SkillsList";
import { aboutText } from "@/lib/data";

export function About() {
  return (
    <div id="about" className="flex flex-col items-center pt-16">
      <span className="text-4xl font-bold text-[#EAB308] px-10 py-4">
        ABOUT
      </span>
      <span className="text-xl text-[#F3F4F6] px-[50px] md:px-[200px] py-4 text-justify xl:px-[450px]">
        {aboutText}
      </span>
      <SkillsList />
    </div>
  );
}
