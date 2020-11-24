import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { generateSpacing, removeTopMargins } from '@/utils/spacing'
import { extractClass } from '@/utils/tools'

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
        setMarginTop(generateSpacing('mt-')[index])

        /**
         * Filter out current max width classes
         */
        const updatedClassList = removeTopMargins(currentlyEditing.classList)

        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, generateSpacing('mt-')[index]],
            },
        })
    }

    return (
        <div>
            {marginTop}
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
