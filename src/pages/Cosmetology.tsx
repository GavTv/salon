import Layout from "@/components/Layout";
import ServiceSection from "@/components/ServiceSection";
import BookButton from "@/components/BookButton";
import { Sparkles } from "lucide-react";

const faceCleaning = [
  { name: "Классическая чистка", price: "от 2500 ₽" },
  { name: "Ультразвуковая чистка", price: "от 2000 ₽" },
  { name: "Комбинированная чистка", price: "от 3500 ₽" },
  { name: "Атравматичная чистка", price: "от 3000 ₽" },
];

const injections = [
  { name: "Ботулинотерапия (зона)", price: "от 5000 ₽" },
  { name: "Контурная пластика губ", price: "от 12000 ₽" },
  { name: "Биоревитализация", price: "от 8000 ₽" },
  { name: "Мезотерапия лица", price: "от 4000 ₽" },
  { name: "Плазмолифтинг", price: "от 6000 ₽" },
];

const faceCare = [
  { name: "Уходовая процедура", price: "от 2500 ₽" },
  { name: "Пилинг поверхностный", price: "от 2000 ₽" },
  { name: "Пилинг срединный", price: "от 4000 ₽" },
  { name: "Массаж лица", price: "от 1500 ₽" },
  { name: "Альгинатная маска", price: "от 1000 ₽" },
];

const apparatus = [
  { name: "RF-лифтинг", price: "от 3500 ₽" },
  { name: "Микротоковая терапия", price: "от 2500 ₽" },
  { name: "Фотоомоложение", price: "от 4000 ₽" },
  { name: "Лазерное омоложение", price: "от 6000 ₽" },
  { name: "Криотерапия", price: "от 2000 ₽" },
];

const eyebrows = [
  { name: "Коррекция бровей", price: "от 500 ₽" },
  { name: "Окрашивание бровей", price: "от 600 ₽" },
  { name: "Ламинирование бровей", price: "от 1500 ₽" },
  { name: "Ламинирование ресниц", price: "от 2000 ₽" },
  { name: "Наращивание ресниц", price: "от 2500 ₽" },
];

const permanent = [
  { name: "Перманент бровей", price: "от 8000 ₽" },
  { name: "Перманент губ", price: "от 9000 ₽" },
  { name: "Перманент век", price: "от 7000 ₽" },
  { name: "Коррекция перманента", price: "от 4000 ₽" },
];

const Cosmetology = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="section-title">Косметология</h1>
          <p className="text-muted-foreground leading-relaxed">
            Современные косметологические процедуры для красоты и здоровья вашей кожи. 
            Индивидуальный подход и профессиональный уход.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ServiceSection title="Чистка лица" items={faceCleaning} />
          <ServiceSection title="Инъекционные процедуры" items={injections} />
          <ServiceSection title="Уход за лицом" items={faceCare} />
          <ServiceSection title="Аппаратная косметология" items={apparatus} />
          <ServiceSection title="Брови и ресницы" items={eyebrows} />
          <ServiceSection title="Перманентный макияж" items={permanent} />
        </div>

        {/* Info */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Перед процедурами необходима консультация косметолога. 
            Все процедуры выполняются сертифицированными специалистами с использованием 
            качественных препаратов.
          </p>
          <BookButton />
        </div>
      </div>
    </Layout>
  );
};

export default Cosmetology;
