/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add paths to all of your template files
    './**/*.html',
    './**/*.markdown',
    './_layouts/**/*.html',
    './_includes/**/*.html',
    // Add other paths if needed
  ],
  theme: {
    extend: {
      // Colors have been moved to input.css using CSS variables
      // as recommended for Tailwind CSS v4
    },
  },
  plugins: [],
} 