import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import landingBg from "@/assets/landing-bg.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${landingBg})`,
        }}
      />

      {/* Main Card */}
      <motion.div 
        className="mx-4 w-full max-w-2xl text-center px-8 py-12 md:px-16 md:py-16 rounded-2xl"
        style={{
          background: "rgba(100, 100, 100, 0.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-white italic mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Совершенство в каждой детали
        </motion.h1>
        
        <motion.p 
          className="text-white/80 text-lg md:text-xl mb-10 italic"
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
            className="w-full max-w-xs px-8 py-4 rounded-xl text-white/90 font-medium uppercase tracking-widest text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            Открыть каталог
          </Link>
          <Link 
            to="/contacts"
            className="w-full max-w-xs px-8 py-4 rounded-xl text-white/90 font-medium uppercase tracking-widest text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            О нас
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;
