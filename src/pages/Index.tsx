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
        <div className="max-w-md mx-auto">
          <div className="service-card">
            <h2 className="font-heading text-xl md:text-2xl text-foreground mb-6">
              Услуги солярия
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground/80 text-sm">Вертикальный солярий, <span className="font-semibold text-foreground">1 мин</span></span>
                <span className="price-tag whitespace-nowrap ml-4 font-semibold">от 15 ₽</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/80 text-sm">Горизонтальный солярий, <span className="font-semibold text-foreground">1 мин</span></span>
                <span className="price-tag whitespace-nowrap ml-4 font-semibold">от 12 ₽</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/80 text-sm">Абонемент <span className="font-semibold text-foreground">100 минут</span></span>
                <span className="price-tag whitespace-nowrap ml-4 font-semibold">от 1200 ₽</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground/80 text-sm">Крем для загара</span>
                <span className="price-tag whitespace-nowrap ml-4 font-semibold">от 100 ₽</span>
              </div>
            </div>
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
