import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarIcon } from "lucide-react";

interface FloatingBookButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const services = [
  "Солярий",
  "Парикмахерские услуги",
  "Косметология",
  "LPG",
];

const FloatingBookButton = ({ className = "", size = "md" }: FloatingBookButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");

  const sizeClasses = {
    sm: "w-24 h-24 text-xs",
    md: "w-32 h-32 text-sm",
    lg: "w-40 h-40 text-base",
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-44 right-6 z-50 w-72 rounded-2xl p-5"
            style={{
              background: "rgba(245, 239, 230, 0.92)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-foreground/60 hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>

            <h3
              className="text-base font-semibold text-foreground mb-4 tracking-wide"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Онлайн-запись
            </h3>

            {/* Services */}
            <div className="flex flex-col gap-1.5 mb-4">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelected(selected === service ? null : service)}
                  className={`text-left text-sm py-2.5 px-3.5 rounded-xl transition-all duration-200 ${
                    selected === service
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground hover:bg-foreground/10"
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {service}
                </button>
              ))}
            </div>

            {/* Phone */}
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Телефон"
              type="tel"
              className="w-full text-sm rounded-xl border border-foreground/15 bg-white/60 px-3.5 py-2.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 mb-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />

            {/* Date */}
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="w-full text-sm rounded-xl border border-foreground/15 bg-white/60 px-3.5 py-2.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 mb-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />

            {/* Comment */}
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Укажите ваш комментарий"
              className="w-full text-sm rounded-xl border border-foreground/15 bg-white/60 px-3.5 py-2.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              rows={2}
            />

            {/* Note */}
            <p
              className="text-[11px] text-foreground/50 leading-snug"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              * Мы сразу с вами свяжемся в отношении свободного времени в выбранный вами день.
            </p>

            <p
              className="text-[9px] text-foreground/35 leading-snug mt-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Отправляя данную заявку, вы соглашаетесь с{" "}
              <a href="/privacy-policy" className="underline hover:text-foreground/50 transition-colors">
                политикой конфиденциальности
              </a>.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Circle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-6 z-50
          ${sizeClasses[size]}
          rounded-full
          bg-gradient-to-br from-primary via-primary to-rose-400
          text-primary-foreground
          font-medium
          flex items-center justify-center
          text-center
          shadow-xl
          cursor-pointer
          ${className}
        `}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: isOpen ? 0 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsating ring effect */}
        {!isOpen && (
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
        )}

        {/* Inner glow */}
        <span className="absolute inset-2 rounded-full bg-white/10 blur-sm" />

        {/* Text / Icon */}
        <span className="relative z-10 leading-tight px-3">
          {isOpen ? <X size={28} /> : (
            <>
              Онлайн-
              <br />
              запись
            </>
          )}
        </span>
      </motion.button>
    </>
  );
};

export default FloatingBookButton;
