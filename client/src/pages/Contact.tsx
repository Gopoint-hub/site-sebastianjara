import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      icon: <Youtube className="h-6 w-6 text-red-500" />,
      link: "https://www.youtube.com/@sebastianjaracom",
      action: "Ver Videos"
    },
    {
      title: "Comunidad en WhatsApp",
      description: "Actualizaciones rápidas, tips diarios y acceso directo a novedades.",
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      link: "https://whatsapp.com/channel/0029Vb5wwAFJZg48RGccvJ0x",
      action: "Unirme al Canal"
    },
    {
      title: "LinkedIn Profesional",
      description: "Artículos de opinión, networking y reflexiones sobre la industria.",
      icon: <Linkedin className="h-6 w-6 text-blue-500" />,
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                Mi enfoque no es para todos. Trabajo mejor con empresas que entienden que la tecnología es un multiplicador, no un salvavidas.
              </p>

              <div className="space-y-8">
                {/* Botón de WhatsApp Destacado */}
                <div className="p-6 border border-green-500/20 rounded-2xl bg-green-500/5 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-500/10 rounded-xl shrink-0">
                      <MessageCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Chat Directo</h3>
                      <p className="text-sm text-muted-foreground">Respuesta rápida vía WhatsApp</p>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium h-12 text-lg"
                    onClick={() => window.open("https://wa.me/56977507750", "_blank")}
                  >
                    Escribir al +56 9 7750 7750 <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Consultas Corporativas</h3>
                    <p className="text-muted-foreground mb-2">Para conferencias, prensa o alianzas estratégicas.</p>
                    <a href="mailto:sebastian@gopointagency.com" className="text-lg font-medium hover:text-primary transition-colors border-b border-primary/30 hover:border-primary">
                      sebastian@gopointagency.com
                    </a>
                  </div>
                </div>

                <div className="p-6 border border-white/10 rounded-2xl bg-card/30 backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-2">¿Buscas servicios de agencia?</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Para implementación de campañas, gestión de redes o desarrollo web, mi equipo en GoPoint es la mejor opción.
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full sm:w-auto border-border hover:bg-accent"
                    onClick={() => window.open("https://gopointagency.com", "_blank")}
                  >
                    Cotizar en GoPoint Agency <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha: Redes Sociales */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                Sígueme en Redes <span className="h-px flex-1 bg-white/10"></span>
              </h2>
              
              <div className="grid gap-6">
                {socialNetworks.map((network, index) => (
                  <Card key={index} className="bg-background/50 border-white/10 hover:border-primary/30 transition-all group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                          {network.icon}
                        </div>
                        <Button variant="ghost" size="sm" className="text-muted-foreground group-hover:text-primary" onClick={() => window.open(network.link, "_blank")}>
                          <ArrowRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-lg mb-2">{network.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-4">
                        {network.description}
                      </p>
                      <a 
                        href={network.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                      >
                        {network.action}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
