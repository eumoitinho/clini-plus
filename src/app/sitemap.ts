import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://cliniplus.com.br/", lastModified: new Date() },
    { url: "https://cliniplus.com.br/sobre", lastModified: new Date() },
    { url: "https://cliniplus.com.br/planos", lastModified: new Date() },
    { url: "https://cliniplus.com.br/contato", lastModified: new Date() },
    { url: "https://cliniplus.com.br/faq", lastModified: new Date() },
    { url: "https://cliniplus.com.br/termos", lastModified: new Date() },
    { url: "https://cliniplus.com.br/privacidade", lastModified: new Date() }
  ];
}
