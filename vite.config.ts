import { defineConfig } from "vite";
import path from 'path';
import dts from "vite-plugin-dts";

console.log(path.resolve(__dirname, 'src'))

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // Specifies the entry point for building the library.
      name: "@conversu/chat", // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["es"], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "@chakra-ui/react",
        "@conversu/commons",
        "@emotion/react",
        "@emotion/styled",
        "@tanstack/react-query",
        "axios",
        "date-fns",
        "framer-motion",
        "react-helmet-async",
        "react-icons",
        "react-input-mask",
      ], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src/') },
    ],
  },
  plugins: [dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
});