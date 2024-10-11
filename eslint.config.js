import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import reactThree from '@react-three/eslint-plugin'

export default [
  { 
    ignores: ['dist', 'eslint.config.cjs', 'eslint.config.mjs', 'postcss.config.cjs', 'tailwind.config.js', 'vite.config.ts'],
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react': pluginReact,
      '@react-three': reactThree,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'react/react-in-jsx-scope': 'off', 
      'indent': ['error', 2],
      'no-multi-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],
      'no-extra-parens': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
      'quotes': ['error', 'single'],
      'simple-import-sort/imports': [
        'error',
        {
          'groups': [
            // `react` first, `next` second, then packages starting with a character
            ['^react$', '^next', '^[a-z]'],
            // Packages starting with `@`
            ['^@'],
            // Packages starting with `~`
            ['^~'],
            // Imports starting with `../`
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Imports starting with `./`
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports
            ['^.+\\.s?css$'],
            // Side effect imports
            ['^\\u0000']
          ]
        }
      ]
    },
  },
];
