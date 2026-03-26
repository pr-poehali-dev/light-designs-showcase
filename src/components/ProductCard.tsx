import { Link } from 'react-router-dom';
import { Product, categoryLabels } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <div
      className="product-card group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link to={`/catalog/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-[3/4]">
          <div className="card-glow" />
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.isNew && (
            <div className="absolute top-4 left-4">
              <span className="section-label bg-white text-black px-3 py-1 text-[9px]">
                Новинка
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <button className="btn-outline text-xs py-2 px-5 w-full justify-center">
              Подробнее
            </button>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between mb-1">
            <span className="section-label">{categoryLabels[product.category]}</span>
            <span className="section-label">{product.collection}</span>
          </div>
          <h3 className="font-cormorant text-2xl font-light text-white mt-2 mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-white/40 font-light line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between border-t border-white/8 pt-4">
            <span className="font-cormorant text-xl text-white">
              {product.price.toLocaleString('ru-RU')} ₽
            </span>
            <span className="text-white/20 text-xs">→</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
