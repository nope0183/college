import { useEffect, useMemo, useRef, useState } from "react";
import {
  ADMISSION_LINKS,
  CONTACTS,
  DEPARTMENTS,
  NAV,
  NEWS,
  PROGRAMS,
  AUDIENCES,
} from "../data";
import {
  IconArrowUpRight,
  IconBurger,
  IconClose,
  IconEye,
  IconLogo,
  IconMail,
  IconMax,
  IconPhone,
  IconPin,
  IconSearch,
  IconVk,
} from "../ui";

export interface AvState {
  enabled: boolean;
  size: 1 | 2 | 3;
  font: "sans" | "serif";
  scheme: "light" | "dark" | "beige";
  ls: 1 | 2 | 3;
  images: boolean;
}

export const AV_DEFAULT: AvState = {
  enabled: false,
  size: 1,
  font: "sans",
  scheme: "light",
  ls: 1,
  images: true,
};

function goAnchor(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const prm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: prm ? "auto" : "smooth", block: "start" });
}

function navClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href.startsWith("#")) {
    e.preventDefault();
    goAnchor(href);
  }
}

/* ================= Верхняя служебная панель ================= */

export function TopBar({
  av,
  setAv,
}: {
  av: AvState;
  setAv: React.Dispatch<React.SetStateAction<AvState>>;
}) {
  const [panelOpen, setPanelOpen] = useState(false);

  const seg = (label: string, active: boolean, onClick: () => void, title?: string) => (
    <button
      key={label + String(active)}
      onClick={onClick}
      title={title}
      className={`rounded px-2.5 py-1.5 font-mono text-[12px] font-semibold transition-colors ${
        active
          ? "bg-accent text-navy-deep"
          : "text-paper/80 hover:bg-paper/10 hover:text-paper"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="relative z-50 border-b border-paper/10 bg-navydeep text-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[12.5px] sm:px-6">
        <div className="flex min-w-0 items-center gap-4">
          <a
            href="https://mo.mosreg.ru/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-paper/70 transition-colors hover:text-amber2 lg:flex"
          >
            <span className="h-1.5 w-1.5 shrink-0 bg-amber2" />
            Министерство образования Московской области
          </a>
          <a
            href="https://edu.gov.ru/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-paper/70 transition-colors hover:text-amber2 md:flex"
          >
            <span className="h-1.5 w-1.5 shrink-0 bg-amber2" />
            Министерство просвещения РФ
          </a>
          <span className="font-mono text-paper/50 lg:hidden">ГБПОУ МО</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={CONTACTS.vk}
            target="_blank"
            rel="noreferrer"
            aria-label="ВКонтакте"
            className="text-paper/70 transition-all hover:-translate-y-0.5 hover:text-amber2"
          >
            <IconVk className="h-5 w-5" />
          </a>
          <a
            href={CONTACTS.max}
            target="_blank"
            rel="noreferrer"
            aria-label="MAX"
            className="text-paper/70 transition-all hover:-translate-y-0.5 hover:text-amber2"
          >
            <IconMax className="h-5 w-5" />
          </a>
          <div className="relative">
            <button
              onClick={() => setPanelOpen((v) => !v)}
              className={`flex items-center gap-2 rounded border px-3 py-1.5 font-mono text-[12px] font-semibold transition-colors ${
                av.enabled || panelOpen
                  ? "border-amber2 bg-amber2/15 text-amber2"
                  : "border-paper/25 text-paper/85 hover:border-amber2 hover:text-amber2"
              }`}
            >
              <IconEye className="h-4 w-4" />
              <span className="hidden sm:inline">Для слабовидящих</span>
            </button>

            {panelOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-[320px] rounded-md border border-line bg-card p-5 text-ink shadow-2xl shadow-navy-deep/25">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-display text-[13px] font-bold">Версия для слабовидящих</p>
                  <button onClick={() => setPanelOpen(false)} className="text-ink2 hover:text-accent" aria-label="Закрыть">
                    <IconClose className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-4 text-[13px]">
                  <div>
                    <p className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink2">Размер шрифта</p>
                    <div className="flex gap-2">
                      {seg("А", av.size === 1, () => setAv((s) => ({ ...s, enabled: true, size: 1 })), "Обычный")}
                      {seg("А", av.size === 2, () => setAv((s) => ({ ...s, enabled: true, size: 2 })), "Средний")}
                      {seg("А", av.size === 3, () => setAv((s) => ({ ...s, enabled: true, size: 3 })), "Крупный")}
                    </div>
                  </div>

                  <div>
                    <p className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink2">Гарнитура</p>
                    <div className="flex gap-2">
                      {seg("Без засечек", av.font === "sans", () => setAv((s) => ({ ...s, enabled: true, font: "sans" })))}
                      {seg("С засечками", av.font === "serif", () => setAv((s) => ({ ...s, enabled: true, font: "serif" })))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink2">Цвета</p>
                    <div className="flex gap-2">
                      {seg("Ч/Б", av.scheme === "light", () => setAv((s) => ({ ...s, enabled: true, scheme: "light" })), "Чёрным по белому")}
                      {seg("Б/Ч", av.scheme === "dark", () => setAv((s) => ({ ...s, enabled: true, scheme: "dark" })), "Белым по чёрному")}
                      {seg("Беж", av.scheme === "beige", () => setAv((s) => ({ ...s, enabled: true, scheme: "beige" })), "Коричневым по бежевому")}
                    </div>
                  </div>

                  <div>
                    <p className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink2">Интервал</p>
                    <div className="flex gap-2">
                      {seg("Обычный", av.ls === 1, () => setAv((s) => ({ ...s, enabled: true, ls: 1 })))}
                      {seg("Средний", av.ls === 2, () => setAv((s) => ({ ...s, enabled: true, ls: 2 })))}
                      {seg("Большой", av.ls === 3, () => setAv((s) => ({ ...s, enabled: true, ls: 3 })))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-ink2">Изображения</p>
                    <button
                      onClick={() => setAv((s) => ({ ...s, enabled: true, images: !s.images }))}
                      className={`relative h-5 w-10 rounded-full transition-colors ${av.images ? "bg-accent" : "bg-line"}`}
                      aria-label="Переключить изображения"
                    >
                      <span
                        className={`absolute top-0.5 h-4 w-4 rounded-full bg-card transition-transform ${av.images ? "translate-x-5" : "translate-x-0.5"}`}
                      />
                    </button>
                  </div>

                  <button
                    onClick={() => setAv(AV_DEFAULT)}
                    className="w-full rounded border border-line py-2 font-mono text-[12px] font-semibold text-ink2 transition-colors hover:border-accent hover:text-accent"
                  >
                    Вернуть обычную версию
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= Шапка ================= */

export function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-10 gap-y-4 px-4 py-5 sm:px-6">
        <a href="#top" onClick={(e) => navClick(e, "#top")} className="group flex items-center gap-4">
          <IconLogo className="h-12 w-12 shrink-0 transition-transform duration-500 group-hover:rotate-[18deg]" />
          <div>
            <p className="font-display text-[15px] leading-tight font-bold text-ink sm:text-base">
              Серпуховский колледж
            </p>
            <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink2">
              ГБПОУ МО · Профессионалитет
            </p>
          </div>
        </a>

        <div className="ml-auto hidden items-center gap-7 text-[13.5px] md:flex">
          <a href={CONTACTS.phoneHref} className="group flex items-center gap-2.5 text-ink transition-colors hover:text-accent">
            <IconPhone className="h-4.5 w-4.5 text-accent" />
            <span className="font-semibold">{CONTACTS.phone}</span>
          </a>
          <a href={`mailto:${CONTACTS.email}`} className="group flex items-center gap-2.5 text-ink2 transition-colors hover:text-accent">
            <IconMail className="h-4.5 w-4.5 text-accent" />
            {CONTACTS.email}
          </a>
          <div className="flex items-center gap-2.5 text-ink2">
            <IconPin className="h-4.5 w-4.5 shrink-0 text-accent" />
            <span className="max-w-[190px] leading-snug">{CONTACTS.address}</span>
          </div>
        </div>

        <a
          href="#steps"
          onClick={(e) => navClick(e, "#steps")}
          className="group relative ml-auto overflow-hidden rounded bg-navy px-6 py-3.5 font-display text-[12px] font-bold tracking-wide text-paper transition-colors hover:bg-navy-deep md:ml-0"
        >
          <span className="relative z-10">Подать заявление</span>
          <span className="absolute inset-y-0 left-0 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          <span className="absolute inset-0 z-10 flex items-center justify-center font-display text-[12px] font-bold tracking-wide text-navy-deep opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Подать заявление
          </span>
        </a>
      </div>
    </header>
  );
}

/* ================= Навигация ================= */

export function NavBar({ onSearch }: { onSearch: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 border-b border-paper/10 bg-navy text-paper transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-navy-deep/30" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-1 px-4 sm:px-6">
        <div className="hidden items-center lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={(e) => navClick(e, n.href)}
              className="group relative px-3.5 py-4 text-[13.5px] font-medium text-paper/85 transition-colors hover:text-amber2"
            >
              {n.label}
              <span className="absolute inset-x-3.5 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <button
          onClick={onSearch}
          className="ml-auto flex items-center gap-2 rounded px-3 py-2 font-mono text-[12px] uppercase tracking-widest text-paper/75 transition-colors hover:bg-paper/10 hover:text-amber2"
        >
          <IconSearch className="h-4 w-4" />
          <span className="hidden sm:inline">Поиск</span>
        </button>

        <button
          onClick={() => setMenuOpen(true)}
          className="rounded p-2 text-paper/85 transition-colors hover:bg-paper/10 lg:hidden"
          aria-label="Открыть меню"
        >
          <IconBurger className="h-6 w-6" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-navy-deep text-paper lg:hidden">
          <div className="flex items-center justify-between border-b border-paper/10 px-5 py-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber2">Меню</span>
            <button onClick={() => setMenuOpen(false)} className="p-2 hover:text-amber2" aria-label="Закрыть меню">
              <IconClose className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col overflow-y-auto py-4">
            {NAV.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => {
                  navClick(e, n.href);
                  setMenuOpen(false);
                }}
                className="flex items-center justify-between border-b border-paper/8 px-5 py-4 transition-colors hover:bg-paper/5 hover:text-amber2"
              >
                <span className="font-display text-lg font-semibold">{n.label}</span>
                <span className="font-mono text-[11px] text-paper/40">0{i + 1}</span>
              </a>
            ))}
            <a
              href="#steps"
              onClick={(e) => {
                navClick(e, "#steps");
                setMenuOpen(false);
              }}
              className="mx-5 mt-6 rounded bg-accent px-5 py-4 text-center font-display text-sm font-bold text-navy-deep"
            >
              Подать заявление
            </a>
            <div className="mt-6 space-y-2 px-5 text-sm text-paper/70">
              <a href={CONTACTS.phoneHref} className="block hover:text-amber2">{CONTACTS.phone}</a>
              <a href={`mailto:${CONTACTS.email}`} className="block hover:text-amber2">{CONTACTS.email}</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ================= Поиск ================= */

interface SearchEntry {
  type: string;
  label: string;
  href: string;
}

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQ("");
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const index = useMemo<SearchEntry[]>(
    () => [
      ...NAV.map((n) => ({ type: "Раздел", label: n.label, href: n.href })),
      ...PROGRAMS.map((p) => ({ type: "Специальность", label: `${p.code} — ${p.title}`, href: "#programs" })),
      ...NEWS.map((n) => ({ type: "Новость", label: n.title, href: "#news" })),
      ...ADMISSION_LINKS.map((l) => ({ type: "Абитуриенту", label: l.label, href: l.href })),
      ...DEPARTMENTS.map((l) => ({ type: "Сведения", label: l.label, href: l.href })),
      ...AUDIENCES.flatMap((a) => a.links.map((l) => ({ type: a.label, label: l.label, href: l.href }))),
      { type: "Раздел", label: "Контакты и карта", href: "#contacts" },
      { type: "Раздел", label: "Дни открытых дверей", href: "#events" },
    ],
    [],
  );

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (query.length < 2) return [];
    return index.filter((e) => e.label.toLowerCase().includes(query)).slice(0, 12);
  }, [q, index]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-navydeep/98 text-paper">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="flex items-center gap-4 border-b border-paper/15 py-6">
          <IconSearch className="h-6 w-6 shrink-0 text-amber2" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Специальность, новость, документ…"
            className="w-full bg-transparent font-display text-xl font-semibold outline-none placeholder:text-paper/30 sm:text-2xl"
          />
          <button onClick={onClose} className="shrink-0 rounded p-2 text-paper/70 transition-colors hover:text-amber2" aria-label="Закрыть поиск">
            <IconClose className="h-6 w-6" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto py-6">
          {q.trim().length < 2 ? (
            <div className="space-y-2 text-[15px] text-paper/60">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-amber2">Популярные запросы</p>
              {["Сварочное производство", "Расписание", "Общежитие", "Приёмная комиссия", "Профессионалитет"].map((s) => (
                <button
                  key={s}
                  onClick={() => setQ(s)}
                  className="mr-3 mb-2 rounded border border-paper/20 px-4 py-2 transition-colors hover:border-amber2 hover:text-amber2"
                >
                  {s}
                </button>
              ))}
            </div>
          ) : results.length === 0 ? (
            <p className="text-paper/60">
              Ничего не нашлось по запросу «{q}». Попробуйте «специальности», «приём» или «новости».
            </p>
          ) : (
            <ul>
              {results.map((r, i) => (
                <li key={i} className="border-b border-paper/10">
                  <a
                    href={r.href}
                    onClick={(e) => {
                      if (r.href.startsWith("#")) {
                        e.preventDefault();
                        onClose();
                        setTimeout(() => goAnchor(r.href), 80);
                      }
                    }}
                    className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-amber2"
                  >
                    <span className="min-w-0">
                      <span className="mr-3 font-mono text-[10.5px] uppercase tracking-widest text-amber2/80">{r.type}</span>
                      <span className="text-[15px] font-medium">{r.label}</span>
                    </span>
                    <IconArrowUpRight className="h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= Подвал ================= */

export function Footer() {
  return (
    <footer className="bg-navydeep text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <IconLogo className="h-11 w-11" />
            <div>
              <p className="font-display text-[15px] font-bold">Серпуховский колледж</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
                ГБПОУ Московской области
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-paper/65">
            Государственное бюджетное профессиональное образовательное учреждение
            Московской области. Готовим специалистов по федеральному проекту
            «Профессионалитет» — от станка до кода.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={CONTACTS.vk} target="_blank" rel="noreferrer" aria-label="ВКонтакте" className="rounded border border-paper/20 p-2.5 transition-all hover:-translate-y-0.5 hover:border-amber2 hover:text-amber2">
              <IconVk className="h-5 w-5" />
            </a>
            <a href={CONTACTS.max} target="_blank" rel="noreferrer" aria-label="MAX" className="rounded border border-paper/20 p-2.5 transition-all hover:-translate-y-0.5 hover:border-amber2 hover:text-amber2">
              <IconMax className="h-5 w-5" />
            </a>
            <a href="https://pos.gosuslugi.ru/" target="_blank" rel="noreferrer" aria-label="Госуслуги" className="rounded border border-paper/20 p-2.5 font-display text-[11px] font-bold transition-all hover:-translate-y-0.5 hover:border-amber2 hover:text-amber2">
              ГУ
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-amber2">Разделы</p>
          <ul className="space-y-2.5 text-[14px]">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={(e) => navClick(e, n.href)} className="text-paper/70 transition-colors hover:text-amber2">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-amber2">Абитуриенту</p>
          <ul className="space-y-2.5 text-[14px]">
            {ADMISSION_LINKS.slice(0, 6).map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer" className="text-paper/70 transition-colors hover:text-amber2">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-amber2">Контакты</p>
          <ul className="space-y-3 text-[14px] text-paper/70">
            <li className="flex gap-2.5">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-amber2" />
              {CONTACTS.address}
            </li>
            <li>
              <a href={CONTACTS.phoneHref} className="flex gap-2.5 transition-colors hover:text-amber2">
                <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-amber2" />
                {CONTACTS.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACTS.email}`} className="flex gap-2.5 break-all transition-colors hover:text-amber2">
                <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-amber2" />
                {CONTACTS.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-[12.5px] text-paper/50 sm:px-6">
          <p>© 2026 ГБПОУ МО «Серпуховский колледж». При использовании материалов ссылка обязательна.</p>
          <div className="flex gap-5">
            <a href="https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/dokumenty" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber2">
              Сведения об организации
            </a>
            <a href="https://mo.mosreg.ru/" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber2">
              Министерство образования МО
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
