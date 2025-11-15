import { useState } from "react";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { motion } from "motion/react";

const portfolioItems = [
  {
    title: "E-commerce Moderno",
    category: "Web Design",
    tags: ["React", "E-commerce", "UI/UX"],
    color: "from-purple-500 to-pink-500",
    image:
      "/assets/ecommerce.png",
    description:
      "Tienda online completa con sistema de pagos, carrito de compras y panel de administración. Desarrollado con las últimas tecnologías para garantizar velocidad y seguridad.",
    result: "Aumento del 45% en conversiones en los primeros 3 meses.",
  },
  {
    title: "Identidad Corporativa",
    category: "Branding",
    tags: ["Logo", "Brand Guide", "Stationery"],
    color: "from-blue-500 to-cyan-500",
    image:
      "/assets/branding.png",
    description:
      "Desarrollo completo de identidad visual corporativa incluyendo logo, paleta de colores, tipografía y aplicaciones en diferentes medios.",
    result: "Unificación de la marca en todos los puntos de contacto.",
  },
  {
    title: "Avatar Minimalista",
    category: "Avatar Design",
    tags: ["Illustration", "Vector", "Social Media"],
    color: "from-green-500 to-teal-500",
    image:
      "/assets/avatar_minimalista.png",
    description:
      "Diseño de avatar personalizado con estilo minimalista, optimizado para redes sociales y plataformas digitales. Incluye múltiples versiones y formatos.",
    result: "Mejora de la recordación de marca personal en redes.",
  },
  {
    title: "Campaña Social Media",
    category: "Reels",
    tags: ["Video", "Animation", "Instagram"],
    color: "from-orange-500 to-red-500",
    image:
      "/assets/reel.png",
    description:
      "Serie de reels profesionales con animaciones, efectos visuales y edición de alta calidad para aumentar el engagement en Instagram y TikTok.",
    result: "Incremento del 120% en alcance orgánico.",
  },
  {
    title: "Landing Page SaaS",
    category: "Web Design",
    tags: ["Landing", "Conversion", "Responsive"],
    color: "from-indigo-500 to-purple-500",
    image:
      "/assets/landing_2.png",
    description:
      "Landing page optimizada para conversión con diseño moderno, animaciones sutiles y llamados a la acción estratégicamente ubicados.",
    result: "Tasa de conversión superior al 8% en lanzamiento.",
  },
  {
    title: "Logo Tech Startup",
    category: "Branding",
    tags: ["Modern", "Tech", "Minimal"],
    color: "from-pink-500 to-rose-500",
    image:
      "/assets/logo_tech.png",
    description:
      "Logo moderno y tecnológico para startup, incluyendo versiones en diferentes colores, manual de marca y aplicaciones en mockups.",
    result: "Identidad sólida para presentaciones con inversionistas.",
  },
];

export function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const currentItem =
    selectedItem !== null ? portfolioItems[selectedItem] : null;

  return (
    <section
      id="portfolio"
      className="py-24 bg-[radial-gradient(ellipse_at_top,_rgba(16,0,37,0.85),_rgba(34,0,70,0.9)_60%,_rgba(10,0,25,1))]"
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Trabajos Destacados
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Algunos de nuestros proyectos recientes que demuestran nuestra
            calidad, creatividad y enfoque en resultados.
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedItem(index)}
              className="group relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 cursor-pointer border border-purple-500/20 text-left"
            >
              {/* Imagen / cover */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-white/70 uppercase tracking-wide">
                      {item.category}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs bg-white/15 text-white backdrop-blur-sm border border-white/30">
                    Ver detalles
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="p-5 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-purple-500/10 text-purple-700 border border-purple-500/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Borde animado */}
              <div className="pointer-events-none absolute inset-px rounded-2xl border border-transparent group-hover:border-purple-500/70 transition-colors duration-500" />
            </motion.button>
          ))}
        </div>

        {/* Lightbox / Detalle de proyecto */}
        <Dialog
          open={selectedItem !== null}
          onOpenChange={() => setSelectedItem(null)}
        >
          <DialogContent className="max-w-4xl bg-white/95 backdrop-blur border-purple-500/30">
            {currentItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {currentItem.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-purple-600">
                    {currentItem.category}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 grid gap-6 md:grid-cols-[1.3fr_1fr] items-start">
                  {/* Imagen grande + degradado */}
                  <div className="relative rounded-2xl overflow-hidden bg-linear-to-br bg-gray-200">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${currentItem.color} opacity-40`}
                    />
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="relative w-full h-64 md:h-80 object-cover"
                    />
                  </div>

                  {/* Texto y detalles */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Descripción del proyecto
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {currentItem.description}
                      </p>
                    </div>

                    {currentItem.result && (
                      <div className="rounded-xl bg-purple-50 border border-purple-200 px-4 py-3 text-sm text-purple-900">
                        <span className="font-semibold">Resultado: </span>
                        {currentItem.result}
                      </div>
                    )}

                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Tecnologías utilizadas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentItem.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className="bg-linear-to-r from-purple-600 to-blue-600 text-white"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
