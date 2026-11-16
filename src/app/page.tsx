export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-6 px-6 py-24">
      <p className="text-sm font-medium">Software Engineer, Backend &amp; AI Systems</p>
      <h1 className="text-5xl leading-tight font-extrabold tracking-tight">
        Beyond prompts.
        <br />
        Into systems.
      </h1>
      <p className="max-w-prose text-lg">
        I build FastAPI backends and multi-agent LLM systems, from real-time voice to ranking
        100,000 profiles.
      </p>
      <p>
        <a
          className="underline underline-offset-4"
          href="https://github.com/najmabegum-dev"
          rel="me"
        >
          GitHub profile
        </a>
      </p>
    </main>
  );
}
