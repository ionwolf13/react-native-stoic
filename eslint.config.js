// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = {
  root: true, // sets this object as the root for ESLint
  // Extends - tells ESLint to start with some pre-defined rules
  // "expo" - rules for Expo/ReactNative projects
  // "eslint:recommended" - basic javascript rules from ESLint
  extends: ["expo", "eslint:recommended"],
  // ecmaVersion - allows modern javascript syntax like async/await and arrow functions
  // sourceType - allows import/export statements
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  // env - tells esLint what environment your code runs in
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // add extra plugins
  plugins: [],
  settings: {
    // This tells ESLint to use the aliases defined in babel.config.js
    "import/resolver": {
      "babel-module": {}
    }
  },
  rules: {
    // Add any custom rules you want, or leave empty
  },
  // Tells esLint to ignore certain folders
  ignorePatterns: ["dist/*", "node_modules/*"]
};
