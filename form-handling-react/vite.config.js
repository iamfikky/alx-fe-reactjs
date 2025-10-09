import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // ✅ tell React plugin to parse JSX in .js files too
    react({
      babel: {
        presets: ["@babel/preset-react"],
      },
      include: "**/*.{js,jsx}",
    }),
    tailwindcss(),
  ],
});
