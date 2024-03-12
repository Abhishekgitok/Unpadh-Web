/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/Cards/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/flowbite/components/Cards/**/*.js"

];
export const theme = {
  screens: {
    xs: "350px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1300px",
  },
  extend: {
    colors: {
      primary: "#0BA085",
      background: "#0BA085",
      textcolor:"#000000",
      ternary: {
      DEFAULT: "#fff",
      hover: "#1c3656",
      },
      accent: {
        DEFAULT: "#fff",
      
      },
      body: "",
    },
    fontFamily:{
      Poppins:["Poppins"],
      title:"38px"
    },
    textisze:{
      title:"38px"

    }
  },
};
export const plugins = [];