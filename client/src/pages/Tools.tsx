import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Calculator, FileText, Search, Link as LinkIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function Tools() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const tools = [
    {
      id: "whatsapp-link-generator",
      title: "Generador de Links de WhatsApp",
      description: "Crea enlaces personalizados de WhatsApp con mensaje predefinido. Ideal para CTAs en redes sociales y campañas de marketing.",
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      link: "/herramientas/whatsapp-link-generator",
      badge: "Gratis"
    },
    {
      title: "Calculadora de Pacing",
      description: "Controla tu presupuesto publicitario. Calcula el gasto diario ideal para cumplir tus metas mensuales en Meta y Google Ads.",
      icon: <Calculator className="h-8 w-8 text-blue-500" />,
      link: "/herramientas/pacing-calculator",
      badge: "Nuevo"
    },
    {
      title: "Contador de Palabras",
      description: "Herramienta simple para contar palabras y caracteres en tiempo real. Perfecta para redactores y copywriters.",
      icon: <FileText className="h-8 w-8 text-green-500" />,
      link: "/herramientas/word-counter",
      badge: "Gratis"
    },
    {
      title: "Contador SEO (SERP)",
      description: "Simula tus títulos y meta descripciones en Google. Valida la longitud en píxeles para evitar cortes en los resultados de búsqueda.",
      icon: <Search className="h-8 w-8 text-purple-500" />,
      link: "/herramientas/seo-counter",
      badge: "Pro"
    },
    {
      title: "Generador de UTMs",
      description: "Crea enlaces trackeables para tus campañas. Estandariza tus fuentes de tráfico para un análisis preciso en Google Analytics.",
      icon: <LinkIcon className="h-8 w-8 text-orange-500" />,
      link: "/herramientas/utm-generator",
      badge: "Esencial"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Herramientas Digitales Gratuitas"
        description="Accede a herramientas prácticas para optimizar tu marketing digital. Generadores de links, utilidades y recursos gratuitos."
        keywords={["Herramientas Marketing", "Generador WhatsApp", "Utilidades Digitales", "Recursos Gratis"]}
      />
      <section className="py-20 bg-background min-h-[80vh]">
        <div className="container">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Herramientas <span className="text-primary">Digitales</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Recursos prácticos y utilidades gratuitas diseñadas para optimizar tu estrategia digital y automatizar procesos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all duration-300 group bg-card/50 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl group-hover:bg-primary/20 transition-colors">
                      {tool.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{tool.title}</CardTitle>
                    <CardDescription className="text-base">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <Link href={tool.link}>
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        Usar Herramienta <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
