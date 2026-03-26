import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const IMG_SCONCE = "https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/c5671754-8fb0-48e4-b92d-ea439939e40e.jpg";
const IMG_PENDANT = "https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/908c7300-f1ed-4edb-8bb2-416aea79d7bf.jpg";
const IMG_FLOOR = "https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/a1011ed3-203a-4790-9dbc-ededfddec416.jpg";

const SECTIONS = ["главная", "каталог", "коллекции", "о производстве", "контакты"];

const CATALOG = [
  { id: 1, name: "Бра", series: "SHADOW SERIES", img: IMG_SCONCE, count: 12, desc: "Настенные светильники с выраженной игрой теней" },
  { id: 2, name: "Потолочные", series: "DOME COLLECTION", img: IMG_PENDANT, count: 8, desc: "Подвесные и встраиваемые решения для пространства" },
  { id: 3, name: "Напольные", series: "PILLAR SERIES", img: IMG_FLOOR, count: 6, desc: "Торшеры как архитектурные объекты интерьера" },
  { id: 4, name: "Настольные", series: "STUDIO LINE", img: IMG_SCONCE, count: 9, desc: "Рабочий свет с характером дизайнерского объекта" },
];

const COLLECTIONS = [
  { name: "UMBRA", year: "2024", desc: "Серия основана на взаимодействии света и тени. Каждый предмет создаёт уникальный световой рисунок на стенах.", pieces: 4 },
  { name: "MINERAL", year: "2023", desc: "Вдохновлена природными формами: базальт, мрамор, кристалл. Ручная отделка каждого корпуса.", pieces: 6 },
  { name: "LIGNE", year: "2022", desc: "Геометрия без лишнего. Прямые линии, чёрный металл, матовое стекло. Классика малого производства.", pieces: 8 },
];

function LampSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="0" x2="60" y2="50" stroke="rgba(245,245,240,0.6)" strokeWidth="1.5"/>
      <ellipse cx="60" cy="75" rx="35" ry="28" stroke="rgba(245,245,240,0.5)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
      <path d="M30 75 Q25 100 20 130 L100 130 Q95 100 90 75" stroke="rgba(245,245,240,0.4)" strokeWidth="1.2" fill="rgba(255,255,255,0.04)"/>
      <ellipse cx="60" cy="130" rx="40" ry="6" stroke="rgba(245,245,240,0.3)" strokeWidth="1" fill="rgba(255,255,240,0.06)"/>
      <ellipse cx="60" cy="145" rx="55" ry="35" fill="url(#lampGlow)" opacity="0.5"/>
      <defs>
        <radialGradient id="lampGlow" cx="50%" cy="10%" r="80%">
          <stop offset="0%" stopColor="#FFFDE0" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#FFFDE0" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

function WallSconeSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="8" height="140" fill="rgba(245,245,240,0.08)"/>
      <rect x="8" y="30" width="40" height="6" stroke="rgba(245,245,240,0.5)" strokeWidth="1" fill="rgba(255,255,255,0.04)"/>
      <path d="M8 36 L48 36 L55 80 L1 80 Z" stroke="rgba(245,245,240,0.4)" strokeWidth="1.2" fill="rgba(255,255,255,0.05)"/>
      <ellipse cx="28" cy="82" rx="28" ry="8" fill="url(#sconeGlow)" opacity="0.6"/>
      <path d="M1 80 Q-20 100 -25 130 L80 130 Q75 100 55 80" fill="url(#sconeBeam)" opacity="0.15"/>
      <defs>
        <radialGradient id="sconeGlow" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#FFFDE0" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#FFFDE0" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="sconeBeam" x1="28" y1="80" x2="28" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFDE0" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#FFFDE0" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function FloorLampSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="210" x2="40" y2="60" stroke="rgba(245,245,240,0.5)" strokeWidth="2"/>
      <line x1="10" y1="210" x2="70" y2="210" stroke="rgba(245,245,240,0.4)" strokeWidth="2"/>
      <line x1="10" y1="210" x2="15" y2="200" stroke="rgba(245,245,240,0.3)" strokeWidth="1.5"/>
      <line x1="70" y1="210" x2="65" y2="200" stroke="rgba(245,245,240,0.3)" strokeWidth="1.5"/>
      <path d="M20 60 Q15 80 12 110 L68 110 Q65 80 60 60 Z" stroke="rgba(245,245,240,0.4)" strokeWidth="1.2" fill="rgba(255,255,255,0.05)"/>
      <ellipse cx="40" cy="60" rx="20" ry="8" stroke="rgba(245,245,240,0.5)" strokeWidth="1" fill="rgba(255,255,255,0.04)"/>
      <ellipse cx="40" cy="112" rx="32" ry="10" fill="url(#floorGlow)" opacity="0.5"/>
      <defs>
        <radialGradient id="floorGlow" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#FFFDE0" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#FFFDE0" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("главная");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] font-golos overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/5" : ""}`}>
        <div className="flex items-center justify-between px-8 py-6 max-w-[1400px] mx-auto">
          <a
            href="#главная"
            onClick={() => scrollTo("главная")}
            className="font-cormorant text-2xl font-light tracking-[0.2em] cursor-pointer"
          >
            LUMEN
          </a>

          <div className="hidden md:flex items-center gap-10">
            {SECTIONS.map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="nav-link">
                {s}
              </button>
            ))}
          </div>

          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-px bg-white/60 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-4 h-px bg-white/60 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white/60 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0A0A0A] border-t border-white/5 px-8 py-6 flex flex-col gap-6">
            {SECTIONS.map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="nav-link text-left">
                {s}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="главная" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(245,245,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />

        {/* Animated lamps bg */}
        <div className="absolute inset-0 flex items-start justify-around pt-0 pointer-events-none">
          <div className="animate-float opacity-20 mt-[-20px]">
            <LampSVG className="w-32 h-48" />
          </div>
          <div className="animate-float-delay opacity-10 mt-20">
            <LampSVG className="w-20 h-32" />
          </div>
          <div className="animate-float opacity-15 mt-10">
            <LampSVG className="w-28 h-44" />
          </div>
        </div>

        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(245,245,220,0.05) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="section-label animate-fade-up mb-8">Авторское производство · Малые серии</p>

          <h1 className="font-cormorant text-[clamp(4rem,12vw,9rem)] font-light leading-none tracking-[-0.02em] animate-fade-up-delay-1">
            Свет как <br/>
            <span className="text-shimmer italic">искусство</span>
          </h1>

          <p className="mt-8 text-[#888880] font-light text-lg max-w-xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Дизайнерские световые приборы ручной работы. Каждый предмет — ограниченная серия с характером.
          </p>

          <div className="flex items-center justify-center gap-6 mt-12 animate-fade-up-delay-3">
            <button onClick={() => scrollTo("каталог")} className="btn-primary">
              Смотреть каталог
            </button>
            <button onClick={() => scrollTo("о производстве")} className="btn-outline">
              О производстве
            </button>
          </div>

          <div className="flex items-center justify-center gap-12 mt-20 animate-fade-up-delay-4">
            <div className="text-center">
              <p className="font-cormorant text-4xl font-light">35+</p>
              <p className="section-label mt-1">моделей в каталоге</p>
            </div>
            <div className="divider" />
            <div className="text-center">
              <p className="font-cormorant text-4xl font-light">8</p>
              <p className="section-label mt-1">лет производства</p>
            </div>
            <div className="divider" />
            <div className="text-center">
              <p className="font-cormorant text-4xl font-light">500+</p>
              <p className="section-label mt-1">реализованных объектов</p>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <p className="section-label">прокрутите</p>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* CATALOG */}
      <section id="каталог" className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="section-label mb-4">02 / Каталог</p>
            <h2 className="font-cormorant text-[clamp(2.5rem,6vw,5rem)] font-light leading-tight">
              Световые<br/>приборы
            </h2>
          </div>
          <p className="hidden md:block text-[#888880] max-w-xs text-sm leading-relaxed">
            Каждая категория — отдельная история. Производим небольшими сериями, сохраняя точность деталей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {CATALOG.map((item) => (
            <div key={item.id} className="product-card group cursor-pointer bg-[#0A0A0A]">
              <div className="card-glow" />
              <div className="relative overflow-hidden h-72">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="section-label bg-black/40 backdrop-blur-sm px-3 py-1">{item.series}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="font-cormorant text-3xl text-white/20 font-light">0{item.id}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-cormorant text-3xl font-light">{item.name}</h3>
                    <p className="text-[#888880] text-sm mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-cormorant text-4xl font-light text-white/20">{item.count}</p>
                    <p className="section-label text-white/30">моделей</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-white/40 group-hover:text-white/80 transition-colors duration-300">
                  <span className="section-label">Смотреть все</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="коллекции" className="py-32 bg-[#060606] relative overflow-hidden">
        {/* Decorative SVG lamps */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <WallSconeSVG className="w-48 h-64" />
        </div>
        <div className="absolute left-[-40px] top-20 opacity-8 pointer-events-none animate-float">
          <FloorLampSVG className="w-24 h-56" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16">
            <p className="section-label mb-4">03 / Коллекции</p>
            <h2 className="font-cormorant text-[clamp(2.5rem,6vw,5rem)] font-light">Именные серии</h2>
          </div>

          <div className="space-y-px">
            {COLLECTIONS.map((col, i) => (
              <div
                key={col.name}
                className="group flex items-center justify-between p-10 border-t border-white/6 hover:bg-white/2 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-12">
                  <span className="font-cormorant text-6xl font-light text-white/10 group-hover:text-white/20 transition-colors duration-300 hidden md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-cormorant text-4xl font-light tracking-widest group-hover:text-shimmer transition-all duration-300">
                      {col.name}
                    </h3>
                    <p className="text-[#888880] text-sm mt-2 max-w-md leading-relaxed">{col.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-12">
                  <div className="text-right hidden md:block">
                    <p className="font-cormorant text-2xl font-light text-white/40">{col.pieces}</p>
                    <p className="section-label text-white/30">предметов</p>
                  </div>
                  <div className="text-right">
                    <p className="section-label text-white/30">{col.year}</p>
                  </div>
                  <Icon name="ArrowUpRight" size={18} className="text-white/20 group-hover:text-white/60 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION */}
      <section id="о производстве" className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left */}
          <div>
            <p className="section-label mb-4">04 / О производстве</p>
            <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-tight mb-8">
              Делаем руками.<br/>
              <span className="italic text-[#888880]">Думаем годами.</span>
            </h2>
            <p className="text-[#888880] leading-relaxed mb-6">
              Наша мастерская работает в Москве с 2016 года. Каждый светильник проходит путь от эскиза до готового изделия внутри одной команды — конструктор, металлист, финишер.
            </p>
            <p className="text-[#888880] leading-relaxed mb-10">
              Производим малыми сериями: от 4 до 20 единиц. Это позволяет контролировать каждую деталь и сохранять авторский характер изделия.
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-white/8 pt-10">
              {[
                { num: "100%", label: "ручная сборка" },
                { num: "∞", label: "вариантов финишей" },
                { num: "3–6", label: "недель производство" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-cormorant text-3xl font-light">{item.num}</p>
                  <p className="section-label mt-1 text-white/40">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — animated lamps showcase */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>

            {/* Pendant in center */}
            <div className="relative animate-float lamp-glow z-10">
              <LampSVG className="w-40 h-60" />
            </div>

            {/* Sconce left */}
            <div className="absolute left-0 top-1/4 animate-float-delay">
              <WallSconeSVG className="w-24 h-32 opacity-50" />
            </div>

            {/* Floor right */}
            <div className="absolute right-0 bottom-0 animate-float">
              <FloorLampSVG className="w-20 h-48 opacity-50" />
            </div>

            {/* Glow circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(245,245,220,0.06) 0%, transparent 70%)" }}
            />
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="контакты" className="py-32 bg-[#060606] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(245,245,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,240,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <p className="section-label mb-4">05 / Контакты</p>
            <h2 className="font-cormorant text-[clamp(3rem,8vw,7rem)] font-light leading-none">
              Обсудим<br/>
              <span className="italic text-[#888880]">проект?</span>
            </h2>
            <p className="text-[#888880] mt-8 max-w-md mx-auto leading-relaxed">
              Принимаем заказы на серийные модели и индивидуальные проекты. Работаем с дизайнерами, архитекторами и частными клиентами.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 max-w-3xl mx-auto">
            {[
              { icon: "Mail", label: "Почта", value: "hello@lumen.ru" },
              { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
              { icon: "MapPin", label: "Адрес", value: "Москва, Рочдельская 15" },
            ].map((contact) => (
              <div key={contact.label} className="bg-[#060606] p-10 text-center group hover:bg-white/2 transition-colors duration-300 cursor-pointer">
                <Icon name={contact.icon} fallback="CircleAlert" size={20} className="text-white/25 group-hover:text-white/60 transition-colors duration-300 mx-auto" />
                <p className="section-label mt-4 mb-2">{contact.label}</p>
                <p className="font-cormorant text-xl font-light">{contact.value}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="btn-primary">
              Отправить запрос
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-xl font-light tracking-[0.2em] text-white/40">LUMEN</span>
          <p className="section-label text-white/20">© 2024 Все права защищены</p>
          <div className="flex gap-6">
            <button className="nav-link">Instagram</button>
            <button className="nav-link">Pinterest</button>
            <button className="nav-link">Telegram</button>
          </div>
        </div>
      </footer>
    </div>
  );
}