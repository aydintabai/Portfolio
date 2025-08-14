// src/hooks/useTheme.ts
import { useEffect, useRef, useState } from "react";

export function useTheme() {
  // Initialize from the DOM class set by the inline script (no flash, no mismatch)
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  // Keep the DOM in sync with state
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // After first mount, persist to localStorage
  const didMount = useRef(false);
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return; // don't overwrite saved theme on initial mount
    }
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }, [isDark]);

  // Optional: keep multiple tabs/windows in sync
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme" && e.newValue) {
        const dark = e.newValue === "dark";
        setIsDark(dark);
        document.documentElement.classList.toggle("dark", dark);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return { isDark, toggle: () => setIsDark((v) => !v) };
}
