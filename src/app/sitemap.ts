import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shreelabhconsultancy.com";
  const routes = [
    "",
    "/about",
    "/contact",
    "/income-tax-return",
    "/gst-services",
    "/home-loan",
    "/mortgage-loan",
    "/business-loan",
    "/revenue-work",
    "/legal-documentation",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
