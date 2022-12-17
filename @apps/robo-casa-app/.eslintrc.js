// @ts-check

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaVersion: 2022,
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
  ],
  plugins: ["deprecation", "import", "promise", "@typescript-eslint"],
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: ["./tsconfig.json"],
      },
    },
  },
  rules: {
    // make sure we're not leveraging any deprecated APIs
    "deprecation/deprecation": "warn",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-restricted-exports": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          // add a custom message to help explain why not to use it
          Foo: "Don't use Foo because it is unsafe",

          // add a custom message, AND tell the plugin how to fix it
          OldAPI: {
            message: "Use NewAPI instead",
            
            fixWith: "NewAPI",
          },

          // un-ban a type that's banned by default
          "{}": false,
        },
        extendDefaults: true,
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        mjs: "always",
        json: "always",
        mts: "never",
        cjs: "always",
      },
    ],
  },
};

module.exports = config;
