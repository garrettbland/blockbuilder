import React, { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'

import { generateSpacing, removeSpacing } from '@/utils/spacing'
import { extractClass } from '@/utils/tools'
import Label from '@/components/builder/Label'

const MarginBottom = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const [marginBottom, setMarginBottom] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentMarginBottom = extractClass(currentlyEditing.classList, generateSpacing('mb-'))
        if (currentMarginBottom) {
            setMarginBottom(currentMarginBottom)
        }
    }, [])

    const handleMarginBottomUpdate = (index) => {
        setMarginBottom(index ? generateSpacing('mb-')[index] : null)

        /**
         * Filter out current max width classes
         */
        const updatedClassList = removeSpacing(currentlyEditing.classList, 'mb-')

        useStore.getState().updateEditing(re } from '@/store/useStore'

import { generateSpacing))
    }

    return (
        <div>
            <Label
                title="Margin Bottom"
                value={marginBottom}
                resetStyle={() => handleMarginBottomUpdate()}
            />
            <input
                type="range"
                min="0"
                max={generateSpacing('mb-').length - 1}
                value={generateSpacing('mb-').findIndex((item) => item === marginBottom)}
                onChange={(event) => handleMarginBottomUpdate(event.target.value)}
            />
        </div>
    )
}

export default MarginBottom
