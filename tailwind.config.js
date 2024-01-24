/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': 'var(--dark-bg)',
        'dark-card-bg': 'var(--dark-card-bg)',
        primary: 'var(--primary)',
        done: 'var(--done)',
        white: {
          1000: 'var(--white)',
          500: 'var(--white-500)'
        }
      }
    }
  },
  plugins: []
}
