import { useState } from "react";
import { Link } from "react-router-dom";
import { PageShell } from "../components/Chrome";
import { Events, Steps } from "../components/Programs";
import { ADMISSION_LINKS, FAQ, IMG } from "../data";
import {
  IconArrowUpRight,
  IconChevron,
  IconDoc,
  IconPin,
  Reveal,
  SectionHead,
} from "../ui";

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-card py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <SectionHead
              label="Частые вопросы"
              title={<>Спрашивают <span className="text-accent">абитуриенты</span></>}
              desc="Ответы на вопросы, которые чаще всего задают в приёмной комиссии. Не нашли свой — позвоните или напишите нам."
            />
            <Reveal delay={120}>
              <div className="mt-8 overflow-hidden rounded-sm">
                <img
                  src={IMG.openDay}
                  alt="День открытых дверей в колледже"
                  className="h-52 w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-8">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={`border-b border-line transition-colors duration-300 ${
                    isOpen ? "bg-paper" : "hover:bg-paper"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-7"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className={`font-mono text-[12px] font-bold ${isOpen ? "text-accent" : "text-ink2"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[15px] font-bold text-ink md:text-base">{f.q}</span>
                    </span>
                    <IconChevron
                      className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-400 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl px-5 pb-6 pl-[3.7rem] text-[14.5px] leading-relaxed text-ink2 md:px-7 md:pl-[4.2rem]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DocsGrid() {
  return (
    <section className="bg-paper2 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          label="Документы и регламенты"
          title={<>Всё, что нужно <span className="text-accent">прочитать</span></>}
          desc="Официальные документы приёмной кампании 2026 года: правила, контрольные цифры, формы заявлений и инструкции."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADMISSION_LINKS.map((l, i) => (
            <Reveal key={l.label} delay={(i % 3) * 70}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-start justify-between gap-4 rounded-sm border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-navy/10"
              >
                <span className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line bg-paper text-ink2 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-navy-deep">
                    <IconDoc className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-[13.5px] leading-snug font-bold text-ink">{l.label}</span>
                    <span className="mt-1.5 block font-mono text-[10.5px] uppercase tracking-wider text-ink2">PDF / DOCX</span>
                  </span>
                </span>
                <IconArrowUpRight className="h-4.5 w-4.5 shrink-0 text-ink2 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaysToApply() {
  const ways = [
    { t: "Лично", d: "Приёмная комиссия: корпус 1, каб. 104. Пн–пт 9:00–16:00, в период кампании — и по субботам." },
    { t: "Через Госуслуги", d: "Суперсервис «Поступление в СПО онлайн»: заявление, сканы документов и отслеживание статуса." },
    { t: "По почте", d: "Заказным письмом с описью вложения на адрес колледжа: 142279, п. Большевик, ул. Ленина, 52." },
  ];
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-paper md:py-28">
      <div className="bg-blueprint pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          light
          label="Способы подачи"
          title={<>Три пути <span className="text-amber2">к заявлению</span></>}
          desc="Выбирайте удобный способ — статус заявления одинаково виден приёмной комиссии в любом случае."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ways.map((w, i) => (
            <Reveal key={w.t} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-sm border border-paper/15 bg-navy-deep/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber2">
                <span className="font-display text-5xl font-black text-paper/10 transition-colors duration-300 group-hover:text-amber2/30">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{w.t}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-paper/70">{w.d}</p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center gap-5 rounded-sm border border-paper/15 bg-navy-deep/60 px-7 py-6">
            <IconPin className="h-6 w-6 shrink-0 text-amber2" />
            <p className="max-w-2xl flex-1 text-[14px] leading-relaxed text-paper/75">
              Приём заявлений — <span className="font-semibold text-paper">с 20 июня по 15 августа 2026 года</span>.
              Оригиналы документов для зачисления — до 15 августа.
            </p>
            <a
              href={ADMISSION_LINKS[6].href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 rounded bg-accent px-6 py-3.5 font-display text-[12px] font-bold text-navy-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber2"
            >
              Инструкция по ЕПГУ
              <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 text-center font-mono text-[12px] uppercase tracking-[0.18em] text-paper/50">
            Выбрали направление?{" "}
            <Link to="/programmy" className="text-amber2 transition-colors hover:text-accent">
              Смотрите специальности →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function AdmissionsPage() {
  return (
    <>
      <PageShell
        index="03"
        label="Абитуриенту"
        title="Поступление"
        accent="без экзаменов"
        desc="Зачисление — по конкурсу аттестатов. Пять шагов, три способа подачи заявления и ответы на главные вопросы: всё, что нужно для поступления в 2026 году."
      />
      <Steps />
      <WaysToApply />
      <Faq />
      <DocsGrid />
      <Events />
    </>
  );
}
