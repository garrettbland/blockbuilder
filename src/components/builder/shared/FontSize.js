import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { generateFontSizes, removeFontSizes } from '@/utils/text'
import Label from '@/components/builder/Label'

const FontSize = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [fontSize, setFontSize] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentFontSize = extractClass(currentlyEditing.classList, generateFontSizes())
        if (currentFontSize) {
            setFontSize(currentFontSize)
        }
    }, [currentlyEditing.id])

    const handleFontSizeUpdate = (index) => {
        setFontSize(generateFontSizes()[index])
        const updatedClassList = removeFontSizes(currentlyEditing.classList)
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, generateFontSizes()[index]],
            },
        })
    }

    return (
        <div>
            <Label title="Font Size" value={fontSize} />
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
