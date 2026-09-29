// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";

// Astro config runs before Vite loads .env, so read it ourselves.
try {
  process.loadEnvFile();
} catch {
  // No .env file — rely on the host's environment variables.
}
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = process.env;

// https://astro.build/config
export default defineConfig({
  site: "https://side0.com",
  integrations: [
    sanity({
      // Placeholder keeps the build working before a Sanity project exists;
      // src/lib/content.ts falls back to local defaults in that case.
      projectId: PUBLIC_SANITY_PROJECT_ID || "placeholder",
      dataset: PUBLIC_SANITY_DATASET || "production",
      // Static build: always read fresh content at build time.
      useCdn: false,
      apiVersion: "2025-01-01",
      studioBasePath: "/studio",
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
