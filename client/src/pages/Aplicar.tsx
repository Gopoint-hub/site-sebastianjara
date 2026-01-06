import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { useState } from "react";

export default function Aplicar() {
  const [formData, setFormData] = useState({
    tipoNegocio: "",
    situacion: "",
    objetivo: "",
    decisor: "",
    timing: ""
  });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleSubmit = () => {
    const mensaje = `Hola Sebastián, me interesa solicitar una evaluación.

*Tipo de negocio:* ${formData.tipoNegocio || "No especificado"}

*Situación actual:* ${formData.situacion || "No especificado"}

*Objetivo principal:* ${formData.objetivo || "No especificado"}

*Quién decide:* ${formData.decisor || "No especificado"}

*Timing:* ${formData.timing || "No especificado"}`;

    const url = `https://wa.me/56977507750?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <Layout>
      <SEO 
        title="Aplicar | Sebastián Jara"
        description="Solicita una evaluación para trabajar juntos."
        keywords={["Aplicar", "Consultoría", "Evaluación"]}
      />
      
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Aplicar
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Si tu negocio ya genera ingresos y necesitas dirección estratégica, podemos evaluar si tiene sentido trabajar juntos.
            </p>
            <p className="text-muted-foreground">
              Trabajo con pocos clientes de forma directa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-16 border-t border-border/50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-3">Tipo de negocio</label>
                <input
                  type="text"
                  placeholder="Ej: Agencia de marketing, E-commerce, Consultoría..."
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={formData.tipoNegocio}
                  onChange={(e) => setFormData({...formData, tipoNegocio: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Situación actual o bloqueo</label>
                <textarea
                  placeholder="¿Qué está pasando? ¿Qué te frena?"
                  rows={3}
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  value={formData.situacion}
                  onChange={(e) => setFormData({...formData, situacion: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Objetivo principal</label>
                <textarea
                  placeholder="¿Qué quieres lograr?"
                  rows={2}
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  value={formData.objetivo}
                  onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">¿Quién decide?</label>
                <input
                  type="text"
                  placeholder="Ej: Yo directamente, Somos 2 socios, Debo consultar con..."
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={formData.decisor}
                  onChange={(e) => setFormData({...formData, decisor: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Timing</label>
                <input
                  type="text"
                  placeholder="Ej: Urgente, Este mes, Sin prisa..."
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={formData.timing}
                  onChange={(e) => setFormData({...formData, timing: e.target.value})}
                />
              </div>

              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-14 px-8 text-base rounded-full w-full sm:w-auto"
                onClick={handleSubmit}
              >
                Enviar aplicación <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
