import React, { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'

import { generateSpacing, removeSpacing } from '@/utils/spacing'
import { extractClass } from '@/utils/tools'
import Label from '@/components/builder/Label'

const MarginTop = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const [marginTop, setMarginTop] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentMarginTop = extractClass(currentlyEditing.classList, generateSpacing('mt-'))
        if (currentMarginTop) {
            setMarginTop(currentMarginTop)
        }
    }, [])

    const handleMarginTopUpdate = (index) => {
        setMarginTop(index ? generateSpacing('mt-')[index] : null)

        /**
         * Filter out current max width classes
         */
        const updatedClassList = removeSpacing(currentlyEditing.classList, 'mt-')

        useStore.getState().updateEditing(re } from '@/store/useStore'

import { generateSpacing))
    }

    return (
        <div>
            <Label
                title="Margin Top"
                value={marginTop}
                resetStyle={() => handleMarginTopUpdate()}
            />
            <input
                type="range"
                min="0"
                max={generateSpacing('mt-').length - 1}
                value={generateSpacing('mt-').findIndex((item) => item === marginTop)}
                onChange={(event) => handleMarginTopUpdate(event.target.value)}
            />
        </div>
    )
}

export default MarginTop
