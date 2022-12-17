// @ts-check

/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss"), require.resolve('prettier-plugin-package')],
};

export default config;
