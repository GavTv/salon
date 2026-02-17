import Layout from "@/components/Layout";
import BookButton from "@/components/BookButton";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Адрес",
    content: "г. Москва, ул. Новослободская, д. 3, 3 этаж (БЦ Сафа)",
    link: null,
  },
  {
    icon: Phone,
    title: "Телефон",
    content: "+7 985 053 4761",
    link: "tel:+79850534761",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@novobeauty.ru",
    link: "mailto:info@novobeauty.ru",
  },
  {
    icon: Clock,
    title: "Режим работы",
    content: "Пн–Сб: 10:00–21:00 | Вс: 11:00–19:00",
    link: null,
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/salon.novobeauty?igsh=YWhwMGN3dnR4MjVm",
    icon: "instagram",
  },
  {
    name: "Telegram",
    href: "https://t.me/Novobeauty",
    icon: Send,
  },
];

const Contacts = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero */}
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Контакты
          </motion.h1>
          
          <motion.div 
            className="text-muted-foreground leading-relaxed text-base space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="font-medium text-foreground">Уважаемые Дамы и Господа!</p>
            <p>
              Мы рады пригласить Вас в салон красоты "Novobeauty"! Салон находится в 2х минутах от ст.метро Новослободская.
              Есть удобная стоянка для автомобилей.
            </p>
            <p>Наш адрес: г. Москва, ул.Новослободская, д.3, 3 этаж (БЦ Сафа).</p>
            <p>Телефон: <a href="tel:+79850534761" className="text-primary hover:underline">+7 (985) 053-47-61</a></p>
          </motion.div>
        </AnimatedSection>

        {/* Contact Info */}
        <AnimatedSection delay={0.2} className="max-w-xl mx-auto mb-8">
          <motion.div 
            className="rounded-2xl bg-card border border-border/30 overflow-hidden"
            whileHover={{ boxShadow: "0 12px 40px -12px hsl(var(--soft-brown) / 0.15)" }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4 p-5 border-b border-border/20 last:border-0 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ backgroundColor: "hsl(var(--accent) / 0.3)" }}
              >
                <motion.div 
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-5 h-5" />
                </motion.div>
                <div>
                  <p className="font-medium text-foreground mb-1">{item.title}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Social Links */}
        <AnimatedSection delay={0.3} className="max-w-xl mx-auto mb-8">
          <motion.div 
            className="rounded-2xl bg-card border border-border/30 p-6"
            whileHover={{ boxShadow: "0 12px 40px -12px hsl(var(--soft-brown) / 0.15)" }}
          >
            <h3 className="font-heading text-lg text-foreground mb-4">Мы в социальных сетях</h3>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 text-foreground hover:bg-primary/10 hover:border-primary/20 transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  {social.icon === "instagram" ? (
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ) : (
                    <social.icon className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-sm font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center">
          <BookButton />
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Contacts;
