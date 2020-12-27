import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
const findAnd = require('find-and')
import { generateShapes } from '@/utils/shapes'
import Label from '@/components/builder/Label'

const DividerShape = ({ position }) => {
    const shapes = generateShapes()
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
                <div className="grid grid-cols-4 gap-4">
                    <div
                        className={`col-span-1 h-20 bg-white text-gray-600 rounded-lg border-2 border-gray-300 hover:border-green-500 relative cursor-pointer overflow-hidden`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                            className={`w-full h-full ${
                                position === 'top' ? 'transform rotate-180' : ''
                            }`}
                        >
                            <path fill="currentColor" fillOpacity="1" d={shapes['default']}></path>
                        </svg>
                        <div className="flex items-center justify-center absolute top-0 left-0 h-full w-full">
                            <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
                                <svg
                                    className="text-green-500"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 h-20 bg-gray-300 rounded-lg">Shap2</div>
                    <div className="col-span-1 h-20 bg-gray-300 rounded-lg">Shap3</div>
                    <div className="col-span-1 h-20 bg-gray-300 rounded-lg">Shap4</div>
                    <div className="col-span-1 h-20 bg-gray-300 rounded-lg">Shap5</div>
                </div>
                <select
                    value={shape}
                    onChange={(event) => handleShapeDividerUpdate(event.target.value)}
                >
                    {Object.entries(shapes).map(([key]) => (
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
