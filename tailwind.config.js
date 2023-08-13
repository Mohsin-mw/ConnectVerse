/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5865F2",
        "raisin-black": "#202225",
        "dark-charcoal": "#2F3136",
        green: "#3BA55D",
      },
      fontFamily: {
        "passion-one": ['"Passion One"', "cursive"],
        poppins: ['"poppins"', "cursive"],
      },
      backgroundImage: {
        primary: "url(src/assets/PrimaryBackground.png)",
        auth: "url(src/assets/authBackground.png)",
      },
    },
  },
  plugins: [],
};
