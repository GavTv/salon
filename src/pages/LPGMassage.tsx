import Layout from "@/components/Layout";
import BookButton from "@/components/BookButton";
import { Zap } from "lucide-react";

const LPGMassage = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="section-title">LPG массаж</h1>
          <p className="text-muted-foreground leading-relaxed">
            Эффективная процедура для коррекции фигуры и борьбы с целлюлитом. 
            Безболезненно и результативно.
          </p>
        </div>

        {/* Services */}
        <div className="max-w-xl mx-auto">
          <div className="service-card mb-8">
            <h2 className="font-heading text-xl md:text-2xl text-foreground mb-6">
              Услуги LPG
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-foreground/80">LPG массаж тела (45 мин)</span>
                <span className="price-tag">от 2500 ₽</span>
              </li>
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-foreground/80">LPG массаж лица (30 мин)</span>
                <span className="price-tag">от 1500 ₽</span>
              </li>
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-foreground/80">LPG массаж зоны</span>
                <span className="price-tag">от 1000 ₽</span>
              </li>
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-foreground/80">Абонемент 10 сеансов</span>
                <span className="price-tag">от 20000 ₽</span>
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-secondary/50 rounded-lg p-6">
            <h3 className="font-heading text-lg text-foreground mb-4">Эффекты процедуры:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Уменьшение объёмов тела</li>
              <li>• Улучшение текстуры кожи</li>
              <li>• Активизация кровообращения</li>
              <li>• Выведение лишней жидкости</li>
              <li>• Повышение тонуса кожи</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <BookButton />
        </div>
      </div>
    </Layout>
  );
};

export default LPGMassage;
