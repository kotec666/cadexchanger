import { Metadata } from "next";
import env from "../../env";

interface IMetaEnter<T> {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  alternates?: {
    canonical?: string;
    languages?: {
      [key: string]: string;
    };
  };
  openGraph?: {
    url?: string;
    image_url?: string;
    width?: number;
    height?: number;
    type?: "website" | "article" | "profile";
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
  };
  twitter?: {
    card?: "summary" | "summary_large_image" | "app" | "player";
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
    app?: {
      name: string;
      id: string;
      url: string;
    };
  };
  schema?: {
    type?: "WebSite" | "Article" | "Organization" | "Person" | "ContactPage";
    url?: string;
    additionalData?: Record<string, T>;
  };
}

export const generateBasicMetadata = <T>(meta: IMetaEnter<T>): Metadata => {
  const siteName = "Cadex";
  const defaultImage = `${env.web_url}/opengraph-image.png`;
  const defaultTwitterImage = `${env.web_url}/twitter-image.png`;

  // Basic metadata
  const metadata: Metadata = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    manifest: "/manifest.json",
    robots: meta.robots || "index, follow",
    authors: [{ name: "Cadex Team" }],
    creator: "Cadex",
    publisher: "Cadex",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    verification: {
      google: env.google_verification,
      yandex: env.yandex_verification,
    },
    category: "technology",
    alternates: {
      canonical: meta?.alternates?.canonical
        ? `${env.web_url}${meta.alternates.canonical}`
        : env.web_url,
      // languages: meta?.alternates?.languages || {
      //   "en-US": "/",
      //   // "ru-RU": "/ru-RU",
      // },
    },
  };

  // OpenGraph metadata
  metadata.openGraph = {
    title: meta.title,
    description: meta.description,
    type: meta.openGraph?.type || "website",
    url: `${env.web_url}${meta?.openGraph?.url || ""}`,
    siteName: siteName,
    images: [
      {
        url: meta.openGraph?.image_url || defaultImage,
        width: meta.openGraph?.width || 1200,
        height: meta.openGraph?.height || 630,
        alt: meta.title || "Cadex website",
      },
    ],
    locale: "en_US",
    ...(meta.openGraph?.type === "article" && {
      article: {
        publishedTime: meta.openGraph.publishedTime,
        modifiedTime: meta.openGraph.modifiedTime,
        authors: meta.openGraph.authors,
      },
    }),
  };

  // Twitter Cards metadata
  metadata.twitter = {
    card: meta.twitter?.card || "summary_large_image",
    site: meta.twitter?.site || `@${siteName}`,
    creator: meta.twitter?.creator || `@${siteName}`,
    title: meta.twitter?.title || meta.title,
    description: meta.twitter?.description || meta.description,
    images: [meta.twitter?.image || defaultTwitterImage],
    ...(meta.twitter?.app && {
      app: {
        name: meta.twitter.app.name,
        id: meta.twitter.app.id,
        url: meta.twitter.app.url,
      },
    }),
  };

  // Schema.org
  if (meta.schema) {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": meta.schema.type || "WebSite",
      name: siteName,
      url: `${env.web_url}${meta?.schema?.url || ""}`,
      ...meta.schema.additionalData,
    };

    metadata.other = {
      "application/ld+json": JSON.stringify(schemaData),
    };
  }

  return metadata;
};
