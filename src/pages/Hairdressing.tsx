import Layout from "@/components/Layout";
import BookButton from "@/components/BookButton";
import AnimatedSection from "@/components/AnimatedSection";
import HeroIcon from "@/components/HeroIcon";
import InteractiveServiceCard from "@/components/InteractiveServiceCard";
import { Scissors, Palette, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Раздел 1: Стрижки и укладки
const haircutServices = [
  { name: "Мужские стрижки", price: "от 950 ₽" },
  { name: "Женские стрижки", price: "от 1400 ₽" },
  { name: "Укладки волос", price: "от 1500 ₽" },
  { name: "Стрижка челки", price: "от 500 ₽" },
  { name: "Прически/Косы", price: "от 2500 ₽" },
];

// Раздел 2: Окрашивание волос
const coloringServices = [
  { name: "Окрашивание волос", price: "от 2000 ₽" },
  { name: "Тонирование", price: "от 2500 ₽" },
  { name: "Блондирование", price: "от 2500 ₽" },
  { name: "Мелирование", price: "от 3500 ₽" },
  { name: "Сложное окрашивание (ambre, baloyash, airtouch)", price: "от 5500 ₽" },
];

// Подраздел: Уход за волосами
const hairCareServices = [
  { name: "Абсолютное счастье для волос от Lebel (Япония)", price: "от 5000 ₽" },
  { name: "Ботокс волос (HONMA TOKIO)", price: "от 6500 ₽" },
  { name: "Кератиновое выпрямление Nano Brazil", price: "от 6500 ₽" },
  { name: "Ламинирование Constant Delight", price: "от 2500 ₽" },
  { name: "Коллаген для волос Nano Brazil", price: "от 3000 ₽" },
];

const ServiceList = ({ items }: { items: { name: string; price: string }[] }) => (
  <div className="space-y-0">
    {items.map((item, index) => (
      <motion.div
        key={index}
        className={`flex justify-between items-baseline gap-4 py-3 ${
          index !== items.length - 1 ? 'border-b border-foreground/10' : ''
        }`}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
      >
        <span className="text-foreground/80 text-sm">{item.name}</span>
        <span className="text-primary font-medium whitespace-nowrap text-sm">{item.price}</span>
      </motion.div>
    ))}
  </div>
);

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
        <div className="max-w-2xl mx-auto mb-8">
          <AnimatedSection delay={0.1}>
            <InteractiveServiceCard 
              title="Стрижки и укладки" 
              items={haircutServices} 
              icon={Scissors}
            />
          </AnimatedSection>
        </div>

        {/* Раздел 2: Окрашивание волос */}
        <div className="max-w-2xl mx-auto mb-8">
          <AnimatedSection delay={0.2}>
            <InteractiveServiceCard 
              title="Окрашивание волос" 
              items={coloringServices} 
              icon={Palette}
            />
          </AnimatedSection>
        </div>

        {/* Раздел 3: Уход за волосами */}
        <div className="max-w-2xl mx-auto">
          <AnimatedSection delay={0.3}>
            <InteractiveServiceCard 
              title="Уход за волосами" 
              items={hairCareServices} 
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
