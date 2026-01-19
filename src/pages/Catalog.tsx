import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import landingBg from "@/assets/landing-bg.jpg";

const menuItems = [
  { path: "/services", label: "Солярий" },
  { path: "/hairdressing", label: "Парикмахерские услуги" },
  { path: "/cosmetology", label: "Косметология" },
  { path: "/lpg-massage", label: "LPG массаж" },
  { path: "/promotions", label: "Акции" },
  { path: "/contacts", label: "Контакты" },
];

const Catalog = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${landingBg})`,
        }}
      />

      {/* Dark overlay */}
      <div
        className="fixed inset-0 -z-5 pointer-events-none"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
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
        <Link
          to="/"
          className="text-xl md:text-2xl font-medium tracking-[4px] uppercase text-foreground hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          NOVOBEAUTY
        </Link>
      </motion.header>

      {/* Menu Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <motion.div
          className="w-full max-w-md text-center px-6 py-8 rounded-2xl"
          style={{
            background: "rgba(245, 239, 230, 0.7)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            borderRadius: "15px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <Link
                  to={item.path}
                  className="block w-full text-foreground text-xl md:text-2xl font-normal py-3 px-5 relative group transition-all duration-300 hover:translate-x-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>
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
        <span className="text-sm text-muted-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          © 2026 NOVOBEAUTY | Все права защищены
        </span>
      </motion.footer>
    </div>
  );
};

export default Catalog;
