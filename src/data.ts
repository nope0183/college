export const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/c4012e50-8021-4574-912a-10fc23988f3f/_result.png",
  weld: "https://image.qwenlm.ai/generated-images/3ecc4706-2a0c-4f5d-a329-f0f4e012040a/_result.png",
  open: "https://image.qwenlm.ai/generated-images/5e45e318-513c-49fe-9dd4-02e9ef203be2/_result.png",
  it: "https://image.qwenlm.ai/generated-images/6a1ea661-8624-40b0-a36d-3b9a35223183/_result.png",
  partner: "https://image.qwenlm.ai/generated-images/230f47e6-6985-4568-a610-7c80613366fe/_result.png",
  campus: "https://image.qwenlm.ai/generated-images/229213e6-d7c3-476b-a180-fff7566db42a/_result.png",
};

export const CONTACTS = {
  address: "г.о. Серпухов, п. Большевик, ул. Ленина, 52",
  phone: "8 (4967) 35-55-98",
  phoneHref: "tel:+74967355598",
  email: "mo_serpkolledzh@mosreg.ru",
  vk: "https://vk.com/serpkoll_professionalitet",
  max: "https://max.ru/id5043055814_gos",
  yandexMap:
    "https://yandex.ru/maps/org/serpukhovskiy_kolledzh_korpus_3/1221657155/",
};

export const NAV = [
  { label: "О колледже", href: "#about" },
  { label: "Специальности", href: "#programs" },
  { label: "Абитуриенту", href: "#steps" },
  { label: "Дни открытых дверей", href: "#events" },
  { label: "Новости", href: "#news" },
  { label: "Студенту", href: "#audiences" },
  { label: "Контакты", href: "#contacts" },
];

export const TICKER = [
  "Приём 2026",
  "ФП «Профессионалитет»",
  "Сварочное производство",
  "Информационные системы",
  "Технология машиностроения",
  "245 бюджетных мест",
  "Экономика и бухучёт",
  "Общежитие для иногородних",
  "Цифровые технологии",
  "Туризм и гостеприимство",
];

export type FieldKey = "eng" | "it" | "econ" | "service";

export const FIELDS: { key: FieldKey | "all"; label: string }[] = [
  { key: "all", label: "Все программы" },
  { key: "eng", label: "Инженерия и техника" },
  { key: "it", label: "Цифровые технологии" },
  { key: "econ", label: "Экономика и управление" },
  { key: "service", label: "Сервис и туризм" },
];

export interface Program {
  code: string;
  title: string;
  field: FieldKey;
  duration: string;
  qualification: string;
  seats: number;
  icon: string;
}

export const PROGRAMS: Program[] = [
  {
    code: "15.02.12",
    title: "Сварочное производство",
    field: "eng",
    duration: "3 г. 10 мес.",
    qualification: "техник-технолог сварочного производства",
    seats: 25,
    icon: "weld",
  },
  {
    code: "15.02.16",
    title: "Технология машиностроения",
    field: "eng",
    duration: "3 г. 10 мес.",
    qualification: "техник-технолог",
    seats: 25,
    icon: "gear",
  },
  {
    code: "23.02.07",
    title: "Техобслуживание и ремонт двигателей и агрегатов автомобилей",
    field: "eng",
    duration: "3 г. 10 мес.",
    qualification: "автотехник",
    seats: 25,
    icon: "car",
  },
  {
    code: "35.02.16",
    title: "Эксплуатация и ремонт сельскохозяйственной техники",
    field: "eng",
    duration: "3 г. 10 мес.",
    qualification: "техник-механик",
    seats: 25,
    icon: "tractor",
  },
  {
    code: "09.02.07",
    title: "Информационные системы и программирование",
    field: "it",
    duration: "3 г. 10 мес.",
    qualification: "разработчик веб и мультимедийных приложений",
    seats: 25,
    icon: "code",
  },
  {
    code: "09.02.01",
    title: "Компьютерные системы и комплексы",
    field: "it",
    duration: "3 г. 10 мес.",
    qualification: "техник по компьютерным системам",
    seats: 25,
    icon: "chip",
  },
  {
    code: "38.02.01",
    title: "Экономика и бухгалтерский учёт (по отраслям)",
    field: "econ",
    duration: "2 г. 10 мес.",
    qualification: "бухгалтер",
    seats: 25,
    icon: "chart",
  },
  {
    code: "43.02.15",
    title: "Поварское и кондитерское дело",
    field: "service",
    duration: "3 г. 10 мес.",
    qualification: "повар, кондитер",
    seats: 25,
    icon: "chef",
  },
  {
    code: "43.02.16",
    title: "Туризм и гостеприимство",
    field: "service",
    duration: "2 г. 10 мес.",
    qualification: "специалист по туризму и гостеприимству",
    seats: 20,
    icon: "compass",
  },
];

