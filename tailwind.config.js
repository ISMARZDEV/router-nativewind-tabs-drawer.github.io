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
    extend: {
      fontFamily: {
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

