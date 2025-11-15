import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const plans = [
  {
    name: "Básico",
    price: "800",
    description: "Perfecto para emprendedores",
    features: [
      "Landing page profesional",
      "Diseño responsivo",
      "1 logo básico",
      "2 revisiones",
      "Entrega en 7 días"
    ],
    popular: false
  },
  {
    name: "Profesional",
    price: "1,500",
    description: "Ideal para negocios",
    features: [
      "Sitio web hasta 5 páginas",
      "SEO optimizado",
      "Logo + manual de marca",
      "3 avatares personalizados",
      "5 revisiones",
      "Soporte 30 días"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "2,800",
    description: "Solución completa",
    features: [
      "Sitio web ilimitado",
      "E-commerce funcional",
      "Branding completo",
      "10 reels mensuales",
      "Revisiones ilimitadas",
      "Soporte 90 días"
    ],
    popular: false
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para grandes empresas",
    features: [
      "Todo lo del plan Premium",
      "Desarrollo a medida",
      "Integración de sistemas",
      "Soporte prioritario 24/7",
      "Consultoría estratégica",
      "Equipo dedicado"
    ],
    popular: false
  }
];

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-linear-to-br from-purple-900/30 via-black/40 to-purple-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Planes y Precios</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {plans.map((plan, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-3 h-full"
                  >
                    <Card 
                      className={`relative hover:shadow-2xl transition-all duration-300 h-full flex flex-col bg-white/95 backdrop-blur ${
                        plan.popular ? 'border-purple-600 border-2 shadow-xl shadow-purple-500/50 scale-105' : ''
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-linear-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs">
                            Más Popular
                          </span>
                        </div>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <CardTitle className="text-xl mb-1">{plan.name}</CardTitle>
                        <CardDescription className="text-sm">{plan.description}</CardDescription>
                        <div className="mt-3">
                          <span className="text-4xl">{plan.price === "Personalizado" ? "" : "S/ "}{plan.price}</span>
                          {plan.price !== "Personalizado" && (
                            <span className="text-gray-500 text-sm">/proyecto</span>
                          )}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="flex-1 flex flex-col">
                        <ul className="space-y-2 mb-6 flex-1">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          className={`w-full ${
                            plan.popular 
                              ? 'bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                              : ''
                          }`}
                          variant={plan.popular ? 'default' : 'outline'}
                          onClick={scrollToContact}
                        >
                          Comenzar ahora
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/90 hover:bg-white shadow-lg" />
            <CarouselNext className="right-0 bg-white/90 hover:bg-white shadow-lg" />
          </Carousel>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-gray-300 text-sm">
            ¿Necesitas algo personalizado? <button onClick={scrollToContact} className="text-purple-400 hover:text-purple-300 hover:underline">Contáctanos</button> para una cotización a medida
          </p>
        </motion.div>
      </div>
    </section>
  );
}
