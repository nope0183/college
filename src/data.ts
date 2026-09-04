export type FieldKey = "engineering" | "it" | "economy" | "service";

export type Program = {
  code: string;
  title: string;
  qualification: string;
  field: FieldKey;
  icon: string;
  duration: string;
  seats: number;
  paid: number;
  exams: string;
  careers: string[];
  partners: string;
};

export const FIELDS: { key: FieldKey | "all"; label: string }[] = [
  { key: "all", label: "Все направления" },
  { key: "engineering", label: "Инженерия и производство" },
  { key: "it", label: "IT и цифровые технологии" },
  { key: "economy", label: "Экономика и управление" },
  { key: "service", label: "Сервис и туризм" },
];

export const PROGRAMS: Program[] = [
  {
    code: "15.02.12",
    title: "Монтаж, техническое обслуживание и ремонт промышленного оборудования",
    qualification: "Техник-механик",
    field: "engineering",
    icon: "gear",
    duration: "3 г. 10 мес.",
    seats: 25,
    paid: 10,
    exams: "Конкурс аттестатов (средний балл)",
    careers: ["Техник-механик", "Слесарь-ремонтник", "Монтажник оборудования"],
    partners: "Машиностроительные предприятия Серпухова и юга Подмосковья",
  },
  {
    code: "15.02.08",
    title: "Сварочное производство",
    qualification: "Техник",
    field: "engineering",
    icon: "weld",
    duration: "3 г. 10 мес.",
    seats: 25,
    paid: 10,
    exams: "Конкурс аттестатов (средний балл)",
    careers: ["Сварщик", "Контролёр сварочных работ", "Мастер участка"],
    partners: "Предприятия металлообработки и строительного комплекса региона",
  },
  {
    code: "15.02.16",
    title: "Технология машиностроения",
    qualification: "Техник-технолог",
    field: "engineering",
    icon: "factory",
    duration: "3 г. 10 мес.",
    seats: 25,
    paid: 10,
    exams: "Конкурс аттестатов (средний балл)",
    careers: ["Техник-технолог", "Оператор станков с ЧПУ", "Наладчик"],
    partners: "Мастерские «Профессионалитета» с парком станков с ЧПУ",
  },
  {
    code: "13.02.07",
    title: "Электроснабжение (по отраслям)",
    qualification: "Техник-электромеханик",
    field: "engineering",
    icon: "board",
    duration: "3 г. 10 мес.",
    seats: 25,
    paid: 10,
    exams: "Конкурс аттестатов (средний балл)",
    careers: ["Электромонтёр", "Техник по эксплуатации электросетей", "Электромеханик"],
    partners: "Энергетические компании и предприятия ЖКХ городского округа",
  },
  {
    code: "09.02.07",
    title: "Информационные системы и программирование",
    qualification: "Разработчик веб и мультимедийных приложений",
    field: "it",
    icon: "code",
    duration: "3 г. 10 мес.",
    seats: 25,
    paid: 15,
    exams: "Конкурс аттестатов (средний балл)",
    careers: ["Веб-разработчик", "Тестировщик ПО", "Специалист техподдержки"],
    partners: "IT-компании Москвы и Московской области",
  },
  {
    code: "09.02.01",
    title: "Компьютерные системы и комплексы",
    qualification: "Техник по компьютерным системам",
    field: "it",
    icon: "chip",
    duration: "3 г. 10 мес.",
    seats: 25,
    paid: 10,
    exams: "Конкурс аттестатов (средний балл)",
    careers: ["Системный администратор", "Специалист по сетям", "Сервисный инженер"],
    partners: "Сервисные центры и корпоративные IT-отделы региона",
  },
  {
    code: "38.02.01",
    title: "Экономика и бухгалтерский учёт (по отраслям)",
    qualification: "Бухгалтер",
    field: "economy",
    icon: "chart",
    duration: "2 г. 10 мес.",
    seats: 25,
    paid: 15,
    exams: "Конкурс аттестатов (средний балл)",
    careers: ["Бухгалтер", "Экономист", "Специалист по налогам"],
    partners: "Предприятия и организации городского округа Серпухов",
  },
  {
    code: "43.02.10",
    title: "Туризм",
    qualification: "Специалист по туризму",
    field: "service",
    icon: "compass",
    duration: "2 г. 10 мес.",
    seats: 25,
    paid: 15,
    exams: "Конкурс аттестатов (средний балл)",
    careers: ["Менеджер по туризму", "Агент по бронированию", "Экскурсовод"],
    partners: "Туроператоры Подмосковья, музейно-выставочные площадки",
  },
  {
    code: "43.01.09",
    title: "Повар, кондитер",
    qualification: "Повар, кондитер",
    field: "service",
    icon: "chef",
    duration: "3 г. 10 мес.",
    seats: 25,
    paid: 15,
    exams: "Конкурс аттестатов (средний балл)",
    careers: ["Повар", "Кондитер", "Шеф-повар (с опытом)"],
    partners: "Рестораны и предприятия питания Москвы и области",
  },
];

