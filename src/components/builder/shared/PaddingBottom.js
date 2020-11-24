import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { generateSpacing, removeSpacing } from '@/utils/spacing'
import { extractClass } from '@/utils/tools'

const PaddingBottom = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
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
        setPaddingBottom(generateSpacing('pb-')[index])

        /**
         * Filter out current max width classes
         */
        const updatedClassList = removeSpacing(currentlyEditing.classList, 'pb-')

        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, generateSpacing('pb-')[index]],
            },
        })
    }

    return (
        <div>
            {paddingBottom}
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
