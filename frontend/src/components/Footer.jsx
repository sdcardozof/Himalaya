import { Link } from "react-router-dom";
import { Mail, Phone, Clock, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { companyInfo } from "../data/mock";

export const Footer = () => {
  return (
    <footer className="bg-[#0F5DA8] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-[#E2231A] to-[#0F5DA8] p-2 rounded-lg">
                <svg
                  width="24"
                  height="24"
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
              <div>
                <div className="text-lg font-bold">Himalaya HVAC</div>
                <div className="text-xs text-[#E2231A]">Soluciones de Clima con Precisión</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Líderes en consultoría y diseño de sistemas HVAC con ingeniería de precisión y servicio excepcional.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#E2231A] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#E2231A] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#E2231A] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-[#E2231A] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-[#E2231A] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm text-gray-300 hover:text-[#E2231A] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-sm text-gray-300 hover:text-[#E2231A] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-sm text-gray-300 hover:text-[#E2231A] transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-gray-300 hover:text-[#E2231A] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">Consultoría HVAC</li>
              <li className="text-sm text-gray-300">Diseño de Sistemas</li>
              <li className="text-sm text-gray-300">Evaluación de Sistemas</li>
              <li className="text-sm text-gray-300">Diagnóstico Técnico</li>
              <li className="text-sm text-gray-300">Rediseño y Optimización</li>
              <li className="text-sm text-gray-300">Análisis de Calidad de Aire</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#E2231A] mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:3150290119" className="text-gray-300 hover:text-[#E2231A] transition-colors block">
                    315 029 0119
                  </a>
                  <a href="tel:3058131103" className="text-gray-300 hover:text-[#E2231A] transition-colors block">
                    305 813 1103
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#E2231A] mt-0.5 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm text-gray-300 hover:text-[#E2231A] transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#E2231A] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{companyInfo.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-[#E2231A] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>{companyInfo.hours}</div>
                  <div className="text-[#E2231A] font-medium">{companyInfo.emergencyHours}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Himalaya HVAC. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#E2231A] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-[#E2231A] transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
