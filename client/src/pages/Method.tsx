import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
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
        description="Diagnóstico, decisión e intervención estratégica."
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
              No vendo un proceso. Vendo claridad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="space-y-16">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Diagnóstico</h2>
                <p className="text-muted-foreground">
                  Entender qué está pasando realmente. No lo que parece. No lo que se asume.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Decisión</h2>
                <p className="text-muted-foreground">
                  Definir qué hacer. Y más importante: qué no hacer.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Intervención</h2>
                <p className="text-muted-foreground">
                  Actuar solo cuando acelera resultados. No antes. No por defecto.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-8">Contexto</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Marketing, automatización e inteligencia artificial son herramientas. No el objetivo.
              </p>
              <p>
                El objetivo es que tu negocio avance. Que las decisiones importantes se tomen con información. Que los bloqueos se resuelvan.
              </p>
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
            <h2 className="text-2xl font-semibold mb-6">
              Si esto resuena, podemos conversar.
            </h2>
            <Link href="/contacto">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full h-12 px-8"
              >
                Solicitar evaluación
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
