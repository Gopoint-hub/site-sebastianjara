import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const MENTORIA_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué incluye la sesión de Mentoría Ejecutiva 1 a 1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La sesión incluye: diseño del sistema comercial completo (captación, lead, cierre), gestión de leads y seguimiento sistemático, cotización rápida con IA cuando aplica, dashboard de control con ventas y métricas, sistema de newsletter y retención con IA, integración de herramientas (CRM, email, gestión, documentación) y roadmap de implementación por prioridades."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué resultados obtengo al final de la sesión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al terminar la sesión obtienes: diagnóstico claro de tu situación actual, cuellos de botella identificados, diseño del sistema comercial a implementar, prioridades definidas por impacto y próximos pasos accionables con timeline."
      }
    },
    {
      "@type": "Question",
      "name": "¿La mentoría ejecutiva es presencial o remota?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La sesión se realiza de forma remota, lo que permite trabajar con empresas en Chile, Perú, Colombia, México y Estados Unidos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo dura el proceso desde la postulación hasta la sesión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Después de completar el formulario de postulación, Sebastián revisa tu caso personalmente. Si la mentoría encaja con tu situación, se agenda la sesión. El tiempo depende de la disponibilidad de agenda."
      }
    }
  ]
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
};

const itemFade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Mentoria() {
  return (
    <Layout>
      <SEO
        title="Mentoría Ejecutiva 1 a 1 — Detalle del servicio | Sebastián Jara"
        description="Mentoría ejecutiva privada para dueños de empresa. Diseñamos tu sistema comercial, automatización y roadmap para escalar con orden, datos y ejecución."
        keywords={["mentoría ejecutiva", "consultoría 1 a 1", "sistema comercial", "automatización con IA", "mentoría empresarial", "escalar negocio"]}
      />
      <StructuredData data={MENTORIA_FAQ_SCHEMA} />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Mentoría Ejecutiva 1 a 1
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Sesión privada estratégica donde diseñamos el sistema comercial y operativo que tu empresa necesita. No es teoría: es trabajo aplicado, con foco en decisiones y plan de acción.
            </p>
            <p className="text-sm text-primary font-medium">
              Cupos limitados por agenda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-16 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-10">Qué trabajamos en la sesión</h2>
            <div className="space-y-8">
              {[
                { title: "Arquitectura del sistema comercial", desc: "Diseño del flujo completo: captación → lead → cierre. Estructura que funcione sin depender de la improvisación." },
                { title: "Gestión de leads y seguimiento", desc: "Cómo captar, clasificar y hacer seguimiento de cada oportunidad de forma sistemática." },
                { title: "Cotización rápida con IA", desc: "Cuando aplique, diseñamos un sistema de cotización asistido por IA para responder más rápido." },
                { title: "Dashboard de control", desc: "Ventas, leads, actividad y resultados en un solo lugar. Decisiones basadas en datos, no en intuición." },
                { title: "Newsletter y retención con IA", desc: "Sistema de comunicación con tu base que funcione de forma semi-automática." },
                { title: "Integración de herramientas", desc: "CRM, email, gestión de tareas, documentación. Todo conectado y trabajando como un sistema." },
                { title: "Roadmap de implementación", desc: "Prioridades claras, orden de ejecución y próximos pasos concretos." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-l-2 border-primary/30 pl-6"
                >
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entregables */}
      <section className="py-16 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-10">Te vas con</h2>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                "Diagnóstico claro de tu situación actual.",
                "Cuellos de botella identificados.",
                "Diseño del sistema a implementar.",
                "Prioridades definidas por impacto.",
                "Próximos pasos accionables con timeline."
              ].map((text, i) => (
                <motion.div key={i} variants={itemFade} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-foreground">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Para quién */}
      <section className="py-16 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-10">Para quién es</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Dueños de empresa que ya venden.",
                "Socios o directores que lideran el área comercial.",
                "Negocios con herramientas desconectadas.",
                "Empresas que quieren escalar con orden.",
                "Quienes necesitan un plan claro y accionable.",
                "Quienes buscan sistemas, no dependencia."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 glass-panel rounded-lg p-4">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground/90">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-10">Cómo funciona</h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Postula", desc: "Completas un formulario breve con la información de tu empresa y tu desafío actual." },
                { step: "02", title: "Revisión", desc: "Reviso tu caso personalmente y confirmo si la mentoría encaja con tu situación." },
                { step: "03", title: "Sesión", desc: "Agendamos la sesión y trabajamos con foco total en decisiones, diseño del sistema y plan de acción." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <span className="text-3xl font-bold text-primary/30 font-mono flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-semibold mb-8">
              Si quieres orden y escalabilidad, postula.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/postular">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 text-base rounded-full"
                >
                  Postular a la mentoría <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
