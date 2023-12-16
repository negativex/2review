/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      btn: "#727272",
      nav: "#FFFFFF",
      page: "#BC4749",
      card: "#BC4749",
      "card-hover": "#FFFFFF",
      "default-text": "#F1F3F5",
      "black-text": "#000000",
      "blue-accent": "#0084d4",
      "blue-accent-hover": "009fff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      red: "ff0000",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      redReview: "#FF0000",
      greenReview: "#44AB42",
      yellowReview: "#FFD93D",
      footerMain: "#404040",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        rv: "5px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        hidden: ["0px", "0px"],
      },

      height: {
        main_img_xl: "28rem",
        main_img_2xl: "40rem",
        main_img_lg: "22rem",
        main_img_md: "20rem",
        main_img_sm: "16rem",
      },
    },
  },
  plugins: [],
};
