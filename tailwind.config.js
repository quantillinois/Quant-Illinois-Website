/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2586AD',
        'secondary': '#0198AA',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

