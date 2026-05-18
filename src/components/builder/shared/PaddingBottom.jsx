import React, { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'

import { generateSpacing, removeSpacing } from '@/utils/spacing'
import { extractClass } from '@/utils/tools'
import Label from '@/components/builder/Label'

const PaddingBottom = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const [paddingBottom, setPaddingBottom] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentPaddingBottom = extractClass(
            currentlyEditing.classList,
            generateSpacing('pb-')
        )
        if (currentPaddingBottom) {
            setPaddingBottom(currentPaddingBottom)
        }
    }, [])

    const handlePaddingBottomUpdate = (index) => {
        setPaddingBottom(index ? generateSpacing('pb-')[index] : null)

        /**
         * Filter out current max width classes
         */
        const updatedClassList = removeSpacing(currentlyEditing.classList, 'pb-')

        useStore.getState().updateEditing(re } from '@/store/useStore'

import { generateSpacing))
    }

    return (
        <div>
            <Label
                title="Padding Bottom"
                value={paddingBottom}
                resetStyle={() => handlePaddingBottomUpdate()}
            />
            <input
                type="range"
                min="0"
                max={generateSpacing('pb-').length - 1}
                value={generateSpacing('pb-').findIndex((item) => item === paddingBottom)}
                onChange={(event) => handlePaddingBottomUpdate(event.target.value)}
            />
        </div>
    )
}

export default PaddingBottom
