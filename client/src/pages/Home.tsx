import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X as XIcon } from "lucide-react";
import SEO from "@/components/SEO";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
};

const itemFade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Mentoría Ejecutiva 1 a 1 | Sebastián Jara"
        description="Mentoría ejecutiva 1 a 1 para dueños de empresa: diseña tu sistema comercial, automatización y roadmap para escalar con orden y datos."
        keywords={["mentoría ejecutiva", "consultoría 1 a 1", "sistemas de crecimiento", "automatización con IA", "sistema comercial", "mentoría empresarial", "escalar negocio", "Sebastián Jara"]}
      />

      {/* 1. HERO */}
      <section className="min-h-[85vh] flex items-center py-20">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Mentoría Ejecutiva 1 a 1
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Sesión privada estratégica para diseñar el sistema comercial y operativo que tu empresa necesita para escalar con orden y datos.
            </p>
            <p className="text-sm text-primary font-medium mb-10">
              No es curso. No es teoría. Es trabajo aplicado a tu empresa.
            </p>

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

            <p className="text-xs text-muted-foreground mt-6">
              Cupos limitados por agenda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PARA QUIÉN ES */}
      <section className="py-20 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
              Esto es para ti si…
            </h2>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                "Eres dueño/socio o lideras el área comercial.",
                "Ya vendes, pero hay desorden en procesos y herramientas.",
                "Tienes CRM, email, gestión de tareas o dashboards, pero todo está separado.",
                "Quieres escalar sin improvisación.",
                "Necesitas claridad y un plan de acción."
              ].map((text, i) => (
                <motion.div key={i} variants={itemFade} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. QUÉ TRABAJAMOS */}
      <section id="mentoria" className="py-20 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
              Lo que diseñamos en la mentoría
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Arquitectura del sistema comercial (captación → lead → cierre).",
                "Gestión de leads y seguimiento.",
                "Cotización rápida con IA (cuando aplique).",
                "Dashboard de control: ventas, leads, actividad y resultados.",
                "Newsletter con IA y sistema de retención.",
                "Gestión de pendientes y operación.",
                "Integración de herramientas (CRM, email, gestión, documentación).",
                "Roadmap de implementación por prioridades."
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="glass-panel rounded-lg p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm font-bold mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-foreground/90">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Medio */}
      <section className="py-16 border-t border-border/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
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
          </div>
        </div>
      </section>

      {/* 4. LO QUE NO ES */}
      <section className="py-20 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
              Lo que NO es
            </h2>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                "No es un curso.",
                "No es una clase básica.",
                "No es una asesoría general.",
                "No es para estudiantes.",
                "No es para curiosos."
              ].map((text, i) => (
                <motion.div key={i} variants={itemFade} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center">
                    <XIcon className="h-3 w-3 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">{text}</p>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-foreground font-medium mt-8 text-center">
              Si buscas ejecución y estructura, esta mentoría encaja.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. RESULTADO DE LA SESIÓN */}
      <section className="py-20 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
              Te vas con
            </h2>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                "Diagnóstico claro.",
                "Cuellos de botella identificados.",
                "Diseño del sistema a implementar.",
                "Prioridades definidas.",
                "Próximos pasos accionables."
              ].map((text, i) => (
                <motion.div key={i} variants={itemFade} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-foreground">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. CÓMO FUNCIONA */}
      <section className="py-20 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
              Cómo funciona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", text: "Postulas con un formulario breve." },
                { step: "02", text: "Reviso tu caso y confirmo si encaja." },
                { step: "03", text: "Agendamos la sesión y trabajamos con foco en decisiones y plan." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary/30 font-mono mb-4">
                    {item.step}
                  </div>
                  <p className="text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. SOBRE MÍ */}
      <section className="py-20 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Sobre Sebastián Jara
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founder & CEO @GoPoint. 15+ años en marketing digital, SEO, Ads y automatización. Trabajo con empresas en LATAM y EE.UU. Mi enfoque es construir sistemas: atraer demanda, convertirla en ventas y ordenar la operación.
            </p>
            <div className="mt-6">
              <Link href="/sobre-mi" className="text-primary text-sm font-medium hover:underline">
                Más sobre mí
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-20 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
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
