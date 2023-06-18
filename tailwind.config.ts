import type { Config } from 'tailwindcss'

const tailwindCssConfig: Config = {
  content: [
    './**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
      },
      colors: {
        p0: '#ffffff',
        p1: '#f2f2f2',
      },
      spacing: {
        container: '1rem',
      },
    },
  },
  plugins: [],
}

export default tailwindCssConfig
