import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      <SEO 
        title="Sebastián Jara | Dirección Estratégica"
        description="Dirección estratégica para negocios que ya venden."
      />
      
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center py-20">
        <div className="container">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Dirección estratégica
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Para negocios que ya venden.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/aplicar">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-14 px-8 text-base rounded-full"
                >
                  Solicitar evaluación <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/metodo">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-muted-foreground hover:text-foreground h-14 px-8 text-base"
                >
                  Ver método
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qué hago */}
      <section className="py-20 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-semibold mb-6">Qué hago</h2>
            <p className="text-muted-foreground text-lg">
              Ayudo a dueños de negocio a tomar mejores decisiones de marketing y operación comercial. Diagnóstico, priorización y dirección.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Situaciones que destrabo */}
      <section className="py-20 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-10 text-center">Situaciones que destrabo</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="border-l-2 border-primary/30 pl-6">
                Crecimiento desordenado que genera más problemas que beneficios.
              </p>
              <p className="border-l-2 border-border pl-6">
                Marketing sin foco: muchas acciones, pocos resultados claros.
              </p>
              <p className="border-l-2 border-border pl-6">
                Sistemas desconectados que frenan la operación comercial.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo trabajo */}
      <section className="py-20 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-semibold mb-6">Cómo trabajo</h2>
            <p className="text-muted-foreground text-lg mb-4">
              Diagnóstico real de la situación. Priorización de lo que importa. Dirección clara.
            </p>
            <p className="text-muted-foreground">
              Intervención puntual cuando acelera el avance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
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
