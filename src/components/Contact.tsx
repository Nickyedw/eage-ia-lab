import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";

// 👇 sin "any", usando el tipo de Vite
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY ||
  "4fe62da8-4a45-4ad6-bdc9-0d0ee28e94a0"; // tu fallback


export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_ACCESS_KEY);
      fd.append("subject", "Nuevo mensaje desde EAGE IA Lab");
      fd.append("from_name", "EAGE IA Lab Website");
      fd.append("replyto", formData.email);

      // Campos del formulario
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("service", formData.service);
      fd.append("message", formData.message);

      // Opcional: redirección tras el envío
      // fd.append("redirect", "https://tu-dominio.com/gracias");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd
      });

      const data = await res.json();

      if (data.success) {
        toast.success("¡Mensaje enviado! Te responderemos pronto.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast.error("No se pudo enviar. Inténtalo nuevamente.");
        console.error("Web3Forms error:", data);
      }
    } catch (err) {
      console.error(err);
      toast.error("Ocurrió un error inesperado.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-[radial-gradient(ellipse_at_top,_rgba(16,0,37,0.85),_rgba(34,0,70,0.9)_60%,_rgba(10,0,25,1))]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Hablemos de tu proyecto</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos listos para dar vida a tus ideas. Cuéntanos qué necesitas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/95 backdrop-blur border-purple-500/20">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot anti-bots (oculto) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">Nombre completo *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">Teléfono</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+51 999 999 999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Servicio de interés</label>
                      <Input
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        placeholder="Ej: Diseño web, Logo..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Mensaje *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    size="lg"
                    disabled={sending}
                  >
                    {sending ? "Enviando..." : "Enviar mensaje"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-linear-to-br from-purple-600 to-blue-600 text-white border-none">
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-6">Información de contacto</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="mb-1">Email</div>
                      <a href="mailto:eage.ialab@gmail.com" className="text-sm opacity-90 hover:opacity-100">
                        eage.ialab@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="mb-1">Teléfono</div>
                      <a href="tel:+51977546073" className="text-sm opacity-90 hover:opacity-100">
                        +51 977546073
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="mb-1">Ubicación</div>
                      <p className="text-sm opacity-90">Lima, Perú</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur border-purple-500/20">
              <CardContent className="pt-6">
                <h3 className="text-xl mb-4">Horario de atención</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
