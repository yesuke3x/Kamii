import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Target, GraduationCap, Briefcase, Rocket, TrendingUp, BarChart3 } from "lucide-react";
import goalsBg from "@/assets/goals-bg.jpg";
import narxoz from "@/assets/goals-narxoz.jpg";
import { useParallax, useReveal, useCountUp } from "@/hooks/use-reveal";

const skills = [
  { name: "Микро- и макроэкономика", level: 88 },
  { name: "Excel · продвинутый уровень", level: 92 },
  { name: "SQL · работа с данными", level: 78 },
  { name: "Финансовый анализ", level: 85 },
  { name: "Английский язык (business)", level: 95 },
  { name: "Презентации и публичные выступления", level: 90 },
];

const timeline = [
  { year: "2026", icon: GraduationCap, title: "Окончить 1 курс с отличием", text: "Микро- и макроэкономика, статистика, бухгалтерский учёт — фундамент будущей карьеры в финансах." },
  { year: "2026", icon: BarChart3, title: "Освоить продвинутый Excel и SQL", text: "Сводные таблицы, Power Query, базовые SELECT/JOIN — собрать рабочий аналитический стек." },
  { year: "2027", icon: Briefcase, title: "Первая стажировка в финансах", text: "Стажировка младшим аналитиком в банке, аудиторской компании или финтех-стартапе Алматы." },
  { year: "2027", icon: Rocket, title: "Сертификация и кейсы", text: "Пройти CFA Level I prep, собрать портфолио из 2–3 финансовых проектов и кейсов." },
  { year: "2028+", icon: TrendingUp, title: "Big4 или Fintech", text: "Войти в одну из компаний «Большой четвёрки» (Deloitte, PwC, EY, KPMG) или сильный финтех-проект." },
];

const focus = [
  { title: "Корпоративные финансы", text: "Финансовое моделирование, оценка компаний, работа с отчётностью — классический путь аналитика." },
  { title: "Аудит · Big4", text: "Deloitte, PwC, EY, KPMG. Школа дисциплины, стандартов и масштабного мышления для будущего CFO." },
  { title: "Fintech", text: "Финансы + технологии. Продукты, которые делают деньги понятнее и доступнее для людей." },
];

