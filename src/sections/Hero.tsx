import { FadeIn } from "../components/FadeIn";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:py-32"
    >
      <FadeIn>
        {/* SWAP IN YOUR NAME AND TAGLINE */}
        <p className="text-sm font-medium uppercase tracking-wider text-accent dark:text-accent-dark">
          Hi, I'm Muhammad Wildan Sapoetro
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
          I build fast, accessible web apps.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
          {/* SWAP IN YOUR SHORT INTRO */}
          A short intro about who you are, what you do, and what kind of
          problems you like to solve. Two or three sentences is plenty.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
          >
            Get in touch
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
