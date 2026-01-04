import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "profile";
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  keywords = [], 
  image = "https://sebastianjara.com/images/profile.webp",
  type = "website"
}: SEOProps) {
  const [location] = useLocation();
  const baseUrl = "https://sebastianjara.com";
  const currentUrl = canonical || `${baseUrl}${location}`;

  useEffect(() => {
    // Update Title
    document.title = `${title} | Sebastián Jara`;

    // Update Meta Tags
    const metaTags = {
      "description": description,
      "keywords": keywords.join(", "),
      "og:title": title,
      "og:description": description,
      "og:url": currentUrl,
      "og:image": image,
      "og:type": type,
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
      "canonical": currentUrl
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      // Handle standard meta tags
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.querySelector(`meta[property="${name}"]`);
      }
      
      if (element) {
        element.setAttribute("content", content);
      } else {
        // Create if not exists (except canonical)
        if (name !== "canonical") {
          const newMeta = document.createElement("meta");
          if (name.startsWith("og:")) {
            newMeta.setAttribute("property", name);
          } else {
            newMeta.setAttribute("name", name);
          }
          newMeta.setAttribute("content", content);
          document.head.appendChild(newMeta);
        }
      }
    });

    // Handle Canonical Link
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (linkCanonical) {
      linkCanonical.setAttribute("href", currentUrl);
    } else {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      linkCanonical.setAttribute("href", currentUrl);
      document.head.appendChild(linkCanonical);
    }

  }, [title, description, currentUrl, keywords, image, type]);

  return null;
}