export interface NewsItem {
  id: string;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  img?: string;
  featured?: boolean;
}

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    date: "10 апреля 2026",
    tag: "Чемпионаты",
    title:
      "Студенты колледжа — призёры регионального этапа чемпионата «Профессионалы»",
    excerpt:
      "Команда компетенции «Сварочные технологии» взяла серебро, а в «Веб-технологиях» — бронзу. Поздравляем ребят и наставников с выходом в отборочный этап!",
    img: IMG.weld,
    featured: true,
  },
  {
    id: "n2",
    date: "5 апреля 2026",
    tag: "Абитуриенту",
    title: "Открыта регистрация на День открытых дверей 18 апреля",
    excerpt:
      "Экскурсия по мастерским, встреча с преподавателями и консультация приёмной комиссии. Вход свободный по регистрации.",
    img: IMG.open,
  },
  {
    id: "n3",
    date: "28 марта 2026",
    tag: "Профессионалитет",
    title: "В колледже открылась новая мастерская станков с ЧПУ",
    excerpt:
      "Шесть современных обрабатывающих центров закуплены по федеральному проекту «Профессионалитет». Первые занятия — уже в мае.",
    img: IMG.it,
  },
  {
    id: "n4",
    date: "15 марта 2026",
    tag: "Партнёрство",
    title:
      "Подписан договор о целевой подготовке с машиностроительным предприятием",
    excerpt:
      "Студенты инженерных специальностей получат оплачиваемую практику и гарантированное трудоустройство с третьего курса.",
    img: IMG.partner,
  },
  {
    id: "n5",
    date: "27 февраля 2026",
    tag: "Олимпиады",
    title: "Итоги областной олимпиады по математике: три призовых места",
    excerpt:
      "Первокурсники специальности «Информационные системы» показали лучший результат среди учреждений СПО юга Подмосковья.",
  },
];

export interface OpenDay {
  id: string;
  day: string;
  month: string;
  weekday: string;
  time: string;
  place: string;
  theme: string;
}

export const OPEN_DAYS: OpenDay[] = [
  {
    id: "od1",
    day: "18",
    month: "апреля",
    weekday: "суббота",
    time: "11:00",
    place: "Корпус 1, актовый зал",
    theme: "Все специальности, экскурсия по мастерским, ответы приёмной комиссии",
  },
  {
    id: "od2",
    day: "16",
    month: "мая",
    weekday: "суббота",
    time: "11:00",
    place: "Корпус 1, актовый зал",
    theme: "День «Профессионалитета»: мастер-классы от наставников предприятий",
  },
  {
    id: "od3",
    day: "20",
    month: "июня",
    weekday: "суббота",
    time: "10:00",
    place: "Приёмная комиссия, каб. 104",
    theme: "Старт приёма документов: консультации и помощь с подачей через Госуслуги",
  },
];

export interface Step {
  num: string;
  title: string;
  deadline: string;
  text: string;
  chips: string[];
}

export const STEPS: Step[] = [
  {
    num: "01",
    title: "Выберите специальность",
    deadline: "до 20 июня",
    text: "Изучите 9 программ колледжа, сравните условия приёма, приходите на День открытых дверей или задайте вопрос в приёмной комиссии.",
    chips: ["9 специальностей", "бюджет и платное"],
  },
  {
    num: "02",
    title: "Подайте заявление",
    deadline: "20 июня — 15 августа",
    text: "Через портал Госуслуг (ЕПГУ), лично в приёмной комиссии, по почте или через операторов почтовой связи. Можно подать заявление в несколько колледжей.",
    chips: ["Госуслуги", "лично", "по почте"],
  },
  {
    num: "03",
    title: "Соберите документы",
    deadline: "вместе с заявлением",
    text: "Паспорт и его копия, аттестат об образовании, 4 фотографии 3×4, медицинская справка 086/у — для ряда специальностей, СНИЛС.",
    chips: ["аттестат", "справка 086/у", "4 фото"],
  },
  {
    num: "04",
    title: "Конкурс аттестатов",
    deadline: "по среднему баллу",
    text: "Зачисление проводится по конкурсу средних баллов аттестата. Следите за рейтинговыми списками на стенде и на сайте колледжа.",
    chips: ["рейтинговые списки", "без вступительных"],
  },
  {
    num: "05",
    title: "Приказы о зачислении",
    deadline: "17–19 августа",
    text: "Оригинал аттестата — до 12:00 15 августа. Приказы о зачислении публикуются 17–19 августа. Добро пожаловать в студенты!",
    chips: ["оригинал аттестата", "студенческий билет"],
  },
];

export const STATS = [
  { value: 55, suffix: " лет", label: "готовим кадры для региона", note: "колледж основан в 1969 году" },
  { value: 1400, suffix: "+", label: "студентов учатся сегодня", note: "очная и заочная формы" },
  { value: 92, suffix: "%", label: "выпускников трудоустроены", note: "в первый год после диплома" },
  { value: 40, suffix: "+", label: "предприятий-партнёров", note: "практика и целевое обучение" },
];

export interface Audience {
  key: string;
  label: string;
  icon: string;
  desc: string;
  links: { label: string; href: string }[];
}

