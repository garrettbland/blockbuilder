import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
const findAnd = require('find-and')
import { extractClass } from '@/utils/tools'
import { generateColors, removeColors } from '@/utils/colors'
import ColorPicker from '../shared/ColorPicker'
import Label from '@/components/builder/Label'

const DividerColor = ({ position }) => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [currentlyEditingChild, setCurrentlyEditingChild] = useState({})
    const [dividerColor, setDividerColor] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentlyEditingChildIndex = currentlyEditing.data.findIndex(
            (block) => block.type === `section-divider-${position}`
        )
        if (currentlyEditingChildIndex !== -1) {
            setCurrentlyEditingChild(currentlyEditing.data[currentlyEditingChildIndex])
            const currentTextColor = extractClass(
                currentlyEditing.data[currentlyEditingChildIndex].classList,
                generateColors('text-')
            )
            if (currentTextColor) {
                setDividerColor(currentTextColor)
            }
        } else {
            /**
             * No child
             */
            setCurrentlyEditingChild({})
        }
    }, [currentlyEditing])

    const handleDividerColorUpdate = (value) => {
        setDividerColor(value)
        const updatedClassList = removeColors(currentlyEditingChild.classList, 'text-')
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                data: findAnd.changeProps(
                    currentlyEditing.data,
                    { id: currentlyEditingChild.id },
                    {
                        ...currentlyEditingChild,
                        data: {
                            ...currentlyEditingChild.data,
                        },
                        classList: [...updatedClassList, value],
                    }
                ),
            },
        })
    }

    if (currentlyEditingChild && currentlyEditingChild.data) {
        return (
            <div>
                <Label title="Divider Color" value={dividerColor} />
                <ColorPicker
                    currentColor={dividerColor.replace('text-', '')}
                    onClick={(color) => handleDividerColorUpdate(`text-${color}`)}
                />
            </div>
        )
    } else {
        return null
    }
}

export default DividerColor
