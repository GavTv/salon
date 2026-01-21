import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import HeroIcon from "@/components/HeroIcon";
import { Gift, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const promotions = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=450&fit=crop",
    title: "LPG массаж всего тела",
    description: "30 мин — 1000 ₽ | 45 мин — 1500 ₽. Эффективная коррекция фигуры и борьба с целлюлитом по специальной цене!",
    badge: "Выгодно",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=450&fit=crop",
    title: "Чистка лица + пилинг в подарок",
    description: "Чистка лица за 3500 ₽ — пилинг стоимостью 2000 ₽ в подарок!",
    badge: "Подарок",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=450&fit=crop",
    title: "Бесплатная консультация косметолога",
    description: "Запишитесь на бесплатную консультацию и получите индивидуальную программу ухода.",
    badge: "Бесплатно",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=450&fit=crop",
    title: "LPG массаж: 5+1",
    description: "При покупке курса из 5 процедур LPG массажа — шестая процедура бесплатно.",
    badge: "Подарок",
  },
];

const Promotions = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero */}
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12">
          <HeroIcon icon={Gift} />
          
          <motion.h1 
            className="section-title mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Акции
          </motion.h1>
          
          <motion.p 
            className="text-muted-foreground leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Специальные предложения и выгодные акции для наших клиентов.
          </motion.p>
        </AnimatedSection>

        {/* Promo Grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {promotions.map((promo, index) => (
            <AnimatedSection key={promo.id} delay={index * 0.1}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/30 cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <motion.span 
                    className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {promo.badge}
                  </motion.span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {promo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {promo.description}
                  </p>
                  
                  <motion.div 
                    className="flex items-center gap-2 text-sm font-medium text-primary"
                    whileHover={{ x: 4 }}
                  >
                    Подробнее
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
                
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Note */}
        <AnimatedSection delay={0.5} className="max-w-xl mx-auto mt-12 text-center">
          <p className="text-xs text-muted-foreground bg-secondary/30 rounded-xl p-4 border border-border/20">
            * Акции не суммируются. Подробности уточняйте у администратора.
          </p>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Promotions;
