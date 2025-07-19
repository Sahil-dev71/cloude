/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          500: '#ff6b35',
          600: '#e55a2b',
        },
        'dark': {
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

