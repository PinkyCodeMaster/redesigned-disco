import starlight from "@astrojs/starlight";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Athena Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/your-repo/athena", // Update with your repository link
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            { label: "Example Guide", slug: "guides/example" },
            { label: "Getting Started", slug: "guides/getting-started" }, // Add new guides here
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" }, // Generates docs from files in the reference directory
        },
        {
          label: "API",
          items: [
            { label: "Authentication", slug: "api/authentication" },
            { label: "Database Setup", slug: "api/database-setup" },
            // Add other API docs here
          ],
        },
      ],
    }),
  ],
});
