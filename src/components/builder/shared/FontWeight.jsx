import React, { useState, useEffect } from 'react'
import { useStore } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateFontWeights, removeFontWeights } from '@/utils/text'
import Label from '@/components/builder/Label'

const FontWeight = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
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
        useStore.getState().updateEditing(re } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateFontWeights))
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
