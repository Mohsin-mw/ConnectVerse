/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5865F2",
        "raisin-black": "#202225",
        "dark-charcoal": "#2F3136",
        "charleston-Green": "#292B2F",
        "sonic-silver": "#72767D",
        arsenic: "#393C43",
        onyx: "#36393F",
        green: "#3BA55D",
        grey: "#C4C4C4",
      },
      fontFamily: {
        "passion-one": ['"Passion One"', "cursive"],
        poppins: ['"poppins"', "cursive"],
      },
      backgroundImage: {
        illustration: "url(/src/assets/PrimaryBackground.png)",
        auth: "url(/src/assets/authBackground.png)",
      },
    },
  },
  plugins: [],
};
