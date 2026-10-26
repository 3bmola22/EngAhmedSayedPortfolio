import {
  Award,
  Briefcase,
  GraduationCap,
  Languages as LanguagesIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t } = useLang();

  const info = [
    { icon: Briefcase, label: t.about.jobTitle, value: t.about.jobTitleValue },
    { icon: Phone, label: t.about.phone, value: profile.phone, href: profile.phoneHref, ltr: true },
    { icon: Mail, label: t.about.email, value: profile.email, href: profile.emailHref, ltr: true },
    { icon: MapPin, label: t.about.location, value: t.about.locationValue },
  ];

  return (
    <section id="about" className="blueprint scroll-mt-24 py-20">
      <div className="theme-fade mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          number={t.about.number}
          label={t.about.label}
          sheet={t.about.sheet}
          title={t.about.title}
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* summary + personal info */}
          <div className="space-y-6">
            <Reveal>
              <article className="card-paper group p-7">
                <h3 className="mb-3 flex items-center gap-2 font-display text-xl font-bold text-head">
                  <span className="size-2 bg-amber transition-transform group-hover:rotate-45" />
                  {t.about.summaryTitle}
                </h3>
                <p className="leading-relaxed text-body">{t.about.summary}</p>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="card-paper p-7">
                <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-bold text-head">
                  <span className="size-2 bg-amber" />
                  {t.about.infoTitle}
                </h3>
                <dl className="grid gap-4 sm:grid-cols-2">
                  {info.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="grid size-10 shrink-0 place-items-center border border-line bg-surface-alt text-accent transition-colors hover:border-amber">
                        <item.icon className="size-4.5" />
                      </span>
                      <div className="min-w-0">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                          {item.label}
                        </dt>
                        <dd className="break-words font-semibold text-head" dir={item.ltr ? "ltr" : undefined}>
                          {item.href ? (
                            <a href={item.href} className="transition-colors hover:text-accent">
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          </div>

          {/* education + languages */}
          <div className="space-y-6">
            <Reveal delay={150}>
              <article className="card-paper relative overflow-hidden p-7">
                <GraduationCap className="absolute -end-5 -top-5 size-28 text-head/5" />
                <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-head">
                  <span className="size-2 bg-amber" />
                  {t.about.educationTitle}
                </h3>
                <p className="font-display text-2xl font-bold text-head">{t.about.degree}</p>
                <p className="mt-1 text-body">{t.about.academy}</p>
                <div className="mt-4 flex items-center gap-2 border border-amber/40 bg-amber/10 px-3 py-2 text-sm font-semibold text-head">
                  <Award className="size-4 shrink-0 text-accent" />
                  {t.about.gradProject}
                </div>
                <p className="mt-4 font-mono text-sm text-muted">
                  {t.about.gradYear}:{" "}
                  <span className="font-bold text-head">{profile.graduationYear}</span>
                </p>
              </article>
            </Reveal>

            <Reveal delay={250}>
              <article className="card-paper p-7">
                <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-bold text-head">
                  <LanguagesIcon className="size-5 text-accent" />
                  {t.about.languagesTitle}
                </h3>
                <div className="space-y-5">
                  <div>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="font-semibold text-head">{t.about.arabic}</span>
                      <span className="text-xs text-muted">{t.about.arabicLevel}</span>
                    </div>
                    <div className="h-2 border border-line bg-surface-alt p-0.5" dir="ltr">
                      <div className="h-full w-full bg-head" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="font-semibold text-head">{t.about.english}</span>
                      <span className="text-xs text-muted">{t.about.englishLevel}</span>
                    </div>
                    <div className="h-2 border border-line bg-surface-alt p-0.5" dir="ltr">
                      <div className="h-full w-[75%] bg-amber" />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}