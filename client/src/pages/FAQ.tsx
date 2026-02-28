import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const faqs = [
  {
    category: "Sobre la mentoría",
    items: [
      {
        q: "¿Qué es la Mentoría Ejecutiva 1 a 1 de Sebastián Jara?",
        a: "Es una sesión privada estratégica donde trabajo directamente con el dueño o director de una empresa para diseñar su sistema comercial y operativo. No es un curso ni asesoría genérica: es trabajo aplicado a tu negocio específico, con foco en decisiones y plan de acción concreto.",
      },
      {
        q: "¿En qué se diferencia de una consultoría tradicional?",
        a: "No entrego un informe ni recomendaciones genéricas. En la sesión diseñamos juntos el sistema: vemos tu negocio, identificamos cuellos de botella específicos y salimos con un plan accionable y priorizado. El foco es ejecución, no teoría.",
      },
      {
        q: "¿Qué se trabaja en la sesión?",
        a: "Diseñamos el sistema comercial completo: captación de leads, seguimiento, cierre, cotización con IA cuando aplica, dashboard de control con tus métricas reales, sistema de newsletter y retención, integración de herramientas (CRM, email, gestión, documentación) y roadmap de implementación por prioridades.",
      },
      {
        q: "¿Qué resultados obtengo al finalizar?",
        a: "Sales con diagnóstico claro de tu situación actual, cuellos de botella identificados, diseño del sistema a implementar, prioridades definidas por impacto y próximos pasos accionables con timeline.",
      },
      {
        q: "¿La mentoría es presencial o remota?",
        a: "La sesión es remota, lo que me permite trabajar con empresas en Chile, Perú, Colombia, México y Estados Unidos sin restricción geográfica.",
      },
    ],
  },
  {
    category: "Para quién es",
    items: [
      {
        q: "¿Para quién es esta mentoría?",
        a: "Para dueños de empresa, socios o directores de área comercial que ya venden pero tienen desorden en procesos, herramientas desconectadas o necesitan un plan claro para escalar. Es para quienes buscan sistemas, no dependencia.",
      },
      {
        q: "¿Para quién NO es?",
        a: "No es para estudiantes, personas sin empresa activa, quienes buscan un curso o teoría, ni para quienes quieren asesoría general sin compromiso de ejecución.",
      },
      {
        q: "¿Necesito tener experiencia en tecnología o automatización?",
        a: "No. El objetivo es diseñar el sistema adecuado para tu nivel actual y tus recursos. Trabajamos con las herramientas que ya tienes o con las más simples que sirvan para tu caso.",
      },
      {
        q: "¿Funciona para cualquier industria?",
        a: "Sí, siempre que tengas un proceso comercial activo. He trabajado con empresas de servicios, tecnología, retail, consultoría y más, en Chile, Perú, Colombia, México y EE.UU.",
      },
    ],
  },
  {
    category: "Proceso de postulación",
    items: [
      {
        q: "¿Cómo funciona el proceso para trabajar con Sebastián Jara?",
        a: "Tres pasos: (1) Completas el formulario de postulación con información de tu empresa y tu desafío actual. (2) Reviso tu caso personalmente y te confirmo si la mentoría encaja con tu situación. (3) Agendamos la sesión y trabajamos con foco total.",
      },
      {
        q: "¿Por qué hay un proceso de postulación?",
        a: "Porque los cupos son limitados por agenda. Prefiero trabajar con pocos clientes de forma directa y garantizar profundidad sobre volumen. El formulario me permite evaluar si tu caso es el adecuado para que la mentoría genere valor real.",
      },
      {
        q: "¿Cuánto tiempo tarda el proceso desde la postulación?",
        a: "Reviso cada postulación personalmente. El tiempo depende de la disponibilidad de agenda en el momento en que aplicas.",
      },
      {
        q: "¿Cómo postulo?",
        a: "Completa el formulario en sebastianjara.com/postular con tu nombre, empresa, rol, facturación mensual aproximada, principal desafío y objetivo en 90 días.",
      },
    ],
  },
  {
    category: "Sobre Sebastián Jara",
    items: [
      {
        q: "¿Quién es Sebastián Jara?",
        a: "Soy Founder & CEO de GoPoint Agency, con 15+ años de experiencia en marketing digital, SEO, Ads y automatización. Trabajo con empresas en LATAM y EE.UU. Mi enfoque es construir sistemas: atraer demanda, convertirla en ventas y ordenar la operación, usando IA y automatización como aceleradores.",
      },
      {
        q: "¿Qué es GoPoint Agency?",
        a: "GoPoint es la agencia de marketing digital y automatización que fundé, especializada en sistemas de crecimiento para empresas. También soy director de FrutillarHoy y MarketingHoy.com.",
      },
      {
        q: "¿Con qué países trabaja Sebastián Jara?",
        a: "Trabajo remotamente con empresas en Chile, Perú, Colombia, México y Estados Unidos.",
      },
      {
        q: "¿Dónde puedo seguir a Sebastián Jara?",
        a: "En LinkedIn (linkedin.com/in/sebastianjarabravo), YouTube (@sebastianjaracom), TikTok (@sebastianjara.com) y el canal de WhatsApp de sebastianjara.com.",
      },
    ],
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    }))
  ),
};

export default function FAQ() {
  return (
    <Layout>
      <SEO
        title="Preguntas frecuentes | Sebastián Jara — Mentoría Ejecutiva"
        description="Respuestas a las preguntas más comunes sobre la Mentoría Ejecutiva 1 a 1 de Sebastián Jara: qué es, para quién es, cómo postular y qué resultados esperar."
        keywords={["preguntas frecuentes mentoría ejecutiva", "FAQ mentoría 1 a 1", "cómo postular mentoría Sebastián Jara", "mentoría ejecutiva Chile", "consultoría empresarial LATAM"]}
        canonical="https://sebastianjara.com/faq"
      />
      <StructuredData data={FAQ_SCHEMA} />

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
              Preguntas frecuentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas saber sobre la Mentoría Ejecutiva 1 a 1 y cómo trabajar conmigo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-3xl space-y-16">
            {faqs.map((category, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-semibold mb-8 text-primary">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.items.map((item, ii) => (
                    <motion.div
                      key={ii}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: ii * 0.05 }}
                      className="border-b border-border/40 pb-6"
                    >
                      <h3 className="font-semibold mb-3">{item.q}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-2xl font-semibold mb-4">
              ¿Tienes más preguntas?
            </h2>
            <p className="text-muted-foreground mb-8">
              Postula y me cuentas tu caso directamente.
            </p>
            <Link href="/postular">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 text-base rounded-full"
              >
                Postular a la mentoría <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
