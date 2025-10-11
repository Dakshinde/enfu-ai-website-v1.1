/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-purple': '#5686E4',
        'accent-cyan': '#46A2E0',
        'bright-cyan-button': '#23DDD6',
        'dark-background': '#060010',
        'card-dark': 'rgba(255, 255, 255, 0.05)',
      },
      // The animation and keyframes sections that were here have been REMOVED.
    },
  },
  plugins: [],
}