

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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1500px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        'md': {'min':'1024px','max':'1936px'},
        // => @media (min-width: 992px) { ... }
      },


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