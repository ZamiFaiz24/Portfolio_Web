import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaAward } from "react-icons/fa";
import PageLayout from "@/components/PageLayout";
import { certificates } from "@/data/certificates";
import { useTranslation } from "@/locales";

export default function Certificates() {
  const { t } = useTranslation();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${t("certificates.heading")} | Faiz Zamzami`;

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
              {t("certificates.heading")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">
              {t("certificates.subtitle")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="group flex h-full flex-col items-center rounded-2xl border border-ink/10 bg-surface px-6 py-8 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <FaAward className="mb-4 text-6xl text-accent transition-transform duration-300 group-hover:scale-110" />

                <h2 className="text-lg font-bold text-ink">
                  {certificate.title}
                </h2>
                <p className="mt-2 text-sm text-ink/70">
                  {certificate.issuer}
                </p>
                <p className="mt-1 text-sm text-ink/60">
                  {certificate.date ??
                    t("certificatesPage.dateUnavailable")}
                </p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("certificates.viewCertificate")}: ${certificate.title}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2 font-semibold text-white shadow-lg transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  {t("certificates.viewCertificate")}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
