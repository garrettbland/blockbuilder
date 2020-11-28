import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { generateMaxWidths, removeMaxWidthClasses } from '@/utils/width'

const MaxWidth = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [maxWidth, setMaxWidth] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(generateMaxWidths())
        const currentMaxWidth = extractClass(currentlyEditing.classList, ['max-w-', 'container'])
        if (currentMaxWidth) {
            setMaxWidth(currentMaxWidth)
        }
    }, [])

    const handleMaxWidthUpdate = (index) => {
        setMaxWidth(generateMaxWidths()[index])

        /**
         * Filter out current max width classes
         */
        const updatedClassList = removeMaxWidthClasses(currentlyEditing.classList)

        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, generateMaxWidths()[index]],
            },
        })
    }

    return (
        <div>
            {maxWidth}
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
