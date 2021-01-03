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
                classList: [...updatedClassList, value],
            },
        })
    }

    const handleResetStyle = () => {
        setBgColor(null)
        const updatedClassList = removeColors(currentlyEditing.classList, 'bg-')
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList],
            },
        })
    }

    return (
        <div>
            <div className="flex flex-row items-center space-x-2">
                <Label title="Background Color" value={bgColor} />
                <div className="mb-2">
                    <button
                        onClick={() => handleResetStyle()}
                        className="text-sm px-2 py-px bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none"
                    >
                        Reset Style
                    </button>
                </div>
            </div>
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
