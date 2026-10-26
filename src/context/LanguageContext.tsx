import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translation } from "../i18n/translations";

interface LanguageContextValue {
  lang: Lang;
  t: Translation;
  isAr: boolean;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("ag-lang");
    return saved === "ar" ? "ar" : "en";
  });

  useEffect(() => {
    localStorage.setItem("ag-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang] as Translation, isAr: lang === "ar", toggleLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}