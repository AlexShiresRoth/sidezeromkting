import { defineCliConfig } from "sanity/cli";

try {
  process.loadEnvFile();
} catch {
  // No .env file — rely on the shell's environment variables.
}

export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET || "production",
  },
});
