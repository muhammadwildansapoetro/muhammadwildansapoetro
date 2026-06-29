import { socials } from "../data/socials";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          {/* SWAP IN YOUR NAME */}© {new Date().getFullYear()} Muhammad Wildan Sapoetro
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.icon === "email" ? undefined : "_blank"}
              rel={social.icon === "email" ? undefined : "noreferrer"}
              aria-label={social.label}
              className="text-neutral-500 transition hover:text-neutral-900 dark:hover:text-white"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}

          <a
            href="#top"
            className="text-sm font-medium text-neutral-500 transition hover:text-neutral-900 dark:hover:text-white"
          >
            Kembali ke atas
          </a>
        </div>
      </div>
    </footer>
  );
}
