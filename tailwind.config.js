// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        Turquesa: {
          DEFAULT: "#0d7e83",
        },
        AzulMarino: {
          DEFAULT: "#13293d",
        },
        SemiBlanco: {
          DEFAULT: "#f9fafb",
        },
        Blanco: {
          DEFAULT: "#ffffff",
        },
        Naranja: {
          DEFAULT: "#ff5722",
        },
        Rojo: {
          DEFAULT: "#ff1616",
        },
        GrisAnvorguesa: {
          DEFAULT: "#9ca3af",
        },
        GrisPlata: {
          DEFAULT: "#6b7280",
        },
        GrisClaro: {
          DEFAULT: "#d1d5db",
        },
        SemiNegro: {
          DEFAULT: "#111827",
        },
        VerdeAgua: {
          DEFAULT: "#71d0d4",
        },
        //Dark Theme Schemes
        Gris: {
          DEFAULT: "#d0d4d8",
        },
        PseudoNegro: {
          DEFAULT: "#16191c",
        },
        GrisNt: {
          DEFAULT: "#101014",
        },
        TurquesaOscuro: {
          DEFAULT: "#086c71",
        },
        GrisTopo: {
          DEFAULT: "#34373a",
        },
        GrisGG: {
          DEFAULT: "#374151",
        },
        GrisEz: {
          DEFAULT: "#424547",
        },
        GrisClaroViolaceo: {
          DEFAULT: "#bcbac6",
        },
        AmarilloLigth: {
          DEFAULT: "#F2BE38",
        },
        AzulDark: {
          DEFAULT: "#394F9E",
        },
        GrisSwitch: {
          DEFAULT: "#969696",
        },
      },
      outline: {
        switch: "2px solid #969696",
      },
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
