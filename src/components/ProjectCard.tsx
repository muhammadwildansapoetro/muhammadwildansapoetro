import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div
        className={`overflow-hidden bg-neutral-100 dark:bg-neutral-800 ${
          featured ? "aspect-[16/7]" : "aspect-[16/10]"
        }`}
      >
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>

        {featured && project.caseStudy && (
          <dl className="mt-2 grid gap-4 border-t border-neutral-200 pt-4 text-sm sm:grid-cols-3 dark:border-neutral-800">
            <div>
              <dt className="font-medium text-neutral-900 dark:text-neutral-100">
                Problem
              </dt>
              <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
                {project.caseStudy.problem}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-900 dark:text-neutral-100">
                Role
              </dt>
              <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
                {project.caseStudy.role}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-900 dark:text-neutral-100">
                Outcome
              </dt>
              <dd className="mt-1 text-neutral-600 dark:text-neutral-400">
                {project.caseStudy.outcome}
              </dd>
            </div>
          </dl>
        )}

        <ul className="mt-1 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-4 pt-4 text-sm font-medium">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline dark:text-accent-dark"
            >
              Live demo ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-600 hover:underline dark:text-neutral-400"
            >
              Source ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
