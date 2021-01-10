const defaultTheme = require('tailwindcss/defaultTheme')

export const generateOpacities = (prefix = '') => {
    /**
     * Will generate base tailwind opacities.
     * For example, without a prefix such as 'background-' or 'text-'.
     * ['20,'25','30']
     */

    /**
     * If prefix is passed, verify that the dash is there
     */
    if (prefix && !prefix.includes('-')) {
        throw new Error(`Your prefix (${prefix}) must include a trailing dash (-)`)
    }

    /**
     * Define opacities array to return.
     */
    let opacities = []

    Object.entries(defaultTheme.opacity).map(([key, value]) => {
        if (typeof value === 'string') {
            opacities = [...opacities, `${prefix}opacity-${key}`]
        }
    })

    return opacities
}

export const removeOpacity = (classList, prefix = '') => {
    return classList.filter((className) => !generateOpacities(prefix).includes(className))
}
