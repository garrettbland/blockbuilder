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
    /**
     * Not referencing tailwind theme because this is a core
     * plugin, and I can't figure out how
     */
    return ['text-left', 'text-center', 'text-right', 'text-justify']
}

export const generateLineHeights = () => {
    /**
     * Not referencing tailwind theme because the fixed line
     * heights (leading-4, leading-5, etc) I feel will cause a crazy
     * amount of headaches
     */
    return [
        'leading-none',
        'leading-tight',
        'leading-snug',
        'leading-normal',
        'leading-relaxed',
        'leading-loose',
    ]
}

export const generateFontWeights = () => {
    /**
     * Will generate tailwind font weights
     */
    const prefix = 'font'

    /**
     * Define array to return.
     */
    let fontWeights = []

    Object.entries(defaultTheme.fontWeight).map(([key]) => {
        fontWeights = [...fontWeights, `${prefix}-${key}`]
    })

    return fontWeights
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
    return classList.filter((className) => !generateFontWeights().includes(className))
}
