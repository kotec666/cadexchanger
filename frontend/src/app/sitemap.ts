import { MetadataRoute } from "next";
import { LINKS } from "@/consts/links";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://aleksey-kotov.ru/";
  const lastModified = "2025-04-16"; // yyyy-mm-DD

  return [
    {
      url: `${baseUrl}/`, // home page
      lastModified: lastModified,
      priority: 1.0,
    },
    {
      url: `${baseUrl}${LINKS.CONTACTS}`, // contacts page
      lastModified: lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
