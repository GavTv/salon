import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-transparent">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-medium tracking-[4px] uppercase text-foreground hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          NOVOBEAUTY
        </Link>

        <Link 
          to="/catalog" 
          className="flex items-center gap-2 px-4 py-2 rounded-full text-foreground/90 hover:text-foreground transition-all duration-300 hover:-translate-x-1 group"
          style={{
            background: "rgba(200, 195, 185, 0.5)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 2px 10px rgba(149, 137, 117, 0.15)",
          }}
        >
          <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          <span className="text-sm font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>Назад</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
