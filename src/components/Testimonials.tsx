import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStartup Lima",
    content: "El diseño de nuestra web superó todas las expectativas. Profesionales, creativos y muy atentos a nuestras necesidades. ¡100% recomendados!",
    rating: 5,
    avatar: "MG"
  },
  {
    name: "Carlos Rodríguez",
    role: "Emprendedor Digital",
    content: "Mi logo quedó increíble. Capturaron perfectamente la esencia de mi marca. El proceso fue fluido y las revisiones muy rápidas.",
    rating: 5,
    avatar: "CR"
  },
  {
    name: "Ana Martínez",
    role: "Influencer",
    content: "Los reels que me crearon aumentaron mi engagement un 300%. Su creatividad y profesionalismo son incomparables.",
    rating: 5,
    avatar: "AM"
  },
  {
    name: "Jorge López",
    role: "Director de Marketing",
    content: "Trabajar con este equipo fue una experiencia excelente. Entregaron a tiempo y el resultado fue mejor de lo esperado.",
    rating: 5,
    avatar: "JL"
  },
  {
    name: "Laura Fernández",
    role: "Diseñadora de Moda",
    content: "Mi avatar personalizado es una obra de arte. Refleja mi estilo perfectamente y lo uso en todas mis redes sociales.",
    rating: 5,
    avatar: "LF"
  },
  {
    name: "Pedro Sánchez",
    role: "Fundador, E-commerce",
    content: "La página web que desarrollaron convierte muy bien. Rápida, moderna y exactamente lo que necesitábamos para crecer.",
    rating: 5,
    avatar: "PS"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-linear-to-br from-black/60 via-purple-950/40 to-black/60 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor motivación
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-3">
                    <Card className="hover:shadow-lg hover:shadow-purple-500/30 transition-all h-full bg-white/95 backdrop-blur border-purple-500/20">
                      <CardContent className="pt-6">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        
                        <p className="text-gray-700 mb-6 min-h-[100px]">"{testimonial.content}"</p>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div>{testimonial.name}</div>
                            <div className="text-sm text-gray-500">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/90 hover:bg-white shadow-lg" />
            <CarouselNext className="right-0 bg-white/90 hover:bg-white shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
