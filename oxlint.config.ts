import { defineConfig } from "oxlint";
import { eslint, typescript, oxc, unicorn, importCfg } from "./dist/lint/index.js";

export default defineConfig({
  extends: [eslint, typescript, oxc, unicorn, importCfg],
  ignorePatterns: ["node_modules", "dist"],
  categories: {
    correctness: "error"
  },
  env: {
    builtin: true,
    es2025: true,
    node: true
  },
  options: {
    typeAware: true
  }
});
