import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Bot, Cpu, Search, BarChart3, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import Timeline from "@/components/Timeline";
import SEO from "@/components/SEO";

export default function Method() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <Layout>
      <SEO 
        title="Metodología y Enfoque Estratégico"
        description="Descubre cómo combino datos, inteligencia artificial y sistemas escalables para transformar negocios. Un enfoque probado en 5 etapas."
        keywords={["Metodología", "Estrategia Digital", "Automatización de Procesos", "Data Driven", "Sistemas Escalables"]}
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        <div className="container relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/10 px-4 py-1 text-sm font-mono tracking-wider uppercase">
              Metodología
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Estrategia, Datos y <br/>
              <span className="text-primary">Automatización</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              No creo en las soluciones mágicas. Creo en los sistemas predecibles. 
              Mi enfoque combina la precisión de los datos con la potencia de la inteligencia artificial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enfoque Actual (3 Pilares) */}
      <section className="py-20 bg-card/30 border-y border-white/5">
        <div className="container">
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
                <p className="text-muted-foreground mb-4">
                  Las decisiones viscerales son costosas. Transformo la intuición en certeza mediante el análisis riguroso de métricas clave.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Dashboards en tiempo real</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Atribución de ventas precisa</li>
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
                <p className="text-muted-foreground mb-4">
                  La IA no es el futuro, es el estándar actual. Implemento agentes y flujos que trabajan 24/7 por tu negocio.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Automatización de atención</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Generación de contenido a escala</li>
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
                <p className="text-muted-foreground mb-4">
                  Construyo infraestructuras digitales que crecen contigo, eliminando cuellos de botella operativos.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Integraciones CRM/ERP</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Workflows automatizados (Make/n8n)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* El Proceso (Timeline) */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Cómo Trabajo</h2>
            <p className="text-muted-foreground text-lg">
              Un proceso estructurado en 5 etapas para garantizar resultados consistentes y medibles.
            </p>
          </div>
          
          <Timeline />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary/5 border-t border-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para sistematizar tu crecimiento?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Si buscas dejar de apagar incendios y empezar a construir un motor de ventas predecible, hablemos.
          </p>
          <a href="/contacto" className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            Agendar Consultoría <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
