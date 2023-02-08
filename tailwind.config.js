const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Poppins', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1rem'
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        '.bg-search': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z' stroke='%234B5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18.9999 19L14.6499 14.65' stroke='%234B5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '10px',
        }
      }
      addUtilities(utilities)
    })
  ],
}
