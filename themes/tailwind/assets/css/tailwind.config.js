const colors = require('tailwindcss/colors'); // Import Tailwind's default colors

module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#12685E', // Your custom accent color
        accent_dark: '#22BFAC',
      },
      fontFamily: {
        'sans': ['neue-haas-unica', 'ui-sans-serif', 'system-ui'],
        'serif': ['warnock-pro', 'ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
