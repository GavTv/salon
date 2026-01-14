import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import landingBg from "@/assets/landing-bg.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${landingBg})`,
        }}
      />
      
      {/* Overlay for better text readability */}
      <div 
        className="fixed inset-0 -z-5 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)"
        }}
      />
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 w-full h-20 flex items-center justify-center z-50 backdrop-blur-xl bg-card/70 border-b border-white/40 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-2xl font-medium tracking-[4px] uppercase text-foreground">
          NOVOBEAUTY
        </span>
      </motion.header>

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center px-5 py-24">
        <motion.div 
          className="backdrop-blur-xl bg-card/50 border border-white/40 rounded-2xl p-10 md:p-14 max-w-xl text-center shadow-2xl"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.h2 
            className="font-heading text-3xl md:text-4xl text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Совершенство в каждой детали
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Эксклюзивные косметические решения
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              to="/services"
              className="px-8 py-4 rounded-xl backdrop-blur-md bg-primary/90 text-primary-foreground font-medium hover:bg-primary transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20"
            >
              Открыть каталог
            </Link>
            <Link 
              to="/contacts"
              className="px-8 py-4 rounded-xl backdrop-blur-md bg-card/60 text-foreground font-medium hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/30"
            >
              О нас
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="fixed bottom-0 left-0 w-full py-4 flex items-center justify-center backdrop-blur-xl bg-card/70 border-t border-white/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-sm text-muted-foreground">
          © 2025 NOVOBEAUTY | Все права защищены
        </span>
      </motion.footer>
    </div>
  );
};

export default Landing;
