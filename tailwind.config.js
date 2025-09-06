/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
      },
      backgroundColor: {
        'dark-primary': '#0B1121',
        'dark-secondary': '#0f172a',
        'light-primary': '#f8fafc',
        'light-secondary': '#f1f5f9',
      },
      textColor: {
        'dark-primary': '#f8fafc',
        'dark-secondary': '#e2e8f0',
        'light-primary': '#0f172a',
        'light-secondary': '#334155',
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'fadeDown': 'fadeDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
