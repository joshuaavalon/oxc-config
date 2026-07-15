import { defineConfig } from "oxfmt";

const cfg = defineConfig({
  ignorePatterns: [],
  arrowParens: "avoid",
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  insertFinalNewline: true,
  jsdoc: {
    addDefaultToDescription: true,
    bracketSpacing: false,
    capitalizeDescriptions: true,
    commentLineStrategy: "keep",
    descriptionTag: false,
    descriptionWithDot: false,
    keepUnparsableExampleIndent: false,
    lineWrappingStyle: "greedy",
    preferCodeFences: false,
    separateReturnsFromParam: false,
    separateTagGroups: false
  },
  jsxSingleQuote: false,
  objectWrap: "preserve",
  printWidth: 100,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  semi: true,
  singleAttributePerLine: true,
  singleQuote: false,
  sortImports: {
    customGroups: [],
    groups: [
      "builtin",
      "external",
      "internal",
      "parent",
      "sibling",
      // "side-effect",
      "index",
      // "side-effect-style",
      "type-builtin",
      "type-external",
      "type-internal",
      "type-parent",
      "type-sibling",
      "type-index",
      "unknown"
    ],
    ignoreCase: true,
    internalPattern: ["^~/.+", "^@/.+", "^#.+", "^#.*/.*"],
    newlinesBetween: false,
    order: "asc",
    partitionByComment: false,
    partitionByNewline: false,
    sortSideEffects: false
  },
  sortPackageJson: {
    sortScripts: true
  },
  sortTailwindcss: false,
  svelte: false,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false,
  vueIndentScriptAndStyle: false
});

export default cfg;
