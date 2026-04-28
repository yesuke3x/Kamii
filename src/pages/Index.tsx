import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Pause, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/hero-portrait.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import { useParallax } from "@/hooks/use-reveal";

const principles = [
  {
    n: "I.",
    title: "Цифры — это язык решений",
    quote: "За каждым успешным решением стоят данные, а не интуиция.",
  },
  {
    n: "II.",
    title: "Структура побеждает хаос",
    quote: "Сначала таблица, потом вывод. Сначала модель, потом мнение.",
  },
  {
    n: "III.",
    title: "Аналитика — это мышление",
    quote: "Excel и SQL — лишь инструменты. Главный инструмент — голова.",
  },
];

const tickerItems = [
  "KASE +0.42%",
  "S&P 500 5,318",
  "USD/KZT 447.20",
  "Brent $82.14",
  "Gold $2,318",
  "BTC $63,420",
  "EUR/USD 1.087",
  "Nasdaq 16,920",
];

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // mouse-tilt on portrait
  const portraitWrapRef = useRef<HTMLDivElement>(null);
  const portraitParallaxRef = useParallax<HTMLDivElement>(0.35);

  useEffect(() => {
    const el = portraitWrapRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--tx", `${(-x * 6).toFixed(2)}px`);
      el.style.setProperty("--ty", `${(-y * 6).toFixed(2)}px`);
      el.style.setProperty("--rx", `${(y * 3).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(-x * 3).toFixed(2)}deg`);
    };
    const onLeave = () => {
      el.style.setProperty("--tx", "0px");
      el.style.setProperty("--ty", "0px");
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="container pt-12 md:pt-20 pb-24">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-serif italic text-sm text-muted-foreground">No. 01</span>
          <div className="h-px flex-1 bg-ink/15" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Экономика &amp; Аналитика
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7 animate-slide-up">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6 inline-flex items-center gap-3">
              <span className="relative w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse-ring" />
              Нархоз · 1 курс · Будущий финансовый аналитик
            </p>
            <h1 className="font-serif font-light text-6xl md:text-8xl lg:text-[9.5rem] leading-[0.92] text-ink text-balance">
              Камила <em className="font-medium text-terracotta">Досбаева</em>
              <span className="block text-2xl md:text-4xl mt-4 text-muted-foreground italic font-light">
                Студентка 1 курса Университета Нархоз — будущий финансовый аналитик.
              </span>
            </h1>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg"
                className="group rounded-none bg-terracotta text-paper hover:bg-ink px-8 py-7 text-sm tracking-wider uppercase">
                <Link to="/goals">
                  Посмотреть мой Roadmap
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline"
                className="group rounded-none border-ink text-ink hover:bg-ink hover:text-paper px-8 py-7 text-sm tracking-wider uppercase">
                <Link to="/interests">
                  Обо мне <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              ref={portraitWrapRef}
              className="relative [perspective:1200px]"
            >
              <div
                ref={portraitParallaxRef}
                className="parallax img-zoom shadow-card"
                style={{
                  transform:
                    "translate3d(var(--tx,0), calc(var(--parallax-y,0px) + var(--ty,0px)), 0) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
                  transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <img
                  src={portrait}
                  alt="Портрет Камилы Досбаевой — студентки Нархоза"
                  className="w-full aspect-[4/5] object-cover"
                  width={1080} height={1350}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-terracotta text-paper px-5 py-3 font-serif italic text-sm shadow-warm max-w-[18rem] animate-float">
                «За каждым решением — цифры».
              </div>
              <div className="absolute -top-3 -right-3 bg-paper border border-ink/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ink/85 shadow-soft hidden md:block">
                Almaty · 43°N
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-y border-ink/10 bg-paper-warm/60 overflow-hidden">
        <div className="flex whitespace-nowrap py-3 animate-marquee">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-8 font-serif italic text-sm text-ink/85"
            >
              <span className="w-1 h-1 rounded-full bg-terracotta" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* МОЙ ПОДХОД — BIO */}
      <section className="bg-paper-warm border-b border-ink/10">
        <div className="container py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">02 — Мой подход</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight">
              Коротко<br/><em className="text-terracotta">обо мне</em>.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-5" delay={1}>
            <p className="drop-cap font-serif text-xl md:text-2xl leading-[1.55] text-ink/85">
              Верю, что за каждым успешным решением стоят цифры. В Нархозе я учусь понимать экономику, а в жизни — структурировать данные и находить в них смысл.
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink/85 text-pretty">
              Между парами осваиваю Excel и SQL, изучаю основы инвестиций и слежу за тем, как корпоративная аналитика меняет финансовый сектор. Моя цель — превратить интерес к данным в профессию, где каждое решение опирается на ясные модели и факты.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="container py-24 md:py-32">
        <div className="flex items-baseline justify-between mb-16 gap-8 flex-wrap">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">03 — Принципы</p>
            <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1] text-balance max-w-2xl">
              Три правила, по которым я <em className="text-terracotta">работаю</em>.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="font-serif italic text-muted-foreground max-w-xs">
              Короткий манифест аналитика — записан на полях ежедневника.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={(i + 1) as 1 | 2 | 3} as="article">
              <div className="bg-paper p-10 md:p-12 hover:bg-paper-warm transition-colors group card-lift h-full">
                <div className="font-serif italic text-5xl text-terracotta/30 group-hover:text-terracotta transition-colors mb-6">
                  {p.n}
                </div>
                <h3 className="font-serif text-2xl font-medium mb-4">{p.title}</h3>
                <blockquote className="font-serif italic text-lg text-ink/85 leading-snug border-l-2 border-terracotta/40 group-hover:border-terracotta pl-4 transition-colors">
                  {p.quote}
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, hsl(32 65% 55%) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(14 55% 45%) 0%, transparent 45%)",
          }}
        />
        <div className="container py-24 md:py-32 relative">
          <div className="grid md:grid-cols-12 gap-10 mb-12 items-end">
            <Reveal className="md:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.25em] text-ochre mb-3">10 секунд · AI-видео (Veo)</p>
              <h2 className="font-serif text-4xl md:text-6xl font-light leading-[1.05] text-balance">
                Цифры, графики и <em className="text-ochre">офис мечты</em>.
              </h2>
            </Reveal>
            <Reveal className="md:col-span-4 md:col-start-9" delay={1}>
              <p className="font-serif italic text-paper/70">
                Современный финансовый офис, переплетённый с цифровыми интерфейсами — визуализация того, к чему я иду.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative group cursor-pointer overflow-hidden shadow-2xl card-lift" onClick={togglePlay}>
              <video
                ref={videoRef}
                src={heroVideo.url}
                className="w-full aspect-video object-cover transition-transform duration-[1500ms] group-hover:scale-[1.03]"
                loop muted playsInline
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/20 group-hover:bg-ink/40 transition-colors">
                <div className="bg-ochre text-ink rounded-full w-20 h-20 flex items-center justify-center shadow-warm group-hover:scale-110 transition-transform">
                  {playing ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.25em] text-paper/80 bg-ink/60 backdrop-blur px-3 py-1.5">
                Сгенерировано AI · 0:10
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24 md:py-32 text-center">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">Дальше</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-10 text-balance">
            В следующих главах — <em className="text-terracotta">больше</em>.
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="group rounded-none bg-ink text-paper hover:bg-terracotta px-8 py-7 text-sm tracking-wider uppercase">
              <Link to="/interests">
                Энергия и фокус <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group rounded-none border-ink text-ink hover:bg-ink hover:text-paper px-8 py-7 text-sm tracking-wider uppercase">
              <Link to="/goals">
                Профессиональный вектор <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Index;
