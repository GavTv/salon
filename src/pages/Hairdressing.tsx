import Layout from "@/components/Layout";
import BookButton from "@/components/BookButton";
import AnimatedSection from "@/components/AnimatedSection";
import HeroIcon from "@/components/HeroIcon";
import InteractiveServiceCard from "@/components/InteractiveServiceCard";
import { Scissors, Palette, Sparkles, Droplet } from "lucide-react";
import { motion } from "framer-motion";

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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <InteractiveServiceCard 
              title="Стрижка и укладка" 
              items={haircutServices} 
              icon={Scissors}
            />
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <InteractiveServiceCard 
              title="Окрашивание" 
              items={coloringServices} 
              icon={Palette}
            />
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <InteractiveServiceCard 
              title="Уход за волосами" 
              items={careServices} 
              icon={Sparkles}
            />
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <InteractiveServiceCard 
              title="Дополнительные услуги" 
              items={additionalServices} 
              icon={Droplet}
            />
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
