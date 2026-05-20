import React, { useState, useEffect } from 'react'
import { useStore } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateFontSizes, removeFontSizes } from '@/utils/text'
import Label from '@/components/builder/Label'

const FontSize = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const [fontSize, setFontSize] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentFontSize = extractClass(currentlyEditing.classList, generateFontSizes())
        if (currentFontSize) {
            setFontSize(currentFontSize)
        }
    }, [currentlyEditing.id])

    const handleFontSizeUpdate = (index) => {
        setFontSize(index ? generateFontSizes()[index] : null)
        const updatedClassList = removeFontSizes(currentlyEditing.classList)
        useStore.getState().updateEditing(re } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateFontSizes))
    }

    return (
        <div>
            <Label title="Font Size" value={fontSize} resetStyle={() => handleFontSizeUpdate()} />
            <input
                type="range"
                min="0"
                max={generateFontSizes().length - 1}
                value={generateFontSizes().findIndex((item) => item === fontSize)}
                onChange={(event) => handleFontSizeUpdate(event.target.value)}
            />
        </div>
    )
}

export default FontSize
