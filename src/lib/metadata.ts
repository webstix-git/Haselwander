import type { Metadata } from "next";
import { siteConfig } from "./site";

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.ogImage],
    },
  };
}

export const defaultMetadata: Metadata = {
  ...createPageMetadata({}),
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};
