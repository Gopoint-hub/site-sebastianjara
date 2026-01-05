import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Youtube, Linkedin, ArrowRight, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const socialNetworks = [
    {
      title: "Canal de YouTube",
      description: "Tutoriales profundos sobre IA, automatización y estrategias de marketing B2B.",
      icon: <Youtube className="h-8 w-8 text-red-500" />,
      link: "https://www.youtube.com/@sebastianjaracom",
      action: "Ver Videos"
    },
    {
      title: "Comunidad en WhatsApp",
      description: "Actualizaciones rápidas, tips diarios y acceso directo a novedades.",
      icon: <MessageCircle className="h-8 w-8 text-green-500" />,
      link: "https://whatsapp.com/channel/0029Vb5wwAFJZg48RGccvJ0x",
      action: "Unirme al Canal"
    },
    {
      title: "LinkedIn Profesional",
      description: "Artículos de opinión, networking y reflexiones sobre la industria.",
      icon: <Linkedin className="h-8 w-8 text-blue-500" />,
      link: "https://www.linkedin.com/in/sebastianjarabravo/",
      action: "Conectar"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Contacto y Redes Sociales"
        description="Conecta con Sebastián Jara para consultorías estratégicas o accede a recursos gratuitos sobre marketing digital e IA."
        keywords={["Contacto", "Consultoría", "Recursos Gratuitos", "Comunidad", "Redes Sociales"]}
      />
      <section className="py-20 md:py-32 bg-background min-h-[80vh]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Columna Izquierda: Contacto Directo */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/10 px-4 py-1 text-sm font-mono tracking-wider uppercase">
                Contacto
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Hablemos de <br/>
                <span className="text-primary">Estrategia</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Mi enfoque no es para todos. Trabajo mejor con empresas que entienden que la tecnología es un multiplicador, no un salvavidas.
              </p>

              <div className="space-y-12">
                {/* Botón de WhatsApp Destacado - Minimalista */}
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-0 shrink-0">
                      <MessageCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Chat Directo</h3>
                      <p className="text-muted-foreground">Respuesta rápida vía WhatsApp</p>
                    </div>
                  </div>
                  <Button 
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium h-14 px-8 text-lg rounded-full shadow-lg shadow-green-900/20"
                    onClick={() => window.open("https://wa.me/56977507750", "_blank")}
                  >
                    Escribir al +56 9 7750 7750 <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="h-px w-full bg-border/50" />

                <div className="flex items-start gap-6 group cursor-pointer" onClick={() => window.location.href = "mailto:sebastian@gopointagency.com"}>
                  <div className="shrink-0 mt-1">
                    <Mail className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Consultas Corporativas</h3>
                    <p className="text-muted-foreground mb-2 text-lg">Para conferencias, prensa o alianzas estratégicas.</p>
                    <span className="text-lg font-medium border-b border-primary/30 group-hover:border-primary transition-colors">
                      sebastian@gopointagency.com
                    </span>
                  </div>
                </div>

                <div className="h-px w-full bg-border/50" />

                <div className="flex items-start gap-6 group">
                  <div className="shrink-0 mt-1">
                    <ExternalLink className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">¿Buscas servicios de agencia?</h3>
                    <p className="text-muted-foreground mb-4 text-lg">
                      Para implementación de campañas, gestión de redes o desarrollo web, mi equipo en GoPoint es la mejor opción.
                    </p>
                    <Button 
                      variant="link"
                      className="p-0 h-auto text-lg text-primary hover:text-primary/80"
                      onClick={() => window.open("https://gopointagency.com", "_blank")}
                    >
                      Cotizar en GoPoint Agency <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha: Redes Sociales - Lista Limpia */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:pl-10"
            >
              <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                Sígueme en Redes
              </h2>
              
              <div className="space-y-10">
                {socialNetworks.map((network, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start gap-6 cursor-pointer hover:translate-x-2 transition-transform duration-300"
                    onClick={() => window.open(network.link, "_blank")}
                  >
                    <div className="shrink-0 mt-1 p-3 bg-secondary/30 rounded-2xl group-hover:bg-secondary/50 transition-colors">
                      {network.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{network.title}</h3>
                        <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </div>
                      <p className="text-muted-foreground mb-2 text-lg leading-relaxed">
                        {network.description}
                      </p>
                      <span className="text-sm font-medium text-primary/80 group-hover:text-primary uppercase tracking-wide">
                        {network.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
