import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";

export default defineConfig({
  site: "https://davidballowe.me",
  output: "static",
  markdown: {
    processor: unified(),
  },
});
