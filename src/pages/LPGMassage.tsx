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
        <div className="max-w-lg mx-auto">
          <div className="service-card p-0 overflow-hidden mb-8">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b-2 border-primary/20">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Вид услуги</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Стоимость</span>
            </div>
            
            {/* Rows */}
            <div>
              <div className="flex justify-between items-center px-6 py-5 border-b border-border">
                <span className="text-foreground font-medium">LPG массаж тела</span>
                <span className="text-primary font-semibold text-right">от 2500 ₽</span>
              </div>
              <div className="flex justify-between items-center px-6 py-5 border-b border-border">
                <span className="text-foreground font-medium">LPG массаж лица</span>
                <span className="text-primary font-semibold text-right">от 1500 ₽</span>
              </div>
              <div className="flex justify-between items-center px-6 py-5 border-b border-border">
                <span className="text-foreground font-medium">LPG массаж зоны</span>
                <span className="text-primary font-semibold text-right">от 1000 ₽</span>
              </div>
              <div className="flex justify-between items-center px-6 py-5">
                <span className="text-foreground font-medium">Абонемент 10 сеансов</span>
                <span className="text-primary font-semibold text-right">от 20000 ₽</span>
              </div>
            </div>
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
