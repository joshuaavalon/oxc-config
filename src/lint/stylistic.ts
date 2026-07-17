import { defineConfig } from "oxlint";

export const stylistic = defineConfig({
  jsPlugins: [
    {
      name: "stylistic",
      specifier: "@stylistic/eslint-plugin"
    }
  ],
  rules: {
    "stylistic/array-bracket-newline": ["error", "consistent"],
    "stylistic/array-bracket-spacing": ["error", "never"],
    "stylistic/array-element-newline": [
      "error",
      {
        ArrayExpression: "consistent",
        ArrayPattern: "consistent"
      }
    ],
    "stylistic/arrow-parens": ["error", "as-needed"],
    "stylistic/arrow-spacing": [
      "error",
      {
        after: true,
        before: true
      }
    ],
    "stylistic/block-spacing": ["error", "always"],
    "stylistic/brace-style": ["error", "1tbs"],
    "stylistic/comma-dangle": ["error", "never"],
    "stylistic/comma-spacing": [
      "error",
      {
        after: true,
        before: false
      }
    ],
    "stylistic/comma-style": ["error", "last"],
    "stylistic/computed-property-spacing": ["error", "never"],
    "stylistic/curly-newline": ["error", { consistent: true, multiline: true }],
    "stylistic/dot-location": ["error", "property"],
    "stylistic/eol-last": ["error", "always"],
    "stylistic/function-call-argument-newline": ["error", "consistent"],
    "stylistic/function-call-spacing": ["error", "never"],
    "stylistic/function-paren-newline": ["off", "consistent"],
    "stylistic/generator-star-spacing": [
      "error",
      {
        after: false,
        before: true
      }
    ],
    "stylistic/implicit-arrow-linebreak": ["off"],
    "stylistic/indent": ["off"],
    "stylistic/indent-binary-ops": ["off"],
    "stylistic/key-spacing": ["error", { afterColon: true }],
    "stylistic/keyword-spacing": [
      "error",
      {
        after: true,
        before: true
      }
    ],
    "stylistic/line-comment-position": ["off"],
    "stylistic/linebreak-style": ["error", "unix"],
    "stylistic/lines-between-class-members": [
      "error",
      {
        enforce: [
          {
            blankLine: "never",
            next: "field",
            prev: "field"
          },
          {
            blankLine: "always",
            next: "method",
            prev: "*"
          },
          {
            blankLine: "always",
            next: "*",
            prev: "method"
          }
        ]
      }
    ],
    "stylistic/max-len": ["off"],
    "stylistic/max-statements-per-line": ["error", { max: 1 }],
    "stylistic/member-delimiter-style": ["error"],

    /**
     * Break comment code block
     */
    "stylistic/multiline-comment-style": ["off"],
    "stylistic/multiline-ternary": ["error", "always-multiline"],
    "stylistic/new-parens": ["error", "always"],
    "stylistic/newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
    "stylistic/no-confusing-arrow": ["off"],
    "stylistic/no-extra-parens": [
      "off"
      // "all",
      // {
      //   enforceForFunctionPrototypeMethods: false,
      //   ignoreJSX: "all",
      //   nestedBinaryExpressions: false
      // }
    ],
    "stylistic/no-extra-semi": ["error"],
    "stylistic/no-floating-decimal": ["error"],
    "stylistic/no-mixed-operators": ["error"],
    "stylistic/no-mixed-spaces-and-tabs": ["error"],
    "stylistic/no-multi-spaces": ["error"],
    "stylistic/no-multiple-empty-lines": [
      "error",
      {
        max: 2,
        maxBOF: 1,
        maxEOF: 1
      }
    ],
    "stylistic/no-tabs": ["error"],
    "stylistic/no-trailing-spaces": ["error"],
    "stylistic/no-whitespace-before-property": ["error"],
    "stylistic/nonblock-statement-body-position": ["error", "beside"],
    "stylistic/object-curly-newline": [
      "off"
      // {
      //   ExportDeclaration: { multiline: true },
      //   ImportDeclaration: { multiline: true },
      //   ObjectExpression: { multiline: true },
      //   ObjectPattern: { multiline: true }
      // }
    ],
    "stylistic/object-curly-spacing": ["error", "always"],
    "stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "stylistic/one-var-declaration-per-line": ["error", "always"],
    "stylistic/operator-linebreak": [
      "off"
      // "before",
      // {
      //   overrides: {
      //     "-=": "after",
      //     "??=": "after",
      //     "**=": "after",
      //     "*=": "after",
      //     "/=": "after",
      //     "&&=": "after",
      //     "&=": "after",
      //     "%=": "after",
      //     "^=": "after",
      //     "+=": "after",
      //     "<<=": "after",
      //     "=": "after",
      //     ">>=": "after",
      //     ">>>=": "after",
      //     "|=": "after",
      //     "||=": "after"
      //   }
      // }
    ],
    "stylistic/padded-blocks": ["error", "never"],
    "stylistic/padding-line-between-statements": ["off"],
    "stylistic/quote-props": ["error", "as-needed"],
    "stylistic/quotes": ["error", "double"],
    "stylistic/rest-spread-spacing": ["error", "never"],
    "stylistic/semi": ["error", "always"],
    "stylistic/semi-spacing": ["error"],
    "stylistic/semi-style": ["error", "last"],
    "stylistic/space-before-blocks": ["error"],
    "stylistic/space-before-function-paren": [
      "error",
      { anonymous: "always", asyncArrow: "always", named: "never" }
    ],
    "stylistic/space-in-parens": ["error", "never"],
    "stylistic/space-infix-ops": ["error"],
    "stylistic/space-unary-ops": ["error"],
    "stylistic/spaced-comment": ["error", "always", { markers: ["/"] }],
    "stylistic/switch-colon-spacing": ["error"],
    "stylistic/template-curly-spacing": ["error", "never"],
    "stylistic/template-tag-spacing": ["error", "never"],
    "stylistic/wrap-iife": ["error", "inside"],
    "stylistic/wrap-regex": ["off"],
    "stylistic/yield-star-spacing": ["error", "after"],
    "stylistic/lines-around-comment": [
      "error",
      {
        afterHashbangComment: true,
        allowArrayStart: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowEnumStart: true,
        allowInterfaceStart: true,
        allowModuleStart: true,
        allowObjectStart: true,
        allowTypeStart: true,
        beforeBlockComment: true
      }
    ],
    "stylistic/type-annotation-spacing": ["error"],
    "stylistic/type-generic-spacing": ["error"],
    "stylistic/type-named-tuple-spacing": ["error"],

    "stylistic/jsx-child-element-spacing": ["error"],
    "stylistic/jsx-closing-bracket-location": ["error"],
    "stylistic/jsx-closing-tag-location": ["error"],
    "stylistic/jsx-curly-brace-presence": [
      "error",
      { children: "never", propElementValues: "always", props: "never" }
    ],
    "stylistic/jsx-curly-newline": ["error", "never"],
    "stylistic/jsx-curly-spacing": ["error", { attributes: true, children: true, when: "never" }],
    "stylistic/jsx-equals-spacing": ["error", "never"],
    "stylistic/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "stylistic/jsx-function-call-newline": ["error", "multiline"],
    "stylistic/jsx-indent-props": ["error", 2],
    "stylistic/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],
    "stylistic/jsx-newline": ["error", { allowMultilines: false, prevent: true }],
    "stylistic/jsx-one-expression-per-line": ["off", { allow: "single-child" }],
    "stylistic/jsx-pascal-case": ["error"],
    "stylistic/jsx-quotes": ["error", "prefer-double"],
    "stylistic/jsx-self-closing-comp": ["error", { component: true, html: true }],
    "stylistic/jsx-tag-spacing": [
      "error",
      {
        afterOpening: "never",
        beforeClosing: "never",
        beforeSelfClosing: "always",
        closingSlash: "never"
      }
    ],
    "stylistic/jsx-wrap-multilines": [
      "error",
      {
        arrow: "parens-new-line",
        assignment: "parens-new-line",
        condition: "parens-new-line",
        declaration: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
        return: "parens-new-line"
      }
    ]
  }
});
