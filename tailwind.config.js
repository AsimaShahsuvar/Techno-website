/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary:  "#61dafbaa", //blue
        secondary: "#61dafbaa", //blue
        brandPurple: "#646cffaa", 
        brandViolet: "#8061fbaa", 
        brandPink: "#fb6194aa",
        brandWhite: "#eeeeee",  
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      backgroundImage:{
        'my-image':"url(/assets/blogs/AI-future.jpg)",
      },


      boxShadow: {
        'extra': '0px 0px 10px 0px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}
