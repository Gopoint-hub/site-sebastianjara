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

function setMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
}

export default function SEO({
  title,
  description,
  canonical,
  keywords = [],
  image = "https://sebastianjara.com/images/profile.webp",
  type = "website",
}: SEOProps) {
  const [location] = useLocation();
  const baseUrl = "https://sebastianjara.com";
  const currentUrl = canonical || `${baseUrl}${location}`;

  useEffect(() => {
    document.title = title;

    // Standard meta
    setMeta("name", "description", description);
    if (keywords.length) {
      setMeta("name", "keywords", keywords.join(", "));
    }

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", currentUrl);
    setMeta("property", "og:image", image);
    setMeta("property", "og:type", type);

    // Twitter (uses name, not property)
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:url", currentUrl);

    // Canonical link
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
