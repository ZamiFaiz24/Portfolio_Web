"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');

  const applyTheme = useCallback((t: 'light' | 'dark') => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(t);
  }, []);

  // 3. useEffect ini berjalan sekali untuk inisialisasi
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    // Jika ada tema tersimpan, gunakan. Jika tidak, default-nya adalah 'system'.
    setTheme(storedTheme || 'system');
  }, []);

  // 4. useEffect ini berjalan setiap kali 'theme' (pilihan pengguna) berubah
  useEffect(() => {
    // Simpan pilihan pengguna ke localStorage
    window.localStorage.setItem("theme", theme);

    // Listener untuk mendeteksi perubahan tema OS
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        applyTheme(e.matches ? "dark" : "light");
      }
    };

    // Logika utama untuk menentukan dan menerapkan tema
    if (theme === "system") {
      // Jika pilihan adalah 'system', terapkan tema sesuai OS saat ini
      applyTheme(mql.matches ? "dark" : "light");
      // Dan dengarkan perubahannya
      mql.addEventListener("change", handleChange);
    } else {
      // Jika pilihan adalah 'light' atau 'dark', langsung terapkan
      applyTheme(theme);
      // Hapus listener agar tidak menimpa pilihan pengguna
      mql.removeEventListener("change", handleChange);
    }

    // Cleanup listener saat komponen unmount atau 'theme' berubah
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