import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { removeColors } from '@/utils/colors'
import { extractClass } from '@/utils/tools'
import ColorPicker from './ColorPicker'
import Label from '@/components/builder/Label'

const BackgroundColor = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [bgColor, setBgColor] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentBgColor = extractClass(currentlyEditing.classList, 'bg-')
        if (currentBgColor) {
            setBgColor(currentBgColor)
        }
    }, [currentlyEditing.id])

    const handleBackgroundColorUpdate = (value) => {
        setBgColor(value)
        const updatedClassList = removeColors(currentlyEditing.classList, 'bg-')
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: value ? [...updatedClassList, value] : [...updatedClassList],
            },
        })
    }

    return (
        <div>
            <Label
                title="Background Color"
                value={bgColor}
                resetStyle={() => handleBackgroundColorUpdate()}
            />
            <ColorPicker
                currentColor={bgColor}
                onClick={(color) => handleBackgroundColorUpdate(`bg-${color}`)}
                type="background"
                showTransparent={false}
            />
        </div>
    )
}

export default BackgroundColor
