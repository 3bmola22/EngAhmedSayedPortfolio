import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/* ============================================================================
   🌗 THEME (dark / light)  |  🌗 الوضع الليلي / النهاري
   The chosen mode is saved in the browser (localStorage) and applied by adding
   the `dark` class to <html>. Colors are controlled from src/index.css (@theme).
   الوضع يُحفظ في المتصفح ويتم تطبيقه بإضافة كلاس dark لوسم html.
   الألوان تُتحكم فيها من ملف src/index.css داخل @theme.
   ========================================================================== */

export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("ag-theme");
    return saved === "light" ? "light" : "dark"; // dark is the default | الافتراضي ليلي
  });

  useEffect(() => {
    localStorage.setItem("ag-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}