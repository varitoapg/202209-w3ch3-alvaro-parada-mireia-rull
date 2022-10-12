module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-empty-function": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: /^_/.source,
        caughtErrors: "all",
        caughtErrorsIgnorePattern: /^_$/.source,
      },
    ],
  },
};
