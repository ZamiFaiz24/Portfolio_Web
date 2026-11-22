import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { useTranslation } from "@/locales";

export default function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section id="contact-cta" className="scroll-mt-16 w-full bg-page px-6 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-ink/10 bg-surface p-8 text-center shadow-sm sm:p-10">
        <h2 className="text-3xl font-extrabold text-accent">
          {t("contact.ctaHeading")}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-ink/70">
          {t("contact.ctaDescription")}
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-page shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          <FaEnvelope /> {t("hero.buttons.contactMe")}
        </Link>
      </div>
    </section>
  );
}
