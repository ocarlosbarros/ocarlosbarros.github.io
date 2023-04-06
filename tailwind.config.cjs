/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        './src/**/*.tsx',
        './index.html'
  ],
    theme: {
        extend: {
            colors: {
                'primary': '#6D2EB0',
                'secondary': '#2C2447',
                'highlight': '#FFFF2B',
                'black': '#262424',
            },
            fontFamily: {
                'workSuns': ["Work Suns", "Roboto", "sans-serif"]
            },
            keyframes: {
                'bounce-arrow': {
                    '0%, 10%, 40%, 60% 100%': { transform: 'translateY(0)' },
                    '40%': { transform: 'translateY(-10px)' },
                    '60%': { transform: 'translateY(-15px)' }
               }
            },
            backgroundImage: {
                'waves': "url('../assets/waves.svg')"
            }
        },
    },
  plugins: [],
}
