import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    port: 9005,
  },
  resolve: {
    alias: {
      // {
      //   find: "@",
      //   replacement: __dirname,
      // },
      assets: path.resolve(__dirname, "./src/assets"),
      helpers: path.resolve(__dirname, "./src/helpers"),
      utils: path.resolve(__dirname, "./src/utils"),
      views: path.resolve(__dirname, "./src/views"),
      "redux-app": path.resolve(__dirname, "./src/redux-app"),
    },
  },
  plugins: [react()],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
