"use client";

import { useState } from "react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navBarToggle = () => {
    setIsOpen(!isOpen);
  };

  const genericHamburgerLine =
    "h-0.5 w-6 my-0.5 rounded-full bg-[#FFFFFF] transition ease transform duration-300";

  return (
    <header id="header" className="sticky top-0 z-40">
      <div className="bg-[#111827] flex h-16 md:px-[150px] xl:px-[450px] justify-center">
        <div className="flex flex-row justify-center items-center">
          <div className="block max-md:hidden">
            <div className="flex items-center justify-center">
              <button
                onClick={() => scrollTo("home")}
                className="header-right-text"
              >
                HOME
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="header-right-text"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="header-right-text"
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollTo("footer")}
                className="header-right-text"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute left-0 top-0 bg-[#111827] ease-in-out duration-500 ${
          isOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center pt-10 h-screen w-screen">
          <span
            onClick={() => {
              navBarToggle();
              scrollTo("home");
            }}
            className="header-drawer-text"
          >
            HOME
          </span>
          <span
            onClick={() => {
              navBarToggle();
              scrollTo("about");
            }}
            className="header-drawer-text"
          >
            ABOUT
          </span>
          <span
            onClick={() => {
              navBarToggle();
              scrollTo("projects");
            }}
            className="header-drawer-text"
          >
            PROJECTS
          </span>
          <span
            onClick={() => {
              navBarToggle();
              scrollTo("footer");
            }}
            className="header-drawer-text"
          >
            CONTACT
          </span>
        </div>
      </div>
      <div className="absolute top-2 left-2 hidden max-md:block">
        <button
          className="flex flex-col h-12 w-12 rounded justify-center items-center group"
          onClick={navBarToggle}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>
    </header>
  );
}
