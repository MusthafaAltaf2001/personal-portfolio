import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Nav = () => {
    return (
        <header className="bg-[#020617] flex h-16 px-8 md:px-[180px]">
            <div className="flex flex-row items-center">
                <h1 className="text-[#FFFFFF] text-base md:text-lg">About</h1>
                <h1 className="text-[#EAB308] text-base md:text-lg">Me.</h1>
            </div>
            <div className="flex flex-row justify-end items-center w-screen ml-5">
                <div className="hidden flex-row justify-end max-md:block">
                    <MenuIcon height={25} width={25} sx={{ color: "white" }} />
                </div>
                <div className="flex max-md:hidden">
                    <div className="flex items-center">
                        <span className="header-right-text text-base md:text-lg">HOME</span>
                        <span className="header-right-text text-base md:text-lg">ABOUT</span>
                        <span className="header-right-text text-base md:text-lg">SERVICE</span>
                    </div>
                </div>
            </div>
        </header>
    );
};
