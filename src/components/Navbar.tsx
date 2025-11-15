import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "/assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("servicios");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // Scroll spy: resalta el menú según la sección visible
  useEffect(() => {
    const sectionIds = ["servicios", "portfolio", "contacto"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          // Marca la sección cuando está más o menos en el centro de la pantalla
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const linkClasses = (id: string) =>
    activeSection === id
      ? "text-purple-400 font-semibold relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-purple-400 after:rounded-full"
      : "text-gray-300 hover:text-purple-300";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-500/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo: vuelve al inicio (top de la página) */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative">
              <img
                src={logo}
                alt="EAGE IA Lab"
                className="h-16 w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.9)] group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className={`${linkClasses(
                "servicios"
              )} text-sm transition-colors`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`${linkClasses(
                "portfolio"
              )} text-sm transition-colors`}
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className={`${linkClasses(
                "contacto"
              )} text-sm transition-colors`}
            >
              Contacto
            </button>
            <Button
              className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              onClick={() => scrollToSection("contacto")}
            >
              Empezar proyecto
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 border-t border-purple-500/30 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("servicios")}
              className={`${linkClasses(
                "servicios"
              )} text-left text-base transition-colors`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`${linkClasses(
                "portfolio"
              )} text-left text-base transition-colors`}
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className={`${linkClasses(
                "contacto"
              )} text-left text-base transition-colors`}
            >
              Contacto
            </button>
            <Button
              className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full"
              onClick={() => scrollToSection("contacto")}
            >
              Empezar proyecto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
