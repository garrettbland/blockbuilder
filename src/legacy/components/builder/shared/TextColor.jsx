import React, { useState, useEffect } from 'react'
import { useStore } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateColors, removeColors } from '@/utils/colors'
import ColorPicker from './ColorPicker'
import Label from '@/components/builder/Label'

const TextColor = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const [textColor, setTextColor] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentTextColor = extractClass(currentlyEditing.classList, generateColors('text-'))
        if (currentTextColor) {
            setTextColor(currentTextColor)
        }
    }, [currentlyEditing.id])

    const handleTextColorUpdate = (value) => {
        setTextColor(value)
        const updatedClassList = removeColors(currentlyEditing.classList, 'text-')
        useStore.getState().updateEditing(re } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateColors))
    }

    return (
        <div>
            <Label
                title="Text Color"
                value={textColor}
                resetStyle={() => handleTextColorUpdate()}
            />
            <ColorPicker
                currentColor={textColor}
                onClick={(color) => handleTextColorUpdate(`text-${color}`)}
                showTransparent={false}
            />
        </div>
    )
}

export default TextColor
