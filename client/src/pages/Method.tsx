import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function Method() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      <SEO 
        title="Método | Sebastián Jara"
        description="Diagnóstico, priorización, dirección e intervención puntual."
        keywords={["Método", "Estrategia", "Consultoría"]}
      />
      
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Método
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Claridad antes que acción. Decisión antes que ejecución.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enfoque */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="space-y-12">
              <div className="border-l-2 border-primary/30 pl-6">
                <h2 className="text-xl font-semibold mb-3">Diagnóstico real</h2>
                <p className="text-muted-foreground">
                  Entender qué está pasando. No lo que parece. No lo que se asume.
                </p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h2 className="text-xl font-semibold mb-3">Priorización</h2>
                <p className="text-muted-foreground">
                  Identificar qué mueve la aguja. Descartar lo que distrae.
                </p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h2 className="text-xl font-semibold mb-3">Dirección</h2>
                <p className="text-muted-foreground">
                  Definir el camino. Qué hacer, en qué orden, con qué recursos.
                </p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h2 className="text-xl font-semibold mb-3">Intervención puntual</h2>
                <p className="text-muted-foreground">
                  Actuar cuando acelera el avance. No antes. No por defecto.
                </p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h2 className="text-xl font-semibold mb-3">Base sostenible</h2>
                <p className="text-muted-foreground">
                  Construir estructura que funcione sin dependencia operativa.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Link href="/aplicar">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-14 px-8 text-base rounded-full"
              >
                Solicitar evaluación <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
