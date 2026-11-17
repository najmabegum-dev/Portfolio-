import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="text-mute mx-auto w-full max-w-6xl px-5 py-8 text-sm">
      <p>
        © 2026 {site.name}. Built with Next.js; the code is on{" "}
        <a className="text-accent underline underline-offset-4" href={site.links.github} rel="me">
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
