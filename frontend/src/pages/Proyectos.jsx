import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { projects } from "../data/mock";
import { Building2, Home, Factory } from "lucide-react";

const Proyectos = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "Todos", icon: Building2 },
    { id: "Residencial", name: "Residencial", icon: Home },
    { id: "Comercial", name: "Comercial", icon: Building2 },
    { id: "Industrial", name: "Industrial", icon: Factory }
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#C9D2DC] via-white to-[#C9D2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0F5DA8] mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-gray-600">
              Diseños y evaluaciones de excelencia que demuestran nuestro compromiso con la calidad
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  variant={filter === category.id ? "default" : "outline"}
                  className={`${
                    filter === category.id
                      ? "bg-gradient-to-r from-[#E2231A] to-[#0F5DA8] text-white"
                      : "border-2 border-[#0F5DA8] text-[#0F5DA8] hover:bg-[#C9D2DC]"
                  } font-medium px-6`}
                >
                  <Icon size={18} className="mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-2 border-gray-100 hover:border-[#E2231A] hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 backdrop-blur-sm text-[#0F5DA8] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F5DA8]/90 via-[#0F5DA8]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium mb-1">Año {project.year}</p>
                      <p className="text-xs opacity-90">Ver detalles del proyecto</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#0F5DA8] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#E2231A] font-medium">
                      {project.year}
                    </span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#E2231A] to-[#0F5DA8] hover:opacity-90 text-white"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">
                No se encontraron proyectos en esta categoría
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F5DA8] to-[#E2231A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-white/90">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-white/90">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40%</div>
              <div className="text-white/90">Ahorro Energético Promedio</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0F5DA8] mb-6">
            ¿Listo para su Próximo Proyecto?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contáctenos y descubra cómo podemos diseñar la solución HVAC perfecta para su espacio
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#E2231A] to-[#0F5DA8] hover:opacity-90 text-white font-semibold px-8"
          >
            <a href="/contacto">Solicitar Cotización</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Proyectos;
