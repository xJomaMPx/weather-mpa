import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const input = {
  index: resolve(root, "index.html"),
  about: resolve(root, "about.html"),
};
const outDir = resolve(__dirname, "dist");

const config = {
  root,
  base: "./",
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input,
    },
    outDir,
  },
  appType: "mpa",
};

export default defineConfig(config);
