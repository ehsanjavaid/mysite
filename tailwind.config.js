/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/**/*.html',  // Added public folder
    './index.html',        // Ensure Tailwind scans root index.html
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        play: ["Play", "sans-serif"],
      },
      fontSize: {
        '10xl': '10rem',
      },
    },
  },
  plugins: [],
};
