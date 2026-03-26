import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const contacts: { icon: string; label: string; value: string; href: string }[] = [
    { icon: 'Phone', label: 'Телефон', value: '+7 495 123-45-67', href: 'tel:+74951234567' },
    { icon: 'Mail', label: 'Email', value: 'hello@lumen-atelier.ru', href: 'mailto:hello@lumen-atelier.ru' },
    { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Дизайнерская, 12', href: '#' },
    { icon: 'Clock', label: 'Шоурум', value: 'Пн–Пт: 10:00–19:00', href: '#' },
  ];

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="section-label">Контакты</span>
          <h1 className="font-cormorant text-6xl font-light text-white mt-3">
            Давайте поговорим
          </h1>
          <p className="text-white/40 font-light mt-4 max-w-lg leading-relaxed">
            Обсудим ваш проект, ответим на вопросы или запишем на визит в шоурум.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          {/* Form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 border border-white/20 flex items-center justify-center mb-6 animate-glow-pulse">
                  <Icon name="Check" size={24} className="text-white" />
                </div>
                <h3 className="font-cormorant text-3xl font-light text-white mb-3">Сообщение отправлено</h3>
                <p className="text-white/40 font-light">
                  Мы свяжемся с вами в течение одного рабочего дня.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="section-label block mb-3">Имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border border-white/12 text-white placeholder:text-white/20 px-5 py-4 text-sm font-light outline-none focus:border-white/40 transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="section-label block mb-3">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border border-white/12 text-white placeholder:text-white/20 px-5 py-4 text-sm font-light outline-none focus:border-white/40 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-3">Телефон</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-transparent border border-white/12 text-white placeholder:text-white/20 px-5 py-4 text-sm font-light outline-none focus:border-white/40 transition-colors"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div>
                  <label className="section-label block mb-3">Сообщение</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-white/12 text-white placeholder:text-white/20 px-5 py-4 text-sm font-light outline-none focus:border-white/40 transition-colors resize-none"
                    placeholder="Расскажите о вашем проекте или задайте вопрос..."
                  />
                </div>
                <button type="submit" className="btn-primary self-start">
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-5 group border-b border-white/5 pb-8"
              >
                <div className="w-10 h-10 border border-white/12 flex items-center justify-center shrink-0 group-hover:border-white/30 transition-colors">
                  <Icon name={c.icon} size={16} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="section-label mb-1">{c.label}</div>
                  <div className="text-white font-light">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="mt-4">
              <p className="section-label mb-4">Для дизайнеров и архитекторов</p>
              <p className="text-white/35 font-light text-sm leading-relaxed">
                Работаем с профессионалами на особых условиях. Предоставляем спецификации, 3D-модели и образцы материалов. Напишите нам на{' '}
                <a href="mailto:trade@lumen-atelier.ru" className="text-white/60 hover:text-white transition-colors underline underline-offset-4">
                  trade@lumen-atelier.ru
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="border-t border-white/5 pt-12 pb-24">
          <div className="aspect-[16/5] bg-white/2 border border-white/6 flex items-center justify-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
            <div className="text-center relative z-10">
              <div className="w-3 h-3 rounded-full bg-white mx-auto mb-3 animate-glow-pulse" />
              <span className="section-label">Москва, ул. Дизайнерская, 12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}