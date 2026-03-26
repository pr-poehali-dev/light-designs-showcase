import { Link } from 'react-router-dom';
import { collections, products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Collections() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="section-label">Коллекции</span>
          <h1 className="font-cormorant text-6xl font-light text-white mt-3">
            Два мира света
          </h1>
          <p className="text-white/40 font-light mt-4 max-w-lg leading-relaxed">
            Каждая коллекция — это отдельный художественный высказывание, объединяющее предметы общей идеей и эстетикой.
          </p>
        </div>

        {collections.map((col, ci) => {
          const colProducts = products.filter(
            (p) => p.collection.toLowerCase() === col.id.toLowerCase()
          );
          return (
            <div key={col.id} className={`mb-32 ${ci > 0 ? 'border-t border-white/5 pt-32' : ''}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                <div className={ci % 2 === 0 ? 'order-1' : 'order-2'}>
                  <div className="relative overflow-hidden aspect-[4/3] lamp-glow">
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={ci % 2 === 0 ? 'order-2' : 'order-1'}>
                  <span className="section-label">{col.year}</span>
                  <h2 className="font-cormorant text-6xl font-light text-white mt-3 mb-6">
                    {col.name}
                  </h2>
                  <p className="text-white/40 font-light leading-relaxed text-lg mb-8">
                    {col.description}
                  </p>
                  <div className="flex items-center gap-8 mb-10">
                    <div>
                      <div className="font-cormorant text-4xl font-light text-white">{col.count}</div>
                      <div className="section-label mt-1">предмета в серии</div>
                    </div>
                    <div className="divider" />
                    <div>
                      <div className="font-cormorant text-4xl font-light text-white">50</div>
                      <div className="section-label mt-1">max экземпляров каждого</div>
                    </div>
                  </div>
                  <Link to="/catalog" className="btn-outline">
                    Смотреть всю серию
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
                {colProducts.map((product, i) => (
                  <div key={product.id} className="bg-background">
                    <ProductCard product={product} index={i} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="py-16 border-t border-white/5 text-center">
          <span className="section-label">Следите за новинками</span>
          <h2 className="font-cormorant text-4xl font-light text-white mt-3 mb-6">
            Новая коллекция — 2025
          </h2>
          <p className="text-white/35 font-light max-w-md mx-auto mb-8">
            Оставьте контакт — мы пришлём уведомление о запуске новой серии первыми.
          </p>
          <Link to="/contacts" className="btn-primary">
            Получить уведомление
          </Link>
        </div>
      </div>
    </div>
  );
}
