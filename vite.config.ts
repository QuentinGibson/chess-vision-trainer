import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss(),
    Icons({
      iconCustomizer(collection, icon, props) {
        if (collection === "carbon" && icon === "checkmark-outline") {
          props.color = "green";
        }
        if (collection === "carbon" && icon === "close-outline") {
          props.color = "red";
        }
      },
      compiler: "jsx",
      jsx: "react",
    }),
  ],
});
