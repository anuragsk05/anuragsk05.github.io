/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#111827',
          lighter: '#1F2937',
          lightest: '#374151'
        },
        accent: {
          blue: '#60A5FA',
          purple: '#A78BFA'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#E5E7EB',
            a: {
              color: '#60A5FA',
              '&:hover': {
                color: '#A78BFA',
              },
            },
          },
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}