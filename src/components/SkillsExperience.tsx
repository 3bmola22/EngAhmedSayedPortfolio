import { useEffect, useRef, useState } from "react";
import { CheckCircle2, DraftingCompass, PenTool } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { softwareSkills } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Animated skill bar — grows when scrolled into view | شريط مهارة متحرك */
function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-baseline justify-between" dir="ltr">
        <span className="font-semibold text-head">{name}</span>
        <span className="font-mono text-xs text-accent">{level}%</span>
      </div>
      <div className="h-2.5 border border-line bg-surface-alt p-0.5" dir="ltr">
        <div
          className="h-full bg-gradient-to-r from-amber to-amber/60 transition-[width] duration-1000 ease-out"
          style={{ width: on ? `${level}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function SkillsExperience() {
  const { t } = useLang();

  return (
    <section id="skills" className="blueprint relative scroll-mt-24 py-20">
      <div className="theme-fade relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          number={t.skills.number}
          label={t.skills.label}
          sheet={t.skills.sheet}
          title={t.skills.title}
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* software bars */}
          <Reveal>
            <article className="card-paper p-7">
              <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-head">
                <DraftingCompass className="size-5 text-accent" />
                {t.skills.softwareTitle}
              </h3>
              <div className="space-y-4">
                {softwareSkills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 90} />
                ))}
              </div>
            </article>
          </Reveal>

          <div className="space-y-6">
            {/* key skills chips */}
            <Reveal delay={120}>
              <article className="card-paper p-7">
                <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-bold text-head">
                  <PenTool className="size-5 text-accent" />
                  {t.skills.keySkillsTitle}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {t.skills.keySkills.map((skill) => (
                    <li
                      key={skill}
                      className="flex cursor-default items-center gap-1.5 border border-line bg-surface-alt px-3 py-1.5 text-sm font-semibold text-body transition-all hover:-translate-y-0.5 hover:border-amber hover:text-accent"
                    >
                      <CheckCircle2 className="size-3.5 text-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            {/* experience timeline */}
            <Reveal delay={220}>
              <article className="card-paper p-7">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-head">
                    {t.skills.experienceTitle}
                  </h3>
                  <span className="border border-amber/50 bg-amber/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                    {t.skills.experienceRole} · {t.skills.experienceTag}
                  </span>
                </div>
                <ol className="relative space-y-5 border-s-2 border-line ps-6">
                  {t.skills.experience.map((item, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -start-[31px] top-1 grid size-4 place-items-center border-2 border-amber bg-surface-alt">
                        <span className="size-1 bg-amber" />
                      </span>
                      <p className="leading-relaxed text-body">{item}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}