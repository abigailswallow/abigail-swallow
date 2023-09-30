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
    fontSize: {
      xs: '0.75rem',
      sm: '0.75rem',
      base: '1rem',
      xl: '1.15rem',
      '2xl': '1.3rem',
      '3xl': '1.5rem',
      '4xl': '1.75rem',
      '5xl': '2rem',
      '6xl': '2.15rem',
    },
    extend: {
      colors: {
        accent: '#12685E', // Your custom accent color
        accent_dark: '#22BFAC',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['utopia-std', 'ui-serif', 'Times'],
        'mono': ['JetBrains Mono', 'SFMono-Regular'],
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
