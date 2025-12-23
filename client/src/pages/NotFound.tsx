import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowRight, Search, FileQuestion } from "lucide-react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  const usefulLinks = [
    { label: "Sobre mí", id: "about" },
    { label: "Enfoque", id: "focus" },
    { label: "Método", id: "method" },
    { label: "Recursos", id: "resources" }
  ];

  const handleNavigate = (id: string) => {
    setLocation("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Layout>
      <div className="min-h-[80vh] w-full flex items-center justify-center bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg-orange.png')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <FileQuestion className="relative h-24 w-24 text-primary" />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-4 tracking-tighter">
              404
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Página no encontrada
            </h2>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-lg mx-auto">
              Parece que has llegado a un punto ciego en la estrategia. 
              La página que buscas no existe o ha sido movida.
            </p>

            <div className="grid gap-6 mb-10">
              <p className="text-sm font-mono text-primary uppercase tracking-wider">
                SECCIONES ÚTILES
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {usefulLinks.map((link) => (
                  <Button
                    key={link.id}
                    variant="outline"
                    className="border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all"
                    onClick={() => handleNavigate(link.id)}
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleGoHome}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-12 text-lg shadow-lg shadow-primary/20"
            >
              <Home className="w-5 h-5 mr-2" />
              Volver al Inicio
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
