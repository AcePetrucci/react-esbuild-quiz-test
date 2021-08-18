module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-perf/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "@typescript-eslint", "react-perf", "import-newlines"],
  rules: {
    "no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/indent": ["error", 2],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "max-len": ["error", { code: 80, tabWidth: 2 }],
    "import-newlines/enforce": [
      "error",
      {
        "items": 2,
        "max-len": 100,
        "semi": false
      }
    ],
    "object-curly-newline": ["warn", { 
      "ImportDeclaration": { "multiline": true, "minProperties": 3 }, 
      "ExportDeclaration": { "multiline": true, "minProperties": 3 } 
    }],
    "indent": [ 2, 2 ]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: [".eslintrc.js"],
};
