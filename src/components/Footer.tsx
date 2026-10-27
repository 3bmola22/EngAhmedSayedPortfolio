import { Code2, Compass } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { profile } from "../data/profile";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="theme-fade border-t border-line bg-surface py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-head transition-colors hover:text-accent">
          <Compass className="size-4 text-accent" />
          <span className="font-display font-bold tracking-wider">{t.brand}</span>
        </a>
        <p className="text-center text-xs text-muted">
          © {profile.graduationYear} {"3bmola@gmail.com"} — {t.footer.rights}
        </p>
        <p className="flex items-center gap-1.5 text-xs text-muted">
          {t.footer.basedOn}{" "}
          <a
            href="https://ahmed-abdlmawla-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent underline-offset-2 hover:underline"
          >
            <Code2 className="size-3.5" />
            {t.footer.source}
          </a>
        </p>
      </div>
    </footer>
  );
}