import React, { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

export const Nav = () => {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("hidden")
    }
    return (
        <header>
            <div className="bg-[#020617] flex h-16 px-8 md:px-[180px] z-0">
                <div className="flex flex-row items-center">
                    <h1 className="text-[#FFFFFF] text-base md:text-lg">About</h1>
                    <h1 className="text-[#EAB308] text-base md:text-lg">Me.</h1>
                </div>
                <div className="flex flex-row justify-end items-center w-screen ml-5">
                    <div onClick={showNavBar} className="hidden flex-row justify-end max-md:block">
                        <MenuIcon height={25} width={25} sx={{ color: "#9CA3AF" }} />
                    </div>
                    <div className="flex max-md:hidden">
                        <div className="flex items-center">
                            <span className="header-right-text">HOME</span>
                            <span className="header-right-text">ABOUT</span>
                            <span className="header-right-text">SERVICE</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <nav ref={navRef} className="bg-[#020617] w-screen h-screen z-1 hidden absolute top-0">
                    <div className="flex flex-col items-center pt-10">
                        <a className="header-drawer-text" href="/#">HOME</a>
                        <a className="header-drawer-text" href="/#">ABOUT</a>
                        <a className="header-drawer-text" href="/#">SERVICE</a>
                    </div>
                    <div className="absolute top-3 right-3">
                        <CloseIcon onClick={showNavBar} height={25} width={25} sx={{ color: "#9CA3AF" }} />
                    </div>
                </nav>
            </div>
        </header>
    );
};
