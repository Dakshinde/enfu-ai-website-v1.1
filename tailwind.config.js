// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 🟢 This array tells Tailwind which files to scan for class names
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      // Ensure your custom colors are still here:
      colors: {
        'accent-purple': '#5686E4',
        'accent-cyan': '#46A2E0',
        'bright-cyan-button': '#23DDD6',
        'dark-navy': '#0a0a1a',
      }
    },
  },
  plugins: [],
}