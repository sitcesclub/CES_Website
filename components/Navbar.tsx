"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "HOME",
    "EVENTS",
    "MEMBERS",
    "ACHIEVEMENTS",
    "VISION",
    "TALKS",
    "ALUMNI",
  ];

  return (
    <nav className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-[1300px] -translate-x-1/2">
      {/* Main Navbar */}
      <div className="flex h-[52px] items-center gap-3 overflow-hidden rounded-full border border-[rgba(89,97,128,0.3)] bg-[rgba(27,32,49,0.85)] px-3 shadow-lg backdrop-blur-md sm:top-4 sm:px-4">

        {/* CES Logo */}
        <div className="relative h-[38px] w-[38px] shrink-0 sm:h-[42px] sm:w-[42px]">
          <Image
            src="/ces-logo-main.png"
            alt="CES"
            fill
            className="object-contain"
            sizes="42px"
          />
        </div>

        {/* Society Name - Desktop */}
        <div className="hidden shrink-0 whitespace-nowrap text-[15px] font-medium text-[#f5f7ff] md:block lg:text-[16px]">
          Computer Engineers&apos; Society
        </div>

        {/* CES Name - Mobile */}
        <div className="block shrink-0 text-[14px] font-medium tracking-wide text-[#f5f7ff] md:hidden">
          CES
        </div>

        {/* Spacer */}
        <div className="min-w-0 flex-1" />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="whitespace-nowrap text-[11px] font-medium tracking-[0.5px] text-[#b8bfd6] transition-colors hover:text-[#f5f7ff]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Tablet Navigation */}
        <div className="hidden items-center gap-4 md:flex lg:hidden">
          {links.slice(0, 4).map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="whitespace-nowrap text-[10px] font-medium tracking-[0.4px] text-[#b8bfd6] transition-colors hover:text-[#f5f7ff]"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[#d8dcef] transition-colors hover:bg-white/[0.1] md:hidden"
        >
          <span className="flex flex-col gap-[4px]">
            <span
              className={`block h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-[5.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mt-2 overflow-hidden rounded-2xl border border-[rgba(89,97,128,0.3)] bg-[rgba(20,27,74,0.96)] p-2 shadow-xl backdrop-blur-md md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-[12px] font-medium tracking-[0.5px] text-[#b8bfd6] transition-colors hover:bg-white/[0.06] hover:text-[#f5f7ff]"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}