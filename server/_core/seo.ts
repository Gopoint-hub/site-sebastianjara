import type { Request, Response, NextFunction } from "express";

const BASE_URL = "https://sebastianjara.com";

/**
 * 301 redirect map for legacy/defunct URLs.
 * These used to be client-side redirects via wouter; now they are
 * proper HTTP 301s so search engines update their index.
 */
const redirectMap: Record<string, string> = {
  "/contacto": "/aplicar",
  "/blog": "/",
  "/blog/ai-agency-lo-nuevo-para-el-2025/": "/",
  "/consultor-de-marketing-digital": "/",
  "/consultor-de-marketing-digital/": "/",
  "/herramientas": "/",
  "/herramientas/whatsapp-link-generator": "/",
};

export function seoRedirects(req: Request, res: Response, next: NextFunction) {
  const path = req.path;

  // Exact match
  if (redirectMap[path]) {
    return res.redirect(301, redirectMap[path]);
  }

  // Prefix match for /blog/* and /herramientas/*
  if (path.startsWith("/blog/") || path.startsWith("/herramientas/")) {
    return res.redirect(301, "/");
  }

  next();
}

/**
 * Redirect www to non-www at the server level (proper 301).
 * This replaces the client-side JS redirect in index.html.
 */
export function wwwRedirect(req: Request, res: Response, next: NextFunction) {
  const host = req.hostname;
  if (host.startsWith("www.")) {
    const newHost = host.slice(4);
    return res.redirect(301, `${req.protocol}://${newHost}${req.originalUrl}`);
  }
  next();
}

/**
 * Per-route SEO metadata for server-side meta tag injection.
 * This ensures crawlers (Google, Bing, AI) see unique title/description
 * per page even though this is a SPA.
 */
interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
}

const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title:
      "Sebastián Jara | Consultor de Marketing Digital y Estrategia de Negocios",
    description:
      "Dirección estratégica para negocios que ya venden. Consultoría en marketing digital, automatización e inteligencia artificial aplicada. Más de 15 años de experiencia.",
    canonical: `${BASE_URL}/`,
  },
  "/sobre-mi": {
    title:
      "Sebastián Jara | Consultor de Marketing Digital con 15+ Años de Experiencia",
    description:
      "Consultor de marketing digital y estrategia de negocios con más de 15 años de experiencia. Fundador de GoPoint Agency. Asesoría en Chile, Perú, Colombia, México y Estados Unidos.",
    canonical: `${BASE_URL}/sobre-mi`,
    ogType: "profile",
  },
  "/metodo": {
    title: "Método de Trabajo | Consultoría Estratégica de Negocios",
    description:
      "Método de consultoría basado en diagnóstico real, priorización estratégica, dirección clara e intervención puntual. Claridad antes que acción, decisión antes que ejecución.",
    canonical: `${BASE_URL}/metodo`,
  },
  "/con-quien-trabajo": {
    title: "Con quién trabajo | Consultoría para Empresas B2B y E-commerce",
    description:
      "Trabajo con empresas de servicios B2B, e-commerce con tracción y negocios de conocimiento que ya generan ingresos y necesitan dirección estratégica para escalar.",
    canonical: `${BASE_URL}/con-quien-trabajo`,
  },
  "/aplicar": {
    title:
      "Solicitar Evaluación | Consultoría Estratégica de Marketing Digital",
    description:
      "Solicita una evaluación para determinar si podemos trabajar juntos. Proceso selectivo para negocios que ya venden y buscan dirección estratégica.",
    canonical: `${BASE_URL}/aplicar`,
  },
};

/**
 * Inject per-route meta tags into the index.html template.
 * Replaces the default <title>, meta description, OG tags, and canonical
 * URL with route-specific values so crawlers index each page correctly.
 */
export function injectSeoMeta(html: string, url: string): string {
  // Normalize URL: strip query string and trailing slash (except root)
  const cleanUrl = url.split("?")[0].replace(/\/$/, "") || "/";
  const meta = routeMeta[cleanUrl];
  if (!meta) return html;

  const fullTitle = `${meta.title} | Sebastián Jara`;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${fullTitle}</title>`,
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`,
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${meta.title}"`,
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${meta.description}"`,
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${meta.canonical}"`,
  );
  if (meta.ogType) {
    html = html.replace(
      /<meta property="og:type" content="[^"]*"/,
      `<meta property="og:type" content="${meta.ogType}"`,
    );
  }

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${meta.title}"`,
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${meta.description}"`,
  );
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*"/,
    `<meta name="twitter:url" content="${meta.canonical}"`,
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${meta.canonical}"`,
  );

  return html;
}
