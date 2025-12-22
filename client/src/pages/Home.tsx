import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Bot, Cpu, ExternalLink, MessageSquare, Video, CheckCircle2, ChevronRight } from "lucide-react";
import Timeline from "@/components/Timeline";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-10" />
            <img 
            src="/images/hero-bg-orange.png" 
            alt="Digital Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container relative z-20 pt-20">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-6 flex justify-center">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 px-4 py-1 text-sm font-mono tracking-wider uppercase">
                Consultor Estratégico
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-tight">
              Marketing Digital & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400">
                Inteligencia Artificial Aplicada
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Diseño sistemas de automatización que reemplazan tareas manuales y optimizan decisiones de negocio basadas en datos.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-14 text-lg w-full sm:w-auto"
                onClick={() => document.getElementById('focus')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conocer mi trabajo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 hover:bg-white/5 h-14 text-lg w-full sm:w-auto group"
                onClick={() => window.open("https://gopointagency.com", "_blank")}
              >
                Trabajar con mi equipo en GoPoint
                <ExternalLink className="ml-2 h-4 w-4 group-hover:text-primary transition-colors" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lo que hago Section */}
      <section id="about" className="py-24 bg-background relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Estrategia y Tecnología <br/>
                <span className="text-primary">Sin Fricción</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Soy Sebastián Jara. Llevo más de 15 años trabajando en estrategias de crecimiento y optimización de ventas. 
                Desde 2023, me especializo en integrar IA en operaciones reales para escalar negocios sin escalar el caos.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Estrategia de marketing basada en datos reales",
                  "Automatización con IA en operaciones comerciales",
                  "Sistemas de contenido y distribución escalables",
                  "Optimización de procesos y reducción de carga manual",
                  "Acompañamiento estratégico a empresas en crecimiento"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-muted-foreground mb-4 font-mono">FUNDADOR DE</p>
                <a href="https://gopointagency.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-xl font-bold hover:text-primary transition-colors">
                  GOPOINT AGENCY <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="relative flex justify-center items-center">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative w-full max-w-md">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="/images/profile.webp" 
                    alt="Sebastián Jara" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white/90 dark:bg-card/90 backdrop-blur p-3 md:p-4 rounded-xl border border-gray-200 dark:border-white/10 shadow-lg max-w-[120px] md:max-w-[140px]">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-mono uppercase leading-tight">Años de Experiencia</div>
                </div>

                <div className="absolute top-6 -right-2 md:top-10 md:-right-6 bg-white/90 dark:bg-card/90 backdrop-blur p-3 md:p-4 rounded-xl border border-gray-200 dark:border-white/10 shadow-lg">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">IA</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground font-mono uppercase leading-tight">Especialización</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enfoque Actual Section */}
      <section id="focus" className="py-24 bg-card/30 border-y border-white/5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Enfoque Actual</h2>
            <p className="text-muted-foreground">
              Tres pilares fundamentales donde convergen la tecnología y el negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="bg-background border-white/10 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="h-48 overflow-hidden bg-black/20 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <img src="/images/focus-data-orange.png" alt="Data Driven" className="w-32 h-32 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(252,80,0,0.3)]" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Database className="h-5 w-5 text-primary" />
                  Marketing Basado en Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> Eliminación de conjeturas en la toma de decisiones</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Unificación de fuentes de datos dispersas</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Dashboards de impacto real en negocio</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-background border-white/10 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="h-48 overflow-hidden bg-black/20 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <img src="/images/focus-ai-orange.png" alt="AI Business" className="w-32 h-32 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(252,80,0,0.3)]" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Bot className="h-5 w-5 text-primary" />
                  IA Aplicada al Negocio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> Implementación de agentes autónomos</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Automatización de atención al cliente</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Flujos operativos inteligentes con Make/n8n</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-background border-white/10 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="h-48 overflow-hidden bg-black/20 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <img src="/images/focus-systems-orange.png" alt="Scalable Systems" className="w-32 h-32 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(252,80,0,0.3)]" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Cpu className="h-5 w-5 text-primary" />
                  Sistemas Escalables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">•</span> SEO técnico como activo a largo plazo</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Motores de contenido automatizado</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> Infraestructura digital robusta</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cómo trabajo Section */}
      <section id="method" className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Cómo trabajo</h2>
            <p className="text-muted-foreground text-lg">
              Sin suposiciones. Sin adornos. Solo estrategia, datos y tecnología aplicada a resultados.
            </p>
          </div>

          <Timeline />

          {/* Bloque 5 - Full Width */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="flex-1">
                <div className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">Modelo de Ejecución</div>
                <h3 className="text-2xl font-bold font-display mb-4">Ejecución vía GoPoint</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  El trabajo con empresas se canaliza a través de GoPoint. Yo lidero la estrategia y superviso la implementación junto a mi equipo.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium">
                  <span className="bg-background/50 px-3 py-1 rounded-full border border-white/5">Enfoque estratégico</span>
                  <span className="bg-background/50 px-3 py-1 rounded-full border border-white/5">Ejecución técnica</span>
                  <span className="bg-background/50 px-3 py-1 rounded-full border border-white/5">Acompañamiento continuo</span>
                </div>
              </div>
              <div className="shrink-0">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg"
                  onClick={() => window.open("https://gopointagency.com", "_blank")}
                >
                  Conocer GoPoint <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section id="resources" className="py-24 bg-card/20 border-y border-white/5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Recursos & Comunidad</h2>
            <p className="text-muted-foreground">
              Contenido vivo, análisis y reflexiones sobre el estado actual de la tecnología y el marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* WhatsApp Channel */}
            <Card className="bg-[#25D366]/5 border-white/10 hover:border-[#25D366]/50 transition-all flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <MessageSquare className="h-6 w-6 text-[#25D366]" />
                  Canal de WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground mb-6 text-sm flex-1">
                  Análisis y reflexiones sobre marketing digital, automatización e inteligencia artificial aplicada a negocio. Contenido directo y accionable.
                </p>
                <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-black font-bold mt-auto" onClick={() => window.open("https://whatsapp.com/channel/0029Vb5wwAFJZg48RGccvJ0x", "_blank")}>
                  Unirme al canal
                </Button>
              </CardContent>
            </Card>

            {/* YouTube */}
            <Card className="bg-[#FF0000]/5 border-white/10 hover:border-[#FF0000]/50 transition-all flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#FF0000] fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  YouTube
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground mb-6 text-sm flex-1">
                  Tutoriales profundos, análisis de herramientas y guías paso a paso sobre implementación de IA y automatización.
                </p>
                <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white font-bold mt-auto" onClick={() => window.open("https://www.youtube.com/@sebastianjaracom", "_blank")}>
                  Ver canal
                </Button>
              </CardContent>
            </Card>

            {/* TikTok */}
            <Card className="bg-[#ff0050]/5 border-white/10 hover:border-[#ff0050]/50 transition-all flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Video className="h-6 w-6 text-[#ff0050]" />
                  TikTok
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground mb-6 text-sm flex-1">
                  Videos cortos sobre estrategia digital, IA aplicada, errores comunes en marketing y sistemas reales en operación.
                </p>
                <Button className="w-full bg-gradient-to-r from-[#00f2ea] to-[#ff0050] hover:opacity-90 text-white font-bold border-none mt-auto" onClick={() => window.open("https://www.tiktok.com/@sebastianjara.com", "_blank")}>
                  Ver en TikTok
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Contacto</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Para invitaciones, colaboraciones, prensa o temas estratégicos puntuales, puedes escribirme directamente.
          </p>

          <a 
            href="mailto:sebastian@gopointagency.com" 
            className="text-lg sm:text-xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors block mb-16 break-all sm:break-normal"
          >
            sebastian@gopointagency.com
          </a>

          <div className="bg-card border border-white/10 rounded-2xl p-8 md:p-10">
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              El trabajo con empresas se canaliza a través de GoPoint, donde lidero la estrategia y superviso la ejecución junto a mi equipo.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg w-full sm:w-auto"
              onClick={() => window.open("https://gopointagency.com", "_blank")}
            >
              Conocer GoPoint <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
