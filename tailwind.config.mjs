/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        dance: ["Roboto", "Arial", "sans-serif"], // replaced Summer Dance
        bebas: ["Arial", "Helvetica", "sans-serif"], // replaced Dance With The Devil

        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        'h1': ['4rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['3rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['2xl', { lineHeight: '1.4' }],
        'p-lg': ['1.125rem', { lineHeight: '1.75rem' }],
      },

      height: {
        96: "24rem",
      },
      colors: {
        mainColors: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a855f7",
          500: "#9333ea",
          600: "#7e22ce",
          700: "#6b21a8",
          800: "#581c87",
          900: "#4c1d6f",
        },
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
        ladyStyle: {
          "gradient-from": "#6B21A8",
          "gradient-to": "#DB2777",
        },
        bachataSalsa: {
          "gradient-from": "#d14e2eff", // más oscuro que #ee5f37
          "gradient-to": "#d89d36ff",
        },
        main: {
          "gradient-from": "#ff004d",
          "gradient-to": "#a100f2",
        },
      },
      backgroundImage: {
        "gradient-freshEggplant":
          "linear-gradient(to right, #d9008b, #d9008b, #d9008b)",
        "gradient-ladyStyle": "linear-gradient(to right, #6B21A8, #DB2777)",
        "gradient-bachataSalsa": "linear-gradient(to right, #E07A5F, #F2CC8F)",
        "gradient-main": "linear-gradient(to right, #9333ea, #4c1d6f)",
      },
      boxShadow: {
        freshEggplant: "0 4px 15px rgba(179,29,106,0.6)",
        bachataSalsa: "0 4px 15px rgba(224,122,95,0.6)",
      },
    },
  },
  plugins: [],
};
