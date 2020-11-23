const tailwind_colors = require('tailwindcss/colors')

export const generateColors = (prefix = '') => {
    /**
     * Will generate base tailwind colors.
     * For example, without a prefix such as 'bg-' or 'text-'.
     * ['black','white','blue-500','blue-600']
     */

    /**
     * If prefix is passed, verify that the dash is there
     */
    if (prefix && !prefix.includes('-')) {
        throw new Error(`Your prefix (${prefix}) must include a trailing dash (-)`)
    }

    /**
     * Define color palette array to return.
     * Add transparent class as its not included in 'tailwindcss/colors'
     */
    let color_palette = ['transparent']

    Object.entries(tailwind_colors).map(([key, value]) => {
        const baseColor = key

        if (typeof value === 'string') {
            color_palette = [...color_palette, `${prefix}${baseColor}`]
        } else {
            const sub_colors = Object.entries(value).map(([sub_key]) => {
                return `${prefix}${baseColor}-${sub_key}`
            })

            sub_colors.forEach((className) => {
                color_palette = [...color_palette, className]
            })
        }
    })

    return color_palette
}

export const removeBackgroundColors = (classList) => {
    return classList.filter((className) => !generateColors('bg-').includes(className))
}

export const removeTextColors = (classList) => {
    return classList.filter((className) => !generateColors('text-').includes(className))
}
