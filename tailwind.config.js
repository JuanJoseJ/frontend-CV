module.exports = {
  theme: {
    minHeight: {
      screen: "calc(100vh - 2.5rem)",
      // Esta medida viene del 100% del viewport - 2.5rem de la altura del navbar
    },
  },
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./pages/*.js",
    "./components/**/*.js",
    "./components/*.js",
  ],
  plugins: [require("./node_modules/tailwind-percentage-heights-plugin")()],
};
