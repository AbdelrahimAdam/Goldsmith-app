module.exports = {
  parser: '@typescript-eslint/parser', // Parses TypeScript
  extends: [
    'react-app', // Uses CRA defaults
    'plugin:@typescript-eslint/recommended', // TypeScript linting rules
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    // You can customize rules here, for example:
    // '@typescript-eslint/no-unused-vars': 'warn',
  },
};

