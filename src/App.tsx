import { useEffect, useState } from "react";
import { AV_DEFAULT, Footer, Header, NavBar, SearchOverlay, TopBar, type AvState } from "./components/Chrome";
import { About, Opening } from "./components/Opening";
import { Events, Programs, Steps } from "./components/Programs";
import { Audiences, Contacts, Gosuslugi, News } from "./components/Community";
import { IconChevron } from "./ui";

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
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      <div className="noise-layer" aria-hidden />

      <TopBar av={av} setAv={setAv} />
      <Header />
      <NavBar onSearch={() => setSearchOpen(true)} />

      <main>
        <Opening />
        <About />
        <Programs />
        <Steps />
        <Events />
        <News />
        <Audiences />
        <Gosuslugi />
        <Contacts />
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
  );
}
