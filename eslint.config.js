import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import security from 'eslint-plugin-security';
import noSecrets from 'eslint-plugin-no-secrets';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      prettier,
      security,
      'no-secrets': noSecrets,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...prettierConfig.rules,
      ...security.configs.recommended.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      // Security rules
      'security/detect-object-injection': 'error',
      'security/detect-non-literal-regexp': 'error',
      'security/detect-unsafe-regex': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'error',
      'security/detect-disable-mustache-escape': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-no-csrf-before-method-override': 'error',
      'security/detect-non-literal-fs-filename': 'error',
      'security/detect-non-literal-require': 'error',
      'security/detect-possible-timing-attacks': 'error',
      'security/detect-pseudoRandomBytes': 'error',
      'no-secrets/no-secrets': ['error', { tolerance: 5.0 }],
    },
  },
  {
    files: ['server/**/*.{ts,js}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      security,
      'no-secrets': noSecrets,
    },
    rules: {
      'no-console': 'off',
      // Enhanced security rules for server code
      'security/detect-object-injection': 'error',
      'security/detect-non-literal-regexp': 'error',
      'security/detect-unsafe-regex': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'warn',
      'security/detect-disable-mustache-escape': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-no-csrf-before-method-override': 'error',
      'security/detect-non-literal-fs-filename': 'warn',
      'security/detect-non-literal-require': 'warn',
      'security/detect-possible-timing-attacks': 'error',
      'security/detect-pseudoRandomBytes': 'error',
      'no-secrets/no-secrets': ['error', { tolerance: 4.0 }],
    },
  },
  {
    files: ['**/*.test.{ts,tsx}', '**/test/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        vi: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
      // Relaxed security rules for test files
      'security/detect-object-injection': 'off',
      'security/detect-non-literal-regexp': 'off',
      'no-secrets/no-secrets': 'off',
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      security,
      'no-secrets': noSecrets,
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      // Security rules for JS files
      'security/detect-object-injection': 'error',
      'security/detect-unsafe-regex': 'error',
      'security/detect-eval-with-expression': 'error',
      'no-secrets/no-secrets': ['error', { tolerance: 5.0 }],
    },
  },
  {
    files: [
      '*.config.{ts,js}',
      'vite.config.ts',
      'tailwind.config.ts',
      'postcss.config.js',
      'commitlint.config.js',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
      // Relaxed security rules for config files
      'security/detect-non-literal-require': 'off',
      'security/detect-non-literal-fs-filename': 'off',
      'no-secrets/no-secrets': 'off',
    },
  },
  {
    files: ['client/public/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      'no-console': 'off',
      // Service worker specific security rules
      'security/detect-object-injection': 'error',
      'security/detect-eval-with-expression': 'error',
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.min.js',
      'client/dist/**',
      'client/build/**',
    ],
  },
];
