// Add a new project = add a new object here. ProjectCard renders this list directly.
export interface CaseStudy {
  problem: string;
  role: string;
  outcome: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  thumbnail: string;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    title: "Project One", // <-- swap in your real project
    description:
      "A short, punchy description of what this project does and why it matters.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/project-one",
    thumbnail: "/projects/project-one.svg", // <-- drop a real thumbnail in public/projects/
    caseStudy: {
      problem:
        "Describe the problem this project set out to solve in a sentence or two.",
      role: "Solo developer — design, frontend, and deployment.",
      outcome:
        "Describe the measurable or qualitative outcome (e.g. adoption, performance gains, feedback).",
    },
  },
  {
    title: "Project Two",
    description: "A short description of the second project.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/project-two",
    thumbnail: "/projects/project-two.svg",
  },
  {
    title: "Project Three",
    description: "A short description of the third project.",
    tags: ["Python", "FastAPI"],
    repoUrl: "https://github.com/your-username/project-three",
    thumbnail: "/projects/project-three.svg",
  },
  {
    title: "Project Four",
    description: "A short description of the fourth project.",
    tags: ["JavaScript", "Figma"],
    demoUrl: "https://example.com",
    thumbnail: "/projects/project-four.svg",
  },
];
