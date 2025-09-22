/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        dance: ["Roboto", "Arial", "sans-serif"], // replaced Summer Dance
        bebas: [
          "Bebas Neue", 
          "Anton",
          "Oswald", 
          "Impact", 
          "Arial Black", 
          "sans-serif"
        ], // Enhanced font stack with Anton as additional fallback
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        'h1': ['4rem', { lineHeight: '1.1', letterSpacing: '0.04em' }], // Increased spacing for better readability
        'h2': ['3rem', { lineHeight: '1.2', letterSpacing: '0.035em' }], // Increased spacing
        'h3': ['2xl', { lineHeight: '1.3', letterSpacing: '0.03em' }], // Increased spacing
        'p-lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.005em' }], // Subtle spacing for body text
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em', 
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        'bebas-tight': '0.02em',    // For tighter contexts
        'bebas': '0.04em',          // Optimal spacing for Bebas Neue
        'bebas-wide': '0.06em',     // For maximum legibility
        'title': '0.03em',          // Increased for headers
        'body': '0.01em',           // Slightly increased for body text
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
          "gradient-from": "#b44aff", // Brightened even more for better visibility
          "gradient-to": "#f87dc1",   // Slightly adjusted for better contrast
        },
        bachataSalsa: {
          "gradient-from": "#d14e2eff",
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
        "gradient-ladyStyle": "linear-gradient(to right, #b44aff, #f87dc1)", // Updated to match new colors
        "gradient-bachataSalsa": "linear-gradient(to right, #E07A5F, #F2CC8F)",
        "gradient-main": "linear-gradient(to right, #ff004d, #a100f2)",
      },
      boxShadow: {
        freshEggplant: "0 4px 15px rgba(179,29,106,0.6)",
        bachataSalsa: "0 4px 15px rgba(224,122,95,0.6)",
        ladyStyle: "0 4px 15px rgba(180,74,255,0.5)", // Updated shadow for enhanced ladyStyle
      },
    },
  },
  plugins: [],
};
