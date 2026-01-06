import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      <SEO 
        title="Contacto | Sebastián Jara"
        description="Solicita una evaluación para trabajar juntos."
        keywords={["Contacto", "Consultoría", "Aplicar"]}
      />
      
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Aplicar
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Si tu negocio ya genera ingresos y necesitas dirección estratégica, podemos evaluar si tiene sentido trabajar juntos.
            </p>

            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-14 px-8 text-base rounded-full"
              onClick={() => window.open("https://wa.me/56977507750?text=Hola%20Sebasti%C3%A1n%2C%20me%20interesa%20solicitar%20una%20evaluaci%C3%B3n%20para%20mi%20negocio.", "_blank")}
            >
              Solicitar evaluación <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process hint */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-lg font-semibold mb-6 text-muted-foreground">Proceso</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>1. Conversación inicial para entender tu situación.</p>
              <p>2. Evaluación de fit mutuo.</p>
              <p>3. Propuesta si tiene sentido avanzar.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alternative contact */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-lg font-semibold mb-4 text-muted-foreground">Otras consultas</h2>
            <p className="text-muted-foreground mb-2">
              Conferencias, prensa o alianzas:
            </p>
            <a 
              href="mailto:sebastian@gopointagency.com" 
              className="text-foreground hover:text-primary transition-colors"
            >
              sebastian@gopointagency.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Agency redirect */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-lg font-semibold mb-4 text-muted-foreground">Ejecución táctica</h2>
            <p className="text-muted-foreground mb-4">
              Si buscas implementación de campañas o desarrollo web:
            </p>
            <a 
              href="https://gopointagency.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              GoPoint Agency <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
