import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      <SEO 
        title="Sobre Mí | Sebastián Jara"
        description="Más de 15 años en marketing digital, automatización y estrategia de negocios."
        keywords={["Sebastián Jara", "Consultor", "Estrategia"]}
        type="profile"
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
              Sebastián Jara
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Más de 15 años trabajando en marketing digital, automatización y estrategia de negocios.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fundé y vendí empresas. Lideré equipos. Asesoré a dueños de negocio en Chile, Perú, Colombia, México y Estados Unidos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience - Minimal */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-8">Experiencia relevante</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-primary/30 pl-6">
                <h3 className="font-semibold mb-1">GoPoint Agency</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-semibold mb-1">FrutillarHoy</h3>
                <p className="text-sm text-muted-foreground">Director</p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-semibold mb-1">MarketingHoy.com</h3>
                <p className="text-sm text-muted-foreground">Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach - Minimal */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-8">Cómo trabajo</h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                No ejecuto operación diaria. No vendo horas.
              </p>
              <p>
                Entro cuando hay un problema estratégico que resolver o una decisión importante que tomar.
              </p>
              <p>
                Trabajo con pocos clientes. Prefiero profundidad sobre volumen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
