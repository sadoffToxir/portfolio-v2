import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

import pluginJs from "@eslint/js";
import reactThree from '@react-three/eslint-plugin'

export default [
  { 
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ['dist', 'eslint.config.cjs', "eslint.config.mjs", "postcss.config.cjs", "tailwind.config.js", "vite.config.ts"],
  },
  { 
    languageOptions: { globals: globals.browser } 
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", 
      "indent": ["error", 2],
      "no-multi-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "computed-property-spacing": ["error", "never"],
      "no-extra-parens": "error",
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
      "simple-import-sort/imports": [
        "error",
        {
          "groups": [
            // `react` first, `next` second, then packages starting with a character
            ["^react$", "^next", "^[a-z]"],
            // Packages starting with `@`
            ["^@"],
            // Packages starting with `~`
            ["^~"],
            // Imports starting with `../`
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Imports starting with `./`
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports
            ["^.+\\.s?css$"],
            // Side effect imports
            ["^\\u0000"]
          ]
        }
      ]
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'react-three': reactThree,
      "simple-import-sort": simpleImportSort
    },
  },
];
