import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/icon';

function LampAnimation({ type }: { type: 'sconce' | 'ceiling' | 'table' | 'floor' }) {
  if (type === 'ceiling') {
    return (
      <div className="flex flex-col items-center">
        <div className="w-px h-16 bg-gradient-to-b from-white/20 to-white/60" />
        <div className="relative animate-float">
          <div className="w-20 h-10 bg-gradient-to-b from-white/5 to-white/15 border border-white/20 clip-trapezoid" style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }} />
          <div className="animate-glow-pulse absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-px bg-white/50" />
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-40 h-32 pointer-events-none"
            style={{
              background: 'conic-gradient(from 180deg at 50% 0%, transparent 65deg, rgba(255,255,220,0.15) 85deg, rgba(255,255,220,0.3) 90deg, rgba(255,255,220,0.15) 95deg, transparent 115deg)',
              animation: 'light-beam 3s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    );
  }

  if (type === 'sconce') {
    return (
      <div className="flex items-start">
        <div className="w-1 h-20 bg-white/10 rounded-full mr-1" />
        <div className="relative mt-6 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-4 h-12 bg-white/10 border border-white/20" />
          <div className="absolute left-full top-4 w-14 h-6 bg-gradient-to-r from-white/10 to-white/5 border border-white/15" style={{ clipPath: 'polygon(0 20%, 100% 0%, 100% 100%, 0 80%)' }} />
          <div
            className="absolute left-full top-4 w-28 h-28"
            style={{
              background: 'radial-gradient(ellipse at left, rgba(255,255,220,0.2) 0%, transparent 70%)',
              animation: 'light-beam 4s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    );
  }

  if (type === 'table') {
    return (
      <div className="flex flex-col items-center">
        <div className="relative animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-20 bg-gradient-to-b from-white/5 to-white/10 border border-white/15" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} />
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-32 h-24 pointer-events-none"
            style={{
              background: 'conic-gradient(from 180deg at 50% 0%, transparent 60deg, rgba(255,255,220,0.2) 80deg, rgba(255,255,220,0.35) 90deg, rgba(255,255,220,0.2) 100deg, transparent 120deg)',
              animation: 'light-beam 3.5s ease-in-out 1s infinite',
            }}
          />
        </div>
        <div className="w-1 h-16 bg-white/20" />
        <div className="w-10 h-2 bg-white/15 border border-white/20" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-12 h-16 bg-gradient-to-b from-white/5 to-white/12 border border-white/15" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)' }} />
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 w-24 h-20"
          style={{
            background: 'conic-gradient(from 180deg at 50% 0%, transparent 65deg, rgba(255,255,220,0.18) 85deg, rgba(255,255,220,0.3) 90deg, rgba(255,255,220,0.18) 95deg, transparent 115deg)',
            animation: 'light-beam 4s ease-in-out 0.5s infinite',
          }}
        />
      </div>
      <div className="w-0.5 h-32 bg-gradient-to-b from-white/20 to-white/5" />
      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15" />
    </div>
  );
}

const stats = [
  { value: '8', label: 'лет в производстве' },
  { value: '200+', label: 'реализованных проектов' },
  { value: '12', label: 'мастеров в команде' },
  { value: '4', label: 'активные коллекции' },
];

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 70% 40%, rgba(255,255,220,0.04) 0%, transparent 60%)',
          }}
        />

        {/* Animated lamps background */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-around px-12 opacity-60 pointer-events-none">
          <LampAnimation type="sconce" />
          <LampAnimation type="ceiling" />
          <LampAnimation type="table" />
          <LampAnimation type="floor" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <span className="section-label">Дизайнерские световые приборы</span>
            </div>
            <h1
              className="font-cormorant text-6xl lg:text-8xl font-light leading-[1.05] mt-6 mb-8 animate-fade-up-delay-1"
              style={{ color: 'var(--lumen-white)' }}
            >
              Свет как форма<br />
              <em className="text-shimmer">мышления</em>
            </h1>
            <p className="text-base text-white/45 font-light leading-relaxed mb-10 max-w-lg animate-fade-up-delay-2">
              Мелкосерийное производство дизайнерских светильников. Каждый предмет создаётся вручную и несёт в себе авторский замысел.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Link to="/catalog" className="btn-primary">
                Смотреть каталог
              </Link>
              <Link to="/collections" className="btn-outline">
                Коллекции
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-4">
          <span className="section-label">Прокрутите</span>
          <div className="divider" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-cormorant text-5xl font-light text-white mb-2">{s.value}</div>
                <div className="section-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="section-label">Избранное</span>
              <h2 className="font-cormorant text-5xl font-light text-white mt-3">
                Актуальные модели
              </h2>
            </div>
            <Link to="/catalog" className="btn-outline hidden lg:flex">
              Весь каталог
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {featured.map((product, i) => (
              <div key={product.id} className="bg-background">
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 lg:hidden">
            <Link to="/catalog" className="btn-outline">
              Весь каталог
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="section-label">Философия</span>
              <h2 className="font-cormorant text-5xl font-light text-white mt-3 mb-8 leading-tight">
                Не просто светильник —<br />
                <em>объект с характером</em>
              </h2>
              <p className="text-white/40 font-light leading-relaxed mb-6">
                Мы верим, что источник света в интерьере — это не просто утилитарный предмет. Это скульптура, которая живёт дважды: когда выключена и когда освещает пространство вокруг себя.
              </p>
              <p className="text-white/40 font-light leading-relaxed mb-10">
                Каждая серия выпускается в количестве не более 50 экземпляров. Ограниченное производство — наш способ сохранить ценность каждого объекта.
              </p>
              <Link to="/production" className="btn-outline">
                О производстве
              </Link>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden aspect-square lamp-glow">
                <img
                  src="https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/f42778f6-74bd-4ad7-bcac-74ec84dba545.jpg"
                  alt="Lumen Atelier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-3/4 aspect-square border border-white/8 -z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collections teaser */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label">Коллекции</span>
            <h2 className="font-cormorant text-5xl font-light text-white mt-3">
              Два мира света
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            {[
              {
                name: 'Void',
                desc: 'О пустоте как источнике формы',
                image: 'https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/f42778f6-74bd-4ad7-bcac-74ec84dba545.jpg',
              },
              {
                name: 'Forma',
                desc: 'Исследование чистой геометрии',
                image: 'https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/229dd492-92cf-4af4-93d6-335fdcfe5f8d.jpg',
              },
            ].map((col) => (
              <Link key={col.name} to="/collections" className="group relative overflow-hidden aspect-[4/3] bg-background block">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="section-label block mb-2">Коллекция</span>
                  <h3 className="font-cormorant text-4xl font-light text-white">{col.name}</h3>
                  <p className="text-white/50 text-sm mt-2 font-light">{col.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-white/40 text-xs tracking-widest">
                    <span>Смотреть</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-label">Индивидуальный заказ</span>
          <h2 className="font-cormorant text-5xl font-light text-white mt-4 mb-6 leading-tight">
            Создадим светильник<br />под ваш проект
          </h2>
          <p className="text-white/40 font-light leading-relaxed mb-10 max-w-lg mx-auto">
            Работаем с архитекторами, дизайнерами интерьеров и частными заказчиками. Производство от 3 до 8 недель.
          </p>
          <Link to="/contacts" className="btn-primary">
            Обсудить проект
          </Link>
        </div>
      </section>
    </div>
  );
}
