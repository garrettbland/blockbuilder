import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { generateSpacing, removeSpacing } from '@/utils/spacing'
import { extractClass } from '@/utils/tools'
import Label from '@/components/builder/Label'

const PaddingTop = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [paddingTop, setPaddingTop] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentPaddingTop = extractClass(currentlyEditing.classList, generateSpacing('pt-'))
        if (currentPaddingTop) {
            setPaddingTop(currentPaddingTop)
        }
    }, [])

    const handlePaddingTopUpdate = (index) => {
        setPaddingTop(generateSpacing('pt-')[index])

        /**
         * Filter out current max width classes
         */
        const updatedClassList = removeSpacing(currentlyEditing.classList, 'pt-')

        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, generateSpacing('pt-')[index]],
            },
        })
    }

    return (
        <div>
            <Label title="Padding Top" value={paddingTop} />
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
