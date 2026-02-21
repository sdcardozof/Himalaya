import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Sobre Nosotros", path: "/sobre-nosotros" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Contacto", path: "/contacto" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F5DA8] to-[#E2231A] rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#0F5DA8] to-[#E2231A] p-2 rounded-lg">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4L8 8V16C8 21 12 24 16 28C20 24 24 21 24 16V8L16 4Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 12V20M12 16H20"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#0F5DA8] tracking-tight">
                Himalaya HVAC
              </span>
              <span className="text-xs text-[#E2231A] font-medium -mt-1">
                Soluciones de Clima con Precisión
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-[#0F5DA8] text-white"
                    : "text-[#0F5DA8] hover:bg-[#C9D2DC]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:3150290119" className="flex items-center space-x-2 text-[#0F5DA8] hover:text-[#E2231A] transition-colors">
              <Phone size={18} />
              <span className="text-sm font-medium">315 029 0119</span>
            </a>
            <Button
              asChild
              className="bg-gradient-to-r from-[#E2231A] to-[#0F5DA8] hover:opacity-90 text-white font-medium px-6"
            >
              <Link to="/contacto">Solicitar Cotización</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#0F5DA8] hover:bg-[#C9D2DC] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-[#0F5DA8] text-white"
                    : "text-[#0F5DA8] hover:bg-[#C9D2DC]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:3150290119"
              className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-[#0F5DA8] hover:bg-[#C9D2DC] transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">315 029 0119</span>
            </a>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-[#E2231A] to-[#0F5DA8] hover:opacity-90 text-white font-medium"
            >
              <Link to="/contacto" onClick={() => setIsOpen(false)}>
                Solicitar Cotización
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
