import Layout from "@/components/Layout";
import BookButton from "@/components/BookButton";
import AnimatedSection from "@/components/AnimatedSection";
import HeroIcon from "@/components/HeroIcon";
import InteractiveServiceCard from "@/components/InteractiveServiceCard";
import { Sparkles, Droplet, Eye, Syringe, Gem } from "lucide-react";
import { motion } from "framer-motion";

const eyebrows = [
  { name: "Коррекция бровей", price: "500 ₽" },
  { name: "Коррекция бровей (воск)", price: "700 ₽" },
  { name: "Окрашивание бровей/ресниц (краской)", price: "500 ₽" },
  { name: "Окрашивание бровей хной", price: "700 ₽" },
  { name: "Ламинирование бровей", price: "2500 ₽" },
];

const facePeelings = [
  { name: "Миндальный", price: "2000 ₽" },
  { name: "Кислотный", price: "2500 ₽" },
  { name: "Джесснер", price: "3000 ₽" },
  { name: "BioRePeel, PRX", price: "3500 ₽" },
];

const faceCare = [
  { name: "Уход лица на косметике «Angiopharm»", price: "3000 ₽" },
];

const lipolytics = [
  { name: "LiGHT FiT 2 мл", price: "3500 ₽" },
  { name: "BiOGEL (стройность) 2 мл", price: "12000 ₽" },
  { name: "LiPO LONG коктейль для тела", price: "15000 ₽" },
];

const botox = [
  { name: "ONE TOX (1 ед.)", price: "300 ₽" },
  { name: "Межбровье + лоб", price: "8000 ₽" },
  { name: "Межбровье + лоб + глаза", price: "10000 ₽" },
  { name: "Межбровье + лоб + глаза + лифтинг бровей", price: "12000 ₽" },
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
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <InteractiveServiceCard title="Брови" items={eyebrows} icon={Eye} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.15}>
            <InteractiveServiceCard title="Пилинги для лица" items={facePeelings} icon={Sparkles} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <InteractiveServiceCard title="Уход за лицом" items={faceCare} icon={Droplet} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.25}>
            <InteractiveServiceCard title="Липолитики" items={lipolytics} icon={Syringe} />
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <InteractiveServiceCard title="Ботокс по зонам" items={botox} icon={Gem} />
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
