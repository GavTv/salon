import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Солярий" },
  { path: "/hairdressing", label: "Парикмахерские услуги" },
  { path: "/cosmetology", label: "Косметология" },
  { path: "/lpg-massage", label: "LPG массаж" },
  { path: "/promotions", label: "Акции" },
  { path: "/contacts", label: "Контакты" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const filteredNavItems = navItems.filter(
    (item) => item.path !== location.pathname
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-transparent">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading text-2xl md:text-3xl text-foreground">
          Belleza
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {filteredNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Full Screen */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-50 bg-[hsl(var(--background))] transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: 'hsl(35, 30%, 96%)' }}
      >
        <nav className="container py-8 flex flex-col gap-4">
          {filteredNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="font-heading text-2xl text-foreground hover:text-primary transition-colors py-3 border-b border-border/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
