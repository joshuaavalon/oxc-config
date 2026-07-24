import { defineConfig } from "oxlint";

export const importCfg = defineConfig({
  plugins: ["import"],
  rules: {
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/default": ["error"],
    "import/export": ["error"],
    "import/exports-last": ["off"],
    // False Positive
    "import/extensions": ["off"],
    // "import/extensions": ["error", "ignorePackages"],
    "import/group-exports": ["off"],
    "import/max-dependencies": ["off"],
    "import/named": ["error"],
    "import/namespace": ["error"],
    "import/newline-after-import": ["error"],
    "import/no-absolute-path": ["error"],
    "import/no-amd": ["error"],
    "import/no-anonymous-default-export": ["error"],
    "import/no-commonjs": ["error"],
    "import/no-cycle": ["error"],
    "import/no-default-export": ["off"],
    "import/no-duplicates": ["error"],
    "import/no-dynamic-require": ["error"],
    "import/no-empty-named-blocks": ["error"],
    "import/no-mutable-exports": ["error"],
    "import/no-named-as-default": ["off"],
    "import/no-named-as-default-member": ["off"], // Broken package
    "import/no-named-default": ["error"],
    "import/no-named-export": ["off"],
    "import/no-namespace": ["off"],
    "import/no-nodejs-modules": ["off"],
    "import/no-relative-parent-imports": ["off"],
    "import/no-self-import": ["error"],
    "import/no-unassigned-import": ["off"],
    "import/no-webpack-loader-syntax": ["error"],
    "import/prefer-default-export": ["off"],
    "import/unambiguous": ["off"]
  }
});
