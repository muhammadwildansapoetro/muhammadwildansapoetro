// Add, remove, or regroup skills here — SkillTag components are generated from this list.
export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "Vite"],
  },
];
