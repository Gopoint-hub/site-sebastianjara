import { useState, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Search, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SEOCounter() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleWidth, setTitleWidth] = useState(0);
  const [descWidth, setDescWidth] = useState(0);
  
  const titleRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth);
    }
  }, [title]);

  useEffect(() => {
    if (descRef.current) {
      setDescWidth(descRef.current.offsetWidth);
    }
  }, [description]);

  // Google typically truncates titles around 580px (desktop) and descriptions around 920px (desktop)
  // Character counts are approximations: Title ~60 chars, Desc ~155 chars
  const MAX_TITLE_WIDTH = 580;
  const MAX_DESC_WIDTH = 920;
  
  const getStatusColor = (current: number, max: number) => {
    if (current === 0) return "text-muted-foreground";
    if (current > max) return "text-red-500";
    if (current > max * 0.8) return "text-green-500";
    return "text-yellow-500";
  };

  return (
    <Layout>
      <SEO 
        title="Contador de Caracteres para SEO"
        description="Simula cómo se verán tus títulos y meta descripciones en Google. Valida la longitud en píxeles y caracteres para optimizar tu CTR."
        keywords={["Contador SEO", "Meta Title", "Meta Description", "Simulador SERP", "Herramienta SEO"]}
      />
      
      {/* Hidden elements to calculate pixel width */}
      <span ref={titleRef} className="absolute opacity-0 pointer-events-none font-sans text-[20px] font-medium whitespace-nowrap">{title}</span>
      <span ref={descRef} className="absolute opacity-0 pointer-events-none font-sans text-[14px] whitespace-nowrap">{description}</span>

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
            <div className="mb-10 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-bold">
                  Contador SEO <span className="text-primary">(SERP Simulator)</span>
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Validación visual basada en píxeles y legibilidad recomendada para buscadores.
              </p>
            </div>

            <div className="space-y-12">
              {/* Meta Title Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <Label className="text-sm font-bold uppercase tracking-wider text-foreground">Meta Título (Title Tag)</Label>
                  <div className="flex gap-3 text-xs font-mono">
                    <span className={cn("px-2 py-1 rounded bg-card border border-border", getStatusColor(titleWidth, MAX_TITLE_WIDTH))}>
                      {titleWidth} px
                    </span>
                    <span className="px-2 py-1 rounded bg-card border border-border text-muted-foreground">
                      {title.length} / 60
                    </span>
                  </div>
                </div>
                
                <Input 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Título que aparecerá en Google..."
                  className="h-14 text-lg bg-card/50 border-white/10 focus:border-primary/50 transition-colors"
                />
                
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Ancho máximo recomendado: <strong>580 px</strong></span>
                  <span>Estado óptimo: <strong>40 - 60 caracteres</strong></span>
                </div>

                {/* Visual Preview */}
                <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 max-w-[600px]">
                  <div className="text-xs text-gray-500 mb-1">www.tudominio.com › pagina-ejemplo</div>
                  <div className="text-xl text-[#1a0dab] hover:underline cursor-pointer truncate font-medium font-sans" style={{ maxWidth: '580px' }}>
                    {title || "Título de ejemplo para visualización en Google"}
                  </div>
                </div>
              </div>

              {/* Meta Description Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <Label className="text-sm font-bold uppercase tracking-wider text-foreground">Meta Descripción</Label>
                  <div className="flex gap-3 text-xs font-mono">
                    <span className={cn("px-2 py-1 rounded bg-card border border-border", getStatusColor(descWidth, MAX_DESC_WIDTH))}>
                      {descWidth} px
                    </span>
                    <span className="px-2 py-1 rounded bg-card border border-border text-muted-foreground">
                      {description.length} / 155
                    </span>
                  </div>
                </div>
                
                <Textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descripción breve de tu página..."
                  className="min-h-[120px] text-base bg-card/50 border-white/10 focus:border-primary/50 transition-colors resize-none"
                />
                
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Ancho máximo recomendado: <strong>920 px</strong></span>
                  <span>Estado óptimo: <strong>140 - 155 caracteres</strong></span>
                </div>

                 {/* Visual Preview */}
                 <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 max-w-[600px]">
                  <div className="text-xs text-gray-500 mb-1">www.tudominio.com › pagina-ejemplo</div>
                  <div className="text-xl text-[#1a0dab] mb-1 truncate font-medium font-sans">
                    {title || "Título de ejemplo para visualización en Google"}
                  </div>
                  <div className="text-sm text-[#4d5156] font-sans leading-snug break-words" style={{ maxWidth: '600px' }}>
                    {description || "Esta es una descripción de ejemplo que muestra cómo se vería tu fragmento en los resultados de búsqueda de Google. Es importante mantenerla concisa y relevante."}
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
