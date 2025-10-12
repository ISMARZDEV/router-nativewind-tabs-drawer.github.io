/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //Se aplicara unicamente en cualquier archivo del directorio (carpeta)de app || components || presentation
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

