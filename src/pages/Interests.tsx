import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Dumbbell, Plane, TrendingUp, BarChart3, Brain } from "lucide-react";
import travel from "@/assets/hobby-travel.jpg";
import tech from "@/assets/hobby-tech.jpg";
import sport from "@/assets/hobby-sport.jpg";
import istanbul from "@/assets/hobby-istanbul.jpg";
import yoga from "@/assets/hobby-yoga.jpg";
import architecture from "@/assets/hobby-architecture.jpg";
import { useParallax } from "@/hooks/use-reveal";

const skills = [
  {
    icon: TrendingUp,
    name: "Financial Literacy",
    desc: "Investment fundamentals, personal budgeting and fundamental market analysis.",
  },
  {
    icon: BarChart3,
    name: "Data Analytics",
    desc: "Excel and Google Sheets, data collection, visualisation and basic SQL work.",
  },
  {
    icon: Brain,
    name: "Soft Skills",
    desc: "Critical thinking, time management, networking and public speaking.",
  },
];

// Editorial mosaic: vary the same source images with intentional crops/filters
// so a small library doesn't look stocky/AI-generated.
const mosaic = [
  { src: travel, span: "col-span-2 row-span-2 aspect-[3/4]", style: { objectPosition: "50% 40%" }, label: "Almaty Mountains" },
  { src: istanbul, span: "aspect-square", style: { objectPosition: "50% 35%" }, label: "London · City" },
  { src: sport, span: "aspect-square", style: { objectPosition: "50% 30%", filter: "grayscale(0.4) sepia(0.15)" }, label: "Morning" },
  { src: architecture, span: "aspect-square", style: { objectPosition: "50% 40%" }, label: "Architecture" },
  { src: tech, span: "aspect-square", style: { objectPosition: "50% 50%" }, label: "Details" },
];

const Interests = () => {
  const sportRef = useParallax<HTMLDivElement>(0.25);

  return (
    <Layout>
      {/* Header */}
      <section className="container pt-12 md:pt-20 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-serif italic text-sm text-muted-foreground">No. 02</span>
          <div className="h-px flex-1 bg-ink/15" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Energy &amp; Focus</span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl font-light leading-[0.95] text-balance max-w-5xl animate-slide-up">
          What keeps me <em className="text-terracotta">in focus</em>.
        </h1>
        <Reveal delay={1}>
          <p className="mt-8 max-w-2xl font-serif text-xl text-ink/85 italic leading-relaxed">
            Sport, travel and skills I sharpen every day — three sources of my energy.
          </p>
        </Reveal>
      </section>

      {/* SPORT */}
      <section className="container pb-24 md:pb-32">
        <article className="grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-7">
            <div className="img-zoom shadow-card">
              <div ref={sportRef} className="parallax">
                <img
                  src={yoga}
                  alt="Morning yoga — tree pose"
                  className="w-full aspect-[4/5] md:aspect-[5/6] object-cover"
                  loading="lazy" width={1080} height={1620}
                />
              </div>
            </div>
          </Reveal>
          <Reveal className="md:col-span-5 md:pl-4" delay={1}>
            <div className="flex items-center gap-3 mb-6 text-terracotta">
              <Dumbbell size={20} />
              <span className="text-[10px] uppercase tracking-[0.3em]">Chapter 01 · Sport</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light leading-[1] mb-3">
              Discipline<span className="text-terracotta">.</span>
            </h2>
            <p className="font-serif italic text-xl text-muted-foreground mb-6">
              Endurance and focus — the foundation of any complex task.
            </p>
            <p className="text-base leading-relaxed text-ink/90 mb-8 text-pretty">
              Sport helps me stay focused when I need to work through complex models, long spreadsheets and extended lectures. Daily training builds more than the body — it teaches you to see everything else through to the end: projects, deadlines, goals.
            </p>
            <ul className="space-y-2 border-t border-ink/15 pt-6">
              {["Pilates & strength training 4× a week", "Morning runs", "Yoga on Sundays", "8 hours of sleep as a KPI"].map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 font-serif text-lg group cursor-default"
                  style={{ animation: `slideUp 0.7s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.07}s both` }}
                >
                  <span className="text-terracotta text-xs transition-transform group-hover:translate-x-1">◆</span>
                  <span className="link-underline">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </article>
      </section>

      {/* TRAVEL */}
      <section className="bg-paper-warm border-y border-ink/10">
        <div className="container py-24 md:py-32">
          <div className="mb-14 grid md:grid-cols-12 gap-10 items-end">
            <Reveal className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6 text-terracotta">
                <Plane size={20} />
                <span className="text-[10px] uppercase tracking-[0.3em]">Chapter 02 · Travel</span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] mb-4">
                Expanding my <em className="text-terracotta">horizons</em>,<br/>to understand markets.
              </h2>
            </Reveal>
            <Reveal className="md:col-span-4 md:col-start-9" delay={1}>
              <p className="font-serif italic text-lg text-muted-foreground">
                New countries bring new experience and a broader outlook — essential for a global understanding of economies and markets.
              </p>
            </Reveal>
          </div>

          {/* Editorial mosaic */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {mosaic.map((m, i) => (
              <Reveal key={i} delay={(Math.min(i + 1, 5)) as 1 | 2 | 3 | 4 | 5} className={m.span}>
                <figure className="img-zoom shadow-soft relative h-full w-full group">
                  <img
                    src={m.src}
                    alt={m.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={m.style}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 px-3 pt-10 pb-3 text-[10px] uppercase tracking-[0.25em] text-paper bg-gradient-to-t from-ink/85 via-ink/40 to-transparent transition-opacity">
                    {m.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS I'M GROWING */}
      <section className="container py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <Reveal className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6 text-terracotta">
              <BarChart3 size={20} />
              <span className="text-[10px] uppercase tracking-[0.3em]">Chapter 03 · Skills</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] text-balance">
              Skills I'm <em className="text-terracotta">building</em>.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={1}>
            <p className="font-serif italic text-muted-foreground">
              Three directions I'm investing time in during Year 1. Growing every month.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.name} delay={(i + 1) as 1 | 2 | 3}>
                <div className="bg-paper p-8 md:p-10 hover:bg-paper-warm transition-colors group card-lift h-full">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center mb-5 group-hover:bg-terracotta group-hover:text-paper transition-all duration-500 text-terracotta group-hover:scale-110 group-hover:rotate-[8deg]">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl mb-3 leading-tight">{s.name}</h3>
                  <p className="text-sm leading-relaxed text-ink/85">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-12 p-8 md:p-10 border border-ink/15 bg-paper-warm flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <p className="font-serif italic text-xl md:text-2xl text-ink leading-snug max-w-2xl">
              "I want these three skills to grow into real projects within a year — reports, dashboards, investment case studies."
            </p>
            <span className="text-xs uppercase tracking-[0.3em] text-terracotta whitespace-nowrap">— My plan</span>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Interests;
