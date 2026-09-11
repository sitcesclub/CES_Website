"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Single data structure for navigation items
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Achievements", href: "/achievements" },
  { label: "Members", href: "/members" },
  { label: "Alumni", href: "/alumni" },
  { label: "Talks", href: "/talks" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle transparent to solid background transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when shifting route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? "bg-white border-slate-200 shadow-sm text-slate-900"
          : "bg-transparent border-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Anchored Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl tracking-wider focus:outline-none focus:ring-2 focus:ring-slate-400 rounded-md p-1">
              CES
            </Link>
          </div>

          {/* Desktop Navigation Links - Shifted Far Right */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4 ml-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 ${
                    isActive
                      ? isScrolled
                        ? "text-slate-900 bg-slate-100 font-semibold"
                        : "text-white bg-white/10 font-semibold"
                      : isScrolled 
                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50" 
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 ${
                isScrolled || isMobileMenuOpen
                  ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden bg-white border-b border-slate-200 transition-all duration-200 ${
          isMobileMenuOpen ? "block opacity-100" : "hidden opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-slate-900">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-slate-400 ${
                  isActive
                    ? "bg-slate-100 text-slate-900 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
