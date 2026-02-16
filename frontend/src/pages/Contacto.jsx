import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { companyInfo, faqs } from "../data/mock";
import { toast } from "sonner";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call - Replace with actual backend call later
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("¡Mensaje enviado exitosamente!", {
        description: "Nos pondremos en contacto contigo pronto."
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast.error("Error al enviar el mensaje", {
        description: "Por favor, inténtalo de nuevo."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#F4F6F8] via-white to-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0A2540] mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-600">
              Estamos listos para ayudarte con tu proyecto de climatización
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-6">
                Solicitar Cotización
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[#0A2540] font-medium">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 border-2 border-gray-200 focus:border-[#4FC3F7] transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#0A2540] font-medium">
                    Correo Electrónico *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 border-2 border-gray-200 focus:border-[#4FC3F7] transition-colors"
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#0A2540] font-medium">
                    Teléfono *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 border-2 border-gray-200 focus:border-[#4FC3F7] transition-colors"
                    placeholder="315 000 0000"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-[#0A2540] font-medium">
                    Servicio de Interés
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4FC3F7] focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Seleccionar servicio</option>
                    <option value="instalacion">Instalación HVAC</option>
                    <option value="mantenimiento">Mantenimiento Preventivo</option>
                    <option value="reparacion">Reparaciones de Emergencia</option>
                    <option value="ventilacion">Diseño de Ventilación</option>
                    <option value="calidad-aire">Calidad de Aire</option>
                    <option value="comercial">HVAC Comercial</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#0A2540] font-medium">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-2 border-2 border-gray-200 focus:border-[#4FC3F7] transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#4FC3F7] to-[#0A2540] hover:opacity-90 text-white font-semibold py-6 text-lg group"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#0A2540] mb-6">
                  Información de Contacto
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Estamos disponibles para atender todas tus consultas y emergencias
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-[#F4F6F8] to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4FC3F7] to-[#0A2540] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                      Teléfonos
                    </h3>
                    <a
                      href="tel:3150290119"
                      className="text-gray-600 hover:text-[#4FC3F7] transition-colors block mb-1"
                    >
                      315 029 0119
                    </a>
                    <a
                      href="tel:3058131103"
                      className="text-gray-600 hover:text-[#4FC3F7] transition-colors block"
                    >
                      305 813 1103
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-[#F4F6F8] to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4FC3F7] to-[#0A2540] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                      Email
                    </h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-gray-600 hover:text-[#4FC3F7] transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-[#F4F6F8] to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4FC3F7] to-[#0A2540] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                      Ubicación
                    </h3>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-[#F4F6F8] to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4FC3F7] to-[#0A2540] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                      Horarios
                    </h3>
                    <p className="text-gray-600 mb-1">{companyInfo.hours}</p>
                    <p className="text-[#4FC3F7] font-semibold">
                      {companyInfo.emergencyHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6347!2d-74.0721!3d4.7110!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDInMzkuNiJOIDc0wrAwNCcxOS42Ilc!5e0!3m2!1sen!2sco!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Himalaya HVAC"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-[#F4F6F8] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Respuestas a las consultas más comunes
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="bg-white border-2 border-gray-100 rounded-xl px-6 hover:border-[#4FC3F7] transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[#0A2540] hover:text-[#4FC3F7] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
