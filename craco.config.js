module.exports = {
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
    webpack: {
        alias: {
            '@/components': 'src/components/',
            '@/redux': 'src/redux/',
            '@/utils': 'src/utils/',
            '@/styles': 'src/styles/',
            '@/src': 'src/',
            '@/views': 'src/views/',
        },
    },
}
