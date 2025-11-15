import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

// usa el archivo que pusiste en public/assets/logo.png
const logo = "/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="EAGE IA Lab"
                className="h-20 w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Transformando ideas en realidad digital con diseños únicos y creativos que impulsan tu marca.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-purple-400 transition-colors">Páginas Web</a></li>
              <li><a href="#servicios" className="hover:text-purple-400 transition-colors">Logos & Branding</a></li>
              <li><a href="#servicios" className="hover:text-purple-400 transition-colors">Avatares</a></li>
              <li><a href="#servicios" className="hover:text-purple-400 transition-colors">Reels & Videos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre nosotros</a></li>
              <li><a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#contacto" className="hover:text-purple-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Síguenos</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" aria-label="Facebook" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="GitHub" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
            </div>

            <div>
              <p className="text-sm mb-2 text-gray-400">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="bg-gray-800 text-white px-3 py-2 rounded text-sm flex-1 border border-purple-500/30 focus:border-purple-500/60 focus:outline-none transition-colors"
                />
                <button className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded text-sm transition-all hover:scale-105">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} EAGE IA Lab. Todos los derechos reservados.
          </p>
          <div className="mt-2 space-x-4 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Política de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-400 transition-colors">Términos de Servicio</a>
            <span>•</span>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
