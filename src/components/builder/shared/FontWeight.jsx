import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { generateFontWeights, removeFontWeights } from '@/utils/text'
import Label from '@/components/builder/Label'

const FontWeight = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [fontWeight, setFontWeight] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentFontWeight = extractClass(currentlyEditing.classList, generateFontWeights())
        if (currentFontWeight) {
            setFontWeight(currentFontWeight)
        }
    }, [currentlyEditing.id])

    const handleFontSizeUpdate = (index) => {
        setFontWeight(index ? generateFontWeights()[index] : null)
        const updatedClassList = removeFontWeights(currentlyEditing.classList)
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, generateFontWeights()[index]],
                classList: index
                    ? [...updatedClassList, generateFontWeights()[index]]
                    : [...updatedClassList],
            },
        })
    }

    return (
        <div>
            <Label
                title="Font Weight"
                value={fontWeight}
                resetStyle={() => handleFontSizeUpdate()}
            />
            <input
                type="range"
                min="0"
                max={generateFontWeights().length - 1}
                value={generateFontWeights().findIndex((item) => item === fontWeight)}
                onChange={(event) => handleFontSizeUpdate(event.target.value)}
            />
        </div>
    )
}

export default FontWeight
