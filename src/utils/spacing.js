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
    return ['mx-auto', 'ml-auto', 'mr-auto']
}

export const removeAutoMargins = (classList) => {
    return classList.filter((className) => !autoMargins().includes(className))
}

export const removeTopMargins = (classList) => {
    return classList.filter((className) => !generateSpacing('mt-').includes(className))
}

export const removeBottomMargins = (classList) => {
    return classList.filter((className) => !generateSpacing('mb-').includes(className))
}

export const removeTopPadding = (classList) => {
    return classList.filter((className) => !generateSpacing('pt-').includes(className))
}

export const removeBottomPadding = (classList) => {
    return classList.filter((className) => !generateSpacing('pb-').includes(className))
}
