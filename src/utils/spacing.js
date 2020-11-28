const defaultTheme = require('tailwindcss/defaultTheme')

export const generateSpacing = (prefix = '') => {
    /**
     * Will generate base tailwind spaces.
     * For example, without a prefix such as 'mt-' or 'pb-'.
     * ['12,'14','16']
     */

    /**
     * If prefix is passed, verify that the dash is there
     */
    if (prefix && !prefix.includes('-')) {
        throw new Error(`Your prefix (${prefix}) must include a trailing dash (-)`)
    }

    /**
     * Define spacing array to return.
     */
    let spacing = []

    Object.entries(defaultTheme.spacing).map(([key, value]) => {
        if (typeof value === 'string') {
            spacing = [...spacing, `${prefix}${key}`]
        }
    })

    return spacing
}

export const autoMargins = () => {
    /**
     * Not referencing tailwind theme because this isn't
     * a set class. Also not sure if I want to handle button `floats`
     * like this. Might want to use flex instead with justifying content
     */
    return ['mx-auto', 'ml-auto', 'mr-auto']
}

export const removeAutoMargins = (classList) => {
    return classList.filter((className) => !autoMargins().includes(className))
}

export const removeSpacing = (classList, prefix = '') => {
    return classList.filter((className) => !generateSpacing(prefix).includes(className))
}
