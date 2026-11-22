import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import { useTranslation } from "@/locales";
import { CONTACT_EMAIL } from "@/data/contact";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const isSending = status === "sending";
  const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClassName =
    "w-full rounded-lg border border-ink/15 bg-surface px-4 py-3 text-ink placeholder:text-ink/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isSending}
      className="rounded-2xl border border-ink/10 bg-surface p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-ink/80"
          >
            {t("contact.form.name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t("contact.form.namePlaceholder")}
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-ink/80"
          >
            {t("contact.form.email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t("contact.form.emailPlaceholder")}
            className={inputClassName}
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="company"
          className="mb-2 block text-sm font-semibold text-ink/80"
        >
          {t("contact.form.company")}{" "}
          <span className="font-normal text-ink/50">
            {t("contact.form.companyOptional")}
          </span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder={t("contact.form.companyPlaceholder")}
          className={inputClassName}
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-ink/80"
        >
          {t("contact.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t("contact.form.messagePlaceholder")}
          className={inputClassName}
        />
      </div>

      {status === "success" && (
        <p
          role="status"
          className="mt-6 rounded-lg border border-accent/20 bg-accent/10 px-4 py-3 text-sm font-medium text-accent"
        >
          {t("contact.notifications.successMessage")}
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 rounded-lg border border-danger/20 bg-danger/10 px-4 py-3 text-sm font-medium text-danger"
        >
          {isConfigured
            ? t("contact.notifications.errorMessage")
            : t("contact.notifications.configMessage")}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-page shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FaPaperPlane />
          {isSending
            ? t("contact.form.sending")
            : t("contact.form.submit")}
        </button>

        <p className="text-sm text-ink/60">
          {t("contact.form.preferEmail")}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-accent hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </form>
  );
}
