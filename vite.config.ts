import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "~/": "/src/",
    },
  },
  plugins: [tailwindcss(), flowbiteReact()],
});
