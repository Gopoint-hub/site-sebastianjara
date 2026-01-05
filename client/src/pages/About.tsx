import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <Layout>
      <SEO 
        title="Sobre Mí - Trayectoria y Experiencia"
        description="Consultor estratégico con experiencia práctica en resolución de bloqueos estratégicos para negocios reales. Uso de IA y automatización como aceleradores, no como producto."
        keywords={["Consultor Estratégico", "Experiencia", "Trayectoria", "Marketing Digital", "Automatización", "IA"]}
      />
      
      <section className="py-20 md:py-32 min-h-[80vh]">
        <div className="container">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn}>
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/10 px-4 py-1 text-xs font-mono tracking-wider uppercase">
                Trayectoria
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
                Sebastián Jara
              </h1>
              <p className="text-2xl text-muted-foreground mb-16 leading-relaxed">
                Consultor estratégico especializado en marketing, automatización e inteligencia artificial aplicada a negocios.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="prose prose-lg max-w-none mb-16">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Mi trabajo se centra en resolver bloqueos estratégicos que impiden el crecimiento sostenido de negocios que ya venden. No ofrezco soluciones genéricas ni herramientas como producto: ofrezco criterio, foco y dirección.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                He trabajado directamente con empresas de diversos sectores, desde startups tecnológicas hasta organizaciones establecidas, ayudándolas a diseñar sistemas claros, automatizar procesos críticos y tomar decisiones basadas en datos reales.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                La inteligencia artificial y la automatización son aceleradores, no fines en sí mismos. Mi rol es mantener al negocio avanzando sin desviarse, interviniendo técnicamente solo cuando evita fricción o error, y traspasando operación al cliente o su equipo.
              </p>
            </motion.div>

            {/* Experiencia Práctica */}
            <motion.div variants={fadeIn} className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-primary" />
                Experiencia Práctica
              </h2>
              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-card/30 border border-border">
                  <h3 className="text-xl font-bold mb-2">Fundador & Consultor Estratégico</h3>
                  <p className="text-primary font-medium mb-3">GoPoint Agency</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dirección estratégica de proyectos de marketing digital, automatización y desarrollo web. Trabajo directo con decisores para diseñar sistemas escalables y procesos basados en datos.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card/30 border border-border">
                  <h3 className="text-xl font-bold mb-2">Consultor de Transformación Digital</h3>
                  <p className="text-primary font-medium mb-3">Neftis</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementación de estrategias de automatización y optimización de procesos comerciales mediante inteligencia artificial. Resolución de bloqueos operativos en empresas B2B.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card/30 border border-border">
                  <h3 className="text-xl font-bold mb-2">Docente de Marketing Digital & IA</h3>
                  <p className="text-primary font-medium mb-3">Academia F5</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Formación práctica en estrategias de marketing digital, automatización y uso estratégico de IA para profesionales y equipos comerciales.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Formación */}
            <motion.div variants={fadeIn} className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                Formación
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20 shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ingeniería en Informática</h3>
                    <p className="text-muted-foreground">Universidad Diego Portales, Chile</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/20 shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Especialización en Marketing Digital & Automatización</h3>
                    <p className="text-muted-foreground">Formación continua en estrategias de crecimiento y sistemas automatizados</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enfoque */}
            <motion.div variants={fadeIn} className="p-8 rounded-2xl bg-primary/5 border border-primary/20 mb-16">
              <h2 className="text-2xl font-display font-bold mb-4">Mi Enfoque</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                No soy agencia, no soy soporte, no hago tareas repetitivas. Mi rol es mantener al negocio avanzando sin desviarse, combinando criterio estratégico con intervención técnica puntual.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Trabajo con pocos clientes a la vez, estableciendo relaciones de largo plazo basadas en resultados y dependencia estratégica, no en ejecución operativa.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeIn} className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Si tu negocio ya vende y necesitas foco, velocidad y sistemas claros, evaluemos si tiene sentido trabajar juntos.
              </p>
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-14 text-lg rounded-full shadow-lg shadow-primary/20"
                >
                  Solicitar Evaluación <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
