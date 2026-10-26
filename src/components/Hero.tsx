import { ChevronDown, Download, LayoutGrid, Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { cvDownloadUrl, profile } from "../data/profile";
import Reveal from "./Reveal";

export default function Hero() {
  const { t, isAr } = useLang();

  return (
    <section id="top" className="blueprint relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20">
      {/* ambient floor-plan lines | خطوط مخطط خلفية */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        aria-hidden="true"
      >
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="var(--color-grid)" strokeDasharray="8 6" />
        <line x1="0" y1="78%" x2="100%" y2="78%" stroke="var(--color-grid)" strokeDasharray="8 6" />
        <line x1="12%" y1="0" x2="12%" y2="100%" stroke="var(--color-grid)" strokeDasharray="8 6" />
        <line x1="88%" y1="0" x2="88%" y2="100%" stroke="var(--color-grid)" strokeDasharray="8 6" />
        <circle cx="88%" cy="20%" r="5" fill="none" stroke="var(--color-grid)" />
        <circle cx="12%" cy="78%" r="5" fill="none" stroke="var(--color-grid)" />
      </svg>

      <div className="theme-fade relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ---- text ---- */}
        <div>
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-amber" />
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                {t.hero.kicker}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display font-extrabold leading-[0.95] text-head">
              <span className="block text-6xl sm:text-8xl">{t.hero.firstName}</span>
              <span className="block text-6xl text-outline sm:text-8xl">{t.hero.middleName}</span>
              <span className="block text-6xl text-amber sm:text-8xl">{t.hero.lastName}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 text-lg font-semibold text-head">{t.hero.role}</p>
            <p className="mt-2 max-w-lg leading-relaxed text-body">{t.hero.tagline}</p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {/* 📄 Download CV button — link set in src/data/profile.ts
                  📄 زر تحميل السيرة الذاتية — الرابط من ملف البيانات */}
              <a
                href={cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-amber px-6 py-3 font-bold text-ink shadow-[4px_4px_0_0_var(--color-line)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-line)]"
              >
                <Download className="size-5 transition-transform group-hover:translate-y-0.5" />
                {t.downloadCv}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border-2 border-line bg-surface-2/60 px-6 py-[10px] font-bold text-head transition-colors hover:border-amber hover:text-accent"
              >
                <LayoutGrid className="size-4.5" />
                {t.hero.myWork}
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-body">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                </span>
                {t.hero.available}
              </span>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-sm text-body">
              <a href={profile.phoneHref} className="flex items-center gap-2 transition-colors hover:text-accent" dir="ltr">
                <Phone className="size-4 text-accent" /> {profile.phone}
              </a>
              <a href={profile.emailHref} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Mail className="size-4 text-accent" /> {profile.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-accent" /> {t.about.locationValue}
              </span>
            </div>
          </Reveal>
        </div>

        {/* ---- portrait in drafting frame ---- */}
        <Reveal delay={250} className="justify-self-center">
          <div className="relative">
            <div className="mb-2 flex items-center gap-1 font-mono text-[10px] text-muted" dir="ltr">
              <span className="h-3 w-px bg-line" />
              <span className="h-px flex-1 bg-line" />
              <span>2400</span>
              <span className="h-px flex-1 bg-line" />
              <span className="h-3 w-px bg-line" />
            </div>

            <div className="relative border-2 border-line bg-surface-2 p-3">
              <span className="absolute -top-1.5 -left-1.5 size-3 border-t-2 border-s-2 border-amber" />
              <span className="absolute -top-1.5 -right-1.5 size-3 border-t-2 border-e-2 border-amber" />
              <span className="absolute -bottom-1.5 -left-1.5 size-3 border-b-2 border-s-2 border-amber" />
              <span className="absolute -bottom-1.5 -right-1.5 size-3 border-b-2 border-e-2 border-amber" />

              {/* 📷 PHOTO — replace src/assets/profile.jpg | الصورة — استبدل الملف */}
              <img
                src={profile.photo}
                alt={isAr ? "أحمد سيد جلال — مهندس معماري" : "Ahmed Sayed Galal — Architect"}
                className="h-[320px] w-[260px] object-cover object-top grayscale-[20%] transition-all duration-500 hover:grayscale-0 sm:h-[400px] sm:w-[320px]"
              />

              {/* floating tool badges */}
              <span className="absolute -start-5 top-8 animate-float border border-amber/60 bg-surface px-3 py-1 font-mono text-xs text-accent shadow-lg">
                AutoCAD
              </span>
              <span className="absolute -end-4 top-1/3 animate-float-delayed border border-line bg-surface px-3 py-1 font-mono text-xs text-head shadow-lg">
                Revit
              </span>
              <span className="absolute -start-3 bottom-16 animate-float-delayed border border-line bg-surface px-3 py-1 font-mono text-xs text-head shadow-lg">
                3ds Max
              </span>
            </div>

            <div className="mt-2 flex items-center justify-between border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
              <span>{t.hero.sheet}</span>
              <span className="text-accent">{t.hero.scale}</span>
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted transition-colors hover:text-accent md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">{t.hero.scroll}</span>
        <ChevronDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}