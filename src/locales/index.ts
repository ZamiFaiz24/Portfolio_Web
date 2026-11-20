import { createContext, useContext } from "react";
import en from "./en.json";
import id from "./id.json";

export type Locale = "id" | "en";

export const DEFAULT_LOCALE: Locale = "id";
export const STORAGE_KEY = "lang";

export const messages: Record<Locale, Record<string, unknown>> = { id, en };

function lookup(
  dictionary: Record<string, unknown>,
  key: string
): string | undefined {
  const value = key.split(".").reduce<unknown>((current, part) => {
    if (current !== null && typeof current === "object") {
      return (current as Record<string, unknown>)[part];
    }
    return undefined;
  }, dictionary);

  return typeof value === "string" ? value : undefined;
}

/**
 * Resolve a dot-notation key for the given locale.
 * Fallback order: current locale, Indonesian, then the key itself.
 */
export function translate(key: string, locale: Locale = DEFAULT_LOCALE): string {
  return (
    lookup(messages[locale], key) ??
    lookup(messages[DEFAULT_LOCALE], key) ??
    key
  );
}

/** Alias matching the `t(key, locale)` signature from the plan. */
export const t = translate;

/**
 * Read the initial locale from localStorage, then fall back to the browser
 * language: anything starting with `id` is Indonesian, everything else English.
 */
export function getInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") return stored;
  } catch {
    // Ignore storage errors (e.g. private browsing mode).
  }

  const language = window.navigator.language ?? "";
  return language.toLowerCase().startsWith("id") ? "id" : "en";
}

export type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

export const LocaleContext = createContext<LocaleContextValue | undefined>(
  undefined
);

export function useTranslation(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LocaleProvider");
  }
  return context;
}
