import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import unicorn from 'eslint-plugin-unicorn';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const unicornRecommended = { ...unicorn.configs.recommended };
delete unicornRecommended.name;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.plugins('boundaries', 'jsx-a11y'),
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/strict',
    'plugin:sonarjs/recommended-legacy',
    'plugin:boundaries/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ),
  {
    ...unicornRecommended,
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    rules: {
      'prettier/prettier': 'error',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-null': 'off',
    },
  },
];

export default eslintConfig;
