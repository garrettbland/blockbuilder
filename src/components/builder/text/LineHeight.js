import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { generateLineHeights, removeLineHeights } from '@/utils/text'

const LineHeight = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [lineHeight, setLineHeight] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentLineHeight = extractClass(currentlyEditing.classList, generateLineHeights())
        if (currentLineHeight) {
            setLineHeight(currentLineHeight)
        }
    }, [currentlyEditing.id])

    const handleLineHeightUpdate = (index) => {
        const newLineHeight = generateLineHeights()[index]
        setLineHeight(newLineHeight)
        const updatedClassList = removeLineHeights(currentlyEditing.classList)
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, newLineHeight],
            },
        })
    }

    return (
        <div>
            {lineHeight ? lineHeight : 'Not set'}
            <input
                type="range"
                min="0"
                max={generateLineHeights().length - 1}
                value={generateLineHeights().findIndex((item) => item === lineHeight)}
                onChange={(event) => handleLineHeightUpdate(event.target.value)}
            />
        </div>
    )
}

export default LineHeight
