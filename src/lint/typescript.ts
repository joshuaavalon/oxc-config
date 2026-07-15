import { defineConfig } from "oxlint";

export const typescript = defineConfig({
  plugins: ["typescript"],
  rules: {
    "typescript/adjacent-overload-signatures": ["error"],
    "typescript/array-type": ["error", { default: "array" }],
    "typescript/await-thenable": ["error"],
    "typescript/ban-ts-comment": [
      "error",
      {
        minimumDescriptionLength: 3,
        "ts-check": "allow-with-description",
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description"
      }
    ],
    "typescript/ban-tslint-comment": ["error"],
    "typescript/class-literal-property-style": ["off"],
    "typescript/class-methods-use-this": ["off"],
    "typescript/consistent-generic-constructors": ["error"],
    "typescript/consistent-indexed-object-style": ["error", "record"],
    "typescript/consistent-return": ["off"],
    "typescript/consistent-type-assertions": ["off"],
    "typescript/consistent-type-definitions": ["off"],
    "typescript/consistent-type-exports": ["error"],
    "typescript/consistent-type-imports": ["error"],
    "typescript/default-param-last": ["error"],
    "typescript/dot-notation": ["error"],
    "typescript/explicit-function-return-type": [
      "error",
      {
        allowDirectConstAssertionInArrowFunctions: true,
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true
      }
    ],
    "typescript/explicit-member-accessibility": ["error"],
    "typescript/explicit-module-boundary-types": ["error"],
    "typescript/init-declarations": ["off"],
    // "typescript/member-ordering": ["off"],
    "typescript/method-signature-style": ["off"],
    // "typescript/naming-convention": [
    //   "error",
    //   {
    //     "format": ["camelCase"],
    //     "leadingUnderscore": "allow",
    //     "selector": "default"
    //   },
    //   {
    //     "format": ["camelCase", "UPPER_CASE", "PascalCase"],
    //     "leadingUnderscore": "allow",
    //     "selector": "variable"
    //   },
    //   {
    //     "format": ["PascalCase"],
    //     "selector": "typeLike"
    //   },
    //   {
    //     "format": ["camelCase", "PascalCase"],
    //     "selector": "import"
    //   },
    //   {
    //     "format": ["camelCase", "PascalCase"],
    //     "selector": "function"
    //   },
    //   {
    //     "format": null,
    //     "modifiers": ["destructured"],
    //     "selector": "variable"
    //   },
    //   {
    //     "format": null,
    //     "selector": "objectLiteralProperty"
    //   }
    // ],
    "typescript/no-array-constructor": ["error"],
    "typescript/no-array-delete": ["error"],
    "typescript/no-base-to-string": ["error"],
    "typescript/no-confusing-non-null-assertion": ["error"],
    "typescript/no-confusing-void-expression": ["error"],
    "typescript/no-deprecated": ["error"],
    "typescript/no-dupe-class-members": ["off"],
    "typescript/no-duplicate-enum-values": ["error"],
    "typescript/no-duplicate-type-constituents": ["error"],
    "typescript/no-dynamic-delete": ["error"],
    "typescript/no-empty-function": ["error"],
    "typescript/no-empty-object-type": [
      "error",
      {
        allowInterfaces: "always",
        allowObjectTypes: "always"
      }
    ],
    "typescript/no-explicit-any": ["off"],
    "typescript/no-extra-non-null-assertion": ["error"],
    "typescript/no-extraneous-class": ["error"],
    "typescript/no-floating-promises": ["off"],
    "typescript/no-for-in-array": ["error"],
    "typescript/no-implied-eval": ["error"],
    "typescript/no-import-type-side-effects": ["error"],
    "typescript/no-inferrable-types": ["error"],
    "typescript/no-invalid-void-type": ["error", { allowAsThisParameter: true }],
    "typescript/no-loop-func": ["error"],
    "typescript/no-magic-numbers": ["off"],
    "typescript/no-meaningless-void-operator": ["error"],
    "typescript/no-misused-new": ["error"],
    "typescript/no-misused-promises": ["error", { checksVoidReturn: false }],
    "typescript/no-misused-spread": ["error"],
    "typescript/no-mixed-enums": ["error"],
    "typescript/no-namespace": ["error"],
    "typescript/no-non-null-asserted-nullish-coalescing": ["error"],
    "typescript/no-non-null-asserted-optional-chain": ["error"],
    "typescript/no-non-null-assertion": ["error"],
    "typescript/no-redeclare": ["off"],
    "typescript/no-redundant-type-constituents": ["error"],
    "typescript/no-require-imports": ["error"],
    "typescript/no-restricted-imports": ["off"],
    "typescript/no-restricted-types": ["off"],
    "typescript/no-shadow": ["off"],
    "typescript/no-this-alias": ["error"],
    "typescript/no-unnecessary-boolean-literal-compare": ["error"],
    "typescript/no-unnecessary-condition": ["error"],
    "typescript/no-unnecessary-parameter-property-assignment": ["error"],
    "typescript/no-unnecessary-qualifier": ["error"],
    "typescript/no-unnecessary-template-expression": ["off"],
    "typescript/no-unnecessary-type-arguments": ["error"],
    "typescript/no-unnecessary-type-assertion": ["error"],
    "typescript/no-unnecessary-type-constraint": ["error"],
    "typescript/no-unnecessary-type-parameters": ["off"], // Complexity
    "typescript/no-unsafe-argument": ["off"],
    "typescript/no-unsafe-assignment": ["off"],
    "typescript/no-unsafe-call": ["off"],
    "typescript/no-unsafe-declaration-merging": ["off"],
    "typescript/no-unsafe-enum-comparison": ["off"],
    "typescript/no-unsafe-function-type": ["off"],
    "typescript/no-unsafe-member-access": ["off"],
    "typescript/no-unsafe-return": ["off"],
    "typescript/no-unsafe-unary-minus": ["error"],
    "typescript/no-unused-expressions": ["error"],
    "typescript/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_"
      }
    ],
    "typescript/no-useless-constructor": ["error"],
    "typescript/no-useless-empty-export": ["error"],
    "typescript/no-wrapper-object-types": ["error"],
    "typescript/non-nullable-type-assertion-style": ["error"],
    "typescript/only-throw-error": ["error"],
    "typescript/parameter-properties": ["error"],
    "typescript/prefer-enum-initializers": ["error"],
    "typescript/prefer-find": ["error"],
    "typescript/prefer-for-of": ["error"],
    "typescript/prefer-function-type": ["off"],
    "typescript/prefer-literal-enum-member": ["error"],
    "typescript/prefer-namespace-keyword": ["error"],
    "typescript/prefer-nullish-coalescing": ["error"],
    "typescript/prefer-optional-chain": ["error"],
    "typescript/prefer-promise-reject-errors": ["error"],
    "typescript/prefer-readonly": ["error"],
    "typescript/prefer-readonly-parameter-types": ["off"],
    "typescript/prefer-reduce-type-parameter": ["error"],
    "typescript/prefer-regexp-exec": ["error"],
    "typescript/prefer-return-this-type": ["error"],
    "typescript/promise-function-async": ["off"],
    "typescript/require-array-sort-compare": ["off"],
    "typescript/require-await": ["off"],
    "typescript/restrict-plus-operands": ["error"],
    "typescript/restrict-template-expressions": ["off"],
    "typescript/return-await": ["off"],
    "typescript/strict-boolean-expressions": ["off"],
    "typescript/switch-exhaustiveness-check": [
      "error",
      {
        allowDefaultCaseForExhaustiveSwitch: true,
        considerDefaultExhaustiveForUnions: true,
        requireDefaultForNonUnion: false
      }
    ],
    "typescript/triple-slash-reference": ["error"],
    "typescript/unbound-method": ["error"],
    "typescript/unified-signatures": ["off"],
    "typescript/use-unknown-in-catch-callback-variable": ["error"]
  }
});
