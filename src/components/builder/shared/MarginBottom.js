import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { generateSpacing, removeBottomMargins } from '@/utils/spacing'
import { extractClass } from '@/utils/tools'

const MarginBottom = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [marginBottom, setMarginBottom] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentMarginBottom = extractClass(currentlyEditing.classList, generateSpacing('mb-'))
        if (currentMarginBottom) {
            setMarginBottom(currentMarginBottom)
        }
    }, [])

    const handleMarginBottomUpdate = (index) => {
        setMarginBottom(generateSpacing('mb-')[index])

        /**
         * Filter out current max width classes
         */
        const updatedClassList = removeBottomMargins(currentlyEditing.classList)

        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, generateSpacing('mb-')[index]],
            },
        })
    }

    return (
        <div>
            {marginBottom}
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
