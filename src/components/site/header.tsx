import Link from "next/link";
import { site } from "@/lib/site";
import { MobileNav } from "./mobile-nav";
import { navItems } from "./nav-items";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="border-line border-b">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4">
        <Link href="/" className="text-ink text-lg font-extrabold tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="text-mute flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem]">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-ink">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