export const DIRECTION_LABELS: Record<FieldKey, string> = {
  engineering: "Инженерия и производство",
  it: "IT и цифровые технологии",
  economy: "Экономика и управление",
  service: "Сервис и туризм",
};

export type NewsItem = {
  id: string;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  img?: string;
  featured?: boolean;
  body: string[];
};

export const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/bb8aaf19-2115-45a7-a12c-a070cac991bc/_result.png",
  weld: "https://image.qwenlm.ai/generated-images/5a249f13-da08-47a2-890b-d02f6d88e2db/_result.png",
  openDay: "https://image.qwenlm.ai/generated-images/fa4d1810-24f8-443a-949c-3f742b6dcf51/_result.png",
  it: "https://image.qwenlm.ai/generated-images/6a1ea661-8624-40b0-a36d-3b9a35223183/_result.png",
  factory: "https://image.qwenlm.ai/generated-images/230f47e6-6985-4568-a610-7c80613366fe/_result.png",
  campus: "https://image.qwenlm.ai/generated-images/229213e6-d7c3-476b-a180-fff7566db42a/_result.png",
};

export const NEWS: NewsItem[] = [
  {
    id: "priem-2026",
    date: "02.06.2026",
    tag: "Приём",
    title: "Открыт набор по программе «Профессионалитет» на 2026/27 учебный год",
    excerpt:
      "245 бюджетных мест по 9 специальностям, целевые договоры с работодателями и стипендия от предприятий-партнёров — приём документов стартует 20 июня.",
    img: IMG.openDay,
    featured: true,
    body: [
      "Серпуховский колледж объявляет о старте приёмной кампании 2026/27 учебного года. Абитуриентам доступно 245 бюджетных мест по девяти специальностям: от сварочного производства и эксплуатации станков с ЧПУ до информационных систем и туризма.",
      "В рамках федерального проекта «Профессионалитет» обучение строится совместно с работодателями: практикоориентированные модули проходят в современных мастерских, а наставниками студентов становятся действующие специалисты предприятий.",
      "Подать документы можно лично в приёмной комиссии (корпус 1, каб. 104), по почте или через суперсервис «Поступление в СПО онлайн» на портале Госуслуг. Приём заявлений продлится до 15 августа 2026 года.",
    ],
  },
  {
    id: "masterskie-chpu",
    date: "28.05.2026",
    tag: "Мастерские",
    title: "Студенты освоили новую партию станков с ЧПУ в мастерских «Профессионалитета»",
    excerpt:
      "Первый поток первокурсников завершил модуль «Основы обработки на станках с ЧПУ» — 86% сдали демонстрационный экзамен с первого раза.",
    img: IMG.hero,
    body: [
      "В мастерских колледжа завершился первый демонстрационный экзамен по модулю «Основы обработки на станках с ЧПУ». Его сдавали студенты первого курса специальности «Технология машиностроения».",
      "По итогам экзамена 86% участников получили положительную оценку с первого раза. Экспертами выступили мастера производственного обучения и представители предприятий-партнёров.",
      "Следующий модуль — «Программирование обработки» — стартует в сентябре: студенты будут писать управляющие программы в CAM-системах и изготавливать детали по реальным производственным чертежам.",
    ],
  },
  {
    id: "sportfest",
    date: "20.05.2026",
    tag: "Спорт",
    title: "Сборная колледжа взяла серебро на областном фестивале ГТО",
    excerpt:
      "Команда из 12 студентов заняла второе место в командном зачёте среди 30 колледжей Московской области.",
    body: [
      "В Одинцове прошёл областной фестиваль Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне» среди студентов профессиональных образовательных организаций.",
      "Сборная Серпуховского колледжа выступала в составе 12 человек и завоевала серебро в командном зачёте, уступив лишь хозяевам площадки. В личном первенстве двое наших студентов вошли в тройку лучших в своих ступенях.",
      "Тренерский штаб отмечает высокий уровень подготовки команды: занятия в секции ГТО проходят три раза в неделю в спортивном зале корпуса 2. Присоединиться может любой студент колледжа.",
    ],
  },
  {
    id: "partnerstvo",
    date: "14.05.2026",
    tag: "Партнёры",
    title: "Подписаны соглашения о целевом обучении с тремя предприятиями региона",
    excerpt:
      "Целевики получают дополнительную стипендию от работодателя и гарантированное место работы после выпуска.",
    img: IMG.factory,
    body: [
      "Серпуховский колледж подписал соглашения о целевой подготовке кадров с тремя промышленными предприятиями городского округа. По условиям соглашений, студенты-целевики проходят практику на площадках работодателей начиная со второго курса.",
      "Помимо гарантированного трудоустройства, целевая подготовка предполагает дополнительную стипендию от предприятия и компенсацию проезда к месту практики.",
      "Заключить договор о целевом обучении можно при поступлении или на любом курсе — заявления принимает отдел содействия трудоустройству (корпус 1, каб. 210).",
    ],
  },
  {
    id: "abi-tur",
    date: "10.05.2026",
    tag: "Олимпиады",
    title: "Пятикурсники стали призёрами регионального этапа «Абилимпикса»",
    excerpt:
      "Студенты направлений «Сварочное производство» и «Повар, кондитер» вошли в тройку сильнейших в своих компетенциях.",
    body: [
      "В Подмосковье завершился региональный этап чемпионата профессионального мастерства «Абилимпикс». Студенты Серпуховского колледжа выступали в двух компетенциях и в обеих вошли в число призёров.",
      "В компетенции «Сварочные технологии» наш участник занял второе место, продемонстрировав образцовое качество швов на контрольных образцах. В компетенции «Поварское дело» студентка колледжа стала бронзовым призёром.",
      "Победа на региональном этапе даёт право представлять Московскую область на национальном финале чемпионата. Готовиться к нему призёры будут на базе мастерских колледжа под руководством наставников.",
    ],
  },
];

