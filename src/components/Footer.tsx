import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <Link to="/" className="flex flex-col leading-none mb-6">
              <span className="font-cormorant text-2xl font-light tracking-[0.15em] text-white">LUMEN</span>
              <span className="text-[9px] tracking-[0.3em] text-white/30 font-golos uppercase mt-0.5">Atelier</span>
            </Link>
            <p className="text-sm text-white/35 font-light leading-relaxed max-w-xs">
              Дизайнерские световые приборы ручной работы. Каждый светильник — уникальный объект, рождённый из диалога между светом и формой.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="section-label mb-2">Навигация</span>
            {[
              { to: '/catalog', label: 'Каталог' },
              { to: '/collections', label: 'Коллекции' },
              { to: '/production', label: 'О производстве' },
              { to: '/contacts', label: 'Контакты' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-white/40 hover:text-white transition-colors font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="section-label mb-2">Контакты</span>
            <a href="tel:+74951234567" className="text-sm text-white/40 hover:text-white transition-colors font-light">
              +7 495 123-45-67
            </a>
            <a href="mailto:hello@lumen-atelier.ru" className="text-sm text-white/40 hover:text-white transition-colors font-light">
              hello@lumen-atelier.ru
            </a>
            <p className="text-sm text-white/25 font-light mt-2">
              Москва, ул. Дизайнерская, 12<br />
              Шоурум: пн–пт 10:00–19:00
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-light tracking-widest">
            © 2024 Lumen Atelier. Все права защищены.
          </p>
          <p className="text-xs text-white/15 tracking-widest">
            Мелкосерийное производство · Ручная работа · Россия
          </p>
        </div>
      </div>
    </footer>
  );
}
