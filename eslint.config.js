import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

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
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