export const NAV = [
  { label: "Главная", path: "/" },
  { label: "Специальности", path: "/programmy" },
  { label: "Абитуриенту", path: "/abiturientu" },
  { label: "Новости", path: "/novosti" },
  { label: "Студенту", path: "/studentu" },
  { label: "Сведения", path: "/svedeniya" },
  { label: "Контакты", path: "/kontakty" },
];

export const TICKER = [
  "Приём 2026 открыт",
  "245 бюджетных мест",
  "9 специальностей",
  "Профессионалитет",
  "Общежитие иногородним",
  "Целевое обучение",
  "Мастерские ЧПУ и сварки",
  "Стипендии от партнёров",
];

export const STATS = [
  { value: 1240, suffix: "", label: "студентов", note: "учатся очно на бюджетной и платной основе" },
  { value: 9, suffix: "", label: "специальностей", note: "от станков с ЧПУ до веб-разработки" },
  { value: 245, suffix: "", label: "бюджетных мест", note: "выделено на приёмную кампанию 2026 года" },
  { value: 92, suffix: "%", label: "трудоустройство", note: "выпускников работают по специальности в первый год" },
];

export const ADMISSION_LINKS = [
  { label: "Документы для поступления", href: "https://serp-koll.ru/images/ABITURIENTU/dokumenti-dly-postupl.pdf" },
  { label: "Способы подачи документов", href: "https://serp-koll.ru/abiturientu/sposoby-podachi-dokumentov" },
  { label: "Контрольные цифры приёма", href: "https://serp-koll.ru/abiturientu/kontrolnye-tsifry-priema" },
  { label: "Правила приёма", href: "https://serp-koll.ru/images/SVED-POO/LOK-AKTI/1/1.4.pdf" },
  { label: "Положение о приёмной комиссии", href: "https://serp-koll.ru/images/SVED-POO/LOK-AKTI/1/1.15.pdf" },
  { label: "Вакантные места для приёма (перевода)", href: "https://serp-koll.ru/images/OBRAZOV-NEV/vak-mesta.pdf" },
  { label: "Инструкция по подаче через ЕПГУ", href: "https://serp-koll.ru/images/ABITURIENTU/Instrukciya_podachi_zayavleniya_cherez_EPGU.pdf" },
  { label: "Форма договора о целевом обучении", href: "https://serp-koll.ru/images/ABITURIENTU/Statement/Tipovaya_forma_dogovora_o_celevom_obuchenii.docx" },
  { label: "Информация об общежитии", href: "https://serp-koll.ru/abiturientu/informatsiya-ob-obshchezhitii" },
  { label: "Списки на зачисление", href: "https://serp-koll.ru/abiturientu/spiski-na-zachislenie" },
];

