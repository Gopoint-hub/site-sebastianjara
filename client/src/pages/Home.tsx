import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <Layout>
      <SEO 
        title="Sebastián Jara | Consultoría Estratégica"
        description="Dirección estratégica de marketing y automatización para negocios que ya venden."
        keywords={["Consultoría Estratégica", "Marketing", "Automatización", "IA"]}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 pt-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn} 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]"
            >
              Dirección estratégica<br />
              <span className="text-muted-foreground font-light">para negocios que ya venden.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn} 
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto"
            >
              Marketing. Automatización. Decisiones.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-14 text-base rounded-full"
                >
                  Solicitar evaluación <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/metodo">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-muted-foreground hover:text-foreground h-14 text-base"
                >
                  Ver método
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Section - Minimal */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-12 md:gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Diagnóstico</h3>
                <p className="text-sm text-muted-foreground">Identificar el problema real.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Decisión</h3>
                <p className="text-sm text-muted-foreground">Definir qué hacer y qué no.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Intervención</h3>
                <p className="text-sm text-muted-foreground">Actuar cuando acelera resultados.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Trabajo con pocos proyectos a la vez.
            </h2>
            <p className="text-muted-foreground mb-8">
              Si tu negocio ya genera ingresos y necesitas claridad estratégica, podemos conversar.
            </p>
            <Link href="/contacto">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full h-12 px-8"
              >
                Aplicar
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
