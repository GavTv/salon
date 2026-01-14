import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface HeroIconProps {
  icon: LucideIcon;
}

const HeroIcon = ({ icon: Icon }: HeroIconProps) => {
  return (
    <motion.div 
      className="relative inline-flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
    >
      {/* Pulsing rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20"
        animate={{ 
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut"
        }}
        style={{ width: 80, height: 80, margin: "-8px" }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/15"
        animate={{ 
          scale: [1, 1.3, 1.3],
          opacity: [0.4, 0, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.3
        }}
        style={{ width: 80, height: 80, margin: "-8px" }}
      />
      
      {/* Main icon container */}
      <motion.div 
        className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 backdrop-blur-sm border border-primary/20"
        whileHover={{ 
          rotate: [0, -5, 5, 0],
          scale: 1.1
        }}
        transition={{ duration: 0.4 }}
      >
        <Icon className="w-8 h-8 text-primary" />
      </motion.div>
    </motion.div>
  );
};

export default HeroIcon;
