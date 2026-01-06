import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
        title="Sebastián Jara | Consultor de Marketing Digital con 15+ Años de Experiencia"
        description="Consultor de marketing digital y estrategia de negocios con más de 15 años de experiencia. Fundador de GoPoint Agency, Director de MarketingHoy.com y FrutillarHoy. Asesoría en Chile, Perú, Colombia, México y Estados Unidos."
        keywords={["Sebastián Jara", "consultor marketing digital Chile", "asesor de negocios", "GoPoint Agency", "MarketingHoy", "experto marketing digital", "consultor estratégico", "asesoría empresarial Latinoamérica"]}
        type="profile"
      />
      
      {/* Hero with Photo */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="relative max-w-md mx-auto md:mx-0 md:ml-auto">
                <img 
                  src="/images/sebastian-jara.webp" 
                  alt="Sebastián Jara" 
                  className="w-full rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="order-2 md:order-1"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Sebastián Jara
              </h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Más de 15 años trabajando en marketing digital y estrategia de negocios. Fundé y vendí empresas. Lideré equipos. Asesoré a dueños de negocio en Chile, Perú, Colombia, México y Estados Unidos.
                </p>
                <p>
                  Hoy trabajo con pocos clientes de forma directa. Prefiero profundidad sobre volumen. Entro cuando hay un problema estratégico que resolver o una decisión importante que tomar.
                </p>
                <p>
                  Uso automatización e inteligencia artificial como aceleradores del sistema, no como oferta principal.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-10">Proyectos</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6">
                <h3 className="font-semibold">GoPoint Agency</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-semibold">FrutillarHoy</h3>
                <p className="text-sm text-muted-foreground">Director</p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <h3 className="font-semibold">MarketingHoy.com</h3>
                <p className="text-sm text-muted-foreground">Director</p>
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
