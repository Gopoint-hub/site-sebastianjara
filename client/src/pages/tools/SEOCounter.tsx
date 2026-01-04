import { useState, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Search, CheckCircle, AlertCircle, Save, Download, Trash2, HelpCircle, FileEdit } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SEODraft {
  id: string;
  title: string;
  description: string;
  timestamp: number;
}

export default function SEOCounter() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleWidth, setTitleWidth] = useState(0);
  const [descWidth, setDescWidth] = useState(0);
  const [drafts, setDrafts] = useState<SEODraft[]>([]);
  
  const titleRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const savedDrafts = localStorage.getItem("seo_drafts");
    if (savedDrafts) {
      try {
        setDrafts(JSON.parse(savedDrafts));
      } catch (e) {
        console.error("Error parsing drafts", e);
      }
    }
  }, []);

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

  const MAX_TITLE_WIDTH = 580;
  const MAX_DESC_WIDTH = 920;
  
  const getStatusColor = (current: number, max: number) => {
    if (current === 0) return "text-muted-foreground";
    if (current > max) return "text-red-500";
    if (current > max * 0.8) return "text-green-500";
    return "text-yellow-500";
  };

  const saveDraft = () => {
    if (!title && !description) {
      toast.error("Escribe algo antes de guardar");
      return;
    }

    const newDraft: SEODraft = {
      id: Date.now().toString(),
      title,
      description,
      timestamp: Date.now()
    };

    const newDrafts = [newDraft, ...drafts];
    setDrafts(newDrafts);
    localStorage.setItem("seo_drafts", JSON.stringify(newDrafts));
    toast.success("Borrador guardado");
  };

  const loadDraft = (draft: SEODraft) => {
    setTitle(draft.title);
    setDescription(draft.description);
    toast.success("Borrador cargado");
  };

  const deleteDraft = (id: string) => {
    const newDrafts = drafts.filter(d => d.id !== id);
    setDrafts(newDrafts);
    localStorage.setItem("seo_drafts", JSON.stringify(newDrafts));
    toast.success("Borrador eliminado");
  };

  const exportDrafts = () => {
    if (drafts.length === 0) {
      toast.error("No hay borradores para exportar");
      return;
    }

    const csvContent = "data:text/csv;charset=utf-8," 
      + "Título,Descripción,Fecha\n"
      + drafts.map(item => {
          const date = new Date(item.timestamp).toLocaleDateString();
          return `"${item.title.replace(/"/g, '""')}","${item.description.replace(/"/g, '""')}","${date}"`;
        }).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "seo_drafts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Reporte exportado correctamente");
  };

  const InfoTooltip = ({ content }: { content: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help ml-2 inline-block" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs text-sm">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <Layout>
      <SEO 
        title="Contador de Caracteres para SEO"
        description="Simula cómo se verán tus títulos y meta descripciones en Google. Valida la longitud en píxeles y caracteres para optimizar tu CTR."
        keywords={["Contador SEO", "Meta Title", "Meta Description", "Simulador SERP", "Herramienta SEO"]}
      />
      
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
            <div className="mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
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
              <div className="flex gap-2">
                <Button variant="outline" onClick={saveDraft}>
                  <Save className="mr-2 h-4 w-4" /> Guardar Borrador
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                {/* Meta Title Section */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <Label className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center">
                      Meta Título (Title Tag)
                      <InfoTooltip content="El título azul que aparece en los resultados de búsqueda. Es el factor SEO on-page más importante." />
                    </Label>
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
                    <Label className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center">
                      Meta Descripción
                      <InfoTooltip content="El texto gris debajo del título. No afecta el ranking directamente, pero sí el CTR (clics)." />
                    </Label>
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

              {/* Drafts Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <FileEdit className="h-5 w-5 text-primary" /> Borradores
                    </h3>
                    {drafts.length > 0 && (
                      <Button variant="ghost" size="sm" onClick={exportDrafts}>
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {drafts.length === 0 ? (
                    <div className="text-sm text-muted-foreground p-6 bg-card/30 rounded-lg border border-white/5 text-center">
                      No tienes borradores guardados.
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                      {drafts.map((draft) => (
                        <Card key={draft.id} className="bg-card/30 border-white/5 hover:border-primary/30 transition-colors group">
                          <CardContent className="p-4 space-y-2">
                            <div className="font-medium text-sm truncate" title={draft.title}>
                              {draft.title || "Sin título"}
                            </div>
                            <div className="text-xs text-muted-foreground truncate" title={draft.description}>
                              {draft.description || "Sin descripción"}
                            </div>
                            <div className="flex justify-between items-center pt-2">
                              <span className="text-[10px] text-muted-foreground">
                                {new Date(draft.timestamp).toLocaleDateString()}
                              </span>
                              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => loadDraft(draft)}>
                                  <FileEdit className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-6 w-6 text-red-400 hover:text-red-300" onClick={() => deleteDraft(draft.id)}>
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
