import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Golden Key Ventures",
    short_name: "GKV",
    description: "From concept to completion, Golden Key Ventures delivers high-quality construction, design, and renovation solutions in Mysore.",
    start_url: "/",
    display: "standalone",
    background_color: "#050b14",
    theme_color: "#ffd700",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
