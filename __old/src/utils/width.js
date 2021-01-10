const defaultTheme = require('tailwindcss/defaultTheme')

export const generateMaxWidths = () => {
    const prefix = 'max-w'

    /**
     * Define array to return.
     */
    let maxWidths = []

    /**
     * Tailwind config expects `theme` function and destructured
     * `breakpoints` function to return max widths. Since this isn't
     * being piped through the build process, these two functions
     * are defined below and return null and then we get our max widths
     *
     * Refer to the default config for tailwind v2.0.1
     */
    const theme = () => {
        return null
    }

    const breakpoints = () => {
        return null
    }

    Object.entries(
        defaultTheme.maxWidth(theme, {
            breakpoints,
        })
    ).map(([key]) => {
        maxWidths = [...maxWidths, `${prefix}-${key}`]
    })

    return maxWidths
}

export const removeMaxWidthClasses = (classList) => {
    return classList.filter((className) => !generateMaxWidths().includes(className))
}
