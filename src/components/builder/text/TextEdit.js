import React from 'react'
import TextContent from './TextContent'
import TextColor from '../shared/TextColor'
import TextAlignment from './TextAlignment'
import FontWeight from '../shared/FontWeight'
import FontSize from '../shared/FontSize'
import LineHeight from './LineHeight'
import MarginTop from '../shared/MarginTop'
import MarginBottom from '../shared/MarginBottom'
import RemoveBlockButton from '../RemoveBlockButton'

/**TESTING */
// const defaultTheme = require('tailwindcss/defaultTheme')
// const colors_test = require('tailwindcss/colors')
// import { generatedColors_v2 } from '@/utils/colors'

const TextEdit = () => {
    /**
     * Exploring using theme
     * TESTING
     */
    // useEffect(() => {
    //     console.log('happening...')
    //     console.log(generatedColors_v2('bg'))
    //     // console.log(colors_test)
    //     // console.log(defaultTheme.colors)
    //     // console.log(defaultTheme.spacing)
    // }, [])

    return (
        <div>
            <TextContent />
            <TextColor />
            <TextAlignment />
            <FontWeight />
            <FontSize />
            <LineHeight />
            <MarginTop />
            <MarginBottom />
            <RemoveBlockButton title="Remove Text" />
        </div>
    )
}

export default TextEdit
