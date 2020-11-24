import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { generateBorderRadiuses, removeBorderRadiuses } from '@/utils/border'

const BorderRadius = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [borderRadius, setBorderRadius] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentBorderRadius = extractClass(
            currentlyEditing.classList,
            generateBorderRadiuses()
        )
        if (currentBorderRadius) {
            setBorderRadius(currentBorderRadius)
        }
    }, [currentlyEditing.id])

    const handleBorderRadiusUpdate = (index) => {
        setBorderRadius(generateBorderRadiuses()[index])
        const updatedClassList = removeBorderRadiuses(currentlyEditing.classList)
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, generateBorderRadiuses()[index]],
            },
        })
    }

    return (
        <div>
            <div>
                {borderRadius ? borderRadius : 'Default'}
                <input
                    type="range"
                    min="0"
                    max={generateBorderRadiuses().length - 1}
                    value={generateBorderRadiuses().findIndex((item) => item === borderRadius)}
                    onChange={(event) => handleBorderRadiusUpdate(event.target.value)}
                />
            </div>
        </div>
    )
}

export default BorderRadius
