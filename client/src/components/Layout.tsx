import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029Vb5wwAFJZg48RGccvJ0x";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Mentoría", href: "/mentoria" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Postular", href: "/postular" },
  ];

  const scrollToSection = (href: string) => {
    if (location === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="block hover:opacity-80 transition-opacity">
            <img src="/images/logo-dark.png" alt="Sebastián Jara" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "text-sm font-medium hover:text-foreground transition-colors cursor-pointer",
                    location === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}

            <Link href="/postular">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full px-5"
              >
                Postular
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-lg">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  onClick={() => scrollToSection(item.href)}
                  className="border-b border-border/50 pb-4 font-medium cursor-pointer block"
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <img src="/images/logo-dark.png" alt="Sebastián Jara" className="h-6 w-auto mb-4 opacity-60" />
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Sebastián Jara. Todos los derechos reservados.
              </p>
            </div>

            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="https://www.youtube.com/@sebastianjaracom" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                YouTube
              </a>
              <a href="https://www.tiktok.com/@sebastianjara.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                TikTok
              </a>
              <a href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                WhatsApp
              </a>
              <a href="https://www.linkedin.com/in/sebastianjarabravo/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
