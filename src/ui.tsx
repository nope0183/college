import type { ReactNode, Ref, SVGProps } from "react";
import { useInView } from "./hooks";

/* ================= Иконки (рисованные вручную) ================= */

type IP = SVGProps<SVGSVGElement>;

const base = (props: IP) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const IconEye = (p: IP) => (
  <svg {...base(p)}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v2M4.6 5.4 6 6.8M19.4 5.4 18 6.8" />
  </svg>
);
export const IconSearch = (p: IP) => (
  <svg {...base(p)}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 5 5" />
  </svg>
);
export const IconPhone = (p: IP) => (
  <svg {...base(p)}>
    <path d="M5.5 3.5h3l1.7 4.2-2.1 1.6a12.5 12.5 0 0 0 6.6 6.6l1.6-2.1 4.2 1.7v3a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 3.5 5.6a2 2 0 0 1 2-2.1Z" />
  </svg>
);
export const IconMail = (p: IP) => (
  <svg {...base(p)}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m4 7.5 8 6 8-6" />
  </svg>
);
export const IconPin = (p: IP) => (
  <svg {...base(p)}>
    <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);
export const IconArrowUpRight = (p: IP) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M9.5 7H17v7.5" />
  </svg>
);
export const IconArrowRight = (p: IP) => (
  <svg {...base(p)}>
    <path d="M4 12h15.5M13.5 6l6 6-6 6" />
  </svg>
);
export const IconClock = (p: IP) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);
export const IconDoc = (p: IP) => (
  <svg {...base(p)}>
    <path d="M6 3.5h8l4 4V20.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
    <path d="M14 3.5v4h4M8.5 12h7M8.5 15.5h7" />
  </svg>
);
export const IconCheck = (p: IP) => (
  <svg {...base(p)}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);
export const IconClose = (p: IP) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const IconBurger = (p: IP) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);
export const IconChevron = (p: IP) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const IconCap = (p: IP) => (
  <svg {...base(p)}>
    <path d="m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5Z" />
    <path d="M6.5 11.7V16c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3v-4.3M21.5 9.5v5.5" />
  </svg>
);
export const IconWeld = (p: IP) => (
  <svg {...base(p)}>
    <path d="m14 6 4 4-7.5 7.5-4-4L14 6Z" />
    <path d="m16.5 3.5 4 4M6.5 13.5 3 21l7.5-3.5M9 3l1.5 1.5M20 13.5 18.5 15" />
  </svg>
);
export const IconGear = (p: IP) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1" />
  </svg>
);
export const IconCar = (p: IP) => (
  <svg {...base(p)}>
    <path d="M4.5 12 6 7.5A2 2 0 0 1 7.9 6h8.2A2 2 0 0 1 18 7.5L19.5 12M3 12h18v4.5h-2.3M3 16.5V12m0 4.5h2.3m4.2 0h5m4.2 0h2.3v-4.5" />
    <circle cx="7.4" cy="16.5" r="1.9" />
    <circle cx="16.6" cy="16.5" r="1.9" />
  </svg>
);
export const IconTractor = (p: IP) => (
  <svg {...base(p)}>
    <circle cx="7" cy="16.5" r="3.6" />
    <circle cx="18" cy="15.5" r="2.4" />
    <path d="M10.6 16.5h5M7 12.9V7.5h6l2.2 4.6h4v3.4M4.5 7.5H3M13 7.5V5h3" />
  </svg>
);
export const IconCode = (p: IP) => (
  <svg {...base(p)}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15" />
  </svg>
);
export const IconChip = (p: IP) => (
  <svg {...base(p)}>
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <rect x="10.2" y="10.2" width="3.6" height="3.6" />
    <path d="M9.5 7V4M14.5 7V4M9.5 20v-3M14.5 20v-3M7 9.5H4M7 14.5H4M20 9.5h-3M20 14.5h-3" />
  </svg>
);
export const IconChart = (p: IP) => (
  <svg {...base(p)}>
    <path d="M4 20V11M10 20V5M16 20v-8M2.5 20h19" />
  </svg>
);
export const IconChef = (p: IP) => (
  <svg {...base(p)}>
    <path d="M7.5 2.5v8a3.2 3.2 0 0 0 6.4 0v-8M10.7 2.5v18.5" />
    <path d="M17.5 2.5c-1.8 1.6-2.7 4-2.7 6.5 0 2 .9 3.2 2.7 3.2v9.3" />
  </svg>
);
export const IconCompass = (p: IP) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </svg>
);
export const IconFactory = (p: IP) => (
  <svg {...base(p)}>
    <path d="M3.5 20.5V9.5l5.5 3.4V9.5l5.5 3.4v-2.4l6-3v13H3.5Z" />
    <path d="M7.5 17h2M12.5 17h2M17.5 5V3h2.5v3.4" />
  </svg>
);
export const IconBoard = (p: IP) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="12" rx="1.5" />
    <path d="M12 16v4M8 20h8M7 8h6M7 11.5h4" />
  </svg>
);
export const IconVk = (p: IP) => (
  <svg {...base(p)}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <path d="m6 8.5 2.6 7L11 8.5M14.5 8.5v7M18.5 8.5l-3.2 3.5 3.4 3.5" strokeWidth="1.5" />
  </svg>
);
export const IconMax = (p: IP) => (
  <svg {...base(p)}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <path d="M6.5 16V8.8l5.5 5 5.5-5V16" strokeWidth="1.5" />
  </svg>
);
export const IconBolt = (p: IP) => (
  <svg {...base(p)}>
    <path d="M13 2.5 4.5 14H11l-1.5 7.5L18 10h-6.5l1.5-7.5Z" />
  </svg>
);
export const IconDialog = (p: IP) => (
  <svg {...base(p)}>
    <path d="M21 11.5a8 8 0 1 1-3.4-6.6L21 4l-.9 4" />
    <path d="m8.5 12 2.4 2.4L15.5 9.5" />
  </svg>
);
export const IconLogo = (p: IP) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden {...p}>
    <path
      d="M24 3.5 41.3 13.7v20.6L24 44.5 6.7 34.3V13.7L24 3.5Z"
      fill="var(--accent)"
    />
    <path
      d="M24 8.5 37 16.2v15.6L24 39.5 11 31.8V16.2L24 8.5Z"
      stroke="var(--navy-deep)"
      strokeWidth="1.6"
    />
    <path
      d="M19.2 20.2a4.4 4.4 0 1 1 2.6 4M30 16.5c-2.3 0-3.6 1.5-3.6 3.4v8.2c0 1.9 1.3 3.4 3.6 3.4s3.6-1.5 3.6-3.4V26h-3.2"
      stroke="var(--navy-deep)"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

