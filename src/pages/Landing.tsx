import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import landingBg from "@/assets/landing-bg.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background image */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${landingBg})`,
        }}
      />

      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 w-full h-20 flex items-center justify-center z-50"
        style={{
          background: "rgba(245, 239, 230, 0.7)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 4px 30px rgba(149, 137, 117, 0.2)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xl md:text-2xl font-medium tracking-[4px] uppercase text-foreground">
          NOVOBEAUTY
        </span>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <motion.div 
          className="mx-4 w-full max-w-3xl text-center px-8 py-12 md:px-16 md:py-16 rounded-2xl"
          style={{
            background: "rgba(190, 190, 180, 0.42)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light whitespace-nowrap mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Совершенство в каждой детали
          </motion.h1>
          
          <motion.p 
            className="text-muted-foreground text-sm md:text-base mb-10 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Эксклюзивные косметические решения
          </motion.p>

          <motion.div 
            className="flex flex-col gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/services"
              className="w-full max-w-xs px-8 py-4 rounded-full text-foreground/80 font-medium uppercase tracking-widest text-sm hover:opacity-80 transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                background: "rgba(200, 195, 185, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              Открыть каталог
            </Link>
            <Link 
              to="/contacts"
              className="w-full max-w-xs px-8 py-4 rounded-full text-foreground/80 font-medium uppercase tracking-widest text-sm hover:opacity-80 transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                background: "rgba(200, 195, 185, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              О нас
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="fixed bottom-0 left-0 w-full py-4 flex items-center justify-center z-50"
        style={{
          background: "rgba(245, 239, 230, 0.7)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 -4px 30px rgba(149, 137, 117, 0.2)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="text-sm text-muted-foreground">
          © 2025 NOVOBEAUTY | Все права защищены
        </span>
      </motion.footer>
    </div>
  );
};

export default Landing;
