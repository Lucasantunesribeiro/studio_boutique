import { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_INFO.name,
    short_name: "Studio Boutique",
    description: BUSINESS_INFO.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
