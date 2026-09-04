import { Link } from "react-router-dom";
import { PageShell } from "../components/Chrome";
import { Programs } from "../components/Programs";
import { CONTACTS, FIELDS, PROGRAMS } from "../data";
import { IconArrowUpRight, IconCheck, IconClock, IconPhone, Reveal } from "../ui";

function KcpTable() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Контрольные цифры приёма</p>
              <h2 className="mt-4 font-display text-2xl font-black text-ink sm:text-3xl">
                Сколько мест <span className="text-accent">в 2026 году</span>
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink2">
                Бюджетные места выделяются Министерством образования Московской области.
                По каждой специальности возможен также платный набор и целевой приём
                от предприятий-партнёров.
              </p>
              <div className="mt-7 rounded-sm border border-line bg-card p-5">
                <p className="flex items-center gap-3 font-display text-3xl font-black text-ink">
                  245 <span className="text-[15px] font-semibold text-ink2">бюджетных мест суммарно</span>
                </p>
                <a
                  href="https://serp-koll.ru/abiturientu/kontrolnye-tsifry-priema"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-4 inline-flex items-center gap-2 font-mono text-[11.5px] font-semibold uppercase tracking-wider text-accent"
                >
                  Официальный документ
                  <IconArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-8">
            <div className="overflow-hidden rounded-sm border border-line">
              <div className="grid grid-cols-[1.2fr_3fr_1fr_1fr] items-center gap-3 border-b border-navy bg-navy px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-paper sm:grid-cols-[1.4fr_3fr_1fr_1fr] sm:px-7">
                <span>Код</span>
                <span>Специальность</span>
                <span className="text-right">Бюджет</span>
                <span className="text-right">Платно</span>
              </div>
              {PROGRAMS.map((p, i) => (
                <div
                  key={p.code}
                  className={`grid grid-cols-[1.2fr_3fr_1fr_1fr] items-center gap-3 px-5 py-4 text-[13.5px] transition-colors hover:bg-navy/[0.04] sm:grid-cols-[1.4fr_3fr_1fr_1fr] sm:px-7 ${
                    i % 2 ? "bg-paper2" : "bg-card"
                  }`}
                >
                  <span className="font-mono text-[12px] font-bold text-ink2">{p.code}</span>
                  <span className="font-medium text-ink">{p.title}</span>
                  <span className="text-right font-display text-[15px] font-black text-ink">{p.seats}</span>
                  <span className="text-right font-display text-[15px] font-black text-ink2">{p.paid}</span>
                </div>
              ))}
              <div className="grid grid-cols-[1.2fr_3fr_1fr_1fr] items-center gap-3 border-t-2 border-accent bg-navy px-5 py-4 text-paper sm:grid-cols-[1.4fr_3fr_1fr_1fr] sm:px-7">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber2">Σ</span>
                <span className="font-display text-[13px] font-bold uppercase tracking-wide">Итого</span>
                <span className="text-right font-display text-lg font-black text-amber2">
                  {PROGRAMS.reduce((s, p) => s + p.seats, 0)}
                </span>
                <span className="text-right font-display text-lg font-black text-paper/70">
                  {PROGRAMS.reduce((s, p) => s + p.paid, 0)}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DirectionChips() {
  return (
    <div className="flex flex-wrap gap-2.5">
      {FIELDS.filter((f) => f.key !== "all").map((f) => {
        const count = PROGRAMS.filter((p) => p.field === f.key).length;
        return (
          <span
            key={f.key}
            className="rounded-full border border-paper/25 bg-navy-deep/40 px-4 py-2 font-mono text-[11.5px] font-semibold uppercase tracking-wider text-paper/80"
          >
            {f.label} · {count}
          </span>
        );
      })}
    </div>
  );
}

function CareerNotes() {
  const notes = [
    "Практика на предприятиях-партнёрах начиная со 2 курса",
    "Демонстрационный экзамен по стандартам «Профессионалитета»",
    "Отсрочка от призыва на период очного обучения",
    "Общежитие для иногородних и социальная стипендия",
  ];
  return (
    <section className="border-t border-line bg-paper py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-2xl font-black text-ink sm:text-3xl">
            Что получает <span className="text-accent">каждый студент</span>
          </h2>
          <a
            href={CONTACTS.phoneHref}
            className="group mt-6 inline-flex items-center gap-3 rounded-sm border border-line bg-card px-6 py-4 transition-all hover:-translate-y-0.5 hover:border-accent"
          >
            <IconPhone className="h-5 w-5 text-accent" />
            <span>
              <span className="block font-display text-base font-bold text-ink group-hover:text-accent">{CONTACTS.phone}</span>
              <span className="text-[12px] text-ink2">вопросы о программах — в приёмную комиссию</span>
            </span>
          </a>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {notes.map((n, i) => (
            <Reveal key={n} delay={i * 80}>
              <div className="flex h-full items-start gap-3.5 rounded-sm border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-navy-deep">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <p className="text-[14px] leading-relaxed text-ink">{n}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <p className="flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink2">
          <IconClock className="h-4 w-4 text-accent" />
          Формы обучения — очная; приём — на базе 9 классов
        </p>
      </div>
    </section>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <PageShell
        index="02"
        label="Специальности"
        title="Девять направлений,"
        accent="одна цель — профессия"
        desc="Все программы реализуются на базе 9 классов. Зачисление — по конкурсу аттестатов, без вступительных испытаний. Выберите направление, а детали подскажет приёмная комиссия."
      >
        <DirectionChips />
      </PageShell>
      <Programs />
      <KcpTable />
      <CareerNotes />
    </>
  );
}
