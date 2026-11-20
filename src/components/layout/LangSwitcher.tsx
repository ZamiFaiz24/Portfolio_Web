import { useTranslation, type Locale } from "@/locales";

const LOCALES: ReadonlyArray<{ value: Locale; label: string }> = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
];

export default function LangSwitcher() {
  const { locale, setLocale, t } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t("navbar.languageSwitcher")}
      className="inline-flex items-center gap-0.5 rounded-lg border border-ink/15 bg-surface p-0.5"
    >
      {LOCALES.map((option) => {
        const isActive = locale === option.value;

        return (
          <button
            key={option.value}
            type="button"
            lang={option.value}
            onClick={() => setLocale(option.value)}
            aria-pressed={isActive}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
              isActive
                ? "bg-accent text-white shadow-sm"
                : "text-ink/70 hover:bg-ink/5 hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
