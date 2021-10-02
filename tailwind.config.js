// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        n1: "-10",
      },
      keyframes: {
        banner: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100px)" },
        }, 
      },
      animation: {
        banner: "banner .5s linear forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
