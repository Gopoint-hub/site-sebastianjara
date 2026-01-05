import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Link as LinkIcon, Copy, Check, RefreshCw, Download, History, HelpCircle, Trash2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface UTMHistoryItem {
  url: string;
  source: string;
  medium: string;
  campaign: string;
  generatedUrl: string;
  timestamp: number;
}

export default function UTMGenerator() {
  const [url, setUrl] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState("");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<UTMHistoryItem[]>([]);

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("utm_history");
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Error parsing history", e);
      }
    }
  }, []);

  useEffect(() => {
    if (!url) {
      setGeneratedUrl("");
      return;
    }

    try {
      const baseUrl = url.startsWith("http") ? url : `https://${url}`;
      const urlObj = new URL(baseUrl);
      
      if (source) urlObj.searchParams.set("utm_source", source);
      if (medium) urlObj.searchParams.set("utm_medium", medium);
      if (campaign) urlObj.searchParams.set("utm_campaign", campaign);
      if (term) urlObj.searchParams.set("utm_term", term);
      if (content) urlObj.searchParams.set("utm_content", content);

      setGeneratedUrl(urlObj.toString());
    } catch (e) {
      setGeneratedUrl("");
    }
  }, [url, source, medium, campaign, term, content]);

  const addToHistory = (finalUrl: string) => {
    const newItem: UTMHistoryItem = {
      url,
      source,
      medium,
      campaign,
      generatedUrl: finalUrl,
      timestamp: Date.now()
    };

    const newHistory = [newItem, ...history].slice(0, 5); // Keep last 5
    setHistory(newHistory);
    localStorage.setItem("utm_history", JSON.stringify(newHistory));
  };

  const copyToClipboard = () => {
    if (!generatedUrl) return;
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    toast.success("Enlace copiado al portapapeles");
    addToHistory(generatedUrl);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setUrl("");
    setSource("");
    setMedium("");
    setCampaign("");
    setTerm("");
    setContent("");
    setGeneratedUrl("");
  };

  const exportHistory = () => {
    if (history.length === 0) {
      toast.error("No hay historial para exportar");
      return;
    }

    const csvContent = "data:text/csv;charset=utf-8," 
      + "URL Original,Source,Medium,Campaign,URL Generada,Fecha\n"
      + history.map(item => {
          const date = new Date(item.timestamp).toLocaleDateString();
          return `"${item.url}","${item.source}","${item.medium}","${item.campaign}","${item.generatedUrl}","${date}"`;
        }).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "utm_history.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Historial exportado correctamente");
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("utm_history");
    toast.success("Historial borrado");
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
        title="Generador de UTMs para Tracking"
        description="Crea enlaces con parámetros UTM para rastrear tus campañas de marketing en Google Analytics. Estandariza tus fuentes de tráfico."
        keywords={["Generador UTM", "UTM Builder", "Tracking Link", "Google Analytics", "Marketing Digital"]}
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
            <div className="mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <LinkIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-display font-bold">
                    Generador de <span className="text-primary">UTMs</span>
                  </h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Etiqueta tus enlaces para medir el éxito de tus campañas en Analytics.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={resetForm} className="hidden md:flex">
                  <RefreshCw className="mr-2 h-4 w-4" /> Limpiar
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Column */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-card/50 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="url" className="text-base font-bold flex items-center">
                        URL del Sitio Web *
                        <InfoTooltip content="La página de destino a la que quieres enviar a los usuarios (ej: tu landing page)." />
                      </Label>
                      <Input 
                        id="url" 
                        placeholder="https://tusitio.com/landing-page" 
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="h-12 bg-background/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="source" className="font-medium flex items-center">
                          Fuente (Source) *
                          <InfoTooltip content="El origen del tráfico. Ejemplos: google, facebook, newsletter, linkedin." />
                        </Label>
                        <Input 
                          id="source" 
                          placeholder="google" 
                          value={source}
                          onChange={(e) => setSource(e.target.value)}
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="medium" className="font-medium flex items-center">
                          Medio (Medium) *
                          <InfoTooltip content="El medio de marketing. Ejemplos: cpc, email, social, organic, referral." />
                        </Label>
                        <Input 
                          id="medium" 
                          placeholder="cpc" 
                          value={medium}
                          onChange={(e) => setMedium(e.target.value)}
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="campaign" className="font-medium flex items-center">
                        Nombre de Campaña (Campaign) *
                        <InfoTooltip content="El nombre específico de tu promoción o campaña. Ej: lanzamiento_verano, black_friday_2024." />
                      </Label>
                      <Input 
                        id="campaign" 
                        placeholder="lanzamiento_verano" 
                        value={campaign}
                        onChange={(e) => setCampaign(e.target.value)}
                        className="bg-background/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="term" className="font-medium flex items-center">
                          Término (Term) <span className="text-muted-foreground font-normal text-xs ml-1">(Opcional)</span>
                          <InfoTooltip content="Usado en búsquedas pagadas para identificar las palabras clave." />
                        </Label>
                        <Input 
                          id="term" 
                          placeholder="zapatillas_running" 
                          value={term}
                          onChange={(e) => setTerm(e.target.value)}
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="content" className="font-medium flex items-center">
                          Contenido (Content) <span className="text-muted-foreground font-normal text-xs ml-1">(Opcional)</span>
                          <InfoTooltip content="Para diferenciar anuncios o enlaces que apuntan a la misma URL. Ej: logo_link vs text_link." />
                        </Label>
                        <Input 
                          id="content" 
                          placeholder="boton_header" 
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* History Section */}
                {history.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        <History className="h-5 w-5 text-primary" /> Historial Reciente
                      </h3>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={clearHistory} className="text-red-400 hover:text-red-300 hover:bg-red-400/10">
                          <Trash2 className="h-4 w-4 mr-2" /> Borrar
                        </Button>
                        <Button variant="outline" size="sm" onClick={exportHistory}>
                          <Download className="h-4 w-4 mr-2" /> Exportar CSV
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {history.map((item, idx) => (
                        <div key={idx} className="bg-card/30 border border-white/5 p-3 rounded-lg flex justify-between items-center text-sm">
                          <div className="truncate max-w-[70%]">
                            <div className="font-medium text-foreground truncate">{item.campaign}</div>
                            <div className="text-xs text-muted-foreground truncate">{item.generatedUrl}</div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => {
                              navigator.clipboard.writeText(item.generatedUrl);
                              toast.success("Copiado del historial");
                            }}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Result Column */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <Card className="bg-primary/5 border-primary/20 overflow-hidden">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        <LinkIcon className="h-5 w-5 text-primary" /> Tu Enlace Generado
                      </h3>
                      
                      <div className="bg-background/80 p-4 rounded-lg border border-white/10 min-h-[100px] break-all text-sm font-mono text-muted-foreground">
                        {generatedUrl || "Completa los campos para generar tu enlace..."}
                      </div>

                      <Button 
                        className="w-full h-12 text-base font-bold" 
                        disabled={!generatedUrl}
                        onClick={copyToClipboard}
                      >
                        {copied ? (
                          <>
                            <Check className="mr-2 h-5 w-5" /> ¡Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="mr-2 h-5 w-5" /> Copiar Enlace
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>

                  <div className="text-sm text-muted-foreground p-4 bg-card/30 rounded-lg border border-white/5">
                    <h4 className="font-bold text-foreground mb-2">Tips Pro:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Usa minúsculas siempre.</li>
                      <li>Evita espacios, usa guiones bajos (_).</li>
                      <li>Sé consistente con tus nombres.</li>
                    </ul>
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
