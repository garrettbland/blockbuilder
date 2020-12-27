import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { textAlignments, removeTextAlignments } from '@/utils/text'
import Label from '@/components/builder/Label'
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'react-feather'

const TextAlignment = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [textAlignment, setTextAlignment] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentTextAlignment = extractClass(currentlyEditing.classList, textAlignments())
        if (currentTextAlignment) {
            setTextAlignment(currentTextAlignment)
        }
    }, [currentlyEditing.id])

    const handleTextAlignmentUpdate = (value) => {
        setTextAlignment(value)
        const updatedClassList = removeTextAlignments(currentlyEditing.classList)
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, value],
            },
        })
    }

    return (
        <div>
            <Label title="Alignment" value={textAlignment} />
            <div className="bg-gray-100 rounded-lg overflow-hidden inline-block">
                <div className="flex flex-row items-center cursor-pointer">
                    <AlignLeft
                        className={`w-11 h-11 p-2 ${
                            textAlignment === 'text-left'
                                ? 'text-blue-900 bg-blue-100'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                        onClick={() => handleTextAlignmentUpdate('text-left')}
                        strokeWidth={1.3}
                    />
                    <AlignCenter
                        className={`w-11 h-11 p-2 ${
                            textAlignment === 'text-center'
                                ? 'text-blue-900 bg-blue-100'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                        onClick={() => handleTextAlignmentUpdate('text-center')}
                        strokeWidth={1.3}
                    />
                    <AlignRight
                        className={`w-11 h-11 p-2 ${
                            textAlignment === 'text-right'
                                ? 'text-blue-900 bg-blue-100'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                        onClick={() => handleTextAlignmentUpdate('text-right')}
                        strokeWidth={1.3}
                    />
                    <AlignJustify
                        className={`w-11 h-11 p-2 ${
                            textAlignment === 'text-justify'
                                ? 'text-blue-900 bg-blue-100'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                        onClick={() => handleTextAlignmentUpdate('text-justify')}
                        strokeWidth={1.3}
                    />
                </div>
            </div>
        </div>
    )
}

export default TextAlignment
