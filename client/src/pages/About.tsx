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
    transition: { duration: 0.5 }
  };

  return (
    <Layout>
      <SEO
        title="Sobre Sebastián Jara | Mentor Ejecutivo y Fundador de GoPoint"
        description="Founder & CEO de GoPoint. 15+ años en marketing digital, SEO, Ads y automatización. Mentoría ejecutiva 1 a 1 para dueños de empresa en LATAM y EE.UU."
        keywords={["Sebastián Jara", "mentor ejecutivo", "GoPoint Agency", "consultor marketing digital", "mentoría empresarial", "automatización con IA"]}
        type="profile"
      />

      {/* Hero with Photo */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <div className="relative max-w-md mx-auto md:mx-0 md:ml-auto">
                <img
                  src="/images/sebastian-jara.webp"
                  alt="Sebastián Jara — Mentor Ejecutivo"
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
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Sebastián Jara
              </h1>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founder & CEO @GoPoint. 15+ años en marketing digital, SEO, Ads y automatización. Trabajo con empresas en LATAM y EE.UU.
                </p>
                <p>
                  Mi enfoque es construir sistemas: atraer demanda, convertirla en ventas y ordenar la operación. Uso automatización e IA como aceleradores, no como oferta principal.
                </p>
                <p>
                  Hoy trabajo con pocos clientes de forma directa a través de la mentoría ejecutiva 1 a 1. Prefiero profundidad sobre volumen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="py-16 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-10">Proyectos</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/40 pl-6">
                <h3 className="font-semibold">GoPoint Agency</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO — Agencia de marketing digital y automatización.</p>
              </div>
              <div className="border-l-2 border-border/50 pl-6">
                <h3 className="font-semibold">FrutillarHoy</h3>
                <p className="text-sm text-muted-foreground">Director — Portal de contenido local.</p>
              </div>
              <div className="border-l-2 border-border/50 pl-6">
                <h3 className="font-semibold">MarketingHoy.com</h3>
                <p className="text-sm text-muted-foreground">Director — Medio de marketing digital en español.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enfoque */}
      <section className="py-16 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-semibold mb-10">Áreas de expertise</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Sistema comercial y captación de leads",
                "SEO, Ads y estrategia de tráfico",
                "Automatización de procesos con IA",
                "CRM y gestión de pipeline",
                "Dashboard de control y métricas",
                "Newsletter y retención con IA"
              ].map((area, i) => (
                <div key={i} className="glass-panel rounded-lg p-4">
                  <p className="text-sm text-foreground/90">{area}</p>
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
              Si quieres trabajar conmigo, postula a la mentoría.
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
