import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Target, Wrench, FileCheck, Users, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Method() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const steps = [
    {
      number: "01",
      icon: <Search className="h-8 w-8" />,
      title: "Diagnóstico Profundo del Negocio",
      description: "Análisis exhaustivo de tu operación actual, identificando bloqueos reales y oportunidades de crecimiento. No síntomas, causas raíz."
    },
    {
      number: "02",
      icon: <Target className="h-8 w-8" />,
      title: "Priorización Estratégica",
      description: "Definición clara de qué hacer primero y qué ignorar. Foco en acciones que generan avance sostenido, no en tareas que dan sensación de progreso."
    },
    {
      number: "03",
      icon: <Wrench className="h-8 w-8" />,
      title: "Intervención Técnica Puntual",
      description: "Implementación directa solo cuando evita fricción, error o desbloquea avance crítico. No ejecución operativa continua."
    },
    {
      number: "04",
      icon: <FileCheck className="h-8 w-8" />,
      title: "Sistemas Claros y Replicables",
      description: "Diseño de procesos documentados y automatizados que tu equipo puede ejecutar sin dependencia constante."
    },
    {
      number: "05",
      icon: <Users className="h-8 w-8" />,
      title: "Acompañamiento en Decisiones",
      description: "Soporte estratégico continuo para mantener el rumbo. No operación diaria, decisiones de largo plazo."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Mi Método - Modelo Híbrido de Consultoría Estratégica"
        description="Modelo híbrido que combina diagnóstico estratégico, intervención técnica puntual y acompañamiento continuo. No agencia, no soporte, no formación."
        keywords={["Método", "Consultoría Estratégica", "Modelo Híbrido", "Diagnóstico", "Sistemas", "Acompañamiento"]}
      />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32">
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn}>
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/10 px-4 py-1 text-xs font-mono tracking-wider uppercase">
                Mi Método
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
                Modelo Híbrido de<br/>
                <span className="text-primary">Consultoría Estratégica</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                Un enfoque que combina criterio estratégico con intervención técnica puntual para generar avance sostenido y relaciones de largo plazo.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Por Qué Este Modelo */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              Por qué este modelo funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-bold mb-3">Evita dependencia operativa</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No te conviertes en un recurso permanente del equipo. Intervienes técnicamente solo cuando acelera resultados, luego traspasas la operación.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-bold mb-3">Genera avance real</h3>
                <p className="text-muted-foreground leading-relaxed">
                  El foco está en decisiones estratégicas que mueven el negocio, no en tareas que dan sensación de progreso sin impacto.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-bold mb-3">Construye sistemas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada intervención deja procesos claros y replicables. El negocio gana autonomía mientras mantiene dirección estratégica.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-bold mb-3">Relaciones de largo plazo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  El valor está en mantener al negocio avanzando sin desviarse, no en ejecutar proyectos puntuales.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proceso Paso a Paso */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
              Cómo funciona el proceso
            </h2>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-mono text-primary">{step.number}</span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lo Que NO Hago */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              Lo que explícitamente NO hago
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Claridad sobre lo que no ofrezco para evitar expectativas incorrectas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-background border border-border text-center">
                <XCircle className="h-10 w-10 text-destructive mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">No soy agencia</h3>
                <p className="text-sm text-muted-foreground">
                  No ejecuto campañas, no gestiono redes sociales, no produzco contenido continuo.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border text-center">
                <XCircle className="h-10 w-10 text-destructive mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">No soy soporte</h3>
                <p className="text-sm text-muted-foreground">
                  No atiendo tickets, no resuelvo problemas operativos diarios, no hago mantenimiento.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border text-center">
                <XCircle className="h-10 w-10 text-destructive mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">No hago formación</h3>
                <p className="text-sm text-muted-foreground">
                  No ofrezco cursos, no capacito equipos, no vendo programas educativos.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <p className="text-lg text-center leading-relaxed">
                <strong className="text-foreground">Mi rol es mantener al negocio avanzando sin desviarse.</strong><br/>
                <span className="text-muted-foreground">Criterio estratégico + intervención técnica puntual cuando acelera resultados.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              ¿Tiene sentido trabajar juntos?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Si tu negocio ya vende, necesitas foco y velocidad, y valoras relaciones de largo plazo basadas en resultados, evaluemos el fit estratégico.
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
        </div>
      </section>
    </Layout>
  );
}
