import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJest from 'eslint-plugin-jest';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import { config as tsEslintConfigs } from 'typescript-eslint';

export default defineConfig([
  {
    ignores: ['.yarn/', 'dist/'],
  },
  eslint.configs.recommended,
  tsEslintConfigs.recommended,
  eslintPluginImport.flatConfigs.recommended,
  {
    files: ['*.mjs', '**/*.{ts,js}'],
    extends: [eslintPluginImport.flatConfigs.typescript],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
        ...globals.es2025,
      },
    },
    rules: {
      curly: 'error',
      eqeqeq: 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'import/order': [
        'error',
        {
          'newlines-between': 'never',
        },
      ],
      'import/no-names-as-default-member': 'off',
      'import/newline-after-import': 'error',
      '@typescript-eslint/no-parameter-properties': 'off', // Needed for NestJS Dependency Injection
      '@typescript-eslint/explicit-member-accessibility': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: [
            'packages/*/tsconfig.json',
            'packages/web-components/*/tsconfig.json',
          ],
        },
      },
    },
  },
  {
    files: ['**/__tests__/**/*.spec.ts'],
    ...eslintPluginJest.configs['flat/recommended'],
  },
  eslintPluginPrettierRecommended,
]);
