import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion(): boolean {
  const [prm, setPrm] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrm(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrm(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return prm;
}

export function useInView<T extends Element>(
  threshold = 0.16,
  rootMargin = "0px 0px -8% 0px",
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return [ref, inView];
}

export function useCountUp(target: number, start: boolean, duration = 1700): number {
  const prm = usePrefersReducedMotion();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (prm) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration, prm]);
  return value;
}

export function useCountdown(targetISO: string) {
  const target = new Date(targetISO).getTime();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const diff = target - now;
  const passed = diff <= 0;
  const abs = Math.abs(diff);
  const d = Math.floor(abs / 86_400_000);
  const h = Math.floor((abs % 86_400_000) / 3_600_000);
  const m = Math.floor((abs % 3_600_000) / 60_000);
  const s = Math.floor((abs % 60_000) / 1000);
  return { d, h, m, s, passed };
}

const SCRAMBLE_CHARS = "АБВГДЕЖЗИКЛМНОПРСТУФХЦШЩЫЭЮЯ0123456789#/\\*+";

export function useScramble(text: string, active: boolean): string {
  const prm = usePrefersReducedMotion();
  const [out, setOut] = useState(prm ? text : text.replace(/[^\s]/g, " "));
  useEffect(() => {
    if (!active) return;
    if (prm) {
      setOut(text);
      return;
    }
    let frame = 0;
    const totalFrames = 34;
    const id = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const settled = Math.floor(progress * text.length);
      let result = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") {
          result += " ";
        } else if (i < settled) {
          result += ch;
        } else {
          result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      setOut(result);
      if (frame >= totalFrames) {
        setOut(text);
        window.clearInterval(id);
      }
    }, 34);
    return () => window.clearInterval(id);
  }, [text, active, prm]);
  return out;
}
