import React, { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateMaxWidths, removeMaxWidthClasses } from '@/utils/width'
import Label from '@/components/builder/Label'

const MaxWidth = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const [maxWidth, setMaxWidth] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentMaxWidth = extractClass(currentlyEditing.classList, ['max-w-', 'container'])
        if (currentMaxWidth) {
            setMaxWidth(currentMaxWidth)
        }
    }, [])

    const handleMaxWidthUpdate = (index) => {
        setMaxWidth(index ? generateMaxWidths()[index] : null)

        /**
         * Filter out current max width classes
         */
        const updatedClassList = removeMaxWidthClasses(currentlyEditing.classList)

        useStore.getState().updateEditing(re } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateMaxWidths))
    }

    return (
        <div>
            <Label title="Max Width" value={maxWidth} resetStyle={() => handleMaxWidthUpdate()} />
            <input
                type="range"
                min="0"
                max={generateMaxWidths().length - 1}
                value={generateMaxWidths().findIndex((item) => item === maxWidth)}
                onChange={(event) => handleMaxWidthUpdate(event.target.value)}
            />
        </div>
    )
}

export default MaxWidth
