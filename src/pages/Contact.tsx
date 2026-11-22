import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/contact/ContactForm";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/data/contact";
import { useTranslation } from "@/locales";

const directLinks = [
  {
    href: `mailto:${CONTACT_EMAIL}`,
    labelKey: "contact.links.emailMe",
    value: CONTACT_EMAIL,
    icon: <FaEnvelope />,
    external: false,
  },
  {
    href: LINKEDIN_URL,
    labelKey: "contact.links.linkedin",
    value: "faiz-zamzami-1189492ab",
    icon: <FaLinkedin />,
    external: true,
  },
  {
    href: GITHUB_URL,
    labelKey: "contact.links.github",
    value: "github.com/ZamiFaiz24",
    icon: <FaGithub />,
    external: true,
  },
] as const;

export default function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${t("navbar.contact")} | Faiz Zamzami`;

    return () => {
      document.title = previousTitle;
    };
  }, [t]);

  return (
    <PageLayout>
      <section className="w-full bg-page px-6 pb-16 pt-24">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <FaArrowLeft /> {t("common.backHome")}
          </Link>

          <div className="mb-10 mt-6 text-center">
            <h1 className="inline-block border-b-4 border-accent pb-1 text-3xl font-extrabold text-accent md:text-4xl">
              {t("contact.heading")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <div className="rounded-2xl border border-ink/10 bg-surface p-6 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t("about.availability")}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {t("contact.ctaDescription")}
                </p>
              </div>

              <div className="space-y-3">
                {directLinks.map((link) => (
                  <a
                    key={link.labelKey}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-ink/10 bg-surface px-4 py-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-lg text-accent">
                      {link.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-ink">
                        {t(link.labelKey)}
                      </span>
                      <span className="block truncate text-xs text-ink/60">
                        {link.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
