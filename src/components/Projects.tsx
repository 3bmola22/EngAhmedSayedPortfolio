import { useEffect, useMemo, useState, type TouchEvent } from "react";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Home,
  ImageOff,
  Layers,
  LayoutGrid,
  MapPin,
  Maximize2,
  Ruler,
  Sofa,
  X,
} from "lucide-react";
import { useLang } from "../context/LanguageContext";
import {
  categoryOrder,
  projectApps,
  projects,
  type Project,
  type ProjectType,
} from "../data/profile";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Filter = "all" | ProjectType;

/* ✏️ Icon per category | أيقونة كل تصنيف */
const categoryIcon: Record<Filter, typeof Building2> = {
  all: LayoutGrid,
  exterior: Building2,
  villa: Home,
  interior: Sofa,
};

/* ============================================================================
   🖼️ CARD SLIDER  |  سلايدر صور بطاقة المشروع
   Prev/Next · dots · numeric counter · touch swipe · drafting placeholder
   أسهم · نقاط · عدّاد · سحب باللمس · لوحة فارغة لو مفيش صور
   ========================================================================== */
function ProjectCardSlider({
  project,
  badges,
  cardIndex,
  onExpand,
}: {
  project: Project;
  badges: string[];
  cardIndex: number;
  onExpand: (initialIndex: number) => void;
}) {
  const { t, isAr } = useLang();
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const images = project.images?.length ? project.images : [];
  const total = images.length;

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i - 1 + total) % total);
  };
  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i + 1) % total);
  };

  const onTouchStart = (e: TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 40) (diff > 0 ? (isAr ? next : prev) : isAr ? prev : next)();
    setTouchStartX(null);
  };

  return (
    <div
      className="group/slider relative overflow-hidden bg-black/40"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {total > 0 ? (
        <img
          key={index}
          src={images[index]}
          alt={`${isAr ? project.ar.title : project.en.title} — ${index + 1}`}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-700 group-hover/slider:scale-105 sm:h-64"
        />
      ) : (
        /* 🧾 Empty sheet — add images to `images: []` in src/data/profile.ts
           لوحة فارغة — أضف الصور لمصفوفة images في ملف البيانات */
        <div className="blueprint grid h-56 w-full place-items-center sm:h-64">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="font-display text-5xl font-extrabold text-head/15">
              {String(cardIndex + 1).padStart(2, "0")}
            </span>
            <ImageOff className="size-5 -rotate-6 text-accent/70" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {t.projects.imagePlaceholder}
            </span>
          </div>
        </div>
      )}

      {/* 🏷️ category badges (a project may have two) | بادجات التصنيف */}
      <div className="pointer-events-none absolute top-3 start-3 z-10 flex max-w-[70%] flex-wrap gap-1.5">
        {badges.map((b, i) => (
          <span
            key={b}
            className={cn(
              "border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider backdrop-blur",
              i === 0
                ? "border-amber/60 bg-surface/85 text-accent"
                : "border-line bg-surface/70 text-body"
            )}
          >
            {b}
          </span>
        ))}
      </div>

      {/* 🚧 status stamp | ختم الحالة */}
      {project.status === "ongoing" && (
        <span className="pointer-events-none absolute bottom-3 start-3 z-10 -rotate-2 border border-dashed border-amber bg-surface/85 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur">
          {t.projects.status.ongoing}
        </span>
      )}

      <button
        type="button"
        onClick={() => onExpand(Math.min(index, Math.max(total - 1, 0)))}
        className="absolute top-3 end-3 z-10 grid size-9 place-items-center border border-line bg-surface/85 text-head backdrop-blur transition-all hover:border-amber hover:text-accent sm:opacity-0 sm:group-hover/slider:opacity-100"
        title={t.projects.viewProject}
        aria-label={t.projects.viewProject}
      >
        <Maximize2 className="size-4" />
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute start-2 top-1/2 z-10 grid size-8 -translate-y-1/2 place-items-center border border-line/60 bg-surface/80 text-head opacity-80 backdrop-blur transition-all hover:border-amber hover:bg-surface hover:text-accent sm:opacity-0 sm:group-hover/slider:opacity-100"
            title={t.projects.prevPhoto}
            aria-label={t.projects.prevPhoto}
          >
            <ChevronLeft className="size-4 rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute end-2 top-1/2 z-10 grid size-8 -translate-y-1/2 place-items-center border border-line/60 bg-surface/80 text-head opacity-80 backdrop-blur transition-all hover:border-amber hover:bg-surface hover:text-accent sm:opacity-0 sm:group-hover/slider:opacity-100"
            title={t.projects.nextPhoto}
            aria-label={t.projects.nextPhoto}
          >
            <ChevronRight className="size-4 rtl:rotate-180" />
          </button>

          <div
            className="pointer-events-none absolute bottom-3 end-3 z-10 flex items-center gap-1.5 border border-line/60 bg-surface/85 px-2 py-0.5 font-mono text-[10px] text-head backdrop-blur"
            dir="ltr"
          >
            <Layers className="size-3 text-accent" />
            <span>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index
                    ? "w-5 bg-amber shadow-[0_0_8px_rgba(245,165,36,0.85)]"
                    : "w-1.5 bg-white/50 hover:bg-white"
                )}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ============================================================================
   🔍 MODAL SLIDER  |  سلايدر نافذة التفاصيل
   ========================================================================== */
