// SWAP IN YOUR REAL LINKS HERE.
export interface SocialLink {
  label: string;
  href: string;
  icon: "email" | "github" | "linkedin";
}

export const socials: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:your.email@example.com", // <-- swap in your real email
    icon: "email",
  },
  {
    label: "GitHub",
    href: "https://github.com/your-username", // <-- swap in your GitHub URL
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-username", // <-- swap in your LinkedIn URL
    icon: "linkedin",
  },
];

// Formspree (or any no-backend form service) endpoint for the contact form.
// Sign up at https://formspree.io, create a form, and replace YOUR_FORM_ID below.
export const contactFormEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
