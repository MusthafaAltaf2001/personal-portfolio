import React, { useState, useRef } from "react";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef()

    const navBarToggle = () => {
        setIsOpen(!isOpen)
        // navRef.current.classList.toggle("hidden")
    }

    const scrollToAbout = () => {
        const element = document.getElementById("about")
        element.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToProjects = () => {
        const element = document.getElementById("projects")
        element.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToResume = () => {
        const element = document.getElementById("resume")
        element.scrollIntoView({ behavior: 'smooth' })
    }

    const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-[#FFFFFF] transition ease transform duration-300 z-200`;

    return (
        <header id="header" className="sticky top-0 z-40">
            <div className="bg-[#111827] flex h-16 md:px-[150px]">
                <div className="flex flex-row justify-center items-center w-screen">
                    <div className="flex max-md:hidden">
                        <div className="flex items-center justify-center">
                            <span onClick={scrollToAbout} className="header-right-text">ABOUT</span>
                            <span onClick={scrollToProjects} className="header-right-text">PROJECTS</span>
                            <span onClick={scrollToProjects} className="header-right-text">RESUME</span>
                            <span className="header-right-text">CONTACT</span>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={navRef} className={`absolute left-0 top-0 w-screen h-screen bg-[#111827] ease-in-out duration-500 ${isOpen ? "translate-x-0 " : "-translate-x-full"}`}>
                <div className="flex flex-col items-center pt-10">
                    <span onClick={() => { navBarToggle(); scrollToAbout(); }} className="header-drawer-text">ABOUT</span>
                    <span onClick={() => { navBarToggle(); scrollToProjects(); }} className="header-drawer-text">PROJECTS</span>
                    <span onClick={() => { navBarToggle(); scrollToResume(); }} className="header-drawer-text" href="/#">RESUME</span>
                    <a className="header-drawer-text" href="/#">CONTACT</a>
                </div>
            </div>
            <div className="z-200 absolute top-2 right-2 hidden max-md:block">
                <button
                    className="flex flex-col h-12 w-12 rounded justify-center items-center group"
                    onClick={navBarToggle}
                >
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                    <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                </button>
            </div>
        </header>
    );
};
