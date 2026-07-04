"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { particlesOptions } from "@/lib/particles-config";

const init = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};

export function ParticlesBackground() {
  return (
    <ParticlesProvider init={init}>
      <div className="-z-50 fixed top-0 right-0">
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="w-screen h-screen"
        />
      </div>
    </ParticlesProvider>
  );
}
