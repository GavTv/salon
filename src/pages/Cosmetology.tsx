import Layout from "@/components/Layout";
import BookButton from "@/components/BookButton";
import AnimatedSection from "@/components/AnimatedSection";
import HeroIcon from "@/components/HeroIcon";
import InteractiveServiceCard from "@/components/InteractiveServiceCard";
import { Sparkles, Droplet, Zap, Eye, Brush, Syringe } from "lucide-react";
import { motion } from "framer-motion";

const faceCleaning = [
  { name: "Классическая чистка", price: "от 2500 ₽" },
  { name: "Ультразвуковая чистка", price: "от 2000 ₽" },
  { name: "Комбинированная чистка", price: "от 3500 ₽" },
  { name: "Атравматичная чистка", price: "от 3000 ₽" },
];

const injections = [
  { name: "Ботулинотерапия (зона)", price: "от 5000 ₽" },
  { name: "Контурная пластика губ", price: "от 12000 ₽" },
  { name: "Биоревитализация", price: "от 8000 ₽" },
  { name: "Мезотерапия лица", price: "от 4000 ₽" },
  { name: "Плазмолифтинг", price: "от 6000 ₽" },
];

const faceCare = [
  { name: "Уходовая процедура", price: "от 2500 ₽" },
  { name: "Пилинг поверхностный", price: "от 2000 ₽" },
  { name: "Пилинг срединный", price: "от 4000 ₽" },
  { name: "Массаж лица", price: "от 1500 ₽" },
  { name: "Альгинатная маска", price: "от 1000 ₽" },
];

const apparatus = [
  { name: "RF-лифтинг", price: "от 3500 ₽" },
  { name: "Микротоковая терапия", price: "от 2500 ₽" },
  { name: "Фотоомоложение", price: "от 4000 ₽" },
  { name: "Лазерное омоложение", price: "от 6000 ₽" },
  { name: "Криотерапия", price: "от 2000 ₽" },
];

const eyebrows = [
  { name: "Коррекция бровей", price: "от 500 ₽" },
  { name: "Окрашивание бровей", price: "от 600 ₽" },
  { name: "Ламинирование бровей", price: "от 1500 ₽" },
  { name: "Ламинирование ресниц", price: "от 2000 ₽" },
  { name: "Наращивание ресниц", price: "от 2500 ₽" },
];

const permanent = [
  { name: "Перманент бровей", price: "от 8000 ₽" },
  { name: "Перманент губ", price: "от 9000 ₽" },
  { name: "Перманент век", price: "от 7000 ₽" },
  { name: "Коррекция перманента", price: "от 4000 ₽" },
];

const Cosmetology = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero */}
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12">
          <HeroIcon icon={Sparkles} />
          
          <motion.h1 
            className="section-title mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Косметология
          </motion.h1>
          
          <motion.p 
            className="text-muted-foreground leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Современные косметологические процедуры для красоты и здоровья вашей кожи. 
            Индивидуальный подход и профессиональный уход.
          </motion.p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatedSection delay={0.1}>
            <InteractiveServiceCard title="Чистка лица" items={faceCleaning} icon={Droplet} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.15}>
            <InteractiveServiceCard title="Инъекционные процедуры" items={injections} icon={Syringe} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <InteractiveServiceCard title="Уход за лицом" items={faceCare} icon={Sparkles} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.25}>
            <InteractiveServiceCard title="Аппаратная косметология" items={apparatus} icon={Zap} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <InteractiveServiceCard title="Брови и ресницы" items={eyebrows} icon={Eye} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.35}>
            <InteractiveServiceCard title="Перманентный макияж" items={permanent} icon={Brush} />
          </AnimatedSection>
        </div>

        {/* Info */}
        <AnimatedSection delay={0.4} className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-sm text-muted-foreground bg-secondary/30 rounded-xl p-4 border border-border/20 mb-8">
            ⚕️ Перед процедурами необходима консультация косметолога. 
            Все процедуры выполняются сертифицированными специалистами с использованием 
            качественных препаратов.
          </p>
          <BookButton />
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Cosmetology;
