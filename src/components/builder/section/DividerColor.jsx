import React, { useState, useEffect } from 'react'
import { useStore } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateColors, removeColors } from '@/utils/colors'
import ColorPicker from '../shared/ColorPicker'
import Label from '@/components/builder/Label'
import findAnd from 'find-and'

const DividerColor = ({ position }) => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
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
        useStore.getState().updateEditing(re } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateColors))
    }

    const handleResetStyle = () => {
        setDividerColor(null)
        const updatedClassList = removeColors(currentlyEditingChild.classList, 'text-')
        useStore.getState().updateEditing(re } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateColors))
    }

    if (currentlyEditingChild && currentlyEditingChild.data) {
        return (
            <div>
                <Label
                    title="Divider Color"
                    value={dividerColor}
                    showClass={false}
                    resetStyle={() => handleResetStyle()}
                />

                <ColorPicker
                    currentColor={dividerColor}
                    onClick={(color) => handleDividerColorUpdate(`text-${color}`)}
                    showTransparent={false}
                />
            </div>
        )
    } else {
        return null
    }
}

export default DividerColor
