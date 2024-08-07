import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "react-to-ui",
  },
  external: ["react", "next/link"],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    postcss({
      extract: true, 
      minimize: true,
      plugins: [tailwindcss(), autoprefixer()],
    }),
  ],
});
