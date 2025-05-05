/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  // content: ["./*"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        one: "#f0f5f9", // Custom blue
        two: "#dbe9f6", // Custom amber
        three: "#608afc",
        four: "#4530b3",
        five: "#412da8",
        six: "#1a2a51",
      },
    },
  },
  plugins: [],
};
