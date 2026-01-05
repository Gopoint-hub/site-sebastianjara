import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, XCircle, Target, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import SEO from "@/components/SEO";

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
      <SEO 
        title="Consultoría Estratégica de Marketing y Automatización con IA"
        description="Consultoría estratégica para negocios que ya venden y necesitan foco, velocidad y sistemas claros. No agencia, no soporte, no formación."
        keywords={["Consultoría Estratégica", "Marketing", "Automatización", "Inteligencia Artificial", "Sistemas", "Decisiones"]}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background z-10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[96px] animate-pulse delay-1000" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 z-20 opacity-[0.03]" 
            style={{ 
              backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', 
              backgroundSize: '40px 40px',
              color: 'var(--foreground)'
            }} 
          />
        </div>

        <div className="container relative z-30 pt-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-8 flex justify-center">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 px-4 py-1.5 text-xs font-mono tracking-wider uppercase">
                Consultoría Estratégica High-Ticket
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
              Consultoría estratégica de marketing<br/>
              y automatización con IA para negocios<br/>
              que ya venden
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Dirección estratégica + intervención técnica puntual cuando acelera resultados.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-12 max-w-2xl mx-auto">
              <span className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive" /> No agencia</span>
              <span className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive" /> No soporte</span>
              <span className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive" /> No formación</span>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-14 text-lg w-full sm:w-auto rounded-full shadow-lg shadow-primary/20"
                >
                  Solicitar Evaluación <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/metodo">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-border hover:bg-accent h-14 text-lg w-full sm:w-auto rounded-full"
                >
                  Conocer mi Método
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cómo Trabajo Section */}
      <section className="py-20 md:py-32 bg-card/30 border-y border-border">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/10 px-4 py-1 text-xs font-mono tracking-wider uppercase">
              Modelo Híbrido
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Cómo trabajo
            </h2>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              Mi modelo combina criterio estratégico con intervención técnica puntual. No ejecuto operaciones diarias, mantengo al negocio avanzando sin desviarse.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl border border-primary/20">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Diagnóstico Real</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Análisis profundo del negocio y priorización estratégica. Identifico bloqueos reales, no síntomas.
                </p>
              </div>

              <div className="group">
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl border border-primary/20">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Intervención Técnica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Solo cuando desbloquea avance o evita errores costosos. Traspaso operativo al cliente o su equipo.
                </p>
              </div>

              <div className="group">
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl border border-primary/20">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Acompañamiento Continuo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Decisiones estratégicas de largo plazo. Sistemas claros y replicables que generan avance sostenido.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Para Quién Es / Para Quién No Es */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/10 px-4 py-1 text-xs font-mono tracking-wider uppercase">
              Filtrado Explícito
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
              Para quién es (y para quién no)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Para Quién Es */}
              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0" />
                  <h3 className="text-2xl font-bold">Para quién es</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Negocios que <strong className="text-foreground">ya venden</strong> y necesitan foco, velocidad y sistemas claros</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Empresas que buscan <strong className="text-foreground">dirección estratégica</strong>, no ejecución operativa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Decisores que entienden que la tecnología es un <strong className="text-foreground">multiplicador</strong>, no un salvavidas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Organizaciones que valoran <strong className="text-foreground">relaciones de largo plazo</strong> basadas en resultados</span>
                  </li>
                </ul>
              </div>

              {/* Para Quién NO Es */}
              <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="h-8 w-8 text-destructive shrink-0" />
                  <h3 className="text-2xl font-bold">Para quién NO es</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span>Negocios que buscan <strong className="text-foreground">agencia de ejecución</strong> o soporte operativo diario</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span>Emprendimientos sin <strong className="text-foreground">ventas validadas</strong> o en etapa de ideación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span>Empresas que buscan <strong className="text-foreground">formación</strong>, cursos o capacitaciones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span>Organizaciones que esperan <strong className="text-foreground">soluciones mágicas</strong> sin compromiso estratégico</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Trabajo con pocos clientes a la vez. Existe un proceso previo de evaluación para asegurar fit estratégico.
              </p>
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-14 text-lg rounded-full shadow-lg shadow-primary/20"
                >
                  Aplicar Ahora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
