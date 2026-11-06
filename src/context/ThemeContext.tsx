import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "system";

  try {
    const storedTheme = window.localStorage.getItem("theme");
    if (
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
    ) {
      return storedTheme;
    }
  } catch {
    // Ignore storage errors (e.g. private browsing mode).
  }

  return "system";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const applyTheme = useCallback((nextTheme: "light" | "dark") => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(nextTheme);
    root.style.colorScheme = nextTheme;
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // Ignore storage errors (e.g. private browsing mode).
    }

    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (theme === "system") {
        applyTheme(event.matches ? "dark" : "light");
      }
    };

    if (theme === "system") {
      applyTheme(mql.matches ? "dark" : "light");
      mql.addEventListener("change", handleChange);
    } else {
      applyTheme(theme);
    }

    return () => mql.removeEventListener("change", handleChange);
  }, [theme, applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
