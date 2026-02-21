import { CheckCircle, Target, Eye, Users, Zap } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Card, CardContent } from "../components/ui/card";
import { whyChooseUs } from "../data/mock";
import * as LucideIcons from "lucide-react";

const SobreNosotros = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#C9D2DC] via-white to-[#C9D2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0F5DA8] mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600">
              Innovación y precisión en cada solución de climatización
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1540476547779-348beb642680"
                alt="Equipo Himalaya HVAC"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#E2231A]/10 px-4 py-2 rounded-full">
                <Zap className="text-[#E2231A]" size={18} />
                <span className="text-sm font-medium text-[#0F5DA8]">
                  Fundada en 2024
                </span>
              </div>
              <h2 className="text-4xl font-bold text-[#0F5DA8]">
                Una Nueva Era en Climatización
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Himalaya HVAC nace con la visión de revolucionar la consultoría y diseño de sistemas HVAC en Colombia. Aunque somos una empresa nueva, nuestro equipo cuenta con décadas de experiencia combinada en ingeniería HVAC y gestión de proyectos.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nos especializamos en ofrecer servicios de consultoría, diseño y evaluación que combinan ingeniería de precisión, eficiencia energética y un servicio al cliente excepcional. Cada proyecto es una oportunidad para demostrar nuestro compromiso con la excelencia técnica.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#E2231A] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-[#0F5DA8] mb-1">Tecnología Avanzada</h3>
                    <p className="text-sm text-gray-600">Equipos de última generación</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#E2231A] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-[#0F5DA8] mb-1">Equipo Experto</h3>
                    <p className="text-sm text-gray-600">Ingenieros certificados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-[#C9D2DC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#E2231A]/20 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E2231A] to-[#0F5DA8] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-[#0F5DA8] mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Proporcionar consultoría y diseño de sistemas HVAC de clase mundial que mejoren la eficiencia operativa y optimicen el consumo energético, basándonos en ingeniería de precisión y un servicio al cliente excepcional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#E2231A]/20 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E2231A] to-[#0F5DA8] rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-[#0F5DA8] mb-4">
                  Nuestra Visión
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ser la empresa líder en consultoría y diseño HVAC en Colombia, reconocida por nuestra innovación técnica, compromiso con la sostenibilidad y excelencia en cada proyecto que realizamos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F5DA8] mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nuestro enfoque en la calidad y el servicio nos distingue
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = LucideIcons[item.icon];
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-[#C9D2DC] to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-[#C9D2DC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F5DA8] mb-4">
              Nuestros Valores
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#0F5DA8] mb-4">
                Confiabilidad
              </h3>
              <p className="text-gray-600">
                Cumplimos nuestros compromisos y garantizamos la calidad técnica en cada diseño y consultoría.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#0F5DA8] mb-4">
                Innovación
              </h3>
              <p className="text-gray-600">
                Adoptamos las últimas metodologías y tecnologías para ofrecer diseños eficientes y sostenibles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#0F5DA8] mb-4">
                Excelencia
              </h3>
              <p className="text-gray-600">
                Nos esforzamos por superar las expectativas en cada proyecto, sin importar su tamaño.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F5DA8] mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesionales altamente capacitados comprometidos con su proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E2231A] to-[#0F5DA8] rounded-full blur-xl opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a"
                  alt="Ingeniero"
                  className="relative w-48 h-48 rounded-full object-cover mx-auto ring-4 ring-white shadow-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0F5DA8] mb-2">
                Ingenieros Certificados
              </h3>
              <p className="text-gray-600">
                Expertos en diseño y cálculo de sistemas HVAC
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E2231A] to-[#0F5DA8] rounded-full blur-xl opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1550041473-d296a3a8a18a"
                  alt="Técnicos"
                  className="relative w-48 h-48 rounded-full object-cover mx-auto ring-4 ring-white shadow-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0F5DA8] mb-2">
                Técnicos Especializados
              </h3>
              <p className="text-gray-600">
                Instalación y mantenimiento de alta precisión
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E2231A] to-[#0F5DA8] rounded-full blur-xl opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1604754742629-3e5728249d73"
                  alt="Soporte"
                  className="relative w-48 h-48 rounded-full object-cover mx-auto ring-4 ring-white shadow-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0F5DA8] mb-2">
                Servicio al Cliente
              </h3>
              <p className="text-gray-600">
                Soporte técnico disponible 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNosotros;
