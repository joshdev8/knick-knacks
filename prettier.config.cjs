/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],

  // ... your other config

  printWidth: 80,
  endOfLine: "auto",
  bracketSpacing: true,
  singleQuote: true,
  semi: true,
  arrowParens: "avoid",
  useTabs: true,
};

module.exports = config;
