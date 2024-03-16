

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/Cards/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/components/Cards/**/*.js"
  ],
  theme: {
   
    extend: {
      


      colors:{
        background:"#0BA085",
        textcolor:"#000000"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}