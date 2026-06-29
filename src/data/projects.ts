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
  // {
  //   title: "Nama Proyek",
  //   description: "Deskripsi singkat mengenai proyek ini.",
  //   tags: ["React", "TypeScript", "Tailwind CSS"],
  //   demoUrl: "https://example.com",
  //   repoUrl: "https://github.com/your-username/project",
  //   thumbnail: "/projects/project.svg", // <-- drop a real thumbnail in public/projects/
  //   caseStudy: {
  //     problem: "Masalah yang ingin diselesaikan lewat proyek ini.",
  //     role: "Peran kamu dalam proyek ini.",
  //     outcome: "Hasil yang didapat dari proyek ini.",
  //   },
  // },
];
