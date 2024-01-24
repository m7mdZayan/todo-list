/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': 'var(--dark-bg)',
        'dark-card-bg': '--dark-card-bg)',
        white: {
          500: 'var(--white-500)'
        },
        danger: {
          50: 'var(--danger-50)',
          100: 'var(--danger-100)',
          300: 'var(--danger-300)',
          400: 'var(--danger)'
        }
      }
    }
  },
  plugins: []
}
