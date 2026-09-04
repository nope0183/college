import { Link } from "react-router-dom";
import { About, Opening } from "../components/Opening";
import { Events } from "../components/Programs";
import { Gosuslugi, News } from "../components/Community";
import { CONTACTS, DIRECTION_LABELS, PROGRAMS, type Program } from "../data";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconClock,
  IconMail,
  IconPhone,
  ICONS,
  Reveal,
  SectionHead,
} from "../ui";

function ProgramRow({ p, i }: { p: Program; i: number }) {
  const Icon = ICONS[p.icon];
  return (
    <Reveal delay={(i % 4) * 70}>
      <Link
        to="/programmy"
        className="group grid items-center gap-x-6 gap-y-2 border-b border-line px-5 py-5 transition-all duration-300 first:border-t hover:bg-navy hover:text-paper md:grid-cols-12 md:px-7"
      >
        <span className="flex items-center gap-4 md:col-span-1">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-line bg-card transition-colors duration-300 group-hover:border-amber2 group-hover:bg-amber2 group-hover:text-navy-deep">
            {Icon ? <Icon className="h-5 w-5" /> : null}
          </span>
          <span className="font-mono text-[12px] font-bold text-ink2 transition-colors group-hover:text-amber2 md:hidden">
            {p.code}
          </span>
        </span>
        <span className="hidden font-mono text-[12.5px] font-semibold tracking-wider text-ink2 transition-colors group-hover:text-amber2 md:col-span-2 md:block">
          {p.code}
        </span>
        <span className="md:col-span-5">
          <span className="block font-display text-[14.5px] leading-snug font-bold">{p.title}</span>
          <span className="mt-0.5 block text-[12.5px] text-ink2 transition-colors group-hover:text-paper/60">
            {DIRECTION_LABELS[p.field]}
          </span>
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wider text-ink2 transition-colors group-hover:text-paper/70 md:col-span-2">
          <IconClock className="h-3.5 w-3.5 text-accent" />
          {p.duration}
        </span>
        <span className="md:col-span-2 md:text-right">
          <span className="inline-block rounded-sm bg-navy px-3 py-1.5 font-mono text-[11.5px] font-bold text-amber2 transition-colors duration-300 group-hover:bg-accent group-hover:text-navy-deep">
            бюджет · {p.seats}
          </span>
        </span>
      </Link>
    </Reveal>
  );
}

export function ProgramTeaser() {
  return (
    <section className="relative bg-card py-20 md:py-28">
      <div className="bg-blueprint-light pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          label="Специальности · набор 2026"
          title={<>От станка <span className="text-accent">до кода</span></>}
          desc="Девять программ среднего профессионального образования на базе 9 классов — инженерия, IT, экономика и сервис. Бюджетные места по контрольным цифрам приёма."
          right={
            <Link
              to="/programmy"
              className="group hidden items-center gap-2.5 rounded border border-line bg-paper px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-wider text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent md:flex"
            >
              Все специальности
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden rounded-sm border border-line bg-paper">
            {PROGRAMS.map((p, i) => (
              <ProgramRow key={p.code} p={p} i={i} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink2">
              245 мест · бюджет · зачисление по конкурсу аттестатов
            </p>
            <Link
              to="/programmy"
              className="group inline-flex items-center gap-2.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent md:hidden"
            >
              Все специальности
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactStrip() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <h2 className="font-display text-2xl font-black text-ink sm:text-3xl">
            Остались вопросы? <span className="text-accent">Приезжайте</span>
          </h2>
          <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-ink2">
            Приёмная комиссия работает ежедневно, кроме выходных. Покажем мастерские,
            общежитие и поможем с документами.
          </p>
        </Reveal>
        <div className="md:col-span-7">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Reveal delay={80} className="flex-1">
              <a
                href={CONTACTS.phoneHref}
                className="group flex items-center gap-4 rounded-sm border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-navy/10"
              >
                <IconPhone className="h-6 w-6 shrink-0 text-accent" />
                <span>
                  <span className="block font-display text-lg font-bold text-ink transition-colors group-hover:text-accent">
                    {CONTACTS.phone}
                  </span>
                  <span className="text-[12.5px] text-ink2">приёмная комиссия · пн–пт 9:00–16:00</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={160} className="flex-1">
              <a
                href={`mailto:${CONTACTS.email}`}
                className="group flex items-center gap-4 rounded-sm border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-navy/10"
              >
                <IconMail className="h-6 w-6 shrink-0 text-accent" />
                <span className="min-w-0">
                  <span className="block truncate font-display text-[14px] font-bold text-ink transition-colors group-hover:text-accent">
                    {CONTACTS.email}
                  </span>
                  <span className="text-[12.5px] text-ink2">ответим в течение рабочего дня</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={240} className="sm:self-stretch">
              <Link
                to="/kontakty"
                className="group flex h-full items-center justify-center gap-3 rounded-sm bg-navy px-7 py-5 font-display text-[12.5px] font-bold text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-navy-deep"
              >
                Контакты и карта
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Opening />
      <About />
      <ProgramTeaser />
      <News />
      <Events />
      <Gosuslugi />
      <ContactStrip />
    </>
  );
}
