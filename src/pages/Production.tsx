const steps = [
  {
    num: '01',
    title: 'Эскиз',
    desc: 'Каждый предмет начинается с идеи. Наши дизайнеры разрабатывают концепцию вручную — карандаш и бумага, никакого автоматизированного проектирования на первом этапе.',
  },
  {
    num: '02',
    title: 'Прототип',
    desc: 'Первый экземпляр создаётся в мастерской. Форма уточняется в материале: иногда требуется 3–4 итерации, прежде чем предмет приобретёт нужный характер.',
  },
  {
    num: '03',
    title: 'Производство',
    desc: 'Серийное производство — не более 50 экземпляров каждой модели. Ручная сборка, ручная полировка. Каждый светильник проходит через руки одного мастера от начала до конца.',
  },
  {
    num: '04',
    title: 'Контроль',
    desc: 'Перед отправкой — проверка всех соединений, электрики и финишной отделки. Каждый предмет получает номер и сопроводительную карту с именем мастера.',
  },
];

const materials = [
  {
    name: 'Кованая сталь',
    desc: 'Основной конструктивный материал. Ручная ковка позволяет создавать уникальные формы с живой поверхностью.',
    prop: 'Чёрное матовое покрытие или натуральный металл',
  },
  {
    name: 'Латунь',
    desc: 'Используем в акцентных деталях — крепления, переходники, декоративные элементы. Со временем приобретает благородную патину.',
    prop: 'Необработанная, с полировкой или с патиной',
  },
  {
    name: 'Стекло',
    desc: 'Работаем с несколькими стеклодувными мастерскими. Плафоны изготавливаются под наши чертежи вручную.',
    prop: 'Опаловое, матовое, прозрачное',
  },
  {
    name: 'Мрамор',
    desc: 'Каждое мраморное основание — уникальный кусок камня с собственным рисунком. Не бывает двух одинаковых.',
    prop: 'Белый каррарский, чёрный маркино',
  },
];

export default function Production() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-24">
          <span className="section-label">О производстве</span>
          <h1 className="font-cormorant text-6xl lg:text-7xl font-light text-white mt-3 max-w-2xl leading-tight">
            Сделано руками,<br />
            <em>не конвейером</em>
          </h1>
        </div>

        {/* Main image */}
        <div className="relative mb-24 overflow-hidden aspect-[16/7] lamp-glow">
          <img
            src="https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/bd9dab29-a914-423b-9910-9b6ac5c21695.jpg"
            alt="Мастерская"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute left-12 bottom-12">
            <p className="font-cormorant text-3xl font-light text-white max-w-sm leading-relaxed italic">
              «Мы не производим товар. Мы создаём объекты, которые остаются на десятилетия.»
            </p>
            <p className="text-white/40 text-xs tracking-widest mt-4 font-golos uppercase">
              Основатель мастерской
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="mb-32">
          <div className="mb-16">
            <span className="section-label">Процесс</span>
            <h2 className="font-cormorant text-4xl font-light text-white mt-3">
              Как создаётся каждый предмет
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
            {steps.map((step) => (
              <div key={step.num} className="bg-background p-10">
                <div className="font-cormorant text-6xl font-light text-white/10 mb-6">{step.num}</div>
                <h3 className="font-cormorant text-2xl font-light text-white mb-4">{step.title}</h3>
                <p className="text-white/40 font-light leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="mb-32 border-t border-white/5 pt-24">
          <div className="mb-16">
            <span className="section-label">Материалы</span>
            <h2 className="font-cormorant text-4xl font-light text-white mt-3">
              Только честные материалы
            </h2>
            <p className="text-white/40 font-light mt-4 max-w-lg leading-relaxed">
              Мы не используем пластик и дешёвые сплавы. Каждый материал выбирается исходя из его долговечности и эстетики.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {materials.map((mat) => (
              <div key={mat.name} className="bg-background p-8 border-b border-white/5">
                <h3 className="font-cormorant text-2xl font-light text-white mb-3">{mat.name}</h3>
                <p className="text-white/40 font-light leading-relaxed text-sm mb-4">{mat.desc}</p>
                <p className="section-label">{mat.prop}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facts */}
        <div className="mb-32 border-t border-white/5 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {[
              { val: 'Москва', label: 'Производство', sub: 'Мастерская в 3 км от центра' },
              { val: '8–12 нед', label: 'Срок изготовления', sub: 'Для стандартных заказов' },
              { val: '10 лет', label: 'Гарантия', sub: 'На конструктив и электрику' },
            ].map((fact) => (
              <div key={fact.label} className="border-l border-white/10 pl-8">
                <div className="font-cormorant text-4xl font-light text-white mb-2">{fact.val}</div>
                <div className="section-label mb-1">{fact.label}</div>
                <div className="text-white/30 text-sm font-light">{fact.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 border-t border-white/5 text-center">
          <span className="section-label">Приходите к нам</span>
          <h2 className="font-cormorant text-4xl font-light text-white mt-3 mb-6">
            Шоурум в Москве
          </h2>
          <p className="text-white/35 font-light max-w-md mx-auto mb-8">
            Вы можете приехать в мастерскую, увидеть изделия вживую и поговорить с нашим дизайнером.
          </p>
          <a href="/contacts" className="btn-primary">
            Записаться на визит
          </a>
        </div>
      </div>
    </div>
  );
}
