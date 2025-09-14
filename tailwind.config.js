/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          50: '#fef7ff',
          100: '#fceeff',
          200: '#f8ddff',
          300: '#f2bbff',
          400: '#e879ff',
          500: '#dd57ff',
          600: '#c836e8',
          700: '#a825c4',
          800: '#8b20a0',
          900: '#731f83',
        },
        paly: {
          primary: 'rgb(37, 150, 190)',
          navy: '#1e3a8a',
          blue: '#3b82f6',
          lightBlue: '#60a5fa',
          green: '#22c55e',
          gold: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
}
