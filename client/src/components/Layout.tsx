import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Sobre mí", href: "#about" },
    { label: "Enfoque", href: "#focus" },
    { label: "Proyectos", href: "#projects" },
    { label: "Recursos", href: "#resources" },
    { label: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    } else if (id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <a className="text-xl font-display font-bold tracking-tighter hover:text-primary transition-colors">
              SEBASTIAN<span className="text-primary">JARA</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors relative group",
                  location === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <Button 
              variant="outline" 
              className="ml-4 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-mono text-xs"
              onClick={() => window.open("https://gopointagency.com", "_blank")}
            >
              GOPOINT AGENCY <ArrowUpRight className="ml-2 h-3 w-3" />
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="border-b border-white/10 pb-4 font-display font-medium"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://gopointagency.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 flex items-center text-primary font-mono"
            >
              VISITAR GOPOINT AGENCY <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-card py-12 md:py-16">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">
              SEBASTIAN<span className="text-primary">JARA</span>
            </h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Consultor experto en marketing digital y automatización con inteligencia artificial.
              Transformando negocios mediante datos y sistemas escalables.
            </p>
            <div className="flex gap-4">
              {/* Social Links placeholders */}
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-sm text-primary mb-4 uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm text-primary mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacidad</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Términos</a></li>
            </ul>
            <div className="mt-8 pt-4 border-t border-white/5">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Sebastián Jara. <br/>Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
