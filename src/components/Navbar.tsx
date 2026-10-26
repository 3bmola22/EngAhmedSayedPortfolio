import { useEffect, useState } from "react";
import { Compass, Download, Languages, Moon, Sun } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { cvDownloadUrl } from "../data/profile";
import { cn } from "../utils/cn";

export default function Navbar() {
  const { t, toggleLang, isAr } = useLang();
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about, num: "01" },
    { href: "#projects", label: t.nav.projects, num: "02" },
    { href: "#skills", label: t.nav.skills, num: "03" },
    { href: "#contact", label: t.nav.contact, num: "04" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-surface/90 shadow-lg shadow-black/10 backdrop-blur-md" : "bg-transparent"
      )}
    >
      {/* scroll progress ruler | مسطرة تتبع التمرير */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-line/60">
        <div
          className="h-full bg-amber transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid size-9 place-items-center border-2 border-amber text-accent transition-transform duration-300 group-hover:rotate-45">
            <Compass className="size-4 transition-transform duration-300 group-hover:-rotate-45" />
          </span>
          <span className="hidden font-display text-lg font-bold tracking-wider text-head sm:block">
            {t.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative px-2.5 py-2 text-sm font-semibold text-body transition-colors hover:text-accent"
            >
              <span className="me-1 font-mono text-[10px] text-accent/80">{l.num}</span>
              {l.label}
              <span className="absolute inset-x-2 bottom-0.5 h-px origin-center scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* 🌗 Dark / Light toggle | زر الوضع الليلي / النهاري */}
          <button
            onClick={toggleTheme}
            title={isDark ? t.theme.toLight : t.theme.toDark}
            aria-label={isDark ? t.theme.toLight : t.theme.toDark}
            className="grid size-9 place-items-center border border-line text-head transition-all hover:border-amber hover:text-accent"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          {/* 🌍 Language toggle | زر تبديل اللغة */}
          <button
            onClick={toggleLang}
            className="flex h-9 items-center gap-1.5 border border-line px-2.5 text-xs font-bold text-head transition-all hover:border-amber hover:text-accent sm:text-sm"
            aria-label="Switch language / تبديل اللغة"
          >
            <Languages className="size-4" />
            {t.langButton}
          </button>

          {/* 📄 CV link comes from src/data/profile.ts | رابط السيرة من ملف البيانات */}
          <a
            href={cvDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center gap-1.5 bg-amber px-3 text-xs font-bold text-ink transition-all hover:brightness-110 sm:flex sm:text-sm"
          >
            <Download className="size-4" />
            {isAr ? "السيرة" : "CV"}
          </a>
        </div>
      </div>

      {/* mobile nav | القائمة على الموبايل */}
      <nav className="flex items-center justify-center gap-1 border-t border-line/60 bg-surface/70 px-2 pb-2 backdrop-blur md:hidden">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="px-2 py-1.5 text-xs font-semibold text-body transition-colors hover:text-accent"
          >
            <span className="me-1 font-mono text-[10px] text-accent/80">{l.num}</span>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}