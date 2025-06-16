/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
	    fontFamily: {
	      dance: ['Dancing Script OT', 'cursive'],
	    },
	    height: {
	      '96': '24rem',
	    },
	    colors: {
	      freshEggplant: {
		 '50': '#fff0fc',
		 '100': '#ffe4f9',
		 '200': '#ffc8f6',
		 '300': '#ff9bed',
		 '400': '#ff5ddd',
		 '500': '#ff2dcb',
		 '600': '#f80aac',
		 '700': '#d9008b',
		 '800': '#b30173',
		 '900': '#9c0766',
		 '950': '#5c0038',
		 '1000': '#000000',
	      },
	    },
	  },
	  backgroundImage: {
		'gradient-eggplant': 'linear-gradient(to right, #d9008b, #d9008b, #d9008b)',
	     },
      
	},
	plugins: [],
     };
     