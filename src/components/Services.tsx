import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Globe, Palette, User, Video } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    description:
      "Diseño y desarrollo de sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta e-commerce completos.",
    image:
      "/assets/paginas_web.png",
    features: [
      "Diseño responsivo",
      "SEO optimizado",
      "Alto rendimiento",
      "Mantenimiento incluido",
    ],
  },
  {
    icon: Palette,
    title: "Logos & Branding",
    description:
      "Creación de identidades visuales únicas que representan la esencia de tu marca y te destacan de la competencia.",
    image:
      "/assets/logos_branding.png",
    features: [
      "Logo personalizado",
      "Manual de marca",
      "Formatos múltiples",
      "Revisiones incluidas",
    ],
  },
  {
    icon: User,
    title: "Avatares Personalizados",
    description:
      "Diseño de avatares únicos para redes sociales, perfiles profesionales y plataformas digitales que reflejan tu personalidad.",
    image:
      "/assets/avatares.png",
    features: [
      "Estilo a tu medida",
      "Alta resolución",
      "Versiones para cada red",
      "Entrega rápida",
    ],
  },
  {
    icon: Video,
    title: "Reels & Videos",
    description:
      "Producción y edición de reels profesionales para Instagram, TikTok y otras plataformas que aumentan tu engagement.",
    image:
      "/assets/reels_videos.png",
    features: [
      "Edición profesional",
      "Efectos y transiciones",
      "Subtítulos incluidos",
      "Formato optimizado",
    ],
  },
];

export function Services() {
  return (
    <section
  id="servicios"
  className="
    py-24 
    bg-[radial-gradient(ellipse_at_top,_rgba(16,0,37,0.85),_rgba(34,0,70,0.9)_60%,_rgba(10,0,25,1))]
    backdrop-blur-sm
  "
>
      <div className="container mx-auto px-4">
        {/* Título y subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ofrecemos soluciones creativas completas para impulsar tu presencia
            digital.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full"
            >
              <Card className="group relative h-full overflow-hidden border border-purple-500/20 bg-white/95 dark:bg-black/70 backdrop-blur-md rounded-2xl shadow-lg shadow-black/30 transition-all duration-500">
                {/* Halo de color suave detrás */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.22),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.16),_transparent_60%)]" />
                </div>

                {/* Imagen + título */}
                <div className="relative h-50 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-6 text-white flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {/*<p className="text-xs text-white/70 mt-1">
                          Servicio {String(index + 1).padStart(2, "0")}
                        </p>*/}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Descripción + bullets */}
                <CardHeader className="pt-6 pb-3">
                  <CardDescription className="text-base text-gray-700 dark:text-gray-200">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-100"
                      >
                        <span className="inline-flex h-1.5 w-4 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
