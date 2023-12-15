import { defineConfig } from "vitest/config";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  build: {
    rollupOptions: {
      external: [],
      input: "./src/index.ts",
      output: [
        {
          dir: "./dist",
          entryFileNames: "index.js",
          format: "umd",
        },
        {
          dir: "./dist",
          entryFileNames: "index.esm.js",
          format: "esm",
        },
      ],
      plugins: [],
    },
  },
});
