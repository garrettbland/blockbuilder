import React, { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'

import { generateSpacing, removeSpacing } from '@/utils/spacing'
import { extractClass } from '@/utils/tools'
import Label from '@/components/builder/Label'

const PaddingTop = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const [paddingTop, setPaddingTop] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentPaddingTop = extractClass(currentlyEditing.classList, generateSpacing('pt-'))
        if (currentPaddingTop) {
            setPaddingTop(currentPaddingTop)
        }
    }, [])

    const handlePaddingTopUpdate = (index) => {
        setPaddingTop(index ? generateSpacing('pt-')[index] : null)

        /**
         * Filter out current max width classes
         */
        const updatedClassList = removeSpacing(currentlyEditing.classList, 'pt-')

        useStore.getState().updateEditing(re } from '@/store/useStore'

import { generateSpacing))
    }

    return (
        <div>
            <Label
                title="Padding Top"
                value={paddingTop}
                resetStyle={() => handlePaddingTopUpdate()}
            />
            <input
                type="range"
                min="0"
                max={generateSpacing('pt-').length - 1}
                value={generateSpacing('pt-').findIndex((item) => item === paddingTop)}
                onChange={(event) => handlePaddingTopUpdate(event.target.value)}
            />
        </div>
    )
}

export default PaddingTop
