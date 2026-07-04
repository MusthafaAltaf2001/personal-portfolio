"use client";

import { ParticlesBackground } from "@/components/ParticlesBackground";
import { ArrowDownwardIcon, DownloadIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export function Hero() {
  const scrollToSection = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="h-screen">
      <ParticlesBackground />
      <div className="flex flex-col items-center justify-center h-5/6">
        <div className="flex flex-row items-center justify-center text-2xl xs:text-3xl sm:text-4xl md:text-6xl">
          <span className="text-[#F3F4F6] text-center text-ellipsis">
            Hello, I&apos;m
          </span>
          <span className="text-[#EAB308] text-center">&nbsp;Musthafa</span>
        </div>
        <span className="text-[#F3F4F6] text-center pt-5 text-2xl xs:text-3xl sm:text-4xl md:text-6xl">
          I&apos;m a Software Engineer.
        </span>
        <div className="flex flex-col items-center">
          <div className="border-2 rounded-md border-[#EAB308] text-center items-center text-xl md:text-4xl w-fit m-3 p-2">
            <button>
              <span onClick={scrollToSection} className="text-[#EAB308]">
                View My Work
              </span>
              <ArrowDownwardIcon size={33} className="text-[#EAB308]" />
            </button>
          </div>
          <div className="border-2 rounded-md border-[#EAB308] text-center items-center text-xl md:text-4xl w-fit m-3 p-2">
            <a
              href={siteConfig.resumeUrl}
              download="Mohamed Musthafa Resume"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-[#EAB308]">Resume</span>
              <DownloadIcon size={33} className="text-[#EAB308]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
