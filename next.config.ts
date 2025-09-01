import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    // injecte automatiquement tes variables et mixins dans tous les fichiers SCSS
    prependData: `
      @import "bases/variables";
      @import "bases/mixins";
      @import "bases/textSetup";
    `,
  },
};

export default nextConfig;
