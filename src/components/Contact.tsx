import { Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { cvDownloadUrl, profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { t } = useLang();

  const cards = [
    { icon: Phone, label: t.contact.phone, value: profile.phone, href: profile.phoneHref, ltr: true },
    { icon: MessageCircle, label: t.contact.whatsapp, value: profile.phone, href: profile.whatsappHref, ltr: true },
    { icon: Mail, label: t.contact.email, value: profile.email, href: profile.emailHref, ltr: true },
    { icon: MapPin, label: t.contact.location, value: t.contact.locationValue },
  ];

  return (
    <section id="contact" className="paper scroll-mt-24 py-20">
      <div className="theme-fade mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          number={t.contact.number}
          label={t.contact.label}
          sheet={t.contact.sheet}
          title={t.contact.title}
        />

        <Reveal>
          <p className="-mt-4 mb-10 max-w-2xl text-lg text-body">{t.contact.subtitle}</p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Inner = (
              <>
                <span className="grid size-12 place-items-center border-2 border-line bg-surface-alt text-accent transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-ink">
                  <c.icon className="size-5" />
                </span>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-muted">
                  {c.label}
                </span>
                <span
                  className="mt-1 block break-words font-bold text-head transition-colors group-hover:text-accent"
                  dir={c.ltr ? "ltr" : undefined}
                >
                  {c.value}
                </span>
              </>
            );
            return (
              <Reveal key={c.label} delay={i * 100}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="card-paper group block h-full p-6"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div className="card-paper group h-full p-6">{Inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="panel-cta mt-12 flex flex-col items-center justify-between gap-5 p-8 sm:flex-row">
            <p className="text-center font-display text-2xl font-bold sm:text-start">
              {t.contact.cvHint}
            </p>
            <a
              href={cvDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 bg-amber px-7 py-3.5 font-bold text-ink transition-all hover:brightness-110"
            >
              <Download className="size-5 transition-transform group-hover:translate-y-0.5" />
              {t.downloadCv}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}