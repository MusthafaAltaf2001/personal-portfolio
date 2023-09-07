import React, { useState } from "react";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-[#FFFFFF] transition ease transform duration-300 z-4`;

    return (
        <header>
            <div className="bg-[#020617] flex h-16 px-8 md:px-[180px] z-0">
                <div className="flex flex-row items-center">
                    <h1 className="text-[#FFFFFF] text-base md:text-lg">About</h1>
                    <h1 className="text-[#EAB308] text-base md:text-lg">Me.</h1>
                </div>
                <div className="flex flex-row justify-end items-center w-screen ml-5">
                    <div className="flex max-md:hidden">
                        <div className="flex items-center">
                            <span className="header-right-text">HOME</span>
                            <span className="header-right-text">ABOUT</span>
                            <span className="header-right-text">SERVICE</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute top-0 w-screen h-screen bg-[#020617] p-10 z-1 ease-in-out duration-500 ${isOpen ? "translate-y-0 " : "-translate-y-full"}`}>
                <div className="flex flex-col items-center pt-10 z-3">
                    <a className="header-drawer-text" href="/#">HOME</a>
                    <a className="header-drawer-text" href="/#">ABOUT</a>
                    <a className="header-drawer-text" href="/#">SERVICE</a>
                </div>
                {/* <nav className="bg-[#020617] w-screen h-screen z-2 hidden absolute top-0">

                </nav> */}
            </div>
            <div className="z-4 absolute top-2 right-2 hidden max-md:block">
                <button
                    className="flex flex-col h-12 w-12 rounded justify-center items-center group"
                    onClick={() => setIsOpen(!isOpen)}
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
