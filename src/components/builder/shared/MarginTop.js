import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { generateSpacing, removeSpacing } from '@/utils/spacing'
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
        const updatedClassList = removeSpacing(currentlyEditing.classList, 'mt-')

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
            <div class="uppercase text-sm text-gray-800 tracking-wide font-semibold mb-2">
                Margin Top (
                <span class="lowercase text-green-500 font-mono">
                    {marginTop ? `.${marginTop}` : 'n/a'}
                </span>
                )
            </div>
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
