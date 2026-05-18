import React, { useState, useEffect } from 'react'
import { useStore } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateLineHeights, removeLineHeights } from '@/utils/text'
import Label from '@/components/builder/Label'

const LineHeight = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const [lineHeight, setLineHeight] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentLineHeight = extractClass(currentlyEditing.classList, generateLineHeights())
        if (currentLineHeight) {
            setLineHeight(currentLineHeight)
        }
    }, [currentlyEditing.id])

    const handleLineHeightUpdate = (index) => {
        setLineHeight(index ? generateLineHeights()[index] : null)
        const updatedClassList = removeLineHeights(currentlyEditing.classList)
        useStore.getState().updateEditing(re } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateLineHeights))
    }

    return (
        <div>
            <Label
                title="Line Height"
                value={lineHeight}
                resetStyle={() => handleLineHeightUpdate()}
            />
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
