import { FadeIn } from "../components/FadeIn";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl border-t border-neutral-200 px-6 py-20 dark:border-neutral-800"
    >
      <FadeIn>
        <SectionHeading
          eyebrow="PROYEK"
          title="Proyek Pilihan"
          description="Kumpulan proyek yang merepresentasikan kemampuan dan proses belajar saya, sebagian dikerjakan secara kolaboratif bersama tim."
        />
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn
            key={project.title}
            className={index === 0 ? "sm:col-span-2" : ""}
          >
            <ProjectCard project={project} featured={index === 0} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
