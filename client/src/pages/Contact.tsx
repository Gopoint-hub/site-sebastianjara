import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Youtube, Linkedin, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
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
        title="Aplicar - Proceso de Evaluación"
        description="Solicita una evaluación estratégica para determinar si tiene sentido trabajar juntos. Proceso selectivo para negocios que ya venden."
        keywords={["Contacto", "Aplicar", "Evaluación", "Consultoría Estratégica", "Proceso Selectivo"]}
      />
      
      <section className="py-20 md:py-32 bg-background min-h-[80vh]">
        <div className="container">
          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="text-center"
            >
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/10 px-4 py-1 text-xs font-mono tracking-wider uppercase">
                Proceso de Aplicación
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Solicitar Evaluación<br/>
                <span className="text-primary">Estratégica</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Trabajo con pocos clientes a la vez. Existe un proceso previo de evaluación para asegurar fit estratégico.
              </p>
            </motion.div>
          </div>

          {/* Criterios de Evaluación */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              Criterios de Evaluación
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card/30 border border-border">
                <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Negocio con Ventas Validadas</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tu empresa ya vende y tiene clientes recurrentes. No estás en etapa de ideación o validación de mercado.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card/30 border border-border">
                <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Necesidad de Foco y Velocidad</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Buscas dirección estratégica clara, no ejecución operativa. Entiendes que la tecnología es un multiplicador.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card/30 border border-border">
                <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Compromiso de Largo Plazo</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Valoras relaciones estratégicas sostenidas, no proyectos puntuales. Buscas avance continuo, no soluciones rápidas.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card/30 border border-border">
                <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Decisor con Autonomía</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tienes capacidad de tomar decisiones estratégicas y asignar recursos sin aprobaciones extensas.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contacto Directo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-20">
            {/* Columna Izquierda: WhatsApp */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contacto Directo</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Si cumples con los criterios anteriores, el primer paso es una conversación inicial para evaluar contexto y fit estratégico.
              </p>

              {/* Botón de WhatsApp */}
              <div className="group mb-10">
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
                  Enviar mensaje por WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Email Corporativo */}
              <div className="p-6 rounded-xl bg-card/30 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-lg">Consultas Corporativas</h3>
                </div>
                <p className="text-muted-foreground mb-3 text-sm">
                  Para conferencias, prensa o alianzas estratégicas.
                </p>
                <a 
                  href="mailto:sebastian@gopointagency.com" 
                  className="text-primary font-medium hover:underline"
                >
                  sebastian@gopointagency.com
                </a>
              </div>
            </motion.div>

            {/* Columna Derecha: Redes Sociales */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Sígueme en Redes</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contenido estratégico, casos de estudio y reflexiones sobre marketing, automatización e IA aplicada a negocios.
              </p>
              
              <div className="space-y-6">
                {socialNetworks.map((network, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start gap-6 cursor-pointer hover:translate-x-2 transition-transform duration-300 p-4 rounded-xl hover:bg-card/30"
                    onClick={() => window.open(network.link, "_blank")}
                  >
                    <div className="shrink-0 mt-1 p-3 bg-secondary/30 rounded-2xl group-hover:bg-secondary/50 transition-colors">
                      {network.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{network.title}</h3>
                        <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                        {network.description}
                      </p>
                      <span className="text-xs font-medium text-primary/80 group-hover:text-primary uppercase tracking-wide">
                        {network.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Servicios de Agencia */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-border pt-16"
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 p-4 bg-secondary/30 rounded-full w-fit mx-auto">
                <ExternalLink className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-bold text-2xl mb-3">¿Buscas servicios de agencia?</h3>
              <p className="text-muted-foreground mb-6 text-lg max-w-xl mx-auto">
                Implementación de campañas, gestión de redes y desarrollo web en GoPoint Agency.
              </p>
              <Button 
                variant="outline"
                className="h-12 px-8 text-lg border-primary/20 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all rounded-full"
                onClick={() => window.open("https://gopointagency.com", "_blank")}
              >
                Cotizar en GoPoint Agency <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
