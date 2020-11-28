const defaultTheme = require('tailwindcss/defaultTheme')

export const generateFontSizes = () => {
    /**
     * Will generate tailwind font sizes
     */
    const prefix = 'text'

    /**
     * Define font sizes array to return.
     */
    let fontSizes = []

    Object.entries(defaultTheme.fontSize).map(([key]) => {
        fontSizes = [...fontSizes, `${prefix}-${key}`]
    })

    return fontSizes
}

export const textAlignments = () => {
    return ['text-left', 'text-center', 'text-right', 'text-justify']
}

export const generateLineHeights = () => {
    /**
     * Will generate tailwind line heights
     */
    const prefix = 'leading'

    /**
     * Define font sizes array to return.
     */
    let lineHeights = []

    Object.entries(defaultTheme.lineHeight).map(([key]) => {
        lineHeights = [...lineHeights, `${prefix}-${key}`]
    })

    return lineHeights
}

// export const lineHeights = () => {
//     return [
//         'leading-none',
//         'leading-tight',
//         'leading-snug',
//         'leading-normal',
//         'leading-relaxed',
//         'leading-loose',
//     ]
// }

export const fontWeights = () => {
    return [
        'font-hairline',
        'font-thin',
        'font-light',
        'font-normal',
        'font-medium',
        'font-semibold',
        'font-bold',
        'font-extrabold',
        'font-black',
    ]
}

export const removeFontSizes = (classList) => {
    return classList.filter((className) => !generateFontSizes().includes(className))
}

export const removeTextAlignments = (classList) => {
    return classList.filter((className) => !textAlignments().includes(className))
}

export const removeLineHeights = (classList) => {
    return classList.filter((className) => !generateLineHeights().includes(className))
}

export const removeFontWeights = (classList) => {
    return classList.filter((className) => !fontWeights().includes(className))
}
