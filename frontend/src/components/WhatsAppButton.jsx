import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phones = [
    { number: "573150290119", label: "Ventas y Cotizaciones" },
    { number: "573058131103", label: "Servicio Técnico" }
  ];

  const defaultMessage = "Hola, me gustaría obtener más información sobre sus servicios de HVAC.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-72 border border-gray-200 animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center">
                <MessageCircle className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-[#0F5DA8] text-sm">Himalaya HVAC</h3>
                <p className="text-xs text-gray-500">Estamos en línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          
          <p className="text-xs text-gray-600 mb-3">
            Selecciona el departamento con el que deseas chatear:
          </p>
          
          <div className="space-y-2">
            {phones.map((phone, index) => (
              <a
                key={index}
                href={`https://wa.me/${phone.number}?text=${encodeURIComponent(defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={18} />
                <div className="flex-1">
                  <div className="text-xs font-medium">{phone.label}</div>
                  <div className="text-xs opacity-90">
                    +{phone.number.slice(0, 2)} {phone.number.slice(2, 5)} {phone.number.slice(5, 8)} {phone.number.slice(8)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full animate-ping opacity-20"></div>
        {isOpen ? (
          <X className="text-white relative z-10" size={28} />
        ) : (
          <MessageCircle className="text-white relative z-10" size={28} />
        )}
      </button>
    </div>
  );
};
