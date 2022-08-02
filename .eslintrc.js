module.exports = {
  root: true,
  env: {
    node: true,
  },

  extends: [
    "plugin:vue/recommended", // stricter than vue/essential
    "eslint:recommended",
    "plugin:vue/base"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    "parser": "@typescript-eslint/parser"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    // To support a hybrid TypeScript / JavaScript Vue codebase, only
    // TypeScript files will have TypeScript linting. Once all components
    // are written in TypeScript, this override will no longer be necessary.
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "plugin:vue/base"
      ],
      rules: {
        // @ts-ignore comment is required for the transition period
        "@typescript-eslint/ban-ts-comment": "off",
      },
    },
    // Jest / Testing files
    {
      files: ["**/*.spec.{j,t}s?(x)", "jest.setup.js", "tests/**.*{j,t}s"],
      env: {
        jest: true,
      },
    },
  ],
};