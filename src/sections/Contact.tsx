import { useState } from "react";
import { FadeIn } from "../components/FadeIn";
import { SectionHeading } from "../components/SectionHeading";
import { SocialIcon } from "../components/SocialIcon";
import { contactFormEndpoint, socials } from "../data/socials";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl border-t border-neutral-200 px-6 py-20 dark:border-neutral-800"
    >
      <FadeIn>
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project in mind, or just want to say hi? Reach out."
        />
      </FadeIn>

      <FadeIn className="grid gap-12 sm:grid-cols-2">
        <ul className="flex flex-col gap-4">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.icon === "email" ? undefined : "_blank"}
                rel={social.icon === "email" ? undefined : "noreferrer"}
                className="flex items-center gap-3 text-neutral-700 transition hover:text-accent dark:text-neutral-300 dark:hover:text-accent-dark"
              >
                <SocialIcon icon={social.icon} />
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        {/*
          Optional contact form powered by Formspree (no backend required).
          1. Create a form at https://formspree.io
          2. Replace YOUR_FORM_ID in src/data/socials.ts (contactFormEndpoint)
        */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-neutral-300 bg-transparent px-3 py-2 text-sm dark:border-neutral-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-neutral-300 bg-transparent px-3 py-2 text-sm dark:border-neutral-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-neutral-300 bg-transparent px-3 py-2 text-sm dark:border-neutral-700"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="self-start rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700 disabled:opacity-60 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <p role="status" className="text-sm text-green-600 dark:text-green-400">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </FadeIn>
    </section>
  );
}
