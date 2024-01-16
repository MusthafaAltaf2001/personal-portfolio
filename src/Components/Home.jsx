import React, { useCallback } from "react";
// import landing_page_background from '../Assets/landing_page_background.jpg'
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import options from "../Configs/tsparticle.config.js";

const Home = () => {
	const resumeLink =
		"https://drive.google.com/file/d/1-pud6NvSR4zI8gicTya9EKp1GDgzdmuy/view?usp=sharing";

	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	const scrollToSection = () => {
		const element = document.getElementById("about");
		element.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div id="home" className="h-screen">
			<div className="-z-50 fixed top-0 right-0">
				<Particles
					id="tsparticles"
					init={particlesInit}
					loaded={particlesLoaded}
					options={options}
					className="w-screen h-screen"
				/>
			</div>
			<div className="flex flex-col items-center justify-center h-5/6">
				<div className="flex flex-row items-center justify-center text-2xl xs:text-3xl sm:text-4xl md:text-6xl">
					<span className="text-[#F3F4F6] text-center text-ellipsis">
						Hello, I'm
					</span>
					<span className="text-[#EAB308] text-center">
						&nbsp;Musthafa
					</span>
				</div>
				<span className="text-[#F3F4F6] text-center pt-5 text-2xl xs:text-3xl sm:text-4xl md:text-6xl">
					I'm a Software Engineer.
				</span>
				<div className="flex flex-col items-center">
					<div className="border-2 rounded-md border-[#EAB308] text-center items-center text-xl md:text-4xl w-fit m-3 p-2">
						<button>
							<span
								onClick={scrollToSection}
								className="text-[#EAB308]"
							>
								View My Work
							</span>
							<ArrowDownwardIcon
								sx={{ color: "#EAB308", fontSize: 33 }}
							/>
						</button>
					</div>
					<div className="border-2 rounded-md border-[#EAB308] text-center items-center text-xl md:text-4xl w-fit m-3 p-2">
						<a
							href={resumeLink}
							download="Mohamed Musthafa Resume"
							target="_blank"
							rel="noreferrer"
						>
							<span className="text-[#EAB308]">Resume</span>
							<DownloadIcon
								sx={{ color: "#EAB308", fontSize: 33 }}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
