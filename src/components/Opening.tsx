import { useEffect, useState } from "react";
import type { Ref } from "react";
import { IMG, STATS, TICKER } from "../data";
import { useCountUp, useCountdown, useInView, useScramble } from "../hooks";
import { Marquee, Reveal, SectionHead } from "../ui";
import { IconArrowRight, IconDoc, IconPin } from "../ui";

/* ================= Открывающий блок «Приём 2026» ================= */

function smoothScroll(sel: string) {
  const prm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelector(sel)?.scrollIntoView({ behavior: prm ? "auto" : "smooth" });
}

function CountBox({ v, label }: { v: number | string; label: string }) {
  return (
    <div className="flex min-w-[64px] flex-col items-center rounded border border-paper/15 bg-navy-deep/60 px-2 py-2.5">
      <span className="font-display text-xl font-bold tabular-nums text-amber2 sm:text-2xl">
        {String(v).padStart(2, "0")}
      </span>
      <span className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-paper/55">{label}</span>
    </div>
  );
}

export function Opening() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 150);
    return () => window.clearTimeout(t);
  }, []);

  const line1 = useScramble("ПРИЁМ", mounted);
  const line2 = useScramble("2026", mounted);
  const cd = useCountdown("2026-06-20T09:00:00+03:00");

  return (
    <section id="top" className="relative overflow-hidden bg-navy text-paper">
      <div className="bg-blueprint pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-10 top-6 hidden select-none font-display text-[7.5rem] leading-none font-black text-stroke xl:block" style={{ writingMode: "vertical-rl" }}>
        СЕРПУХОВ
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pt-20">
        {/* левая колонка */}
        <div className="lg:col-span-6 xl:col-span-7">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-paper/20 bg-navy-deep/50 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-amber2">
              <span className="dot-live h-2 w-2 rounded-full bg-accent" />
              Приёмная кампания · старт 20 июня
            </p>
          </Reveal>

          <h1 className="mt-7 font-display font-black leading-[0.98] tracking-tight">
            <span className="block text-[clamp(3rem,9vw,6.2rem)]">{line1}</span>
            <span className="block text-[clamp(3rem,9vw,6.2rem)] text-accent">{line2}</span>
          </h1>

          <Reveal delay={150}>
            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-paper/75 md:text-lg">
              Серпуховский колледж ведёт набор по{" "}
              <span className="font-semibold text-paper">9 специальностям</span> — от сварки и
              станков с ЧПУ до программирования и туризма. Бюджетные места,
              общежитие и наставники с предприятий в рамках федерального проекта{" "}
              <span className="font-semibold text-amber2">«Профессионалитет»</span>.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("#programs");
                }}
                className="group flex items-center gap-3 rounded bg-accent px-7 py-4 font-display text-[13px] font-bold text-navy-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber2"
              >
                Выбрать специальность
                <IconArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#events"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("#events");
                }}
                className="group flex items-center gap-3 rounded border border-paper/25 px-7 py-4 font-display text-[13px] font-bold text-paper transition-all duration-300 hover:border-amber2 hover:text-amber2"
              >
                День открытых дверей
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[12px] uppercase tracking-[0.16em] text-paper/55">
              <span>9 специальностей</span>
              <span className="text-accent">✦</span>
              <span>245 бюджетных мест</span>
              <span className="text-accent">✦</span>
              <span>Общежитие</span>
            </div>
          </Reveal>
        </div>

        {/* правая колонка: фото + таймер */}
        <div className="relative lg:col-span-6 xl:col-span-5">
          <Reveal delay={200} className="relative h-full">
            <div className="relative overflow-hidden rounded-sm border border-paper/15">
              <div className="overflow-hidden">
                <img
                  src={IMG.hero}
                  alt="Студент за станком с ЧПУ в мастерской колледжа"
                  className="kenburns h-[340px] w-full object-cover sm:h-[420px] lg:h-full lg:min-h-[460px]"
                />
              </div>
              <div className="absolute left-4 top-4 rounded bg-navy-deep/85 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-amber2">
                Мастерская ЧПУ · корпус 2
              </div>
            </div>

            <div className="floaty absolute -bottom-8 -left-3 right-3 rounded-sm border border-paper/15 bg-navy-deep/95 p-5 shadow-2xl shadow-black/40 sm:-left-10">
              {cd.passed ? (
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-amber2">Статус кампании</p>
                  <p className="mt-2 font-display text-xl font-bold">Приём документов идёт!</p>
                  <p className="mt-1 text-[13px] text-paper/65">Подайте заявление до 15 августа — лично или через Госуслуги.</p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-amber2">До старта приёма</p>
                    <IconDoc className="h-4 w-4 text-paper/50" />
                  </div>
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    <CountBox v={cd.d} label="дней" />
                    <CountBox v={cd.h} label="часов" />
                    <CountBox v={cd.m} label="минут" />
                    <CountBox v={cd.s} label="секунд" />
                  </div>
                  <p className="mt-3 flex items-center gap-2 text-[12.5px] text-paper/60">
                    <IconPin className="h-3.5 w-3.5 shrink-0 text-accent" />
                    Приёмная комиссия · корпус 1, каб. 104 · пн–пт 9:00–16:00
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <Marquee items={TICKER} />
    </section>
  );
}

/* ================= О колледже + цифры ================= */

function StatItem({ value, suffix, label, note, delay }: { value: number; suffix: string; label: string; note: string; delay: number }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.4);
  const v = useCountUp(value, inView);
  return (
    <Reveal delay={delay}>
      <div ref={ref as Ref<HTMLDivElement>} className="group border-l-2 border-line py-2 pl-5 transition-colors duration-300 hover:border-accent">
        <p className="font-display text-4xl font-black text-ink tabular-nums md:text-5xl">
          {v.toLocaleString("ru-RU")}
          <span className="text-accent">{suffix}</span>
        </p>
        <p className="mt-2 text-[14px] font-semibold text-ink">{label}</p>
        <p className="mt-1 text-[12.5px] text-ink2">{note}</p>
      </div>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="relative bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <Reveal>
              <div className="absolute -left-4 -top-4 h-full w-full border-2 border-accent" aria-hidden />
              <div className="group relative overflow-hidden rounded-sm">
                <img
                  src={IMG.campus}
                  alt="Здание Серпуховского колледжа"
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[380px]"
                />
                <div className="absolute bottom-4 left-4 rounded bg-navy px-4 py-2.5 text-paper">
                  <p className="font-display text-lg font-bold leading-none">с 1969 года</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60">п. Большевик · Серпухов</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <SectionHead
              label="О колледже"
              title={<>Рабочие профессии — <span className="text-accent">новая школа</span></>}
              desc="Мы — участник федерального проекта «Профессионалитет»: учим на современном оборудовании, по программам, составленным вместе с работодателями, и с наставниками прямо с производства. 92% выпускников трудоустраиваются в первый год — большинство остаются на предприятиях Серпухова и юга Подмосковья."
            />
            <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {STATS.map((s, i) => (
                <StatItem key={s.label} {...s} delay={i * 90} />
              ))}
            </div>
            <Reveal delay={200}>
              <a
                href="https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii"
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-2.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent"
              >
                Сведения об образовательной организации
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Marquee };
