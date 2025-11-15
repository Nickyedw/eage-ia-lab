import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

type WhatsAppButtonProps = {
  phone?: string;
  message?: string;
};

export function WhatsAppButton({
  phone = "51977546073", // tu número (sin +)
  message = "Hola, me interesa un servicio de diseño con EAGE IA Lab 👋",
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Mostrar el mensaje cada 60 segundos
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }, 60000);

    // Primera vez a los 3 segundos
    const initialTimeout = setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Globito de mensaje */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg px-4 py-3 max-w-[210px] border border-green-500/30"
          >
            <p className="text-sm text-gray-800">
              ¡Hablemos de tu proyecto por WhatsApp! 💬
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        onClick={() => setShowMessage(false)}
        className="relative group"
      >
        {/* Círculos de pulso animados */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
        <span className="absolute inset-0 rounded-full bg-green-500/50 animate-pulse" />

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-xl shadow-green-500/40 group-hover:shadow-green-500/70 transition-all"
        >
          {/* Logo oficial de WhatsApp (SVG) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            className="w-8 h-8 text-white"
          >
            <path
              fill="currentColor"
              d="M16.04 3C9.96 3 5 7.96 5 14.04c0 2.47.9 4.74 2.4 6.53L5.3 27l6.6-2.06a11.07 11.07 0 0 0 4.14.79C21.12 25.73 26 20.77 26 14.7 26 8.62 21.12 3 16.04 3Zm0 2.16c4.8 0 8.8 4.1 8.8 9.18 0 5.08-4 9.18-8.8 9.18-1.4 0-2.77-.34-4.02-1l-.29-.15-3.9 1.22 1.27-3.8-.19-.3a8.5 8.5 0 0 1-1.35-4.93c0-5.08 4.08-9.18 8.78-9.18Zm-4.22 4.07c-.23 0-.61.09-.93.45-.32.36-1.23 1.2-1.23 2.93 0 1.73 1.26 3.4 1.43 3.63.18.23 2.42 3.86 6.02 5.26 2.98 1.18 3.58.95 4.22.89.64-.05 2.08-.85 2.37-1.67.29-.82.29-1.52.2-1.67-.09-.14-.32-.23-.67-.41-.35-.18-2.08-1.03-2.4-1.15-.32-.12-.55-.18-.79.18-.23.36-.9 1.14-1.11 1.37-.21.23-.41.25-.76.07-.35-.18-1.48-.55-2.82-1.76-1.04-.93-1.74-2.08-1.95-2.44-.2-.36-.02-.56.16-.74.17-.17.41-.45.61-.68.2-.23.26-.36.38-.61.12-.25.06-.46-.03-.64-.09-.18-.79-1.9-1.09-2.6-.3-.7-.6-.61-.83-.61Z"
            />
          </svg>
        </motion.div>
      </a>
    </div>
  );
}
