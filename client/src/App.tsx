import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Method from "./pages/Method";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import WhatsAppLinkGenerator from "./pages/tools/WhatsAppLinkGenerator";
import PacingCalculator from "./pages/tools/PacingCalculator";
import WordCounter from "./pages/tools/WordCounter";
import SEOCounter from "./pages/tools/SEOCounter";
import UTMGenerator from "./pages/tools/UTMGenerator";
import ScrollToTop from "./components/ScrollToTop";


// Componente para manejar redirecciones de URLs antiguas
function LegacyRedirects() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const legacyPaths = [
      "/blog",
      "/consultor-de-marketing-digital",
      "/consultor-de-marketing-digital/",
      "/blog/ai-agency-lo-nuevo-para-el-2025/"
    ];

    // Verificar si la ruta actual comienza con alguna de las rutas antiguas
    const shouldRedirect = legacyPaths.some(path => location.startsWith(path));

    if (shouldRedirect) {
      setLocation("/");
    }
  }, [location, setLocation]);

  return null;
}
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <ScrollToTop />
      <LegacyRedirects />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/sobre-mi"} component={About} />
        <Route path={"/metodo"} component={Method} />
        <Route path={"/contacto"} component={Contact} />
        <Route path={"/herramientas"} component={Tools} />
        <Route path={"/herramientas/whatsapp-link-generator"} component={WhatsAppLinkGenerator} />
        <Route path={"/herramientas/pacing-calculator"} component={PacingCalculator} />
        <Route path={"/herramientas/word-counter"} component={WordCounter} />
        <Route path={"/herramientas/seo-counter"} component={SEOCounter} />
        <Route path={"/herramientas/utm-generator"} component={UTMGenerator} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
