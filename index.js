module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:storybook/recommended",
    "standard-with-typescript",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
  ],
  "parser": "@typescript-eslint/parser",
  "root": true,
  "overrides": [],
  "settings": {
    "eslint.packageManager": "yarn",
    "react": {
      "version": "detect",
    },
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "import",
    "formatjs",
    "prettier",
    "unused-imports",
    "simple-import-sort",
  ],
  "rules": {
    // -----------------------------------------------------
    // React -----------------------------------------------
    // -----------------------------------------------------
    "react/jsx-filename-extension": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-curly-newline": "off",
    // -----------------------------------------------------
    // TypeScript ------------------------------------------
    // -----------------------------------------------------
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    // -----------------------------------------------------
    // Formatjs --------------------------------------------
    // -----------------------------------------------------
    "formatjs/no-offset": "error",
    "formatjs/enforce-default-message": "error",
    "formatjs/enforce-description": "off",
    "formatjs/enforce-placeholders": "error",
    "formatjs/no-multiple-whitespaces": "error",
    "formatjs/enforce-id": [
      "error",
      {
        "idInterpolationPattern": "[sha512:contenthash:base64:6]",
      },
    ],
    "formatjs/no-emoji": "error",
    "formatjs/no-literal-string-in-jsx": "error",
    "formatjs/no-multiple-plurals": "error",
    "formatjs/no-complex-selectors": [
      "error",
      {
        "limit": 3,
      },
    ],
    // -----------------------------------------------------
    // Linting ---------------------------------------------
    // -----------------------------------------------------
    "prettier/prettier": "error",
    // -----------------------------------------------------
    // General ---------------------------------------------
    // -----------------------------------------------------
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/prefer-default-export": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxEOF": 1,
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": ["**/*.stories.tsx", "**/*.test.*", "**/test/*"],
      },
    ],
    "import/order": "error",
    "unused-imports/no-unused-imports": "error",
  },
};
