import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { name } from "./package.json";
import tailwindcss from "tailwindcss";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    tsconfigPaths({
      root: __dirname,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name,
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
      plugins: [
        {
          name: "exclude-stories",
          resolveId(source) {
            if (source.match(/\.stories\./) || source.endsWith(".mdx")) {
              return false;
            }
            return null;
          },
        },
      ],
    },
  },
});
