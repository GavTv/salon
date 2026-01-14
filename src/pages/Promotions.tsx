import Layout from "@/components/Layout";
import PromoCard from "@/components/PromoCard";
import { Gift } from "lucide-react";

const promotions = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=450&fit=crop",
    title: "Скидка 20% на окрашивание",
    description: "При записи в будние дни с 10:00 до 14:00 действует скидка на все виды окрашивания волос.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=450&fit=crop",
    title: "Бесплатная консультация косметолога",
    description: "Запишитесь на бесплатную консультацию и получите индивидуальную программу ухода.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=450&fit=crop",
    title: "Абонемент на солярий",
    description: "При покупке абонемента на 100 минут — крем для загара в подарок.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=450&fit=crop",
    title: "LPG массаж: 5+1",
    description: "При покупке курса из 5 процедур LPG массажа — шестая процедура бесплатно.",
  },
];

const Promotions = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <h1 className="section-title">Акции</h1>
          <p className="text-muted-foreground leading-relaxed">
            Специальные предложения и выгодные акции для наших клиентов.
          </p>
        </div>

        {/* Promo Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {promotions.map((promo) => (
            <PromoCard
              key={promo.id}
              image={promo.image}
              title={promo.title}
              description={promo.description}
            />
          ))}
        </div>

        {/* Note */}
        <div className="max-w-xl mx-auto mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            * Акции не суммируются. Подробности уточняйте у администратора.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Promotions;
