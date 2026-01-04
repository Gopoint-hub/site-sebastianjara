import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Terminal, Zap, Globe } from "lucide-react";
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
        title="Consultor de Marketing Digital e IA"
        description="Ayudo a empresas a escalar mediante estrategias de marketing basadas en datos y automatización con Inteligencia Artificial. Consultoría estratégica en Chile y Latam."
        keywords={["Marketing Digital", "Inteligencia Artificial", "Consultor Estratégico", "Automatización", "Chile", "Latam"]}
      />
      {/* Hero Section - Minimalist & Impactful */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background z-10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-600/10 rounded-full blur-[96px] animate-pulse delay-1000" />
          
          {/* Grid Pattern Overlay */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs font-mono text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Disponible para nuevos proyectos estratégicos
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[0.9]">
              Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-primary animate-gradient-x bg-[length:200%_auto]">Digital</span> <br/>
              <span className="italic font-serif font-light text-primary">&</span> Inteligencia <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-primary animate-gradient-x bg-[length:200%_auto]">Artificial.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Ayudo a empresas a reemplazar la intuición con datos y el caos operativo con sistemas automatizados.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <Link href="/metodo">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-14 text-lg w-full sm:w-auto rounded-full"
                >
                  Ver mi Método <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/sobre-mi">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-border hover:bg-accent h-14 text-lg w-full sm:w-auto rounded-full"
                >
                  Conocer Trayectoria
                </Button>
              </Link>
            </motion.div>

            {/* Featured Cards - Navigation Hub */}
            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Link href="/metodo">
                <div className="group p-6 rounded-2xl bg-card/30 border border-border hover:border-primary/30 transition-all cursor-pointer hover:-translate-y-1">
                  <div className="mb-4 p-3 bg-background/50 w-fit rounded-xl group-hover:bg-primary/20 transition-colors border border-border/50">
                    <Terminal className="h-6 w-6 text-foreground group-hover:text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Consultoría Estratégica</h3>
                  <p className="text-sm text-muted-foreground">
                    Auditoría profunda y rediseño de procesos comerciales con IA.
                  </p>
                </div>
              </Link>

              <Link href="/herramientas">
                <div className="group p-6 rounded-2xl bg-card/30 border border-border hover:border-primary/30 transition-all cursor-pointer hover:-translate-y-1">
                  <div className="mb-4 p-3 bg-background/50 w-fit rounded-xl group-hover:bg-primary/20 transition-colors border border-border/50">
                    <Zap className="h-6 w-6 text-foreground group-hover:text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Herramientas Gratuitas</h3>
                  <p className="text-sm text-muted-foreground">
                    Generadores y utilidades para optimizar tu día a día digital.
                  </p>
                </div>
              </Link>

              <a href="https://gopointagency.com" target="_blank" rel="noreferrer">
                <div className="group p-6 rounded-2xl bg-card/30 border border-border hover:border-primary/30 transition-all cursor-pointer hover:-translate-y-1">
                  <div className="mb-4 p-3 bg-background/50 w-fit rounded-xl group-hover:bg-primary/20 transition-colors border border-border/50">
                    <Globe className="h-6 w-6 text-foreground group-hover:text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Agencia Digital</h3>
                  <p className="text-sm text-muted-foreground">
                    Ejecución táctica de campañas y desarrollo web con mi equipo.
                  </p>
                </div>
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
