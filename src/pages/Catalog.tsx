import { useState } from 'react';
import { products, Category, categoryLabels } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const categories: Category[] = ['all', 'sconce', 'ceiling', 'table', 'floor'];

export default function Catalog() {
  const [active, setActive] = useState<Category>('all');

  const filtered = active === 'all' ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label">Каталог</span>
          <h1 className="font-cormorant text-6xl font-light text-white mt-3">
            Световые приборы
          </h1>
          <p className="text-white/40 font-light mt-4 max-w-lg leading-relaxed">
            Мелкосерийные дизайнерские светильники. Все изделия производятся вручную в нашей мастерской.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-1 mb-12 border-b border-white/8 pb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase font-golos transition-all duration-300 ${
                active === cat
                  ? 'bg-white text-black'
                  : 'text-white/40 hover:text-white border border-transparent hover:border-white/15'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
          <span className="ml-auto section-label">{filtered.length} позиции</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {filtered.map((product, i) => (
            <div key={product.id} className="bg-background">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-32">
            <p className="text-white/30 font-cormorant text-3xl">Пусто</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 py-16 border-t border-white/5 text-center">
          <span className="section-label">Нет нужного?</span>
          <h2 className="font-cormorant text-4xl font-light text-white mt-3 mb-6">
            Изготовим по вашим эскизам
          </h2>
          <a href="/contacts" className="btn-primary">
            Обсудить проект
          </a>
        </div>
      </div>
    </div>
  );
}
