import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/agents",
  "/services",
  "/residential",
  "/residential/princeton-valley",
  "/residential/woodhaven",
  "/residential/peterson",
  "/residential/hillcrest",
  "/residential/hwy-p",
  "/residential/wakanda-shores",
  "/commercial",
  "/commercial/melby",
  "/office-space",
  "/office-space/3603-n-hastings-way",
  "/office-space/3615-n-hastings-way",
  "/investment",
  "/investment/meadows",
  "/gallery",
  "/map-search",
  "/contact",
  "/thank-you",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
