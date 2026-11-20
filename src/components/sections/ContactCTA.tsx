import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "@/locales";

const EMAIL = "faizzamzami10p@gmail.com";
const GITHUB_URL = "https://github.com/ZamiFaiz24";
const LINKEDIN_URL = "https://www.linkedin.com/in/faiz-zamzami-1189492ab/";

export default function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="scroll-mt-16 w-full bg-page px-6 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-ink/10 bg-surface p-8 text-center shadow-lg sm:p-10">
        <h2 className="text-3xl font-extrabold text-accent">
          {t("contact.heading")}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-ink/70">
          {t("contact.ctaDescription")}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:w-auto"
          >
            <FaEnvelope /> {t("contact.links.emailMe")}
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-ink/15 px-6 py-3 font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:w-auto"
          >
            <FaGithub /> {t("contact.links.github")}
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-ink/15 px-6 py-3 font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:w-auto"
          >
            <FaLinkedin /> {t("contact.links.linkedin")}
          </a>
        </div>

        <p className="mt-6 text-sm text-ink/60">
          <a
            href={`mailto:${EMAIL}`}
            className="font-semibold text-accent hover:underline"
          >
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
