import { useState } from "react";
import type { FormEvent } from "react";
import { PageShell } from "../components/Chrome";
import { Contacts } from "../components/Community";
import { CAMPUSES, CONTACTS } from "../data";
import { IconCheck, IconClock, Reveal, SectionHead } from "../ui";

type Errors = Partial<Record<"name" | "contact" | "message" | "agree", string>>;

function FeedbackForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Укажите имя (минимум 2 символа)";
    if (!/(@|\+?\d[\d\s\-()]{6,})/.test(contact.trim()))
      next.contact = "Укажите корректный телефон или e-mail";
    if (message.trim().length < 10) next.message = "Опишите вопрос подробнее (от 10 символов)";
    if (!agree) next.agree = "Нужно согласие на обработку данных";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  };

  const inputCls = (bad?: string) =>
    `w-full rounded-sm border bg-paper px-4 py-3.5 text-[14px] text-ink outline-none transition-all duration-300 placeholder:text-ink2/60 focus:border-accent focus:ring-2 focus:ring-accent/25 ${
      bad ? "border-accent" : "border-line"
    }`;

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-sm border border-line bg-card p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-navy-deep">
          <IconCheck className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-xl font-black text-ink">Сообщение отправлено</h3>
        <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ink2">
          Спасибо, {name.trim()}! Ответим на {contact.trim()} в течение одного рабочего дня.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setName("");
            setContact("");
            setMessage("");
            setAgree(false);
          }}
          className="mt-7 rounded border border-line px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-wider text-ink2 transition-colors hover:border-accent hover:text-accent"
        >
          Написать ещё
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-sm border border-line bg-card p-7 md:p-9">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Обратная связь</p>
      <h3 className="mt-3 font-display text-xl font-black text-ink">Напишите нам</h3>
      <p className="mt-2 text-[13.5px] text-ink2">
        Вопросы о приёме, обучении или документах — ответим на почту или по телефону.
      </p>

      <div className="mt-7 space-y-5">
        <div>
          <label htmlFor="fb-name" className="mb-1.5 block font-mono text-[11px] font-semibold uppercase tracking-widest text-ink2">
            Ваше имя *
          </label>
          <input
            id="fb-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Иван"
            className={inputCls(errors.name)}
          />
          {errors.name && <p className="mt-1.5 text-[12px] font-medium text-accent">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="fb-contact" className="mb-1.5 block font-mono text-[11px] font-semibold uppercase tracking-widest text-ink2">
            Телефон или e-mail *
          </label>
          <input
            id="fb-contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="+7 900 000-00-00"
            className={inputCls(errors.contact)}
          />
          {errors.contact && <p className="mt-1.5 text-[12px] font-medium text-accent">{errors.contact}</p>}
        </div>

        <div>
          <label htmlFor="fb-message" className="mb-1.5 block font-mono text-[11px] font-semibold uppercase tracking-widest text-ink2">
            Сообщение *
          </label>
          <textarea
            id="fb-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Хочу узнать о поступлении на «Сварочное производство»…"
            className={`${inputCls(errors.message)} resize-none`}
          />
          {errors.message && <p className="mt-1.5 text-[12px] font-medium text-accent">{errors.message}</p>}
        </div>

        <div>
          <label className="group flex cursor-pointer items-start gap-3 text-[12.5px] leading-relaxed text-ink2">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
            />
            <span>
              Согласен(на) на обработку персональных данных в соответствии с 152-ФЗ.
              Данные используются только для ответа на обращение.
            </span>
          </label>
          {errors.agree && <p className="mt-1.5 text-[12px] font-medium text-accent">{errors.agree}</p>}
        </div>

        <button
          type="submit"
          className="group relative w-full overflow-hidden rounded bg-navy py-4 font-display text-[13px] font-bold text-paper transition-colors hover:bg-navy-deep"
        >
          <span className="relative z-10">Отправить сообщение</span>
          <span className="absolute inset-y-0 left-0 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          <span className="absolute inset-0 z-10 flex items-center justify-center font-display text-[13px] font-bold text-navy-deep opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Отправить сообщение
          </span>
        </button>
      </div>
    </form>
  );
}

function HoursCard() {
  const rows = [
    { d: "Понедельник – пятница", h: "8:00 – 17:00" },
    { d: "Приёмная комиссия", h: "9:00 – 16:00, пн–пт" },
    { d: "Обеденный перерыв", h: "12:00 – 13:00" },
    { d: "Суббота, воскресенье", h: "выходной" },
  ];
  return (
    <section className="bg-paper2 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="rounded-sm border border-line bg-card p-7 md:p-9">
            <SectionHead
              label="Режим работы"
              title={<>Когда нас <span className="text-accent">застать</span></>}
            />
            <div className="mt-6">
              {rows.map((r) => (
                <div
                  key={r.d}
                  className="group flex items-center justify-between gap-6 border-b border-line py-4 transition-colors last:border-b-0 hover:pl-2"
                >
                  <span className="flex items-center gap-3 text-[14px] font-medium text-ink">
                    <IconClock className="h-4.5 w-4.5 text-accent" />
                    {r.d}
                  </span>
                  <span className="font-mono text-[13px] font-bold text-ink2 transition-colors group-hover:text-accent">
                    {r.h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5">
          <div className="flex h-full flex-col justify-between rounded-sm border border-line bg-navy p-7 text-paper md:p-9">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber2">Корпуса рядом</p>
              <div className="mt-6 space-y-4">
                {CAMPUSES.map((c, i) => (
                  <div key={c.name} className="flex items-baseline gap-4 border-b border-paper/12 pb-4 last:border-b-0">
                    <span className="font-display text-xl font-black text-amber2">0{i + 1}</span>
                    <span>
                      <span className="block font-display text-[14px] font-bold">{c.name} · {c.addr}</span>
                      <span className="text-[12.5px] text-paper/60">{c.note}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-8 text-[13px] leading-relaxed text-paper/60">
              Все корпуса — в пяти минутах ходьбы друг от друга. От железнодорожной
              станции Серпухов — автобусы № 23 и № 102 до остановки «Колледж».
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ContactsPage() {
  return (
    <>
      <PageShell
        index="07"
        label="Контакты"
        title="Мы в Большивике,"
        accent="юг Подмосковья"
        desc="Корпуса колледжа и общежитие — на одной улице. Приезжайте на экскурсию, звоните в приёмную комиссию или напишите нам через форму."
      >
        <div className="flex flex-wrap gap-6 font-mono text-[12.5px] text-paper/70">
          <a href={CONTACTS.phoneHref} className="transition-colors hover:text-amber2">{CONTACTS.phone}</a>
          <span className="text-accent">✦</span>
          <a href={`mailto:${CONTACTS.email}`} className="transition-colors hover:text-amber2">{CONTACTS.email}</a>
          <span className="text-accent">✦</span>
          <span>{CONTACTS.address}</span>
        </div>
      </PageShell>
      <Contacts />
      <section className="bg-paper2 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FeedbackForm />
        </div>
      </section>
      <HoursCard />
    </>
  );
}
