import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { generateOpacities, removeOpacity } from '@/utils/opacity'
import Label from '@/components/builder/Label'

const BackgroundOpacity = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [backgroundOpacity, setBackgroundOpacity] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentBackgroundOpacity = extractClass(
            currentlyEditing.classList,
            generateOpacities('bg-')
        )
        if (currentBackgroundOpacity) {
            setBackgroundOpacity(currentBackgroundOpacity)
        }
    }, [])

    const handleBackgroundOpacityUpdate = (index) => {
        setBackgroundOpacity(index ? generateOpacities('bg-')[index] : null)

        /**
         * Filter out current max width classes
         */
        const updatedClassList = removeOpacity(currentlyEditing.classList, 'bg-')

        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: index
                    ? [...updatedClassList, generateOpacities('bg-')[index]]
                    : [...updatedClassList],
            },
        })
    }

    return (
        <div>
            <Label
                title="Background Opacity"
                value={backgroundOpacity}
                resetStyle={() => handleBackgroundOpacityUpdate()}
            />
            <input
                type="range"
                min="0"
                max={generateOpacities('bg-').length - 1}
                value={generateOpacities('bg-').findIndex((item) => item === backgroundOpacity)}
                onChange={(event) => handleBackgroundOpacityUpdate(event.target.value)}
            />
        </div>
    )
}

export default BackgroundOpacity
