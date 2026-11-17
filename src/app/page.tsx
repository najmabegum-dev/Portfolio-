import { site } from "@/lib/site";

export default function Home() {
  return (
    <section
      aria-labelledby="home-title"
      className="mx-auto flex min-h-[min(76vh,56rem)] w-full max-w-6xl flex-col justify-center gap-7 px-5 py-20"
    >
      <p className="text-mute text-sm font-semibold">{site.role}</p>
      <h1
        id="home-title"
        className="max-w-4xl text-5xl leading-[1.05] font-extrabold tracking-[-0.035em] sm:text-7xl"
      >
        Beyond prompts.
        <br />
        Into systems.
      </h1>
      <p className="text-mute max-w-2xl text-lg leading-relaxed sm:text-xl">{site.intro}</p>
      <p>
        <a
          className="border-line text-accent hover:bg-panel inline-flex min-h-11 items-center rounded-full border px-5 py-2 font-semibold underline underline-offset-4"
          href={site.links.github}
          rel="me"
        >
          GitHub profile
        </a>
      </p>
    </section>
  );
}
