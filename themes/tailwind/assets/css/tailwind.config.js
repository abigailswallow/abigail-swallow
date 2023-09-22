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
      xs: '0.686rem',
      sm: '0.812rem',
      base: '1rem',
      xl: '1.188rem',
      '2xl': '1.438rem',
      '3xl': '1.750rem',
      '4xl': '2.062rem',
      '5xl': '2.500rem',
      '6xl': '3rem',
    },
    extend: {
      colors: {
        accent: '#12685E', // Your custom accent color
        accent_dark: '#22BFAC',
      },
      fontFamily: {
        'sans': ['Archivo', 'ui-sans-serif', 'system-ui'],
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