function ProjectModal({
  project,
  initialIndex,
  badges,
  onClose,
}: {
  project: Project;
  initialIndex: number;
  badges: string[];
  onClose: () => void;
}) {
  const { t, isAr } = useLang();
  const [slideIdx, setSlideIdx] = useState(initialIndex);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const images = project.images?.length ? project.images : [];
  const total = images.length;

  const prev = () => setSlideIdx((i) => (i - 1 + total) % total);
  const next = () => setSlideIdx((i) => (i + 1) % total);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") isAr ? next() : prev();
      if (e.key === "ArrowRight") isAr ? prev() : next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-black/80 p-3 backdrop-blur-md sm:p-4"
      onClick={onClose}
    >
      <div
        className="fade-swap relative my-auto max-h-[95vh] w-full max-w-4xl overflow-y-auto border-2 border-amber bg-surface-2 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX === null) return;
          const diff = e.changedTouches[0].clientX - touchStartX;
          if (Math.abs(diff) > 40) (diff > 0 ? (isAr ? next : prev) : isAr ? prev : next)();
          setTouchStartX(null);
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 end-3 z-20 grid size-10 place-items-center border border-line bg-surface/90 text-head shadow-lg transition-colors hover:border-amber hover:text-accent"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>

        <div className="relative overflow-hidden bg-black/50">
          {total > 0 ? (
            <img
              key={slideIdx}
              src={images[slideIdx]}
              alt={`${isAr ? project.ar.title : project.en.title} — ${slideIdx + 1}`}
              className="mx-auto max-h-[60vh] w-full object-contain"
            />
          ) : (
            <div className="blueprint grid h-56 place-items-center sm:h-72">
              <div className="flex flex-col items-center gap-2">
                <ImageOff className="size-7 -rotate-6 text-accent/70" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  {t.projects.imagePlaceholder}
                </span>
              </div>
            </div>
          )}

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute start-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center border border-line bg-surface/90 text-head shadow-lg backdrop-blur transition-all hover:border-amber hover:text-accent"
                title={t.projects.prevPhoto}
                aria-label={t.projects.prevPhoto}
              >
                <ChevronLeft className="size-6 rtl:rotate-180" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute end-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center border border-line bg-surface/90 text-head shadow-lg backdrop-blur transition-all hover:border-amber hover:text-accent"
                title={t.projects.nextPhoto}
                aria-label={t.projects.nextPhoto}
              >
                <ChevronRight className="size-6 rtl:rotate-180" />
              </button>
              <div
                className="absolute bottom-3 end-3 border border-line bg-surface/90 px-3 py-1 font-mono text-xs text-head backdrop-blur"
                dir="ltr"
              >
                {slideIdx + 1} / {total}
              </div>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="flex gap-2 overflow-x-auto border-b border-line bg-surface p-2.5">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSlideIdx(i)}
                className={cn(
                  "relative h-16 w-24 shrink-0 overflow-hidden border-2 transition-all duration-300",
                  i === slideIdx
                    ? "scale-105 border-amber shadow-md"
                    : "border-line opacity-55 hover:opacity-100"
                )}
              >
                <img src={img} alt={`Thumb ${i + 1}`} className="h-full w-full object-cover" />
                <span
                  className="absolute bottom-0 end-0 bg-ink/80 px-1 font-mono text-[9px] text-white"
                  dir="ltr"
                >
                  {i + 1}
                </span>
              </button>
            ))}
          </div>
        )}

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 border border-amber/50 bg-amber/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
              <Building2 className="size-3.5" />
              {badges.join(" · ")}
              {project.year ? ` · ${project.year}` : ""}
            </span>
            {project.status === "ongoing" && (
              <span className="border border-dashed border-amber px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                {t.projects.status.ongoing}
              </span>
            )}
            {total > 0 && (
              <span className="font-mono text-xs text-muted">
                {total} {t.projects.slidesCountShort}
              </span>
            )}
          </div>

          <h3 className="mt-4 font-display text-3xl font-bold text-head">
            {isAr ? project.ar.title : project.en.title}
          </h3>
          <p className="mt-3 leading-relaxed text-body">
            {isAr ? project.ar.desc : project.en.desc}
          </p>

          <dl className="mt-6 grid gap-4 border-t border-line pt-5 sm:grid-cols-3">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-muted">
                {t.projects.location}
              </dt>
              <dd className="mt-1 font-semibold text-head">
                {isAr ? project.ar.location : project.en.location}
              </dd>
            </div>
            {project.area && (
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-muted">
                  {t.projects.area}
                </dt>
                <dd className="mt-1 font-semibold text-head">{project.area}</dd>
              </div>
            )}
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-muted">
                {t.projects.tools}
              </dt>
              <dd className="mt-1 font-mono text-sm font-semibold text-accent">
                {projectApps(project).join(" · ")}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SECTION 02 — PROJECTS | القسم الثاني: المشاريع
   Category index only (tools filter removed) | فهرس التصنيفات فقط
   ========================================================================== */
