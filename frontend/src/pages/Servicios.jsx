import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { services } from "../data/mock";
import * as LucideIcons from "lucide-react";

const Servicios = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#C9D2DC] via-white to-[#C9D2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0F5DA8] mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600">
              Consultoría y diseño de sistemas HVAC con precisión ingenieril
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = LucideIcons[service.icon];
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#E2231A] overflow-hidden"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F5DA8]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E2231A] to-[#0F5DA8] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {Icon && <Icon className="text-white" size={28} />}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F5DA8] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#E2231A] rounded-full mt-2"></div>
                        <p className="text-sm text-gray-600">Ingeniería especializada</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#E2231A] rounded-full mt-2"></div>
                        <p className="text-sm text-gray-600">Documentación técnica completa</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#E2231A] rounded-full mt-2"></div>
                        <p className="text-sm text-gray-600">Enfoque en eficiencia energética</p>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-[#E2231A] to-[#0F5DA8] hover:opacity-90 text-white font-medium group"
                    >
                      <a href="/contacto">
                        Solicitar Consultoría
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F5DA8] to-[#E2231A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿No encuentra el servicio que necesita?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contáctenos y evaluaremos su proyecto para diseñar una solución personalizada
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#0F5DA8] hover:bg-gray-100 font-semibold px-8"
          >
            <a href="/contacto">Contactar Ahora</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
