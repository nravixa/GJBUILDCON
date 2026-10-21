"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback } from "react";

export type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isMounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
  isMounted: false,
});

const listeners = new Set<() => void>();

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem("gj-theme");
    // If user previously manually selected a theme, respect it
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    // If no manual preference is saved, check OS/software mode
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    // Default to bright mode (light)
    return "light";
  } catch {
    return "light";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);

  // Also listen for OS theme changes if user has not set a manual preference
  const media = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  const handleMediaChange = () => {
    try {
      if (!localStorage.getItem("gj-theme")) {
        const newTheme = media?.matches ? "dark" : "light";
        const root = document.documentElement;
        root.classList.remove("dark", "light");
        root.classList.add(newTheme);
        root.setAttribute("data-theme", newTheme);
        listener();
      }
    } catch {}
  };

  media?.addEventListener?.("change", handleMediaChange);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
    media?.removeEventListener?.("change", handleMediaChange);
  };
}

function getServerSnapshot(): Theme {
  return "light";
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerSnapshot);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem("gj-theme", newTheme);
    } catch {
      // Ignore storage errors in restricted contexts
    }

    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(newTheme);
    root.setAttribute("data-theme", newTheme);

    // Notify all active subscribers in this tab
    listeners.forEach((listener) => listener());
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getThemeSnapshot();
    setTheme(current === "dark" ? "light" : "dark");
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isMounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
