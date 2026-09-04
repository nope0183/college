import { PageShell } from "../components/Chrome";
import { COLLEGE_INFO, DEPARTMENTS, IMG } from "../data";
import { IconArrowUpRight, IconDoc, Reveal, SectionHead } from "../ui";

export default function SvedeniaPage() {
  return (
    <>
      <PageShell
        index="06"
        label="Сведения"
        title="Об образовательной"
        accent="организации"
        desc="Обязательный раздел с информацией о колледже: учредитель, документы, руководство, педагогический состав, стипендии и условия обучения."
      />
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full border-2 border-accent" aria-hidden />
              <div className="group relative overflow-hidden rounded-sm">
                <img
                  src={IMG.campus}
                  alt="Здание колледжа"
                  className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[360px]"
                />
              </div>
            </div>
            <div className="mt-10">
              <SectionHead
                label="Основные сведения"
                title={<>Кто мы <span className="text-accent">официально</span></>}
              />
              <dl className="mt-8">
                {COLLEGE_INFO.map((row) => (
                  <div key={row.k} className="group grid gap-1 border-t border-line py-4 transition-colors hover:bg-card sm:grid-cols-[11rem_1fr] sm:gap-6 sm:px-3">
                    <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink2">{row.k}</dt>
                    <dd className="text-[14px] leading-relaxed text-ink">{row.v}</dd>
                  </div>
                ))}
                <div className="border-t border-line" />
              </dl>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHead
              label="Подразделы"
              title={<>Тринадцать разделов <span className="text-accent">сведений</span></>}
              desc="Каждый раздел ведёт на официальную страницу или документ — так требует порядок открытости образовательных организаций."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {DEPARTMENTS.map((d, i) => (
                <Reveal key={d.label} delay={(i % 2) * 70}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full items-start justify-between gap-4 rounded-sm border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-navy/10"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-line bg-paper font-mono text-[11px] font-bold text-ink2 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-navy-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[13.5px] leading-snug font-bold text-ink">{d.label}</span>
                    </span>
                    <IconArrowUpRight className="h-4.5 w-4.5 shrink-0 text-ink2 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150}>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-sm border border-line bg-navy px-7 py-6 text-paper">
                <span className="flex items-center gap-4">
                  <IconDoc className="h-8 w-8 shrink-0 text-amber2" />
                  <p className="max-w-md text-[14px] leading-relaxed text-paper/80">
                    Лицензия на осуществление образовательной деятельности и свидетельство
                    о государственной аккредитации — в подразделе «Документы».
                  </p>
                </span>
                <a
                  href="https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/dokumenty"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2.5 rounded bg-accent px-6 py-3.5 font-display text-[12px] font-bold text-navy-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber2"
                >
                  Открыть документы
                  <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
