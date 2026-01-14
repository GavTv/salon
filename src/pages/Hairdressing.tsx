import Layout from "@/components/Layout";
import ServiceSection from "@/components/ServiceSection";
import BookButton from "@/components/BookButton";
import { Scissors } from "lucide-react";

const haircutServices = [
  { name: "Мужская стрижка", price: "от 950 ₽" },
  { name: "Женская стрижка", price: "от 1200 ₽" },
  { name: "Детская стрижка", price: "от 700 ₽" },
  { name: "Модельная стрижка", price: "от 1500 ₽" },
  { name: "Укладка", price: "от 800 ₽" },
  { name: "Вечерняя причёска", price: "от 2500 ₽" },
];

const coloringServices = [
  { name: "Тонирование", price: "от 1500 ₽" },
  { name: "Однотонное окрашивание", price: "от 2500 ₽" },
  { name: "Мелирование", price: "от 3500 ₽" },
  { name: "Балаяж", price: "от 5000 ₽" },
  { name: "Омбре", price: "от 4500 ₽" },
  { name: "Сложное окрашивание", price: "от 7000 ₽" },
];

const careServices = [
  { name: "Ботокс для волос", price: "от 3000 ₽" },
  { name: "Кератиновое выпрямление", price: "от 5000 ₽" },
  { name: "Ламинирование", price: "от 2500 ₽" },
  { name: "Восстанавливающая маска", price: "от 500 ₽" },
];

const additionalServices = [
  { name: "Стрижка чёлки", price: "от 300 ₽" },
  { name: "Мытьё головы", price: "от 200 ₽" },
  { name: "Сушка феном", price: "от 400 ₽" },
];

const Hairdressing = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Scissors className="w-8 h-8 text-primary" />
          </div>
          <h1 className="section-title">Парикмахерские услуги</h1>
          <p className="text-muted-foreground leading-relaxed">
            Профессиональный подход к созданию вашего идеального образа. 
            Опытные мастера и качественные материалы.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ServiceSection title="Стрижка и укладка" items={haircutServices} />
          <ServiceSection title="Окрашивание" items={coloringServices} />
          <ServiceSection title="Уход за волосами" items={careServices} />
          <ServiceSection title="Дополнительные услуги" items={additionalServices} />
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <BookButton />
        </div>
      </div>
    </Layout>
  );
};

export default Hairdressing;
