import Layout from "@/components/Layout";
import BookButton from "@/components/BookButton";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Адрес",
    content: "г. Москва, ул. Примерная, д. 123",
    link: null,
  },
  {
    icon: Phone,
    title: "Телефон",
    content: "+7 (900) 123-45-67",
    link: "tel:+79001234567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@belleza.ru",
    link: "mailto:info@belleza.ru",
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
    name: "Telegram",
    href: "https://t.me/belleza",
    icon: Send,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/79001234567",
    icon: MessageCircle,
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
          
          <motion.p 
            className="text-muted-foreground leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Будем рады видеть вас в нашем салоне красоты.
          </motion.p>
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
                  <social.icon className="w-4 h-4 text-primary" />
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
