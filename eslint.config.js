import globals from 'globals';

import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 16,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      prettier,
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.errors.rules,
      ...importPlugin.configs.warnings.rules,
      'prettier/prettier': 'error',
    },
    settings: {
      'import/resolver': {
        jsconfig: {
          config: 'jsconfig.json',
        },
      },
    },
  },
];
