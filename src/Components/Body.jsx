import React, { useCallback } from 'react'
// import landing_page_background from '../Assets/landing_page_background.jpg'
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

const Body = (props) => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const scrollToSection = () => {
        const element = document.getElementById("header")
        element.scrollIntoView({ behavior: 'smooth' })
    }

    const options = {
        background: {
            color: {
                value: "#020617",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 2,
                },
                repulse: {
                    distance: 200,
                    duration: 1.0,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: true,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }

    return (
        <div className='h-screen'>
            <div className="-z-50 fixed top-0 right-0">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={options}
                />
            </div>
            <div className='flex flex-col items-center justify-center h-5/6'>
                <div className='flex flex-row items-center justify-center text-2xl'>
                    <span className='text-[#F3F4F6] text-center text-ellipsis'>
                        Hello, I'm
                    </span>
                    <span className='text-[#EAB308] text-center'>
                        &nbsp;Musthafa
                    </span>
                </div>
                <span className='text-[#F3F4F6] text-center pt-5 text-2xl'>
                    I'm a Software Engineer.
                </span>
                <div className='w-40 h-1/12 border-2 rounded-md border-[#EAB308] mt-5 px-2 py-1 text-center items-center' >
                    <span onClick={scrollToSection} className='text-[#EAB308]'>View My Projects</span>
                </div>
            </div>
        </div >
    )
}

export default Body