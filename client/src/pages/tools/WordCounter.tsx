import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileText, Type } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <Layout>
      <SEO 
        title="Contador de Palabras y Caracteres"
        description="Herramienta gratuita para contar palabras y caracteres en tiempo real. Ideal para redactores, estudiantes y profesionales SEO."
        keywords={["Contador de Palabras", "Contador de Caracteres", "Herramienta SEO", "Redacción", "Copywriting"]}
      />
      
      <section className="py-12 md:py-20 bg-background min-h-[90vh] flex flex-col">
        <div className="container max-w-4xl mx-auto flex-1 flex flex-col justify-center">
          <div className="mb-8">
            <Link href="/herramientas">
              <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Herramientas
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10 text-center">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Contador de <span className="text-primary">Palabras y Caracteres</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Escribe o pega tu texto abajo para obtener un recuento instantáneo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                  <Type className="h-8 w-8 text-primary mb-4 opacity-50" />
                  <div className="text-5xl font-bold font-mono text-primary mb-2">{charCount}</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Caracteres</div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-green-500/20 backdrop-blur-sm">
                <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                  <FileText className="h-8 w-8 text-green-500 mb-4 opacity-50" />
                  <div className="text-5xl font-bold font-mono text-green-500 mb-2">{wordCount}</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Palabras</div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-white/10 bg-card/30 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6">
                <Textarea
                  placeholder="Escribe o pega tu texto aquí..."
                  className="min-h-[300px] bg-transparent border-none resize-none text-lg focus-visible:ring-0 p-4"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </CardContent>
            </Card>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
