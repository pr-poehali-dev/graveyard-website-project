import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      title: 'Организация похорон',
      description: 'Полный комплекс ритуальных услуг от оформления документов до проведения церемонии',
      price: 'от 35 000 ₽',
      icon: 'Heart'
    },
    {
      title: 'Катафалк',
      description: 'Собственный автопарк современных катафалков. Перевозка в любую точку города и области',
      price: 'от 8 000 ₽',
      icon: 'Car'
    },
    {
      title: 'Работы на кладбище',
      description: 'Профессиональная бригада копщиков. Подготовка места захоронения, установка памятников',
      price: 'от 12 000 ₽',
      icon: 'Users'
    },
    {
      title: 'Ритуальные принадлежности',
      description: 'Широкий выбор гробов, венков, памятников. Индивидуальный подход к каждому заказу',
      price: 'от 15 000 ₽',
      icon: 'ShoppingBag'
    }
  ];

  const faqs = [
    {
      question: 'Как быстро вы можете приехать?',
      answer: 'Наша служба работает круглосуточно. Мы прибудем к вам в течение 1-2 часов после звонка в любое время суток.'
    },
    {
      question: 'Какие документы необходимы?',
      answer: 'Для организации похорон потребуется медицинское свидетельство о смерти и паспорт усопшего. Наш агент поможет с оформлением всех необходимых документов.'
    },
    {
      question: 'Можно ли организовать похороны в другом городе?',
      answer: 'Да, мы организуем перевозку и захоронение в любом городе России. У нас есть партнеры во всех регионах.'
    },
    {
      question: 'Какова ваша пропускная способность?',
      answer: 'Наше похоронное бюро обслуживает до 100 семей в месяц. Благодаря собственному катафалку и профессиональной бригаде мы гарантируем качественное и своевременное оказание услуг каждому клиенту.'
    },
    {
      question: 'Предоставляете ли вы рассрочку?',
      answer: 'Да, мы понимаем, что это непростое время. Предоставляем рассрочку платежа на 6 месяцев без процентов.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение. Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">Вечность</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Прайс</a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">Вопросы</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <a href="tel:+74951234567" className="flex items-center gap-2 text-primary font-semibold">
            <Icon name="Phone" size={20} />
            <span className="hidden md:inline">+7 (495) 123-45-67</span>
          </a>
        </div>
      </header>

      <section className="relative py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/ceb6c7ad-ce5c-42f0-9204-039944966667/files/33946c2f-6544-412c-96b0-0821c72c5494.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center animate-fade-in relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            С уважением к памяти
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Профессиональная ритуальная служба с 15-летним опытом. Оказываем полный спектр услуг с заботой и участием
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-base">
              <a href="#contact">Получить консультацию</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <a href="tel:+74951234567">Позвонить сейчас</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный комплекс ритуальных услуг. Работаем круглосуточно, без выходных
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary">О нашей службе</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
              <div className="animate-fade-in">
                <div className="text-5xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">лет опыта</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="text-5xl font-bold text-primary mb-2">100</div>
                <div className="text-muted-foreground">семей в месяц</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">работаем без выходных</div>
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-4">
                Похоронное бюро «Вечность» — это команда профессионалов с большим опытом и искренним желанием помочь в трудную минуту. Мы понимаем, насколько это тяжелое время для семьи, поэтому берем на себя все организационные вопросы.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                В нашем распоряжении собственный автопарк современных катафалков и профессиональная бригада копщиков. Это позволяет нам оперативно и качественно оказывать услуги, не завися от подрядчиков.
              </p>
              <p className="text-lg leading-relaxed">
                Наша пропускная способность — до 100 семей в месяц. При этом каждому клиенту мы уделяем максимум внимания и заботы, гарантируя достойное прощание с близким человеком.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей. Окончательная стоимость согласовывается с вами
          </p>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-semibold">Организация похорон (эконом)</span>
                    <span className="text-lg font-bold text-primary">от 35 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-semibold">Организация похорон (стандарт)</span>
                    <span className="text-lg font-bold text-primary">от 55 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-semibold">Организация похорон (премиум)</span>
                    <span className="text-lg font-bold text-primary">от 95 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-semibold">Транспортировка (катафалк по городу)</span>
                    <span className="text-lg font-bold text-primary">от 8 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-semibold">Работы на кладбище (копка могилы)</span>
                    <span className="text-lg font-bold text-primary">от 12 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-semibold">Гроб деревянный</span>
                    <span className="text-lg font-bold text-primary">от 15 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-semibold">Памятник гранитный</span>
                    <span className="text-lg font-bold text-primary">от 25 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Венок траурный</span>
                    <span className="text-lg font-bold text-primary">от 3 500 ₽</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    Предоставляем рассрочку на 6 месяцев без процентов
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary">Частые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответы на самые распространенные вопросы наших клиентов
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary">Связаться с нами</h2>
          <p className="text-center text-muted-foreground mb-12">
            Мы доступны круглосуточно. Ответим на все ваши вопросы
          </p>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Телефон (круглосуточно)</p>
                    <a href="tel:+74951234567" className="text-primary hover:underline">+7 (495) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@vechnost.ru" className="text-primary hover:underline">info@vechnost.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Адрес офиса</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Круглосуточно, без выходных</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Отправить сообщение</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Вечность</h3>
          <p className="text-primary-foreground/80 mb-4">Ритуальные услуги с заботой и участием</p>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Похоронное бюро «Вечность». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;