export const DEPARTMENTS = [
  { label: "Основные сведения", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/osnovnye-svedeniya" },
  { label: "Структура и органы управления", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/struktura-i-organy-upravleniya-obrazovatelnoj-organizatsiej" },
  { label: "Документы", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/dokumenty" },
  { label: "Образование", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/obrazovanie" },
  { label: "Руководство", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/rukovodstvo" },
  { label: "Педагогический состав", href: "https://serp-koll.ru/images/SVED-POO/ped_sostav_SK.pdf" },
  { label: "Материально-техническое обеспечение и доступная среда", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/materialno-tekhnicheskoe-obespechenie-i-osnashchennost-obrazovatelnogo-protsessa-dostupnaya-sreda" },
  { label: "Платные образовательные услуги", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/platnye-obrazovatelnye-uslugi" },
  { label: "Финансово-хозяйственная деятельность", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/finansovo-khozyajstvennaya-deyatelnost" },
  { label: "Стипендии и меры поддержки", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/stipendii-i-mery-podderzhki-obuchayushchikhsya" },
  { label: "Организация питания", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/organizatsiya-pitaniya-v-obrazovatelnoj-organizatsii" },
  { label: "Образовательные стандарты и требования", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/obrazovatelnye-standarty-i-trebovaniya" },
  { label: "Воспитательная деятельность", href: "https://serp-koll.ru/svedeniya-ob-obrazovatelnoj-organizatsii/vospitatelnaya-deyatelnost" },
];

export const COLLEGE_INFO = [
  { k: "Полное наименование", v: "Государственное бюджетное профессиональное образовательное учреждение Московской области «Серпуховский колледж»" },
  { k: "Сокращённое наименование", v: "ГБПОУ МО «Серпуховский колледж»" },
  { k: "Год основания", v: "1969" },
  { k: "Учредитель", v: "Московская область; полномочия учредителя осуществляет Министерство образования Московской области" },
  { k: "Место нахождения", v: "142279, Московская область, г.о. Серпухов, п. Большевик, ул. Ленина, д. 52" },
  { k: "Режим и график работы", v: "Понедельник – пятница, 8:00 – 17:00; обеденный перерыв 12:00 – 13:00" },
];

export const CONTACTS = {
  address: "г.о. Серпухов, п. Большевик, ул. Ленина, 52",
  phone: "8 (496) 735-55-98",
  phoneHref: "tel:+74967355598",
  email: "mo_serpkolledzh@mosreg.ru",
  vk: "https://vk.com/serpkoll_professionalitet",
  max: "https://max.ru/id5043055814_gos",
  yandexMap: "https://yandex.ru/maps/org/serpukhovskiy_kolledzh_korpus_3/1221657155/",
};

export const STEPS = [
  {
    num: "01",
    title: "Выберите специальность",
    text: "Изучите направления, бюджетные места и условия приёма на странице специальностей.",
    deadline: "до 20 июня",
    chips: ["9 специальностей", "база 9 классов"],
  },
  {
    num: "02",
    title: "Соберите документы",
    text: "Паспорт, аттестат, 4 фотографии 3×4; для технических специальностей и «Повара, кондитера» — медсправка 086/у.",
    deadline: "июнь – июль",
    chips: ["аттестат", "паспорт", "фото 3×4", "086/у"],
  },
  {
    num: "03",
    title: "Подайте заявление",
    text: "Лично в приёмной комиссии, по почте или онлайн через суперсервис Госуслуг «Поступление в СПО онлайн».",
    deadline: "20.06 – 15.08",
    chips: ["лично", "почта", "Госуслуги (ЕПГУ)"],
  },
  {
    num: "04",
    title: "Пройдите конкурс аттестатов",
    text: "Зачисление — по среднему баллу документа об образовании, без вступительных испытаний.",
    deadline: "до 25 августа",
    chips: ["средний балл", "без экзаменов"],
  },
  {
    num: "05",
    title: "Получите приказ о зачислении",
    text: "Предоставьте оригинал аттестата и согласие на зачисление — и ждите приказа в списках на сайте.",
    deadline: "25 августа",
    chips: ["оригинал аттестата", "согласие"],
  },
];

export const OPEN_DAYS = [
  { id: "eng", day: "21", month: "Марта", weekday: "Суббота", time: "11:00", theme: "День открытых дверей: инженерные специальности — сварка, ЧПУ, электроснабжение", place: "Корпус 2, актовый зал" },
  { id: "it", day: "18", month: "Апреля", weekday: "Суббота", time: "11:00", theme: "День открытых дверей: IT, экономика, туризм и «Повар, кондитер»", place: "Корпус 1, актовый зал" },
  { id: "tour", day: "13", month: "Июня", weekday: "Суббота", time: "12:00", theme: "Экскурсии по мастерским «Профессионалитета» и консультация приёмной комиссии", place: "Корпус 2, мастерские" },
];

export const AUDIENCES = [
  {
    key: "student",
    label: "Студенту",
    icon: "cap",
    desc: "Расписания, методические материалы, поддержка и всё, что нужно для учёбы без лишней беготни.",
    links: [
      { label: "Расписание звонков", href: "#schedule" },
      { label: "Расписание уроков", href: "https://serp-koll.ru/studentu/raspisanie-urokov" },
      { label: "Методические материалы", href: "https://serp-koll.ru/studentu/metodicheskie-materially" },
      { label: "Социально-психологическая помощь", href: "https://serp-koll.ru/studentu/sotsialno-psikhologicheskaya-pomoshch" },
      { label: "Дополнительное образование", href: "https://serp-koll.ru/studentu/dopolnitelnoe-obrazovanie" },
      { label: "ГТО", href: "https://serp-koll.ru/studentu/gto" },
      { label: "Телефоны доверия", href: "#hotlines" },
      { label: "Защита прав участников образовательного процесса", href: "https://serp-koll.ru/images/OBRAZOV-NEV/zashprav.pdf" },
    ],
  },
  {
    key: "graduate",
    label: "Выпускнику",
    icon: "factory",
    desc: "Трудоустройство, продолжение обучения в вузе и связь с колледжем после выпуска.",
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
    desc: "Аттестация, методическая служба и рабочие материалы для преподавателей.",
    links: [
      { label: "Анкета удовлетворённости условиями работы", href: "https://forms.yandex.ru/u/651fc94bc769f16313d60a32/" },
      { label: "Полезные ссылки", href: "https://serp-koll.ru/images/PEDAGOGU/polezn-ssilk-prep.pdf" },
      { label: "Аттестация", href: "https://serp-koll.ru/pedagogu/attestatsiya" },
      { label: "Методическая служба", href: "https://serp-koll.ru/pedagogu/metodicheskaya-sluzhba" },
      { label: "Методическая копилка", href: "https://serp-koll.ru/pedagogu/metodicheskaya-kopilka" },
    ],
  },
];

export const CAMPUSES = [
  { name: "Корпус 1", addr: "ул. Ленина, 52", note: "администрация, приёмная комиссия" },
  { name: "Корпус 2", addr: "ул. Ленина, 52А", note: "мастерские и лаборатории" },
  { name: "Общежитие", addr: "ул. Ленина, 54", note: "для иногородних студентов" },
];

export const BELLS = [
  { n: 1, start: "08:30", end: "10:00" },
  { n: 2, start: "10:10", end: "11:40" },
  { n: 3, start: "12:20", end: "13:50" },
  { n: 4, start: "14:00", end: "15:30" },
  { n: 5, start: "15:40", end: "17:10" },
];

export const HOTLINES = [
  { label: "Общероссийский детский телефон доверия", phone: "8-800-2000-122", note: "круглосуточно, звонок бесплатный" },
  { label: "Горячая линия губернатора Московской области", phone: "8-800-550-50-30", note: "пн–сб, 8:00–20:00" },
  { label: "Социально-психологическая служба колледжа", phone: "8 (496) 735-55-98", note: "корпус 1, каб. 112 · пн–пт 9:00–15:00" },
];

export const FAQ = [
  {
    q: "Какие документы нужны для поступления?",
    a: "Заявление о приёме, паспорт (копия), аттестат об основном общем образовании (оригинал и копия), 4 фотографии 3×4, а для технических специальностей и направления «Повар, кондитер» — медицинская справка формы 086/у. При онлайн-подаче оригиналы предоставляются при зачислении.",
  },
  {
    q: "Можно ли подать заявление через Госуслуги?",
    a: "Да. Заявление подаётся через суперсервис «Поступление в СПО онлайн» на портале Госуслуг (ЕПГУ). Пошаговая инструкция размещена в разделе «Абитуриенту». Онлайн-подача доступна с 20 июня по 15 августа.",
  },
  {
    q: "Есть ли в колледже общежитие?",
    a: "Да, иногородним студентам очной формы обучения предоставляется общежитие (ул. Ленина, 54). Заявка на место подаётся вместе с документами о приёме; заселение — в августе после выхода приказа о зачислении.",
  },
  {
    q: "Как проходит конкурс на бюджетные места?",
    a: "Приём осуществляется без вступительных испытаний — конкурс проводится по среднему баллу аттестата. Средний балл вычисляется по всем предметам документа об образовании. При равенстве баллов преимущество имеет абитуриент с более высокими оценками по профильным предметам.",
  },
  {
    q: "Предоставляется ли отсрочка от призыва?",
    a: "Да. Студентам очной формы обучения, зачисленным на программы среднего профессионального образования, предоставляется отсрочка от призыва на военную службу на весь период обучения.",
  },
  {
    q: "Можно ли перевестись из другого колледжа?",
    a: "Да, при наличии вакантных мест перевод возможен на соответствующий курс. Список вакантных мест публикуется в разделе «Абитуриенту». Для перевода потребуются справка о периоде обучения и личное заявление.",
  },
];
