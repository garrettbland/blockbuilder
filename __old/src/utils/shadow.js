const defaultTheme = require('tailwindcss/defaultTheme')

export const generateBoxShadows = () => {
    /**
     * Will generate tailwind box shadows
     */
    const prefix = 'shadow'

    /**
     * Define box shadows array to return.
     */
    let boxShadows = []

    Object.entries(defaultTheme.boxShadow).map(([key, value]) => {
        if (typeof value === 'string') {
            if (key === 'DEFAULT') {
                /**
                 * Tailwind includes a DEFAULT value. Since 'shadow-DEFAULT'
                 * doesn't exist, returns 'shadow' class
                 */
                boxShadows = [...boxShadows, `${prefix}`]
                return
            }
            boxShadows = [...boxShadows, `${prefix}-${key}`]
        }
    })

    return boxShadows
}

export const removeBoxShadows = (classList) => {
    return classList.filter((className) => !generateBoxShadows().includes(className))
}
