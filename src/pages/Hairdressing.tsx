import Layout from "@/components/Layout";
import BookButton from "@/components/BookButton";
import AnimatedSection from "@/components/AnimatedSection";
import HeroIcon from "@/components/HeroIcon";
import InteractiveServiceCard from "@/components/InteractiveServiceCard";
import { Scissors, Palette, Sparkles, Droplet } from "lucide-react";
import { motion } from "framer-motion";

// Раздел 1: Стрижки и укладки
const haircutServices = [
  { name: "Мужские стрижки", price: "от 950 ₽" },
  { name: "Женские стрижки", price: "от 1200 ₽" },
  { name: "Укладки волос", price: "от 1500 ₽" },
  { name: "Стрижка челки", price: "от 500 ₽" },
  { name: "Прически/Косы", price: "от 2500 ₽" },
];

// Раздел 2: Окрашивание волос
const coloringServices = [
  { name: "Окрашивание волос Kapous/Estel", price: "от 2000 ₽" },
  { name: "Окрашивание волос от Loreal", price: "от 2500 ₽" },
  { name: "Тонирование", price: "от 1500 ₽" },
];

// Подраздел: Сложные окрашивания
const complexColoringServices = [
  { name: "Корни", price: "от 2000 ₽" },
  { name: "Полное", price: "от 3500 ₽" },
  { name: "Блондирование волос", price: "от 2500 ₽" },
];

// Подраздел: Уход за волосами
const hairCareServices = [
  { name: "Абсолютное счастье для волос от Lebel (Япония)", price: "от 2800 ₽" },
  { name: "Ботокс волос (HONMA TOKIO) Биксипластия волос Nano Brazil", price: "от 3000 ₽" },
  { name: "Кератиновое выпрямление Nano Brazil / Нанопластика волос (Aegla H2O Zero)", price: "от 3500 ₽" },
  { name: "Ламинирование Constant Delight", price: "от 2000 ₽" },
  { name: "Коллаген волос Nano Brazil", price: "от 3000 ₽" },
  { name: "Olaplex №1 и №2", price: "от 2500 ₽" },
];

const Hairdressing = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero */}
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12">
          <HeroIcon icon={Scissors} />
          
          <motion.h1 
            className="section-title mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Парикмахерские услуги
          </motion.h1>
          
          <motion.p 
            className="text-muted-foreground leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Профессиональный подход к созданию вашего идеального образа. 
            Опытные мастера и качественные материалы.
          </motion.p>
        </AnimatedSection>

        {/* Раздел 1: Стрижки и укладки */}
        <div className="max-w-2xl mx-auto mb-12">
          <AnimatedSection delay={0.1}>
            <InteractiveServiceCard 
              title="Стрижки и укладки" 
              items={haircutServices} 
              icon={Scissors}
            />
          </AnimatedSection>
        </div>

        {/* Раздел 2: Окрашивание волос */}
        <div className="max-w-2xl mx-auto space-y-6">
          <AnimatedSection delay={0.2}>
            <InteractiveServiceCard 
              title="Окрашивание волос" 
              items={coloringServices} 
              icon={Palette}
            />
          </AnimatedSection>
          
          {/* Подраздел: Сложные окрашивания */}
          <AnimatedSection delay={0.3}>
            <div className="ml-4 md:ml-8">
              <InteractiveServiceCard 
                title="Сложные окрашивания" 
                items={complexColoringServices} 
                icon={Sparkles}
              />
            </div>
          </AnimatedSection>
          
          {/* Подраздел: Уход за волосами */}
          <AnimatedSection delay={0.4}>
            <div className="ml-4 md:ml-8">
              <InteractiveServiceCard 
                title="Уход за волосами" 
                items={hairCareServices} 
                icon={Droplet}
              />
            </div>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <BookButton />
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Hairdressing;
