import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // .eslintrc.cjs (or .eslintrc.js)
  (module.exports = {
    root: true,
    languageOptions: {
      globals: globals.browser,
    },
    env: { browser: true, es2020: true },
    files: ["**/*.{ts,tsx}"],
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    extends: [
      js.configs.recommended,
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
      "eslint-config-prettier", // Disables formatting rules handled by Prettier
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh", "import"],
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/newline-after-import": ["error", { count: 1 }],
    },
  })
);
