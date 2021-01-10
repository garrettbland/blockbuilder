const colors = require('tailwindcss/colors')

module.exports = {
    purge: false, // []
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
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
