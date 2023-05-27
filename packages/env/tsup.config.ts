import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  treeshake: true,
  splitting: true,
  clean: true,
  dts: true,
  entry: ["src/**/*.ts"],
  format: ["esm"],
  minify: isProduction,
  sourcemap: true,
});