export const ICONS: Record<string, (p: IP) => ReactNode> = {
  weld: IconWeld,
  gear: IconGear,
  car: IconCar,
  tractor: IconTractor,
  code: IconCode,
  chip: IconChip,
  chart: IconChart,
  chef: IconChef,
  compass: IconCompass,
  cap: IconCap,
  factory: IconFactory,
  board: IconBoard,
};

/* ================= Reveal ================= */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ================= SectionHead ================= */

export function SectionHead({
  label,
  title,
  desc,
  light = false,
  right,
}: {
  label: string;
  title: ReactNode;
  desc?: string;
  light?: boolean;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6 md:gap-10">
      <div className="max-w-2xl">
        <div
          className={`mb-4 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] ${
            light ? "text-amber2" : "text-accent"
          }`}
        >
          <span className={`h-px w-10 ${light ? "bg-amber2" : "bg-accent"}`} />
          {label}
        </div>
        <h2
          className={`font-display text-[1.6rem] leading-[1.12] font-bold sm:text-3xl md:text-[2.6rem] ${
            light ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {desc && (
          <p
            className={`mt-5 max-w-xl text-[15px] leading-relaxed md:text-base ${
              light ? "text-paper/70" : "text-ink2"
            }`}
          >
            {desc}
          </p>
        )}
      </div>
      {right}
    </div>
  );
}

/* ================= Marquee ================= */

export function Marquee({ items }: { items: string[] }) {
  const Row = ({ hidden }: { hidden?: boolean }) => (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center"
    >
      {items.map((t, i) => (
        <span
          key={i}
          className="flex items-center font-mono text-[13px] font-semibold uppercase tracking-[0.18em] whitespace-nowrap"
        >
          <span className="px-6">{t}</span>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="currentColor" aria-hidden>
            <path d="M12 2c.6 5.6 4.4 9.4 10 10-5.6.6-9.4 4.4-10 10-.6-5.6-4.4-9.4-10-10 5.6-.6 9.4-4.4 10-10Z" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee flex overflow-hidden border-y border-navy-deep/20 bg-accent py-3.5 text-navy-deep select-none">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
