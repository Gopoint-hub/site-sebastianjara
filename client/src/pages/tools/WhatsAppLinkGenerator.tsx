import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MessageCircle, Copy, Check, Smartphone, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { toast } from "sonner";

// Country codes data
const countryCodes = [
  { code: "56", name: "Chile", flag: "🇨🇱" },
  { code: "54", name: "Argentina", flag: "🇦🇷" },
  { code: "591", name: "Bolivia", flag: "🇧🇴" },
  { code: "55", name: "Brasil", flag: "🇧🇷" },
  { code: "57", name: "Colombia", flag: "🇨🇴" },
  { code: "506", name: "Costa Rica", flag: "🇨🇷" },
  { code: "593", name: "Ecuador", flag: "🇪🇨" },
  { code: "503", name: "El Salvador", flag: "🇸🇻" },
  { code: "34", name: "España", flag: "🇪🇸" },
  { code: "1", name: "Estados Unidos", flag: "🇺🇸" },
  { code: "502", name: "Guatemala", flag: "🇬🇹" },
  { code: "504", name: "Honduras", flag: "🇭🇳" },
  { code: "52", name: "México", flag: "🇲🇽" },
  { code: "505", name: "Nicaragua", flag: "🇳🇮" },
  { code: "507", name: "Panamá", flag: "🇵🇦" },
  { code: "595", name: "Paraguay", flag: "🇵🇾" },
  { code: "51", name: "Perú", flag: "🇵🇪" },
  { code: "1", name: "Puerto Rico", flag: "🇵🇷" },
  { code: "1", name: "República Dominicana", flag: "🇩🇴" },
  { code: "598", name: "Uruguay", flag: "🇺🇾" },
  { code: "58", name: "Venezuela", flag: "🇻🇪" },
];

export default function WhatsAppLinkGenerator() {
  const [countryCode, setCountryCode] = useState("56");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const generateLink = () => {
    if (!phoneNumber) {
      toast.error("Por favor ingresa un número de teléfono");
      return;
    }

    // Clean phone number (remove spaces, dashes, etc)
    const cleanPhone = phoneNumber.replace(/\D/g, "");
    
    // Encode message
    const encodedMessage = encodeURIComponent(message);
    
    // Create link
    const link = `https://wa.me/${countryCode}${cleanPhone}${message ? `?text=${encodedMessage}` : ""}`;
    
    setGeneratedLink(link);
    toast.success("¡Link generado exitosamente!");
  };

  const copyToClipboard = () => {
    if (!generatedLink) return;
    
    navigator.clipboard.writeText(generatedLink);
    setIsCopied(true);
    toast.success("Link copiado al portapapeles");
    
    setTimeout(() => setIsCopied(false), 2000);
  };

  const openLink = () => {
    if (!generatedLink) return;
    window.open(generatedLink, "_blank");
  };

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-background min-h-[90vh]">
        <div className="container max-w-5xl">
          <div className="mb-8">
            <Link href="/herramientas">
              <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Herramientas
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Generador de Links <span className="text-primary">WhatsApp</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Crea enlaces directos a tu chat de WhatsApp con un mensaje personalizado. Ideal para Instagram, TikTok, o tu sitio web.
                </p>
              </div>

              <Card className="border-white/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">País</Label>
                    <Select value={countryCode} onValueChange={setCountryCode}>
                      <SelectTrigger className="h-12 bg-background/50 border-white/10">
                        <SelectValue placeholder="Selecciona un país" />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((country) => (
                          <SelectItem key={country.name} value={country.code}>
                            <span className="mr-2">{country.flag}</span> {country.name} (+{country.code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Número de Teléfono</Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-mono text-sm">
                        +{countryCode}
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="9 1234 5678"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="pl-14 h-12 bg-background/50 border-white/10 font-mono"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Ingresa el número sin el código de país.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje (Opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Hola Sebastián, me gustaría saber más sobre tus servicios..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[120px] bg-background/50 border-white/10 resize-none"
                    />
                    <p className="text-xs text-muted-foreground text-right">
                      {message.length} caracteres
                    </p>
                  </div>

                  <Button 
                    onClick={generateLink} 
                    size="lg" 
                    className="w-full h-14 text-lg font-medium"
                  >
                    Generar Link de WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Preview Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-24"
            >
              {generatedLink ? (
                <Card className="border-primary/50 bg-primary/5 overflow-hidden">
                  <CardHeader className="bg-primary/10 border-b border-primary/10 pb-4">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      ¡Tu link está listo!
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <div className="space-y-2">
                      <Label>Link Generado</Label>
                      <div className="flex gap-2">
                        <Input 
                          readOnly 
                          value={generatedLink} 
                          className="bg-background border-primary/20 font-mono text-sm h-12"
                        />
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-12 w-12 shrink-0 border-primary/20 hover:bg-primary/10"
                          onClick={copyToClipboard}
                        >
                          {isCopied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        variant="secondary" 
                        className="w-full h-12"
                        onClick={openLink}
                      >
                        Probar Link <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        className="w-full h-12"
                        onClick={copyToClipboard}
                      >
                        {isCopied ? "Copiado" : "Copiar Link"}
                      </Button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-primary/10">
                      <h4 className="text-sm font-medium mb-3 text-muted-foreground">Vista previa del mensaje:</h4>
                      <div className="bg-white dark:bg-[#0b141a] rounded-lg p-4 shadow-sm border border-border max-w-sm mx-auto relative">
                        {/* WhatsApp Chat Bubble Style */}
                        <div className="bg-[#dcf8c6] dark:bg-[#005c4b] p-3 rounded-lg rounded-tr-none inline-block relative text-black dark:text-white text-sm shadow-sm">
                          {message || "Hola..."}
                          <span className="text-[10px] text-gray-500 dark:text-gray-300 block text-right mt-1">
                            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="hidden lg:flex flex-col items-center justify-center h-[500px] border-2 border-dashed border-white/10 rounded-2xl bg-white/5 p-8 text-center">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <Smartphone className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Vista Previa</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Completa el formulario para generar tu enlace y ver cómo lucirá el mensaje.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
