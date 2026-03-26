import { useParams, Link } from 'react-router-dom';
import { products, categoryLabels } from '@/data/products';
import Icon from '@/components/ui/icon';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-cormorant text-4xl font-light text-white/30">Товар не найден</p>
          <Link to="/catalog" className="btn-outline mt-6 inline-flex">← Каталог</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-12">
          <Link to="/catalog" className="section-label hover:text-white/60 transition-colors">Каталог</Link>
          <span className="text-white/20 text-xs">→</span>
          <span className="section-label">{categoryLabels[product.category]}</span>
          <span className="text-white/20 text-xs">→</span>
          <span className="section-label text-white/60">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Image */}
          <div className="relative overflow-hidden aspect-square lamp-glow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isNew && (
              <div className="absolute top-6 left-6">
                <span className="section-label bg-white text-black px-3 py-1 text-[9px]">Новинка</span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span className="section-label">{categoryLabels[product.category]}</span>
              <span className="text-white/15">·</span>
              <span className="section-label">Коллекция {product.collection}</span>
            </div>

            <h1 className="font-cormorant text-6xl font-light text-white mb-6">
              {product.name}
            </h1>

            <p className="text-white/45 font-light leading-relaxed text-base mb-8">
              {product.description}
            </p>

            <div className="border-t border-white/8 pt-8 mb-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="section-label block mb-2">Материал</span>
                  <span className="text-white/60 text-sm font-light">{product.material}</span>
                </div>
                <div>
                  <span className="section-label block mb-2">Размеры</span>
                  <span className="text-white/60 text-sm font-light">{product.dimensions}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/8 pt-8 mb-10">
              <div className="font-cormorant text-4xl font-light text-white mb-2">
                {product.price.toLocaleString('ru-RU')} ₽
              </div>
              <p className="text-white/30 text-xs font-light tracking-widest">
                Цена указана за единицу. Доставка рассчитывается индивидуально.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacts" className="btn-primary flex-1 justify-center">
                Запросить цену
              </Link>
              <Link to="/contacts" className="btn-outline flex-1 justify-center">
                Задать вопрос
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-white/25 text-xs font-light tracking-widest">
              <span className="flex items-center gap-2">
                <Icon name="Shield" size={12} />
                Гарантия 10 лет
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Package" size={12} />
                Срок 8–12 недель
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Star" size={12} />
                Ручная работа
              </span>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="border-t border-white/5 pt-16 pb-16">
            <span className="section-label block mb-4">Похожие модели</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {related.map((p, i) => (
                <div key={p.id} className="bg-background">
                  <ProductCard product={p} index={i} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
