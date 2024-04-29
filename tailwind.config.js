/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2c2567",
        primaryDark: "#1a1835",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "black-300": "#050315",
        "white-100": "#f3f3f3",
        "gradient-left": "#2f162d",
        "gradient-bottom": "#1d2841",
        "gradient-right": "#160d2c",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(33, 30, 53, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpeg')",
        "cool-dark-gradient":
          "radial-gradient(circle at center, #1a1835 0%, #050315 100%)",
        "custom-gradient":
          "linear-gradient(to bottom right, #2f162d, #1d2841, #160d2c)",
      },
    },
  },
  plugins: [],
};
