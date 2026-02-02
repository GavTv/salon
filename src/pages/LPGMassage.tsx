import Layout from "@/components/Layout";
import BookButton from "@/components/BookButton";
import AnimatedSection from "@/components/AnimatedSection";
import HeroIcon from "@/components/HeroIcon";
import { Zap, TrendingDown, Heart, Droplets, Sparkles, Activity } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  name: string;
  price: string;
}

const ServiceCard = ({ title, items }: { title: string; items: ServiceItem[] }) => (
  <motion.div 
    className="overflow-hidden rounded-2xl bg-card border border-border/30"
    whileHover={{ boxShadow: "0 12px 40px -12px hsl(var(--soft-brown) / 0.2)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border/30">
      <span className="font-heading text-lg text-foreground">{title}</span>
      <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Стоимость</span>
    </div>
    <div>
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          className="flex justify-between items-center px-6 py-4 border-b border-border/20 last:border-0 group cursor-default"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ backgroundColor: "hsl(var(--accent) / 0.3)" }}
        >
          <span className="text-foreground font-medium group-hover:text-primary transition-colors">
            {item.name}
          </span>
          <motion.span 
            className="text-primary font-semibold text-right whitespace-nowrap ml-4"
            whileHover={{ scale: 1.05 }}
          >
            {item.price}
          </motion.span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const lpgServices = [
  { name: "LPG массаж 45 минут", price: "2000 ₽" },
  { name: "LPG массаж 30 минут", price: "1500 ₽" },
];

const bodyServices = [
  { name: "Кавитация 20 мин (1 зона)", price: "3500 ₽" },
  { name: "RF массаж 15 мин (1 зона)", price: "2500 ₽" },
  { name: "Миостимуляция 30 мин (1 зона)", price: "3000 ₽" },
  { name: "СМАС лифтинг по телу (1 зона)", price: "3000 ₽" },
  { name: "Механическая чистка", price: "4000 ₽" },
];

const packages = [
  { name: "5 LPG + 5 RF на пробл. зоны или 5 кавитаций", price: "10000 ₽" },
  { name: "10 сеансов LPG тело 45 минут", price: "15000 ₽" },
  { name: "10 сеансов LPG тела (30 мин)", price: "10000 ₽" },
  { name: "5 сеансов LPG + Кавитация 45 минут", price: "20000 ₽" },
];

const benefits = [
  { icon: TrendingDown, title: "Уменьшение объёмов", description: "Видимый результат уже после первых процедур" },
  { icon: Sparkles, title: "Улучшение текстуры", description: "Гладкая и подтянутая кожа" },
  { icon: Heart, title: "Кровообращение", description: "Активизация обменных процессов" },
  { icon: Droplets, title: "Лимфодренаж", description: "Выведение лишней жидкости" },
  { icon: Activity, title: "Тонус кожи", description: "Повышение упругости и эластичности" },
];

const LPGMassage = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero */}
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12">
          <HeroIcon icon={Zap} />
          
          <motion.h1 
            className="section-title mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            LPG массаж
          </motion.h1>
          
          <motion.p 
            className="text-muted-foreground leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Эффективная процедура для коррекции фигуры и борьбы с целлюлитом. 
            Безболезненно и результативно.
          </motion.p>
        </AnimatedSection>

        {/* LPG Services */}
        <AnimatedSection delay={0.2} className="max-w-2xl mx-auto mb-8">
          <ServiceCard title="LPG массаж" items={lpgServices} />
        </AnimatedSection>

        {/* Body Services */}
        <AnimatedSection delay={0.3} className="max-w-2xl mx-auto mb-8">
          <ServiceCard title="Аппаратные процедуры" items={bodyServices} />
        </AnimatedSection>

        {/* Packages */}
        <AnimatedSection delay={0.4} className="max-w-2xl mx-auto mb-12">
          <ServiceCard title="Абонементы и комплексы" items={packages} />
        </AnimatedSection>

        {/* Benefits */}
        <AnimatedSection delay={0.5} className="max-w-4xl mx-auto mb-12">
          <h2 className="font-heading text-2xl text-center text-foreground mb-8">Эффекты процедуры</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/10 border border-border/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <benefit.icon className="w-5 h-5" />
                </motion.div>
                <h3 className="font-heading text-sm text-foreground mb-1">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.6} className="text-center">
          <BookButton />
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default LPGMassage;
