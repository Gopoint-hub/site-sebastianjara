import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MessageCircle, Check, ArrowLeft, Copy } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { toast } from "sonner";
import SEO from "@/components/SEO";

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
  const [isCopied, setIsCopied] = useState(false);

  const generateAndCopyLink = () => {
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
    
    // Copy to clipboard
    navigator.clipboard.writeText(link);
    setIsCopied(true);
    toast.success("¡Link generado y copiado al portapapeles!");
    
    // Reset button state after 3 seconds
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <Layout>
      <SEO 
        title="Generador de Links de WhatsApp"
        description="Crea enlaces personalizados de WhatsApp con mensaje predefinido. Herramienta gratuita ideal para Instagram, TikTok y campañas de marketing."
        keywords={["Generador WhatsApp", "Link WhatsApp", "WhatsApp API", "Marketing Tools", "Chile", "Latam"]}
      />
      <section className="py-12 md:py-20 bg-background min-h-[90vh] flex flex-col">
        <div className="container max-w-2xl mx-auto flex-1 flex flex-col justify-center">
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
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Generador de Links <span className="text-primary">WhatsApp</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                Crea enlaces directos a tu chat de WhatsApp en segundos. Sin registros, rápido y gratis.
              </p>
            </div>

            <Card className="border-white/10 bg-card/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="pt-8 pb-8 px-6 md:px-10 space-y-8">
                
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-base font-medium">Número de WhatsApp</Label>
                  <div className="flex gap-3">
                    <div className="w-[140px] shrink-0">
                      <Select value={countryCode} onValueChange={setCountryCode}>
                        <SelectTrigger className="h-14 bg-background/50 border-white/10 text-base">
                          <SelectValue placeholder="País" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                          {countryCodes.map((country) => (
                            <SelectItem key={country.name} value={country.code}>
                              <span className="mr-2 text-lg">{country.flag}</span> +{country.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="9 1234 5678"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="h-14 bg-background/50 border-white/10 font-mono text-lg"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Ingresa el número sin el código de país (+{countryCode}).</p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-base font-medium">Mensaje personalizado (Opcional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Hola, me gustaría más información..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[120px] bg-background/50 border-white/10 resize-none text-base leading-relaxed"
                  />
                </div>

                <Button 
                  onClick={generateAndCopyLink} 
                  size="lg" 
                  className={`w-full h-16 text-lg font-bold transition-all duration-300 ${
                    isCopied 
                      ? "bg-green-600 hover:bg-green-700 text-white" 
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="mr-2 h-6 w-6" /> ¡Link Copiado!
                    </>
                  ) : (
                    <>
                      Generar y Copiar Link <Copy className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

              </CardContent>
            </Card>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                ¿Necesitas ayuda con automatizaciones más complejas? <br/>
                <a href="/#contact" className="text-primary hover:underline">Contáctame para una consultoría.</a>
              </p>
            </div>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