export default function Projects() {
  const { t, isAr } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const [activeModal, setActiveModal] = useState<{ project: Project; slideIndex: number } | null>(
    null
  );

  const catLabel = (key: Filter) => t.projects[key];

  const categoryFilters: Filter[] = ["all", ...categoryOrder];

  // 📊 project count per category | عدد المشاريع في كل تصنيف
  const catCounts = useMemo(() => {
    const map: Record<Filter, number> = {
      all: projects.length,
      exterior: 0,
      villa: 0,
      interior: 0,
    };
    projects.forEach((p) => p.categories.forEach((c) => (map[c] += 1)));
    return map;
  }, []);

  const visible = useMemo(
    () =>
      filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter)),
    [filter]
  );

  const isFiltered = filter !== "all";
  const activeDesc = t.projects.catDesc[filter];

  return (
    <section id="projects" className="paper scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          number={t.projects.number}
          label={t.projects.label}
          sheet={t.projects.sheet}
          title={t.projects.title}
        />

        <Reveal>
          <p className="-mt-4 mb-7 max-w-2xl leading-relaxed text-body">{t.projects.subtitle}</p>
        </Reveal>

        {/* ------------------------------------------------------------------
            📑 CATEGORY INDEX | فهرس التصنيفات
           ------------------------------------------------------------------ */}
        <Reveal delay={60}>
          <div className="mb-8 border-2 border-line bg-surface-2 shadow-[4px_4px_0_0_var(--color-line)]">
            <div className="grid grid-cols-2 divide-x divide-line rtl:divide-x-reverse sm:grid-cols-4">
              {categoryFilters.map((key, i) => {
                const Icon = categoryIcon[key];
                const isActive = filter === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFilter(key)}
                    className={cn(
                      "group/cat relative flex flex-col items-start gap-2 px-4 py-4 text-start transition-colors duration-300",
                      isActive
                        ? "bg-amber text-ink"
                        : "bg-transparent text-body hover:bg-amber/10 hover:text-accent"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute inset-x-0 top-0 h-0.5 origin-left bg-ink transition-transform duration-300 rtl:origin-right",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover/cat:scale-x-100"
                      )}
                    />
                    <span className="flex w-full items-center justify-between gap-2">
                      <span className="flex items-center gap-2">
                        <Icon
                          className={cn(
                            "size-4.5 transition-transform duration-300",
                            isActive ? "-rotate-6 scale-110" : "group-hover/cat:-rotate-6"
                          )}
                        />
                        <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                          0{i + 1}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "grid size-6 place-items-center border font-mono text-[11px] font-bold transition-colors",
                          isActive
                            ? "border-ink/40 bg-ink/10 text-ink"
                            : "border-line text-muted group-hover/cat:border-amber group-hover/cat:text-accent"
                        )}
                      >
                        {catCounts[key]}
                      </span>
                    </span>
                    <span className="font-display text-lg font-bold leading-tight sm:text-xl">
                      {catLabel(key)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* category description line | سطر وصف التصنيف المختار */}
            <div className="flex items-center gap-2 border-t border-line px-4 py-2.5">
              <span className="size-1.5 shrink-0 bg-amber" />
              <p key={filter} className="fade-swap text-xs leading-relaxed text-muted sm:text-sm">
                {activeDesc}
              </p>
            </div>
          </div>
        </Reveal>

        {/* ------------------------------------------------------------------
            readout + reset | شريط العدّاد وإعادة الضبط
           ------------------------------------------------------------------ */}
        <Reveal delay={120}>
          <div className="mb-8 flex flex-col gap-3 border-y border-dashed border-line py-3 sm:flex-row sm:items-center sm:justify-between">
            <p key={filter} className="fade-swap flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 size-1.5 shrink-0 bg-amber" />
              <span>{t.projects.catDesc[filter]}</span>
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <span className="font-bold text-head">{String(visible.length).padStart(2, "0")}</span>{" "}
                / {String(projects.length).padStart(2, "0")} {t.projects.projectWord}
              </span>
              {isFiltered && (
                <button
                  type="button"
                  onClick={() => setFilter("all")}
                  className="flex items-center gap-1 border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-body transition-all hover:border-amber hover:text-accent"
                >
                  <X className="size-3" />
                  {t.projects.reset}
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* ------------------------------------------------------------------
            🧱 PROJECT GRID | شبكة المشاريع (تُعاد رسمها عند تغيير التصنيف)
           ------------------------------------------------------------------ */}
        <div
          key={filter}
          className={cn(
            "fade-swap grid gap-6",
            visible.length > 1 ? "sm:grid-cols-2" : "mx-auto max-w-2xl"
          )}
        >
          {visible.map((p, i) => (
            <Reveal key={`${p.categories.join("-")}-${p.en.title}`} delay={(i % 2) * 110}>
              <article className="group flex h-full flex-col overflow-hidden border border-line bg-surface-2 shadow-[4px_4px_0_0_var(--color-line)] transition-all duration-300 hover:-translate-y-1 hover:border-amber hover:shadow-[7px_7px_0_0_var(--color-accent)]">
                <ProjectCardSlider
                  project={p}
                  badges={p.categories.map(catLabel)}
                  cardIndex={i}
                  onExpand={(initialIndex) =>
                    setActiveModal({ project: p, slideIndex: initialIndex })
                  }
                />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold text-head transition-colors group-hover:text-accent">
                      {isAr ? p.ar.title : p.en.title}
                    </h3>
                    {p.year && (
                      <span className="shrink-0 font-mono text-xs text-muted">{p.year}</span>
                    )}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-body">
                    {isAr ? p.ar.desc : p.en.desc}
                  </p>

                  <div className="mt-auto space-y-3 border-t border-line pt-4">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-accent" />
                        {isAr ? p.ar.location : p.en.location}
                      </span>
                      {p.area && (
                        <span className="flex items-center gap-1.5">
                          <Ruler className="size-3.5 text-accent" />
                          {p.area}
                        </span>
                      )}
                      {/* 🖼️ photo count | عدد الصور */}
                      {p.images.length > 0 && (
                        <span className="flex items-center gap-1.5">
                          <Layers className="size-3.5 text-accent" />
                          {String(p.images.length).padStart(2, "0")} {t.projects.slidesCount}
                        </span>
                      )}
                    </div>
                    {/* 🧰 tool badges — generated from `toolsets` | بادجات الأدوات من toolsets */}
                    <ul className="flex flex-wrap gap-1.5">
                      {p.toolsets.map((ts) => (
                        <li
                          key={ts}
                          className="flex items-center gap-1 border border-line px-2 py-0.5 font-mono text-[11px] text-body transition-colors group-hover:border-amber/50"
                          dir="ltr"
                        >
                          {t.projects[ts]}
                        </li>
                      ))}
                      {p.toolsets.length === 0 &&
                        projectApps(p).map((tag) => (
                          <li
                            key={tag}
                            className="border border-line px-2 py-0.5 font-mono text-[11px] text-body"
                          >
                            {tag}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="blueprint grid place-items-center gap-4 border border-dashed border-line px-6 py-14 text-center">
            <p className="font-display text-2xl font-bold text-head">{t.projects.empty}</p>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className="mt-1 flex items-center gap-1.5 bg-amber px-4 py-2 text-sm font-bold text-ink transition-all hover:brightness-110"
            >
              <LayoutGrid className="size-4" />
              {t.projects.reset}
            </button>
          </div>
        )}
      </div>

      {activeModal && (
        <ProjectModal
          project={activeModal.project}
          initialIndex={activeModal.slideIndex}
          badges={activeModal.project.categories.map(catLabel)}
          onClose={() => setActiveModal(null)}
        />
      )}
    </section>
  );
}
