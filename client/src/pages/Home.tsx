import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Bot, Cpu, ExternalLink, MessageSquare, Video, CheckCircle2, ChevronRight } from "lucide-react";
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
            src="/images/hero-bg.png" 
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
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
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
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
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-2xl" />
              <div className="relative grid grid-cols-1 gap-6">
                <Card className="bg-card/50 backdrop-blur border-white/10 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-display font-bold text-lg mb-2 text-primary">Principios de Trabajo</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Datos sobre opiniones</li>
                      <li>• Automatización sobre repetición</li>
                      <li>• Sistemas sobre hacks temporales</li>
                      <li>• Claridad sobre complejidad</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-card/30 p-6 rounded-xl border border-white/5 text-center">
                    <div className="text-4xl font-bold text-white mb-2">15+</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase">Años de Exp.</div>
                  </div>
                  <div className="bg-card/30 p-6 rounded-xl border border-white/5 text-center">
                    <div className="text-4xl font-bold text-white mb-2">IA</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase">Especialización</div>
                  </div>
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
                <img src="/images/focus-data.png" alt="Data Driven" className="w-32 h-32 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,255,148,0.3)]" />
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
                <img src="/images/focus-ai.png" alt="AI Business" className="w-32 h-32 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,255,148,0.3)]" />
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
                <img src="/images/focus-systems.png" alt="Scalable Systems" className="w-32 h-32 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,255,148,0.3)]" />
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

      {/* Proyectos Section */}
      <section id="projects" className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Proyectos Destacados</h2>
              <p className="text-muted-foreground max-w-xl">
                Selección de casos donde la estrategia y la automatización generaron resultados medibles.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">Ver todos los casos</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Automatización E-commerce Retail",
                desc: "Sistema integral de recuperación de carritos y atención al cliente con IA.",
                tags: ["Make", "OpenAI", "Shopify"],
                result: "+35% Recuperación"
              },
              {
                title: "Motor de Contenido SEO",
                desc: "Generación y publicación programática de contenido técnico para sector SaaS.",
                tags: ["Python", "SEO", "Content"],
                result: "3x Tráfico Orgánico"
              },
              {
                title: "Dashboard Unificado de Ventas",
                desc: "Centralización de datos de 5 fuentes distintas para reporte en tiempo real.",
                tags: ["Data Studio", "BigQuery", "API"],
                result: "Visibilidad Total"
              },
              {
                title: "Laboratorio: Agentes de Soporte",
                desc: "Proyecto interno de validación de agentes autónomos para resolución L1.",
                tags: ["R&D", "LLMs", "LangChain"],
                result: "En Producción"
              }
            ].map((project, i) => (
              <div key={i} className="group relative bg-card border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="aspect-video bg-black/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img src="/images/project-placeholder.png" alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex gap-2 mb-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/10 hover:bg-white/20 text-xs backdrop-blur-sm border-none text-white">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">{project.title}</h3>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
                  <div className="flex items-center gap-2 text-primary font-mono text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {project.result}
                  </div>
                </div>
              </div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* WhatsApp Channel */}
            <Card className="bg-[#25D366]/5 border-white/10 hover:border-[#25D366]/50 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageSquare className="h-8 w-8 text-[#25D366]" />
                  Canal de WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Análisis y reflexiones sobre marketing digital, automatización e inteligencia artificial aplicada a negocio. Contenido directo y accionable.
                </p>
                <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-black font-bold" onClick={() => window.open("https://whatsapp.com/channel/0029Vb5wwAFJZg48RGccvJ0x", "_blank")}>
                  Unirme al canal
                </Button>
              </CardContent>
            </Card>

            {/* TikTok */}
            <Card className="bg-[#ff0050]/5 border-white/10 hover:border-[#ff0050]/50 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Video className="h-8 w-8 text-[#ff0050]" />
                  TikTok
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Videos cortos sobre estrategia digital, IA aplicada, errores comunes en marketing y sistemas reales en operación.
                </p>
                <Button className="w-full bg-gradient-to-r from-[#00f2ea] to-[#ff0050] hover:opacity-90 text-white font-bold border-none" onClick={() => window.open("https://www.tiktok.com/@sebastianjara.com", "_blank")}>
                  Ver en TikTok
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Hablemos</h2>
            <p className="text-muted-foreground">
              ¿Tienes un proyecto en mente? Cuéntame un poco más.
            </p>
          </div>

          <Card className="border-white/10 bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Nombre</label>
                    <input type="text" className="w-full bg-background border border-white/10 rounded-md px-3 py-2 focus:border-primary focus:outline-none transition-colors" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <input type="email" className="w-full bg-background border border-white/10 rounded-md px-3 py-2 focus:border-primary focus:outline-none transition-colors" placeholder="tu@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Empresa</label>
                  <input type="text" className="w-full bg-background border border-white/10 rounded-md px-3 py-2 focus:border-primary focus:outline-none transition-colors" placeholder="Nombre de tu empresa" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Mensaje</label>
                  <textarea className="w-full bg-background border border-white/10 rounded-md px-3 py-2 min-h-[120px] focus:border-primary focus:outline-none transition-colors" placeholder="¿En qué puedo ayudarte?" />
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-md p-4 text-sm text-muted-foreground flex gap-3 items-start">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <p>No realizo servicios puntuales. Trabajo con empresas a través de GoPoint para asegurar resultados integrales.</p>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12">
                  Enviar Mensaje
                </Button>
                
                <div className="text-center pt-4">
                  <a href="https://gopointagency.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                    O visita directamente GoPoint Agency <ChevronRight className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
