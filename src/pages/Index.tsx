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
        <div className="max-w-lg mx-auto">
          <div className="service-card p-0 overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b-2 border-primary/20">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Вид услуги</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Стоимость</span>
            </div>
            
            {/* Rows */}
            <div>
              <div className="flex justify-between items-center px-6 py-5 border-b border-border">
                <span className="text-foreground font-medium">Вертикальный солярий</span>
                <span className="text-primary font-semibold text-right">15 ₽/мин</span>
              </div>
              <div className="flex justify-between items-center px-6 py-5 border-b border-border">
                <span className="text-foreground font-medium">Горизонтальный солярий</span>
                <span className="text-primary font-semibold text-right">12 ₽/мин</span>
              </div>
              <div className="flex justify-between items-center px-6 py-5 border-b border-border">
                <span className="text-foreground font-medium">Абонемент 100 минут</span>
                <span className="text-primary font-semibold text-right">1200 ₽</span>
              </div>
              <div className="flex justify-between items-center px-6 py-5">
                <span className="text-foreground font-medium">Крем для загара</span>
                <span className="text-primary font-semibold text-right">от 100 ₽</span>
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
