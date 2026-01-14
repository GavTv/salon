import { motion } from "framer-motion";

interface FloatingBookButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const FloatingBookButton = ({ className = "", size = "md" }: FloatingBookButtonProps) => {
  const sizeClasses = {
    sm: "w-24 h-24 text-xs",
    md: "w-32 h-32 text-sm",
    lg: "w-40 h-40 text-base",
  };

  return (
    <motion.a
      href="https://wa.me/79001234567?text=Здравствуйте! Хочу записаться на приём."
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-40
        ${sizeClasses[size]}
        rounded-full
        bg-gradient-to-br from-primary via-primary to-rose-400
        text-primary-foreground
        font-medium
        flex items-center justify-center
        text-center
        shadow-lg
        cursor-pointer
        relative
        overflow-hidden
        ${className}
      `}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ 
        scale: 1.08,
        boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsating ring effect */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-primary-foreground/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Inner glow */}
      <span className="absolute inset-2 rounded-full bg-white/10 blur-sm" />
      
      {/* Text */}
      <span className="relative z-10 leading-tight px-3">
        Онлайн-
        <br />
        запись
      </span>
    </motion.a>
  );
};

export default FloatingBookButton;
