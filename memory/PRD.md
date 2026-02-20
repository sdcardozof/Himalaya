# PRD - Himalaya HVAC Website

## Problema Original
Crear un sitio web moderno, profesional y responsivo para Himalaya HVAC, enfocado en **consultoría y diseño/rediseño, evaluación y diagnóstico** de sistemas HVAC. La empresa NO ofrece instalación ni mantenimiento por ahora.

## Arquitectura del Sistema
- **Frontend**: React 19 con React Router
- **Backend**: FastAPI con Python
- **Base de Datos**: MongoDB
- **Componentes UI**: Shadcn/UI
- **Estilo**: Tailwind CSS
- **Tipografía**: Space Grotesk (títulos), Inter (cuerpo)

## Paleta de Colores
- Azul profundo: #0A2540
- Azul hielo: #4FC3F7
- Blanco: #FFFFFF
- Gris claro: #F4F6F8

## User Personas
1. **Cliente Residencial**: Propietario de vivienda buscando consultoría o diseño de sistemas HVAC eficientes
2. **Cliente Comercial**: Gerente/Director de empresa necesitando evaluación o rediseño de sistemas HVAC
3. **Cliente Industrial**: Responsable de planta industrial requiriendo diagnóstico y diseño de ventilación especializada
4. **Arquitecto/Constructor**: Profesional necesitando diseños técnicos para proyectos nuevos

## Features Implementadas ✅ (Fecha: 16 Feb 2026)

### Frontend con Mock Data (Actualizado 16 Feb 2026)
- ✅ Navbar sticky con logo personalizado, menú de navegación y CTA
- ✅ Página Home con:
  - Hero section enfocado en consultoría y diseño
  - Sección de servicios destacados (6 servicios de consultoría/diseño)
  - Sección "Por qué elegirnos" (4 razones enfocadas en ingeniería)
  - Testimonios de clientes (3 testimonios sobre consultoría)
  - CTA section final
- ✅ Página Servicios con:
  - Consultoría HVAC
  - Diseño de Sistemas
  - Evaluación de Sistemas Existentes
  - Diagnóstico Técnico
  - Rediseño y Optimización
  - Análisis de Calidad de Aire
- ✅ Página Sobre Nosotros actualizada con enfoque en consultoría e ingeniería
- ✅ Página Proyectos con portfolio de diseños y evaluaciones
- ✅ Página Contacto con formulario adaptado a servicios de consultoría
- ✅ Footer completo actualizado con servicios correctos
- ✅ WhatsApp button flotante con 2 números (3150290119, 3058131103)
- ✅ Diseño responsivo mobile-first
- ✅ Animaciones y transiciones suaves
- ✅ 8 imágenes profesionales de HVAC integradas

### Datos Mock (mock.js)
- services: 6 servicios con imágenes
- projects: 6 proyectos categorizados
- testimonials: 3 testimonios
- faqs: 6 preguntas frecuentes
- whyChooseUs: 4 razones
- companyInfo: datos de contacto

## Backlog Priorizado

### P0 - Critical (Próximos pasos)
- [ ] Backend API para formulario de contacto
  - POST /api/contact - Guardar mensajes en MongoDB
  - GET /api/contact - Listar mensajes (admin)
  - Schema: { name, email, phone, service, message, createdAt, status }
- [ ] Integración frontend-backend para formulario
- [ ] Notificaciones por email cuando llega un mensaje
- [ ] Testing E2E con testing_agent_v3

### P1 - High Priority
- [ ] Panel de administración para ver mensajes de contacto
- [ ] Sistema de autenticación para admin
- [ ] Analytics básico (Google Analytics o similar)
- [ ] SEO optimization (meta tags, sitemap, robots.txt)
- [ ] Optimización de imágenes y performance
- [ ] Validación de formularios mejorada

### P2 - Medium Priority
- [ ] Blog section para artículos técnicos
- [ ] Galería de imágenes ampliable en Proyectos
- [ ] Calculadora de ahorro energético
- [ ] Chat en vivo o chatbot
- [ ] Integración con CRM
- [ ] Newsletter subscription

## API Contracts (Por Implementar)

### POST /api/contact
```json
Request:
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "service": "string (optional)",
  "message": "string"
}

Response 201:
{
  "success": true,
  "message": "Mensaje enviado exitosamente",
  "id": "string"
}
```

### GET /api/contact (Admin only)
```json
Response 200:
{
  "contacts": [
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "phone": "string",
      "service": "string",
      "message": "string",
      "status": "new|read|responded",
      "createdAt": "datetime"
    }
  ]
}
```

## Next Tasks
1. ✅ Frontend completo con mock data
2. Implementar backend para formulario de contacto
3. Integrar frontend con backend (remover mock de formulario)
4. Testing con testing_agent_v3
5. SEO y optimización
6. Deploy final

## Notas
- Frontend está 100% funcional con mock data
- WhatsApp flotante configurado con números reales
- Diseño sigue principios de UI/UX modernos
- Colores y tipografía alineados con marca Himalaya HVAC
- Todas las páginas son navegables y responsivas
