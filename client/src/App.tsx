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
import ConQuienTrabajo from "./pages/ConQuienTrabajo";
import Aplicar from "./pages/Aplicar";
import ScrollToTop from "./components/ScrollToTop";


// Componente para manejar redirecciones de URLs antiguas
function LegacyRedirects() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const legacyPaths = [
      "/blog",
      "/consultor-de-marketing-digital",
      "/consultor-de-marketing-digital/",
      "/blog/ai-agency-lo-nuevo-para-el-2025/",
      "/herramientas",
      "/contacto"
    ];

    // Verificar si la ruta actual comienza con alguna de las rutas antiguas
    const shouldRedirect = legacyPaths.some(path => location.startsWith(path));

    if (shouldRedirect) {
      if (location === "/contacto") {
        setLocation("/aplicar");
      } else {
        setLocation("/");
      }
    }
  }, [location, setLocation]);

  return null;
}
function Router() {
  return (
    <>
      <ScrollToTop />
      <LegacyRedirects />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/con-quien-trabajo"} component={ConQuienTrabajo} />
        <Route path={"/metodo"} component={Method} />
        <Route path={"/sobre-mi"} component={About} />
        <Route path={"/aplicar"} component={Aplicar} />
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
