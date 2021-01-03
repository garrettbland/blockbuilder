import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { generateColors, removeColors } from '@/utils/colors'
import ColorPicker from '../shared/ColorPicker'
import Label from '@/components/builder/Label'

const TextColor = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [textColor, setTextColor] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentTextColor = extractClass(currentlyEditing.classList, generateColors('text-'))
        if (currentTextColor) {
            setTextColor(currentTextColor)
        }
    }, [currentlyEditing.id])

    const handleTextColorUpdate = (value) => {
        setTextColor(value)
        const updatedClassList = removeColors(currentlyEditing.classList, 'text-')
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, value],
            },
        })
    }

    const handleResetStyle = () => {
        setTextColor(null)
        const updatedClassList = removeColors(currentlyEditing.classList, 'text-')
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
                <Label title="Text Color" value={textColor} />
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
                currentColor={textColor}
                onClick={(color) => handleTextColorUpdate(`text-${color}`)}
                showTransparent={false}
            />
        </div>
    )
}

export default TextColor
