import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-transparent">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link 
          to="/catalog" 
          className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Назад</span>
        </Link>

        <Link to="/" className="font-heading text-2xl md:text-3xl text-foreground">
          Novobeauty
        </Link>

        {/* Spacer for centering */}
        <div className="w-[72px]" />
      </div>
    </header>
  );
};

export default Header;
