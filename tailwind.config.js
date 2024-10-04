/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["Tajawal"]
      },
      colors: {
        textColor: '#48FCFA',
        bgColor: '#0B1024'
      }
    },
  },
  plugins: [],
};
