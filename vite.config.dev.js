import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, "src");

const config = {
  root,
};

export default defineConfig(config);
