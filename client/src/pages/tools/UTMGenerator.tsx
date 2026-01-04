import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Link as LinkIcon, Copy, Check, RefreshCw } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function UTMGenerator() {
  const [url, setUrl] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState("");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [copied, setCopied] = useState(false);

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
      // Invalid URL, don't generate
      setGeneratedUrl("");
    }
  }, [url, source, medium, campaign, term, content]);

  const copyToClipboard = () => {
    if (!generatedUrl) return;
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    toast.success("Enlace copiado al portapapeles");
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
              <Button variant="outline" onClick={resetForm} className="hidden md:flex">
                <RefreshCw className="mr-2 h-4 w-4" /> Limpiar
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Column */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-card/50 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="url" className="text-base font-bold">URL del Sitio Web *</Label>
                      <Input 
                        id="url" 
                        placeholder="https://tusitio.com/landing-page" 
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="h-12 bg-background/50"
                      />
                      <p className="text-xs text-muted-foreground">La página a la que quieres enviar tráfico.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="source" className="font-medium">Fuente (Source) *</Label>
                        <Input 
                          id="source" 
                          placeholder="google, newsletter, facebook" 
                          value={source}
                          onChange={(e) => setSource(e.target.value)}
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="medium" className="font-medium">Medio (Medium) *</Label>
                        <Input 
                          id="medium" 
                          placeholder="cpc, email, social" 
                          value={medium}
                          onChange={(e) => setMedium(e.target.value)}
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="campaign" className="font-medium">Nombre de Campaña (Campaign) *</Label>
                      <Input 
                        id="campaign" 
                        placeholder="lanzamiento_verano, black_friday" 
                        value={campaign}
                        onChange={(e) => setCampaign(e.target.value)}
                        className="bg-background/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="term" className="font-medium">Término (Term) <span className="text-muted-foreground font-normal text-xs">(Opcional)</span></Label>
                        <Input 
                          id="term" 
                          placeholder="zapatillas_running" 
                          value={term}
                          onChange={(e) => setTerm(e.target.value)}
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="content" className="font-medium">Contenido (Content) <span className="text-muted-foreground font-normal text-xs">(Opcional)</span></Label>
                        <Input 
                          id="content" 
                          placeholder="boton_header, banner_lateral" 
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
