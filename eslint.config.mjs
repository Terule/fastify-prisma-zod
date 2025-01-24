import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-redeclare": "off",
      "no-shadow": "off",
      "no-var":"off",
      "no-use-before-define": "off",
      "no-undef-init": "off",
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      '@typescript-eslint/no-unused-vars': ['warn', {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
      "caughtErrorsIgnorePattern": "^_"
    }],
  }
}
];