"use client";

import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Results", href: "#stats" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 cursor-pointer group"
          aria-label="GymForge Home"
        >
          <Dumbbell className="h-8 w-8 text-primary transition-transform duration-200 group-hover:scale-110" />
          <span className="font-heading text-2xl font-bold tracking-tight text-text">
            Gym<span className="text-primary">Forge</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="cursor-pointer font-medium text-text-muted transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden cursor-pointer rounded-lg bg-cta px-6 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:-translate-y-0.5 md:inline-block"
        >
          Get a Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="cursor-pointer text-text md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-surface md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block cursor-pointer rounded-lg px-4 py-3 font-medium text-text-muted transition-colors duration-200 hover:bg-background hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block cursor-pointer rounded-lg bg-cta px-4 py-3 text-center font-semibold text-white transition-all duration-200 hover:bg-cta-hover"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
