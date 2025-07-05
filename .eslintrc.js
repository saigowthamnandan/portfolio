module.exports = {
  // Configuration for JavaScript files
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'next/core-web-vitals', // Needed to avoid warning in next.js build: 'The Next.js plugin was not detected in your ESLint configuration'
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ], // Avoid conflict rule between Prettier and  Eslint
    '@typescript-eslint/no-var-requires': 'off',
  },
  ignorePatterns: ['.eslintrc.js', '**/*.config.js', '**/*.snap'],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
      plugins: ['jest', 'jest-formatting', 'testing-library', 'jest-dom'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    // Configuration for TypeScript files
    {
      files: ['**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint', 'unused-imports', 'tailwindcss', 'simple-import-sort'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:tailwindcss/recommended',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
          },
        ], // Avoid conflict rule between Prettier and Eslint
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off', //['warn', {argsIgnorePattern: '^_'}],
        'react/display-name': 'off',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
        'import/extensions': 'off', // Avoid missing file extension errors, TypeScript already provides a similar feature
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'simple-import-sort/imports': 'error', // Import configuration for `eslint-plugin-simple-import-sort`
        'simple-import-sort/exports': 'error', // Export configuration for `eslint-plugin-simple-import-sort`
        'import/order': 'off', // Avoid conflict rule between `eslint-plugin-import` and `eslint-plugin-simple-import-sort`
        'unused-imports/no-unused-imports': 'off', // Avoid conflict rule between `eslint` and  unused-imports
        'unused-imports/no-unused-vars': 'off', // ['error', {argsIgnorePattern: '^_'}], // Avoid conflict rule between @typescript-eslint/ and  unused-imports
        'react/react-in-jsx-scope': 'off', //
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
    // Configuration for Storybook
    {
      files: ['*.stories.*'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
};
