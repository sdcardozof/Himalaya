import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, Zap, Award, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { services, testimonials, whyChooseUs } from "../data/mock";
import * as LucideIcons from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9D2DC] via-white to-[#C9D2DC]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#E2231A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F5DA8]/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[#E2231A]/10 px-4 py-2 rounded-full">
                <Shield className="text-[#E2231A]" size={18} />
                <span className="text-sm font-medium text-[#0F5DA8]">
                  Tecnología y Confianza desde 2024
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-[#0F5DA8] leading-tight">
                Confort Diseñado.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E2231A] to-[#0F5DA8]">
                  Precisión Garantizada.
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Soluciones integrales de consultoría y diseño HVAC con ingeniería de precisión para espacios residenciales, comerciales e industriales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#E2231A] to-[#0F5DA8] hover:opacity-90 text-white font-semibold px-8 py-6 text-lg group"
                >
                  <Link to="/contacto">
                    Solicitar Cotización
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#0F5DA8] text-[#0F5DA8] hover:bg-[#0F5DA8] hover:text-white font-semibold px-8 py-6 text-lg"
                >
                  <a href="tel:3150290119">
                    <Phone className="mr-2" size={20} />
                    315 029 0119
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-[#0F5DA8]">500+</div>
                  <div className="text-sm text-gray-600">Proyectos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0F5DA8]">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0F5DA8]">24/7</div>
                  <div className="text-sm text-gray-600">Soporte</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E2231A]/20 to-[#0F5DA8]/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a"
                alt="Técnico HVAC profesional"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover ring-4 ring-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E2231A] to-[#0F5DA8] rounded-xl flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0F5DA8]">40%</div>
                    <div className="text-sm text-gray-600">Ahorro Energético</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F5DA8] mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Servicios especializados de consultoría, diseño y evaluación adaptados a sus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = LucideIcons[service.icon];
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#E2231A] overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E2231A]/20 to-[#0F5DA8]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {Icon && <Icon className="text-[#0F5DA8]" size={24} />}
                    </div>
                    <h3 className="text-xl font-bold text-[#0F5DA8] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      to="/servicios"
                      className="inline-flex items-center text-[#E2231A] font-medium hover:text-[#0F5DA8] transition-colors group"
                    >
                      Ver más
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#0F5DA8] text-[#0F5DA8] hover:bg-[#0F5DA8] hover:text-white font-semibold px-8"
            >
              <Link to="/servicios">Ver Todos los Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#C9D2DC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F5DA8] mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compromiso con la excelencia en cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = LucideIcons[item.icon];
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E2231A] to-[#0F5DA8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon className="text-white" size={32} />}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F5DA8] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F5DA8] mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-2 border-gray-100 hover:border-[#E2231A] hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="text-[#E2231A] fill-[#E2231A]" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-bold text-[#0F5DA8]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F5DA8] to-[#E2231A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Optimizar su Sistema HVAC?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Solicite una consultoría gratuita y descubra cómo podemos mejorar la eficiencia de su sistema
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#0F5DA8] hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
            >
              <Link to="/contacto">Solicitar Consultoría Gratuita</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0F5DA8] font-semibold px-8 py-6 text-lg"
            >
              <Link to="/proyectos">Ver Proyectos Realizados</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
