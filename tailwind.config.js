/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        interFont: ["Inter", "sans-serif"]
      },
      colors:{
        primaryColor: "#5825E5",
        bannerTextColor: "#8BDEE1"
      },
      backgroundImage: {
        'hero-banner': "url('/assets/images/bg.png')", 
      },
      boxShadow: {
        "textshadow" : '0px 4px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [],
}
