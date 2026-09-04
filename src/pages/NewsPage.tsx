import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageShell } from "../components/Chrome";
import { NEWS, type NewsItem } from "../data";
import { IconArrowRight, IconArrowUpRight, Reveal } from "../ui";

const TAGS = ["Все", ...Array.from(new Set(NEWS.map((n) => n.tag)))];

function Card({ n, i, big = false }: { n: NewsItem; i: number; big?: boolean }) {
  return (
    <Reveal delay={(i % 3) * 80}>
      <Link
        to={`/novosti/${n.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-navy/10"
      >
        <div className="relative overflow-hidden">
          {n.img ? (
            <img
              src={n.img}
              alt=""
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] ${big ? "h-56 sm:h-64" : "h-44"}`}
            />
          ) : (
            <div className={`flex w-full items-center justify-center bg-navy ${big ? "h-56 sm:h-64" : "h-44"}`}>
              <span className="font-display text-6xl font-black text-paper/10">{n.tag}</span>
            </div>
          )}
          <span className="absolute left-4 top-4 rounded-sm bg-accent px-2.5 py-1 font-mono text-[10.5px] font-bold uppercase tracking-wider text-navy-deep">
            {n.tag}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink2">{n.date}</p>
          <h3
            className={`mt-2.5 font-display leading-snug font-bold text-ink transition-colors group-hover:text-accent ${
              big ? "text-lg sm:text-xl" : "text-[14.5px]"
            }`}
          >
            {n.title}
          </h3>
          <p className="mt-2.5 line-clamp-3 text-[13.5px] leading-relaxed text-ink2">{n.excerpt}</p>
          <span className="mt-auto flex items-center gap-2 pt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            Читать
            <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function NewsListPage() {
  const [tag, setTag] = useState("Все");
  const list = useMemo(() => (tag === "Все" ? NEWS : NEWS.filter((n) => n.tag === tag)), [tag]);

  return (
    <>
      <PageShell
        index="04"
        label="Новости"
        title="Жизнь колледжа"
        accent="в реальном времени"
        desc="Приёмная кампания, мастерские, спорт, партнёрства и победы студентов — коротко и по делу."
      >
        <div className="flex flex-wrap gap-2.5">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`rounded-full border px-5 py-2.5 font-mono text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                tag === t
                  ? "border-accent bg-accent text-navy-deep"
                  : "border-paper/25 text-paper/75 hover:-translate-y-0.5 hover:border-amber2 hover:text-amber2"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </PageShell>

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {list.length === 0 ? (
            <p className="py-16 text-center font-mono text-sm uppercase tracking-widest text-ink2">
              В этой рубрике пока нет новостей
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {list.map((n, i) => (
                <Card key={n.id} n={n} i={i} big={i === 0 && tag === "Все"} />
              ))}
            </div>
          )}

          <Reveal delay={100}>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-sm border border-line bg-navy px-7 py-6 text-paper">
              <p className="max-w-xl text-[14px] leading-relaxed text-paper/75">
                <span className="font-semibold text-amber2">Больше новостей</span> — в официальной ленте колледжа
                и в сообществе ВКонтакте «Профессионалитет | Серпуховский колледж».
              </p>
              <a
                href="https://vk.com/serpkoll_professionalitet"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2.5 rounded bg-accent px-6 py-3.5 font-display text-[12px] font-bold text-navy-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber2"
              >
                Мы ВКонтакте
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function NewsArticlePage() {
  const { id } = useParams();
  const article = NEWS.find((n) => n.id === id);
  const others = NEWS.filter((n) => n.id !== id).slice(0, 2);

  if (!article) {
    return (
      <section className="bg-paper py-28 text-center">
        <p className="font-display text-3xl font-black text-ink">Новость не найдена</p>
        <Link to="/novosti" className="mt-6 inline-block font-mono text-[13px] font-semibold uppercase tracking-wider text-accent hover:underline">
          ← Ко всем новостям
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-paper">
        <div className="bg-blueprint pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 pb-14 pt-10 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">
            <Link to="/" className="transition-colors hover:text-amber2">Главная</Link>
            <span className="mx-2 text-accent">/</span>
            <Link to="/novosti" className="transition-colors hover:text-amber2">Новости</Link>
            <span className="mx-2 text-accent">/</span>
            <span className="text-amber2">{article.tag}</span>
          </p>
          <h1 className="mt-6 font-display text-[clamp(1.6rem,4vw,2.6rem)] leading-tight font-black">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11.5px] uppercase tracking-wider text-paper/60">
            <span className="rounded-sm bg-accent px-2.5 py-1 font-bold text-navy-deep">{article.tag}</span>
            <span>{article.date}</span>
            <span>Пресс-служба колледжа</span>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {article.img && (
            <Reveal>
              <div className="overflow-hidden rounded-sm border border-line">
                <img src={article.img} alt={article.title} className="kenburns h-72 w-full object-cover sm:h-96" />
              </div>
            </Reveal>
          )}
          <div className="mt-10 space-y-6">
            {article.body.map((p, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className={`leading-[1.75] text-ink ${i === 0 ? "text-lg font-medium" : "text-[15.5px]"}`}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
              <Link
                to="/novosti"
                className="group flex items-center gap-2.5 font-mono text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent"
              >
                <IconArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                Все новости
              </Link>
              <a
                href="https://vk.com/serpkoll_professionalitet"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ink2 transition-colors hover:text-accent"
              >
                Обсудить ВКонтакте →
              </a>
            </div>
          </Reveal>

          {others.length > 0 && (
            <div className="mt-16">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink2">Читайте также</p>
              <div className="grid gap-6 md:grid-cols-2">
                {others.map((n, i) => (
                  <Card key={n.id} n={n} i={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
