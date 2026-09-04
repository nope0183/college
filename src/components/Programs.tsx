import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ADMISSION_LINKS,
  CONTACTS,
  FIELDS,
  OPEN_DAYS,
  PROGRAMS,
  STEPS,
  type FieldKey,
} from "../data";
import {
  ICONS,
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconClock,
  IconPhone,
  Reveal,
  SectionHead,
} from "../ui";

/* ================= Специальности ================= */

export function Programs() {
  const [field, setField] = useState<FieldKey | "all">("all");
  const list = PROGRAMS.filter((p) => field === "all" || p.field === field);

  return (
    <section id="programs" className="relative bg-card py-20 md:py-28">
      <div className="bg-blueprint-light pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          label="Специальности · набор 2026"
          title={<>От станка <span className="text-accent">до кода</span></>}
          desc="Девять программ среднего профессионального образования на базе 9 классов. Бюджетные места по контрольным цифрам приёма, для ряда специальностей — платные группы и целевой набор."
          right={
            <p className="hidden font-mono text-[12px] uppercase tracking-[0.18em] text-ink2 lg:block">
              245 мест · бюджет
            </p>
          }
        />

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {FIELDS.map((f) => {
              const active = field === f.key;
              const count =
                f.key === "all"
                  ? PROGRAMS.length
                  : PROGRAMS.filter((p) => p.field === f.key).length;
              return (
                <button
                  key={f.key}
                  onClick={() => setField(f.key)}
                  className={`group flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-300 ${
                    active
                      ? "border-navy bg-navy text-paper shadow-md shadow-navy/20"
                      : "border-line bg-paper text-ink2 hover:-translate-y-0.5 hover:border-accent hover:text-ink"
                  }`}
                >
                  {f.label}
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10.5px] font-bold ${
                      active ? "bg-accent text-navy-deep" : "bg-paper2 text-ink2"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {list.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal key={p.code} delay={(i % 3) * 80}>
                <Link
                  to="/abiturientu"
                  className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl hover:shadow-navy/10"
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-line bg-card text-ink transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-navy-deep">
                      {Icon ? <Icon className="h-6 w-6" /> : null}
                    </span>
                    <span className="font-mono text-[12px] font-semibold tracking-wider text-ink2">{p.code}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[15.5px] leading-snug font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] text-ink2">Квалификация: {p.qualification}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 font-mono text-[11.5px] uppercase tracking-wider text-ink2">
                    <span className="flex items-center gap-1.5">
                      <IconClock className="h-3.5 w-3.5 text-accent" />
                      {p.duration}
                    </span>
                    <span>после 9 кл.</span>
                    <span className="ml-auto rounded-sm bg-navy px-2.5 py-1 font-bold text-amber2">
                      бюджет · {p.seats}
                    </span>
                  </div>

                  <span className="mt-4 flex items-center gap-2 font-mono text-[11.5px] font-semibold uppercase tracking-[0.14em] text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Как поступить <IconArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-sm border border-line bg-navy px-7 py-6 text-paper">
            <p className="max-w-2xl text-[14.5px] leading-relaxed">
              <span className="font-semibold text-amber2">Не нашли своё направление?</span>{" "}
              Действуют платные образовательные услуги, целевой набор от предприятий и
              образовательный кредит с господдержкой под 3%.
            </p>
            <div className="flex flex-wrap gap-6 font-mono text-[12px] uppercase tracking-wider">
              <a href={ADMISSION_LINKS[2].href} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-paper/80 transition-colors hover:text-amber2">
                Контрольные цифры <IconArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={ADMISSION_LINKS[3].href} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-paper/80 transition-colors hover:text-amber2">
                Правила приёма <IconArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= Шаги абитуриента (sticky) ================= */

export function Steps() {
  return (
    <section id="steps" className="relative overflow-hidden bg-navy py-20 text-paper md:py-28">
      <div className="bg-blueprint pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <SectionHead
              light
              label="Абитуриенту"
              title={<>Пять шагов до <span className="text-amber2">студенческого</span></>}
              desc="Зачисление — по конкурсу аттестатов, без вступительных испытаний. Подать заявление можно онлайн через Госуслуги, не выезжая из дома."
            />
            <Reveal delay={150}>
              <div className="mt-9 rounded-sm border border-paper/15 bg-navy-deep/70 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber2">Приёмная комиссия</p>
                <div className="mt-4 space-y-3 text-[14px]">
                  <a href={CONTACTS.phoneHref} className="flex items-center gap-3 transition-colors hover:text-amber2">
                    <IconPhone className="h-4.5 w-4.5 text-amber2" />
                    <span className="font-display text-lg font-bold">{CONTACTS.phone}</span>
                  </a>
                  <p className="flex items-center gap-3 text-paper/70">
                    <IconClock className="h-4.5 w-4.5 shrink-0 text-amber2" />
                    Пн–пт 9:00–16:00 · корпус 1, каб. 104
                  </p>
                </div>
                <a
                  href={ADMISSION_LINKS[6].href}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 flex items-center justify-between rounded-sm border border-paper/20 px-4 py-3 font-mono text-[12px] font-semibold uppercase tracking-wider transition-colors hover:border-amber2 hover:text-amber2"
                >
                  Инструкция по подаче через ЕПГУ
                  <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 70}>
              <div className="group relative flex gap-6 border-t border-paper/15 py-8 transition-colors first:border-t-0 sm:gap-10">
                <span className="font-display text-[2.6rem] leading-none font-black text-paper/15 transition-colors duration-300 group-hover:text-amber2 sm:text-5xl">
                  {s.num}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="font-display text-lg font-bold sm:text-xl">{s.title}</h3>
                    <span className="rounded-sm border border-accent/60 px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-amber2">
                      {s.deadline}
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-paper/70">{s.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.chips.map((c) => (
                      <span key={c} className="rounded-full bg-paper/10 px-3 py-1 font-mono text-[11px] text-paper/70">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="absolute left-0 top-0 h-0 w-0.5 bg-accent transition-all duration-500 group-hover:h-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Дни открытых дверей ================= */

export function Events() {
  const [signed, setSigned] = useState<Record<string, boolean>>({});

  return (
    <section id="events" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          label="Знакомство с колледжем"
          title={<>Дни открытых <span className="text-accent">дверей</span></>}
          desc="Три встречи весной и в начале лета: экскурсия по мастерским, живые мастер-классы и консультации приёмной комиссии. Вход свободный, по регистрации."
        />

        <div className="mt-12 space-y-4">
          {OPEN_DAYS.map((e, i) => (
            <Reveal key={e.id} delay={i * 90}>
              <div className="group grid items-center gap-6 rounded-sm border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-navy/10 md:grid-cols-12 md:gap-8 md:p-7">
                <div className="flex items-center gap-5 md:col-span-3 md:flex-col md:items-start md:gap-1">
                  <p className="font-display text-5xl leading-none font-black text-ink md:text-6xl">
                    {e.day}
                  </p>
                  <div>
                    <p className="font-display text-sm font-bold text-accent">{e.month}</p>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink2">
                      {e.weekday} · {e.time}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-6">
                  <p className="text-[15px] leading-relaxed text-ink">{e.theme}</p>
                  <p className="mt-2 font-mono text-[11.5px] uppercase tracking-wider text-ink2">{e.place}</p>
                </div>

                <div className="md:col-span-3 md:text-right">
                  <button
                    onClick={() => setSigned((s) => ({ ...s, [e.id]: !s[e.id] }))}
                    className={`inline-flex items-center gap-2.5 rounded px-6 py-3.5 font-display text-[12px] font-bold transition-all duration-300 ${
                      signed[e.id]
                        ? "bg-navy text-paper"
                        : "bg-accent text-navy-deep hover:-translate-y-0.5 hover:bg-amber2"
                    }`}
                  >
                    {signed[e.id] ? (
                      <>
                        <IconCheck className="h-4 w-4 text-amber2" />
                        Вы записаны
                      </>
                    ) : (
                      "Записаться"
                    )}
                  </button>
                  {signed[e.id] && (
                    <p className="mt-2.5 font-mono text-[11px] text-ink2">
                      Ждём вас! Возьмите паспорт для прохода.
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center font-mono text-[12px] uppercase tracking-[0.18em] text-ink2">
            Не успеваете? Индивидуальные экскурсии — по телефону{" "}
            <a href={CONTACTS.phoneHref} className="text-accent hover:underline">
              {CONTACTS.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
