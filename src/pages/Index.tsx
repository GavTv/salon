import Layout from "@/components/Layout";
import BookButton from "@/components/BookButton";
import { Sun } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Sun className="w-8 h-8 text-primary" />
          </div>
          <h1 className="section-title">Солярий</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Профессиональные солярии для красивого и равномерного загара. 
            Современное оборудование и индивидуальный подход к каждому клиенту.
          </p>
          <BookButton />
        </div>

        {/* Services */}
        <div className="max-w-xl mx-auto">
          <div className="service-card">
            <h2 className="font-heading text-xl md:text-2xl text-foreground mb-6">
              Услуги солярия
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-foreground/80">Вертикальный солярий (1 мин)</span>
                <span className="price-tag">от 15 ₽</span>
              </li>
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-foreground/80">Горизонтальный солярий (1 мин)</span>
                <span className="price-tag">от 12 ₽</span>
              </li>
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-foreground/80">Абонемент 100 минут</span>
                <span className="price-tag">от 1200 ₽</span>
              </li>
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-foreground/80">Крем для загара</span>
                <span className="price-tag">от 100 ₽</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Info */}
        <div className="max-w-xl mx-auto mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Перед первым посещением рекомендуем проконсультироваться с нашими специалистами 
            для подбора оптимального времени и типа загара.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
