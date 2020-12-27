import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
const findAnd = require('find-and')
import { generateShapes } from '@/utils/shapes'
import Label from '@/components/builder/Label'

const DividerShape = ({ position }) => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [currentlyEditingChild, setCurrentlyEditingChild] = useState({})
    const [dividerColor, setDividerColor] = useState('')
    const [shape, setShape] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentlyEditingChildIndex = currentlyEditing.data.findIndex(
            (block) => block.type === `section-divider-${position}`
        )
        if (currentlyEditingChildIndex !== -1) {
            const editingChild = currentlyEditing.data[currentlyEditingChildIndex]
            setCurrentlyEditingChild(editingChild)

            if (editingChild.data.shape) {
                /**
                 * Shape is set
                 */
                setShape(editingChild.data.shape)
            }
        } else {
            /**
             * No child
             */
            setCurrentlyEditingChild({})
        }
    }, [currentlyEditing])

    const handleShapeDividerUpdate = (value) => {
        setShape(value)
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
                            shape: value,
                        },
                    }
                ),
            },
        })
    }

    if (currentlyEditingChild && currentlyEditingChild.data) {
        return (
            <div>
                <Label title="Divider Shape" showClass={false} />
                Current shape: {shape}
                <select
                    value={shape}
                    onChange={(event) => handleShapeDividerUpdate(event.target.value)}
                >
                    {Object.entries(generateShapes()).map(([key]) => (
                        <option value={key}>{key}</option>
                    ))}
                </select>
            </div>
        )
    } else {
        return null
    }
}

export default DividerShape
