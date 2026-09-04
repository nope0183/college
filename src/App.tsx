import { useEffect, useState } from "react";
import { HashRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import {
  AV_DEFAULT,
  Footer,
  Header,
  NavBar,
  SearchOverlay,
  TopBar,
  type AvState,
} from "./components/Chrome";
import { IconChevron } from "./ui";
import HomePage from "./pages/HomePage";
import ProgramsPage from "./pages/ProgramsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import { NewsArticlePage, NewsListPage } from "./pages/NewsPage";
import StudentPage from "./pages/StudentPage";
import SvedeniaPage from "./pages/SvedeniaPage";
import ContactsPage from "./pages/ContactsPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFoundPage() {
  return (
    <section className="relative overflow-hidden bg-navy py-32 text-paper">
      <div className="bg-blueprint pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-display text-[7rem] leading-none font-black text-accent sm:text-[9rem]">404</p>
        <h1 className="mt-4 font-display text-2xl font-black sm:text-3xl">Такой страницы нет</h1>
        <p className="mx-auto mt-4 max-w-md text-[14.5px] leading-relaxed text-paper/70">
          Возможно, ссылка устарела или в адресе опечатка. Начните с главной — там всё самое важное о приёме 2026.
        </p>
        <Link
          to="/"
          className="mt-9 inline-block rounded bg-accent px-8 py-4 font-display text-[13px] font-bold text-navy-deep transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber2"
        >
          На главную
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  const [av, setAv] = useState<AvState>(AV_DEFAULT);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  /* применение классов версии для слабовидящих */
  useEffect(() => {
    const list = document.documentElement.classList;
    list.toggle("av", av.enabled);
    list.toggle("av-size-2", av.enabled && av.size === 2);
    list.toggle("av-size-3", av.enabled && av.size === 3);
    list.toggle("av-font-serif", av.enabled && av.font === "serif");
    list.toggle("av-font-sans", av.enabled && av.font === "sans");
    (["light", "dark", "beige"] as const).forEach((s) =>
      list.toggle(`av-scheme-${s}`, av.enabled && av.scheme === s),
    );
    list.toggle("av-ls-2", av.enabled && av.ls === 2);
    list.toggle("av-ls-3", av.enabled && av.ls === 3);
    list.toggle("av-noimg", av.enabled && !av.images);
  }, [av]);

  /* кнопка «наверх» */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const prm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prm ? "auto" : "smooth" });
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-paper font-body text-ink antialiased">
        <div className="noise-layer" aria-hidden />

        <TopBar av={av} setAv={setAv} />
        <Header />
        <NavBar onSearch={() => setSearchOpen(true)} />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programmy" element={<ProgramsPage />} />
            <Route path="/abiturientu" element={<AdmissionsPage />} />
            <Route path="/novosti" element={<NewsListPage />} />
            <Route path="/novosti/:id" element={<NewsArticlePage />} />
            <Route path="/studentu" element={<StudentPage />} />
            <Route path="/svedeniya" element={<SvedeniaPage />} />
            <Route path="/kontakty" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

        <button
          onClick={toTop}
          aria-label="Наверх"
          className={`fixed bottom-6 right-6 z-40 rounded-sm border border-paper/20 bg-navy p-3.5 text-paper shadow-xl shadow-navy-deep/30 transition-all duration-300 hover:bg-accent hover:text-navy-deep ${
            showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <IconChevron className="h-5 w-5 rotate-180" />
        </button>
      </div>
    </HashRouter>
  );
}
