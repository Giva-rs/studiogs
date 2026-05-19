/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          mid: '#1A2E44',
        },
        gold: {
          DEFAULT: '#C49A3C',
          light: '#D4AF5A',
        },
        blue: {
          accent: '#1E5FA8',
          light: '#3A7BD5',
          muted: '#EBF2FB',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
