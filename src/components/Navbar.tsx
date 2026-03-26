import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const links = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Каталог' },
  { to: '/collections', label: 'Коллекции' },
  { to: '/production', label: 'О производстве' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-cormorant text-2xl font-light tracking-[0.15em] text-white">LUMEN</span>
            <span className="text-[9px] tracking-[0.3em] text-white/30 font-golos uppercase mt-0.5">Atelier</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? '!text-white' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/contacts" className="btn-primary text-xs py-2.5 px-6">
              Запросить каталог
            </Link>
          </div>

          <button
            className="lg:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-500"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          background: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-cormorant text-4xl font-light text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contacts" className="btn-primary mt-4">
            Запросить каталог
          </Link>
        </div>
      </div>
    </>
  );
}
