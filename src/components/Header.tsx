import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/services", label: "Солярий" },
  { path: "/hairdressing", label: "Парикмахерские услуги" },
  { path: "/cosmetology", label: "Косметология" },
  { path: "/lpg-massage", label: "LPG массаж" },
  { path: "/promotions", label: "Акции" },
  { path: "/contacts", label: "Контакты" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isMenuOpen ? "bg-background" : "nav-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-heading text-2xl md:text-3xl text-foreground">
            Novobeauty
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-foreground font-medium"
                    : "text-foreground/80 hover:text-foreground"
                }`}
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
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Full Screen */}
      <div
        className={`lg:hidden fixed inset-0 top-16 md:top-20 z-50 mobile-menu-overlay transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="container py-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`font-heading text-2xl transition-colors py-3 border-b border-border/50 ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
