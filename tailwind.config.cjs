/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0d1117',
          card: '#161b22',
          border: '#30363d',
          green: '#3fb950',
          green_dim: '#238636',
          cyan: '#58a6ff',
          purple: '#bc8cff',
          text: '#c9d1d9',
          text_dim: '#8b949e',
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
