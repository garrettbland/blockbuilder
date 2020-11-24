const defaultTheme = require('tailwindcss/defaultTheme')

export const generateBorderRadiuses = () => {
    /**
     * Will generate tailwind border radiuses.
     */
    const prefix = 'rounded'

    /**
     * Define border radiuses array to return.
     */
    let borderRadiuses = []

    Object.entries(defaultTheme.borderRadius).map(([key, value]) => {
        if (typeof value === 'string') {
            if (key === 'DEFAULT') {
                /**
                 * Tailwind includes a DEFAULT value. Since 'rounded-DEFAULT'
                 * doesn't exist, returns 'rounded' class
                 */
                borderRadiuses = [...borderRadiuses, `${prefix}`]
                return
            }
            borderRadiuses = [...borderRadiuses, `${prefix}-${key}`]
        }
    })

    return borderRadiuses
}

export const removeBorderRadiuses = (classList) => {
    return classList.filter((className) => !generateBorderRadiuses().includes(className))
}
