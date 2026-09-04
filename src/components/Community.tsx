import { useState } from "react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  AUDIENCES,
  CAMPUSES,
  CONTACTS,
  IMG,
  NEWS,
} from "../data";
import {
  ICONS,
  IconArrowRight,
  IconArrowUpRight,
  IconClock,
  IconDialog,
  IconMail,
  IconPhone,
  IconPin,
  Reveal,
  SectionHead,
} from "../ui";

/* ================= Новости ================= */

export function News() {
  const featured = NEWS.find((n) => n.featured) ?? NEWS[0];
  const rest = NEWS.filter((n) => n.id !== featured.id);

  return (
    <section id="news" className="bg-paper2 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          label="Жизнь колледжа"
          title={<>Новости и <span className="text-accent">события</span></>}
          right={
            <Link
              to="/novosti"
              className="group hidden items-center gap-2.5 rounded border border-line bg-card px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-wider text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent md:flex"
            >
              Все новости
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Link
              to={`/novosti/${featured.id}`}
              className="group block h-full overflow-hidden rounded-sm border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-navy/10"
            >
              {featured.img && (
                <div className="overflow-hidden">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] sm:h-80"
                  />
                </div>
              )}
              <div className="p-7">
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em]">
                  <span className="rounded-sm bg-accent px-2.5 py-1 font-bold text-navy-deep">{featured.tag}</span>
                  <span className="text-ink2">{featured.date}</span>
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug font-bold text-ink transition-colors group-hover:text-accent sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink2">{featured.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11.5px] font-semibold uppercase tracking-[0.14em] text-accent">
                  Читать полностью
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {rest.map((n, i) => (
              <Reveal key={n.id} delay={i * 80}>
                <Link
                  to={`/novosti/${n.id}`}
                  className="group flex items-center gap-5 rounded-sm border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent"
                >
                  {n.img ? (
                    <div className="h-20 w-24 shrink-0 overflow-hidden rounded-sm">
                      <img src={n.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  ) : (
                    <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-sm bg-navy font-display text-2xl font-black text-amber2">
                      {String(i + 2).padStart(2, "0")}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-wider">
                      <span className="font-bold text-accent">{n.tag}</span>
                      <span className="text-ink2">{n.date}</span>
                    </div>
                    <h4 className="mt-1.5 line-clamp-2 text-[14.5px] leading-snug font-semibold text-ink transition-colors group-hover:text-accent">
                      {n.title}
                    </h4>
                  </div>
                  <IconArrowUpRight className="ml-auto h-4.5 w-4.5 shrink-0 -translate-x-1 text-ink2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100" />
                </Link>
              </Reveal>
            ))}
            <Link
              to="/novosti"
              className="mt-auto flex items-center justify-center gap-2.5 rounded border border-dashed border-line py-3.5 font-mono text-[12px] font-semibold uppercase tracking-wider text-ink2 transition-colors hover:border-accent hover:text-accent md:hidden"
            >
              Все новости <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= Студенту / Выпускнику / Педагогу ================= */

export function Audiences() {
  const [active, setActive] = useState("student");
  const current = AUDIENCES.find((a) => a.key === active) ?? AUDIENCES[0];
  const Icon = ICONS[current.icon];

  return (
    <section id="audiences" className="relative overflow-hidden bg-navydeep py-20 text-paper md:py-28">
      <div className="bg-blueprint pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          light
          label="Сервисы"
          title={<>Каждому — <span className="text-amber2">свой раздел</span></>}
          desc="Быстрые ссылки для трёх главных аудиторий колледжа: студентов, выпускников и преподавателей."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              {AUDIENCES.map((a, i) => {
                const AIcon = ICONS[a.icon];
                const isActive = a.key === active;
                return (
                  <button
                    key={a.key}
                    onClick={() => setActive(a.key)}
                    className={`group flex items-center gap-4 rounded-sm border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-accent bg-accent text-navy-deep shadow-lg shadow-accent/20"
                        : "border-paper/15 bg-navy/50 text-paper hover:-translate-y-0.5 hover:border-paper/40"
                    }`}
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border ${isActive ? "border-navy-deep/30" : "border-paper/20"}`}>
                      {AIcon ? <AIcon className="h-5.5 w-5.5" /> : null}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[15px] font-bold">{a.label}</span>
                      <span className={`mt-0.5 block text-[12.5px] leading-snug ${isActive ? "text-navy-deep/75" : "text-paper/55"}`}>
                        {a.links.length} разделов
                      </span>
                    </span>
                    <span className={`font-mono text-[11px] font-bold ${isActive ? "text-navy-deep/60" : "text-paper/30"}`}>
                      0{i + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-sm border border-paper/15 bg-navy/60 p-7 md:p-9">
              <div className="flex items-center gap-4">
                {Icon ? <Icon className="h-8 w-8 shrink-0 text-amber2" /> : null}
                <div>
                  <h3 className="font-display text-xl font-bold">{current.label}</h3>
                  <p className="mt-1 max-w-xl text-[13.5px] text-paper/60">{current.desc}</p>
                </div>
              </div>
              <div className="mt-7 grid gap-x-10 sm:grid-cols-2">
                {current.links.map((l, i) => (
                  <a
                    key={l.label}
                    href={l.href}
                    {...(l.href.startsWith("#")
                      ? {
                          onClick: (e: MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                            const prm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                            document
                              .querySelector(l.href)
                              ?.scrollIntoView({ behavior: prm ? "auto" : "smooth" });
                          },
                        }
                      : { target: "_blank", rel: "noreferrer" })}
                    className="group flex items-center justify-between gap-4 border-b border-paper/12 py-3.5 transition-all duration-300 hover:border-amber2 hover:pl-2"
                    style={{ transitionDelay: `${i * 10}ms` }}
                  >
                    <span className="text-[14px] font-medium text-paper/85 transition-colors group-hover:text-amber2">
                      {l.label}
                    </span>
                    <IconArrowUpRight className="h-4 w-4 shrink-0 text-paper/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber2" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= Госуслуги «Решаем вместе» ================= */

export function Gosuslugi() {
  return (
    <section className="bg-accent text-navy-deep">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center">
        <Reveal>
          <div className="flex items-start gap-5">
            <IconDialog className="mt-1 h-10 w-10 shrink-0" />
            <div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em]">
                Платформа обратной связи · Госуслуги
              </p>
              <h2 className="mt-2 font-display text-2xl font-black sm:text-3xl">Решаем вместе</h2>
              <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed font-medium text-navy-deep/80">
                Есть предложения по организации учебного процесса или знаете, как сделать
                колледж лучше? Напишите — обращения рассматриваются в установленном порядке.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <a
            href="https://pos.gosuslugi.ru/"
            target="_blank"
            rel="noreferrer"
            className="group flex shrink-0 items-center gap-3 rounded bg-navy px-8 py-4.5 font-display text-[13px] font-bold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-deep"
          >
            Сообщить о проблеме
            <IconArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= Контакты + карта ================= */

function MapSvg() {
  return (
    <svg viewBox="0 0 640 420" className="h-full w-full" role="img" aria-label="Схема проезда к корпусам колледжа">
      <rect width="640" height="420" fill="var(--paper-2)" />
      {/* кварталы */}
      {[
        [40, 30, 120, 90], [200, 30, 160, 90], [400, 30, 190, 90],
        [40, 180, 120, 90], [200, 180, 160, 90], [460, 180, 130, 90],
        [40, 320, 120, 70], [240, 320, 180, 70], [460, 320, 130, 70],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="var(--card)" stroke="var(--line)" />
      ))}
      {/* река */}
      <path d="M -10 150 C 140 130, 260 175, 400 152 S 620 128, 660 150" fill="none" stroke="var(--navy)" strokeOpacity="0.16" strokeWidth="22" strokeLinecap="round" />
      {/* маршрут */}
      <path d="M 285 235 L 285 300 L 175 300" fill="none" stroke="var(--accent)" strokeWidth="3" strokeDasharray="7 9" className="dash-anim" />
      <path d="M 285 235 L 470 235" fill="none" stroke="var(--accent)" strokeWidth="3" strokeDasharray="7 9" className="dash-anim" />
      {/* подписи улиц */}
      <text x="215" y="142" fontFamily="JetBrains Mono, monospace" fontSize="12" fill="var(--ink-2)" opacity="0.8">ул. Ленина</text>
      <text x="500" y="405" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="var(--ink-2)" opacity="0.6">п. Большевик</text>

      {/* маркеры */}
      {[
        { x: 285, y: 235, label: "Корпус 1" },
        { x: 470, y: 235, label: "Корпус 2" },
        { x: 175, y: 300, label: "Общежитие" },
      ].map((m) => (
        <g key={m.label}>
          <circle cx={m.x} cy={m.y} r="15" fill="var(--accent)" opacity="0.18">
            <animate attributeName="r" values="10;19;10" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx={m.x} cy={m.y} r="7.5" fill="var(--accent)" stroke="var(--navy-deep)" strokeWidth="2.5" />
          <text
            x={m.x}
            y={m.y - 18}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="12.5"
            fontWeight="700"
            fill="var(--ink)"
          >
            {m.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Contacts() {
  return (
    <section id="contacts" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          label="Контакты"
          title={<>Как нас <span className="text-accent">найти</span></>}
          desc="Колледж расположен в посёлке Большевик городского округа Серпухов. Три корпуса и общежитие — в пяти минутах ходьбы друг от друга."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <Reveal>
              <div className="rounded-sm border border-line bg-card p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Приёмная директора</p>
                <div className="mt-5 space-y-4 text-[14.5px]">
                  <p className="flex items-start gap-3.5">
                    <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {CONTACTS.address}
                  </p>
                  <a href={CONTACTS.phoneHref} className="flex items-center gap-3.5 font-semibold text-ink transition-colors hover:text-accent">
                    <IconPhone className="h-5 w-5 shrink-0 text-accent" />
                    {CONTACTS.phone}
                  </a>
                  <a href={`mailto:${CONTACTS.email}`} className="flex items-center gap-3.5 break-all text-ink transition-colors hover:text-accent">
                    <IconMail className="h-5 w-5 shrink-0 text-accent" />
                    {CONTACTS.email}
                  </a>
                  <p className="flex items-center gap-3.5 text-ink2">
                    <IconClock className="h-5 w-5 shrink-0 text-accent" />
                    Пн–пт 8:00–17:00 · обед 12:00–13:00
                  </p>
                </div>
              </div>
            </Reveal>

            {CAMPUSES.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div className="group flex items-center gap-4 rounded-sm border border-line bg-card px-6 py-4.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent">
                  <span className="font-display text-lg font-black text-paper2 transition-colors duration-300 group-hover:text-accent" style={{ WebkitTextStroke: "1px var(--ink-2)" }}>
                    0{i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[13.5px] font-bold text-ink">{c.name}</p>
                    <p className="text-[13px] text-ink2">{c.addr} · {c.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="lg:col-span-7">
            <div className="flex h-full flex-col overflow-hidden rounded-sm border border-line">
              <div className="min-h-[320px] flex-1">
                <MapSvg />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-card px-6 py-5">
                <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink2">
                  54.9183, 37.4008 · юг Подмосковья
                </p>
                <a
                  href={CONTACTS.yandexMap}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 rounded bg-navy px-5 py-3 font-display text-[12px] font-bold text-paper transition-all duration-300 hover:bg-accent hover:text-navy-deep"
                >
                  Открыть в Яндекс Картах
                  <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
