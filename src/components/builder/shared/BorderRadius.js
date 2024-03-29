import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { generateBorderRadiuses, removeBorderRadiuses } from '@/utils/border'
import Label from '@/components/builder/Label'

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
        setBorderRadius(index ? generateBorderRadiuses()[index] : null)
        const updatedClassList = removeBorderRadiuses(currentlyEditing.classList)
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: index
                    ? [...updatedClassList, generateBorderRadiuses()[index]]
                    : [...updatedClassList],
            },
        })
    }

    return (
        <div>
            <div>
                <Label
                    title="Border Radius"
                    value={borderRadius}
                    resetStyle={() => handleBorderRadiusUpdate()}
                />
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
