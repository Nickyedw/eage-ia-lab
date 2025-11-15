import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import logo from "/assets/logo.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
  className="
    relative 
    min-h-screen 
    flex 
    items-center 
    justify-center 
    overflow-hidden
    bg-[radial-gradient(circle_at_center,_rgba(60,0,90,0.55)_0%,_rgba(20,0,40,0.8)_40%,_rgba(5,0,15,0.95)_70%,_rgba(0,0,0,1)_100%)]
  "
>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE4MDY3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-5"></div>
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0], // movimiento suave arriba/abajo
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              y: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            className="mb-12 flex justify-center relative"
          >
            <div className="relative group">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-600 via-blue-500 to-cyan-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-150" />

              {/* Logo */}
              <img
                src={logo}
                alt="EAGE IA Lab"
                className="relative h-56 md:h-80 w-auto object-contain brightness-110 drop-shadow-[0_0_40px_rgba(168,85,247,0.8)] group-hover:scale-110 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm">Diseño profesional impulsado por IA</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-5xl md:text-7xl mb-6 bg-linear-to-br from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
          >
            Transformamos tus ideas en diseños impactantes
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Especialistas en creación de páginas web, logos únicos, avatares personalizados y reels que conectan con tu audiencia.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-linear-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-7 text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300"
              onClick={scrollToContact}
            >
              Comenzar proyecto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 py-7 text-lg bg-white/10 border-purple-500/50 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              onClick={scrollToServices}
            >
              Ver servicios
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-5xl mb-3 bg-linear-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">200+</div>
              <div className="text-gray-400">Proyectos completados</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-5xl mb-3 bg-linear-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">98%</div>
              <div className="text-gray-400">Clientes satisfechos</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-5xl mb-3 bg-linear-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">5+</div>
              <div className="text-gray-400">Años de experiencia</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-purple-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
