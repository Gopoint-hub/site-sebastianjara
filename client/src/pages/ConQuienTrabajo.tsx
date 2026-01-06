import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function ConQuienTrabajo() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      <SEO 
        title="Con quién trabajo | Consultoría para Empresas B2B y E-commerce"
        description="Trabajo con empresas de servicios B2B, e-commerce con tracción y negocios de conocimiento que ya generan ingresos y necesitan dirección estratégica para escalar."
        keywords={["consultoría empresas B2B", "consultor e-commerce", "asesoría negocios digitales", "estrategia comercial", "escalar negocio", "consultoría pymes", "crecimiento empresarial", "marketing B2B"]}
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
              Con quién trabajo
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Negocios en marcha que ya generan ingresos y necesitan claridad para el siguiente paso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tipos de negocio */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-10">Tipos de negocio</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-primary/30 pl-6">
                <h3 className="font-semibold mb-2">Empresas de servicios B2B</h3>
                <p className="text-muted-foreground">Consultoras, agencias, empresas de tecnología que venden a otras empresas.</p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-semibold mb-2">E-commerce con tracción</h3>
                <p className="text-muted-foreground">Tiendas online que ya venden y buscan escalar con estructura.</p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-semibold mb-2">Negocios de conocimiento</h3>
                <p className="text-muted-foreground">Expertos, formadores, creadores que monetizan su expertise.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Escenarios típicos */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-10">Cuándo tiene sentido trabajar juntos</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-semibold mb-2">Crecimiento desordenado</h3>
                <p className="text-muted-foreground">Vendes más pero los problemas crecen al mismo ritmo.</p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-semibold mb-2">Marketing sin foco</h3>
                <p className="text-muted-foreground">Muchas acciones, canales y tácticas. Pocos resultados claros.</p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-semibold mb-2">Decisiones importantes pendientes</h3>
                <p className="text-muted-foreground">Necesitas claridad antes de invertir tiempo o dinero.</p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-semibold mb-2">Sistemas desconectados</h3>
                <p className="text-muted-foreground">La operación comercial se frena por falta de estructura.</p>
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
            <h2 className="text-2xl font-semibold mb-6">
              Si esto describe tu situación, podemos conversar.
            </h2>
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
