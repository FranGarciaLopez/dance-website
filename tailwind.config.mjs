/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        dance: ["Dancing Script OT", "cursive"],
      },
      height: {
        96: "24rem",
      },
      colors: {
        freshEggplant: {
          50: "#fff5f9",
          100: "#ffe6f0",
          200: "#ffcee0",
          300: "#ffaed1",
          400: "#ff8ac2",
          500: "#ff5eb3",
          600: "#ff339f",
          700: "#e62488",
          800: "#b31d6a",
          900: "#8f1452",
          950: "#5c0a36",
          1000: "#000000",
        },

        freshPeach: {
          50: "#fff5f0",
          100: "#ffece0",
          200: "#ffd9c1",
          300: "#ffc6a2",
          400: "#ffb283",
          500: "#ff9f64",
          600: "#ff8c45",
          700: "#ff7926",
          800: "#e66a20",
          900: "#cc5b1a",
          950: "#993d0d",
          1000: "#000000",
        },
        softBlue: {
          50: "#f0faff",
          100: "#d9f2ff",
          200: "#bfe8ff",
          300: "#a4ddff",
          400: "#7ad1ff",
          500: "#50c6ff",
          600: "#26bbff",
          700: "#00b0ff",
          800: "#0099e6",
          900: "#0080cc",
          950: "#005999",
          1000: "#000000",
        },
        // Colores para rutas
        ladyStyle: {
          "gradient-from": "#6B21A8",
          "gradient-to": "#DB2777",
        },
        bachata: {
          "gradient-from": "#E07A5F",
          "gradient-to": "#F2CC8F",
        },
        salsa: {
          "gradient-from": "#219EBC",
          "gradient-to": "#ADE8F4",
        },
        main: {
          "gradient-from": "#8338EC",
          "gradient-to": "#FF006E",
        },
      },
      backgroundImage: {
        "gradient-freshEggplant":
          "linear-gradient(to right, #d9008b, #d9008b, #d9008b)",
        "gradient-ladyStyle": "linear-gradient(to right, #6B21A8, #DB2777)",
        "gradient-bachata": "linear-gradient(to right, #E07A5F, #F2CC8F)",
        "gradient-salsa": "linear-gradient(to right, #219EBC, #ADE8F4)",
        "gradient-main": "linear-gradient(to right, #8338EC, #FF006E)",
      },
    },
  },
  plugins: [],
};
