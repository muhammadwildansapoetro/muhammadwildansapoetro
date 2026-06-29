import { FadeIn } from "../components/FadeIn";
import { SectionHeading } from "../components/SectionHeading";
import { SkillTag } from "../components/SkillTag";
import { skills } from "../data/skills";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl border-t border-neutral-200 px-6 py-20 dark:border-neutral-800"
    >
      <FadeIn>
        <SectionHeading eyebrow="Tentang" title="Sedikit cerita tentang saya" />
      </FadeIn>

      <FadeIn className="grid gap-10 sm:grid-cols-[200px_1fr] sm:items-start">
        {/* SWAP IN YOUR REAL PHOTO */}
        <img
          src="/photo-placeholder.svg"
          alt="Portrait of Muhammad Wildan Sapoetro"
          loading="lazy"
          className="h-48 w-48 rounded-2xl bg-neutral-100 object-cover dark:bg-neutral-800"
        />

        <div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Saya masih terus belajar di dunia pengembangan web, dan senang
            mencoba hal-hal baru sepanjang prosesnya. Belum banyak yang bisa
            saya bagikan, tapi saya berusaha untuk terus berkembang sedikit
            demi sedikit lewat proyek-proyek kecil di bawah ini.
          </p>

          <div className="mt-8 space-y-5">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="mb-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillTag key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