const SkillRow = ({ name, level }: { name: string; level: number }) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const display = useCountUp(level, shown, 1100);
  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-serif text-lg">{name}</span>
        <span className="font-serif italic text-sm text-terracotta tabular-nums">{display}%</span>
      </div>
      <div className="h-1 bg-ink/10 overflow-hidden">
        <div
          className="h-full bg-terracotta progress-fill"
          style={{ width: shown ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

const Goals = () => {
  const bgRef = useParallax<HTMLDivElement>(0.4);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative text-paper overflow-hidden">
        <div
          ref={bgRef}
          className="parallax absolute inset-0 -top-16 -bottom-16 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, hsl(20 30% 14% / 0.55), hsl(20 30% 14% / 0.85)), url(${goalsBg})`,
          }}
        />
        <div className="container relative pt-24 md:pt-32 pb-32 md:pb-40">
          <div className="flex items-center gap-4 mb-8 text-paper/85">
            <span className="font-serif italic text-sm">No. 03</span>
            <div className="h-px flex-1 bg-paper/30" />
            <span className="text-[10px] uppercase tracking-[0.25em]">Профессиональный вектор</span>
          </div>

          <h1 className="font-serif font-light text-6xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl text-balance animate-slide-up">
            Мой <em className="text-ochre">roadmap</em>.
          </h1>
          <Reveal delay={1}>
            <p className="mt-8 max-w-2xl font-serif italic text-xl text-paper/90 leading-relaxed">
              Не пророчество — рабочий план будущего финансового аналитика, написанный карандашом и готовый к правкам.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-12 inline-flex items-center gap-3 border border-ochre/40 bg-ochre/10 backdrop-blur px-5 py-3">
              <span className="relative w-2 h-2 rounded-full bg-ochre text-ochre animate-pulse-ring" />
              <span className="text-xs uppercase tracking-[0.25em] text-ochre">
                Сейчас: 1 курс · Университет Нархоз · Алматы
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="container py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <Reveal className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">Сфера</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] text-balance">
              Куда я <em className="text-terracotta">смотрю</em>.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6 self-end" delay={1}>
            <p className="font-serif text-xl italic text-muted-foreground">
              Финансы, корпоративная аналитика и аудит — три направления, которые сегодня формируют мой профессиональный вектор.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {focus.map((f, i) => (
            <Reveal key={f.title} delay={(i + 1) as 1 | 2 | 3}>
              <div className="bg-paper p-10 md:p-12 hover:bg-paper-warm transition-colors card-lift h-full">
                <div className="font-serif italic text-terracotta text-sm mb-3">0{i + 1}</div>
                <h3 className="font-serif text-3xl mb-4 leading-tight">{f.title}</h3>
                <p className="text-base text-ink/85 leading-relaxed">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NARXOZ — full-bleed editorial photo */}
      <section className="relative overflow-hidden">
        <Reveal>
          <figure className="relative">
            <div className="img-zoom">
              <img
                src={narxoz}
                alt="Камила у входа в Университет Нархоз — школа экономики и аналитики"
                className="w-full aspect-[16/7] md:aspect-[21/8] object-cover"
                loading="lazy"
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
            />
            <figcaption className="absolute bottom-0 left-0 right-0">
              <div className="container py-8 md:py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-paper">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-ochre mb-2">Где я учусь</p>
                  <p className="font-serif text-2xl md:text-4xl font-light leading-tight max-w-xl">
                    Университет <em className="text-ochre">Нархоз</em> · Школа экономики и аналитики
                  </p>
                </div>
                <p className="font-serif italic text-paper/85 text-sm md:text-base max-w-xs">
                  Алматы · 1 курс · Class of 2029.
                </p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section className="bg-paper-warm border-y border-ink/10">
        <div className="container py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">Навыки</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] mb-6 text-balance">
              Цели на <em className="text-terracotta">обучение</em>.
            </h2>
            <p className="font-serif italic text-muted-foreground">
              Без завышенных оценок. Где я сейчас — и куда расту в ближайший год.
            </p>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6 space-y-7">
            {skills.map((s) => (
              <SkillRow key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container py-24 md:py-32">
        <Reveal className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">План на год и дальше</p>
          <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] max-w-4xl text-balance">
            Шаги, которые я <em className="text-terracotta">пройду</em>.
          </h2>
        </Reveal>

        <ol className="relative border-l-2 border-terracotta/30 pl-8 md:pl-12 space-y-14 max-w-4xl">
          {timeline.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={i} as="li" delay={(Math.min(i + 1, 5)) as 1 | 2 | 3 | 4 | 5}>
                <div className="relative">
                  <span className="absolute -left-[3.1rem] md:-left-[3.85rem] flex items-center justify-center w-12 h-12 rounded-full bg-terracotta text-paper shadow-warm transition-transform hover:scale-110">
                    <Icon size={18} />
                  </span>
                  <div className="font-serif italic text-terracotta text-sm tracking-widest mb-1">{t.year}</div>
                  <h3 className="font-serif text-3xl md:text-4xl font-light mb-2 leading-tight">{t.title}</h3>
                  <p className="text-base text-ink/85 leading-relaxed max-w-2xl">{t.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </section>

      {/* PULLQUOTE */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, hsl(32 65% 55%) 0%, transparent 50%)",
          }}
        />
        <div className="container py-24 md:py-32 text-center relative">
          <Reveal>
            <Target size={36} className="mx-auto text-ochre mb-8 animate-float" strokeWidth={1.5} />
            <blockquote className="font-serif italic text-3xl md:text-5xl font-light leading-[1.2] max-w-4xl mx-auto text-balance">
              «Мечта — стать экспертом в Big4 или сильном финтех-проекте».
            </blockquote>
            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-ochre">— заметка на полях</p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Goals;
