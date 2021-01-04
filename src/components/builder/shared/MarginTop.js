import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { generateSpacing, removeSpacing } from '@/utils/spacing'
import { extractClass } from '@/utils/tools'
import Label from '@/components/builder/Label'

const MarginTop = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
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

        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: index
                    ? [...updatedClassList, generateSpacing('mt-')[index]]
                    : [...updatedClassList],
            },
        })
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
