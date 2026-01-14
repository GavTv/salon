import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceItem {
  name: string;
  price: string;
}

interface InteractiveServiceCardProps {
  title: string;
  items: ServiceItem[];
  icon?: LucideIcon;
  accentColor?: string;
}

const InteractiveServiceCard = ({ 
  title, 
  items, 
  icon: Icon,
  accentColor = "primary"
}: InteractiveServiceCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-6 transition-all duration-300"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative corner accent */}
      <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
      
      <div className="relative z-10">
        {/* Header with icon */}
        <div className="flex items-center gap-3 mb-5">
          {Icon && (
            <motion.div 
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon className="w-5 h-5" />
            </motion.div>
          )}
          <h3 className="font-heading text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        {/* Services list */}
        <ul className="space-y-3">
          {items.map((item, index) => (
            <motion.li
              key={index}
              className="flex justify-between items-baseline gap-4 text-sm py-3 border-b border-primary/20 last:border-0 group/item"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="text-foreground/80 group-hover/item:text-foreground transition-colors duration-200">
                {item.name}
              </span>
              <motion.span 
                className="font-semibold text-primary whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
              >
                {item.price}
              </motion.span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default InteractiveServiceCard;