export const AUDIENCES: Audience[] = [
  {
    key: "student",
    label: "Студенту",
    icon: "cap",
    desc: "Расписания, материалы, поддержка — всё для учебной недели без лишних кликов.",
    links: [
      { label: "Расписание уроков", href: "https://serp-koll.ru/studentu/raspisanie-urokov" },
      { label: "Расписание звонков", href: "https://serp-koll.ru/studentu/raspisanie-zvonkov" },
      { label: "Методические материалы", href: "https://serp-koll.ru/studentu/metodicheskie-materially" },
      { label: "Социально-психологическая помощь", href: "https://serp-koll.ru/studentu/sotsialno-psikhologicheskaya-pomoshch" },
      { label: "Дополнительное образование", href: "https://serp-koll.ru/studentu/dopolnitelnoe-obrazovanie" },
      { label: "ГТО", href: "https://serp-koll.ru/studentu/gto" },
      { label: "Телефоны доверия", href: "https://serp-koll.ru/studentu/telefony-doveriya" },
      { label: "Информация об общежитии", href: "https://serp-koll.ru/abiturientu/informatsiya-ob-obshchezhitii" },
    ],
  },
  {
    key: "graduate",
    label: "Выпускнику",
    icon: "factory",
    desc: "Карьерные маршруты после диплома: вузы-партнёры, стажировки и работодатели.",
    links: [
      { label: "Предложения вузов", href: "https://serp-koll.ru/vypuskniku/predlozheniya-vuzov" },
      { label: "Трудоустройство", href: "https://serp-koll.ru/vypuskniku/trudoustrojstvo" },
      { label: "Стажировки и повышение квалификации", href: "https://serp-koll.ru/vypuskniku/stazhirovki-i-povyshenie-kvalifikatsii" },
      { label: "Наши партнёры", href: "https://serp-koll.ru/vypuskniku/nashi-partnery" },
      { label: "Полезные ссылки", href: "https://serp-koll.ru/vypuskniku/poleznye-ssylki" },
    ],
  },
  {
    key: "teacher",
    label: "Педагогу",
    icon: "board",
    desc: "Аттестация, методическая служба и копилка лучших материалов преподавателей.",
    links: [
      { label: "Аттестация", href: "https://serp-koll.ru/pedagogu/attestatsiya" },
      { label: "Методическая служба", href: "https://serp-koll.ru/pedagogu/metodicheskaya-sluzhba" },
      { label: "Методическая копилка", href: "https://serp-koll.ru/pedagogu/metodicheskaya-kopilka" },
      { label: "Анкета удовлетворённости условиями работы", href: "https://forms.yandex.ru/u/651fc94bc769f16313d60a32/" },
      { label: "Полезные ссылки", href: "https://serp-koll.ru/images/PEDAGOGU/polezn-ssilk-prep.pdf" },
    ],
  },
];

export const DEPARTMENTS = [
  { label: "Основные сведения", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/osnovnye-svedeniya" },
  { label: "Документы", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/dokumenty" },
  { label: "Образование", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/obrazovanie" },
  { label: "Педагогический состав", href: "https://serp-koll.ru/images/SVED-POO/ped_sostav_SK.pdf" },
  { label: "Вакантные места", href: "https://serp-koll.ru/images/OBRAZOV-NEV/vak-mesta.pdf" },
  { label: "Стипендии и меры поддержки", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/stipendii-i-mery-podderzhki-obuchayushchikhsya" },
  { label: "Питание", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/organizatsiya-pitaniya-v-obrazovatelnoj-organizatsii" },
  { label: "Доступная среда", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/materialno-tekhnicheskoe-obespechenie-i-osnashchennost-obrazovatelnogo-protsessa-dostupnaya-sreda" },
];

export const ADMISSION_LINKS = [
  { label: "Приёмная комиссия", href: "https://serp-koll.ru/abiturientu/priemnaya-komissiya" },
  { label: "ФП «Профессионалитет»", href: "https://serp-koll.ru/abiturientu/fp-professionalitet" },
  { label: "Контрольные цифры приёма", href: "https://serp-koll.ru/abiturientu/kontrolnye-tsifry-priema" },
  { label: "Правила приёма", href: "https://serp-koll.ru/images/SVED-POO/LOK-AKTI/1/1.4.pdf" },
  { label: "Документы для поступления", href: "https://serp-koll.ru/images/ABITURIENTU/dokumenti-dly-postupl.pdf" },
  { label: "Списки на зачисление", href: "https://serp-koll.ru/abiturientu/spiski-na-zachislenie" },
  { label: "Инструкция по подаче через ЕПГУ", href: "https://serp-koll.ru/images/ABITURIENTU/Instrukciya_podachi_zayavleniya_cherez_EPGU.pdf" },
  { label: "Образовательный кредит", href: "https://serp-koll.ru/abiturientu/obrazovatelnoe-kreditovanie-posobie-dlya-studentov-spo" },
];

export const CAMPUSES = [
  { name: "Корпус 1 · учебный", addr: "п. Большевик, ул. Ленина, 52", note: "приёмная комиссия, каб. 104" },
  { name: "Корпус 2 · мастерские", addr: "п. Большевик, ул. Ленина, 54", note: "сварочная, ЧПУ, автодром" },
  { name: "Общежитие", addr: "п. Большевик, ул. Ленина, 53", note: "для иногородних студентов" },
];
