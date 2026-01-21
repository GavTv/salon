import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import HeroIcon from "@/components/HeroIcon";
import { Gift } from "lucide-react";
import { motion } from "framer-motion";

const promotions = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=450&fit=crop",
    title: "Чистка лица + пилинг в подарок",
    description: "Чистка лица за 3500 ₽ — пилинг стоимостью 2000 ₽ в подарок!",
    badge: "Подарок",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=450&fit=crop",
    title: "LPG массаж 30 мин",
    description: "Всего 1000 ₽ вместо 1500 ₽! Эффективная коррекция фигуры по специальной цене.",
    badge: "Выгодно",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=450&fit=crop",
    title: "Ламинирование бровей",
    description: "Всего 2000 ₽ вместо 2500 ₽! Идеальные брови по выгодной цене.",
    badge: "Скидка",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=450&fit=crop",
    title: "Акция для студентов — скидка 15%",
    description: "Коррекция бровей 500 ₽ • Окрашивание бровей 500 ₽ • Ламинирование бровей 2500 ₽ • Стрижка волос от 1400 ₽",
    badge: "Студентам",
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
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {promo.description}
                  </p>
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
