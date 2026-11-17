"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "./nav-items";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-controls="mobile-nav-sheet"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="border-line text-ink hover:bg-panel inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-medium md:hidden"
      >
        Menu
      </button>
      <nav
        id="mobile-nav-sheet"
        aria-label="Mobile navigation"
        hidden={!isOpen}
        className={isOpen ? "mobile-nav-sheet md:hidden" : "hidden"}
      >
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold">Navigation</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-accent min-h-11 rounded-full px-3 text-sm font-medium underline underline-offset-4"
          >
            Close menu
          </button>
        </div>
        <ul className="grid grid-cols-2 gap-2">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-ink hover:bg-paper block rounded-lg px-3 py-3"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
