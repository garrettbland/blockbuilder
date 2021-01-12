const colors = require('tailwindcss/colors')

module.exports = {
    purge: false, // ['./src/**/*.{js,jsx}']
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            ...colors,
        },
        extend: {
            maxHeight: {
                124: '28rem',
            },
            minHeight: {
                96: '24rem',
            },
        },
    },
    variants: {
        extend: {
            ringWidth: ['hover'],
            ringColor: ['hover'],
            ringOffsetWidth: ['hover'],
        },
    },
    plugins: [],
}
