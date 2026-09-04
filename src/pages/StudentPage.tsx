import { useEffect, useState } from "react";
import { PageShell } from "../components/Chrome";
import { Audiences } from "../components/Community";
import { BELLS, HOTLINES } from "../data";
import { IconClock, IconPhone, Reveal, SectionHead } from "../ui";

function toMinutes(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function BellSchedule() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const mins = now.getHours() * 60 + now.getMinutes();
  const current = BELLS.find((b) => mins >= toMinutes(b.start) && mins <= toMinutes(b.end));
  const isWeekday = now.getDay() >= 1 && now.getDay() <= 5;

  return (
    <section id="schedule" className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <SectionHead
              label="Расписание звонков"
              title={<>Учебный день <span className="text-accent">по парам</span></>}
              desc="Занятия идут парами по 90 минут с перерывами. Большая перемена после второй пары — 40 минут на обед в столовой корпуса 1."
            />
            <Reveal delay={120}>
              <div className="mt-8 flex items-center gap-4 rounded-sm border border-line bg-card p-5">
                <IconClock className="h-6 w-6 shrink-0 text-accent" />
                <div>
                  <p className="font-display text-[13.5px] font-bold text-ink">
                    {isWeekday && current
                      ? `Сейчас идёт ${current.n}-я пара`
                      : isWeekday
                        ? "Учебные пары сейчас не идут"
                        : "Сегодня выходной — пар нет"}
                  </p>
                  <p className="mt-0.5 font-mono text-[11.5px] uppercase tracking-wider text-ink2">
                    {now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })} · обновляется автоматически
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={100} className="lg:col-span-7">
          <div className="overflow-hidden rounded-sm border border-line">
            <div className="grid grid-cols-[3.5rem_1fr_1fr] items-center gap-4 border-b border-navy bg-navy px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-paper">
              <span>Пара</span>
              <span>Начало</span>
              <span className="text-right">Окончание</span>
            </div>
            {BELLS.map((b, i) => {
              const isCurrent = current?.n === b.n && isWeekday;
              return (
                <div
                  key={b.n}
                  className={`grid grid-cols-[3.5rem_1fr_1fr] items-center gap-4 px-6 py-5 transition-all duration-300 ${
                    isCurrent
                      ? "border-l-4 border-accent bg-navy text-paper"
                      : i % 2
                        ? "bg-paper2"
                        : "bg-card"
                  }`}
                >
                  <span className={`font-display text-2xl font-black ${isCurrent ? "text-amber2" : "text-ink"}`}>
                    {b.n}
                  </span>
                  <span className={`flex items-center gap-2.5 font-mono text-lg font-bold tabular-nums ${isCurrent ? "text-paper" : "text-ink"}`}>
                    {b.start}
                    {isCurrent && (
                      <span className="flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-navy-deep">
                        <span className="dot-live h-1.5 w-1.5 rounded-full bg-navy-deep" />
                        сейчас
                      </span>
                    )}
                  </span>
                  <span className={`text-right font-mono text-lg font-bold tabular-nums ${isCurrent ? "text-paper/80" : "text-ink2"}`}>
                    {b.end}
                  </span>
                </div>
              );
            })}
            <div className="border-t border-line bg-card px-6 py-4">
              <p className="font-mono text-[11.5px] uppercase tracking-wider text-ink2">
                Перерывы: 10 мин между парами · обед 11:40–12:20
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Hotlines() {
  return (
    <section id="hotlines" className="bg-paper2 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          label="Поддержка"
          title={<>Телефоны <span className="text-accent">доверия</span></>}
          desc="Если нужна помощь — психологическая, правовая или просто разговор. Все звонки бесплатные и анонимные."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {HOTLINES.map((h, i) => (
            <Reveal key={h.phone} delay={i * 90}>
              <a
                href={`tel:${h.phone.replace(/[^+\d]/g, "")}`}
                className="group flex h-full flex-col rounded-sm border border-line bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-navy/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-line bg-paper text-ink2 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-navy-deep">
                  <IconPhone className="h-5 w-5" />
                </span>
                <p className="mt-5 font-display text-[13.5px] leading-snug font-bold text-ink">{h.label}</p>
                <p className="mt-4 font-display text-2xl font-black tracking-tight text-ink transition-colors group-hover:text-accent">
                  {h.phone}
                </p>
                <p className="mt-2 text-[12.5px] text-ink2">{h.note}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StudentPage() {
  return (
    <>
      <PageShell
        index="05"
        label="Студенту"
        title="Учиться"
        accent="удобно"
        desc="Расписания, методические материалы, социально-психологическая поддержка, ГТО и телефоны доверия — всё для студентов, выпускников и педагогов в одном месте."
      />
      <Audiences />
      <BellSchedule />
      <Hotlines />
    </>
  );
}
