import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { autoMargins, removeAutoMargins } from '@/utils/spacing'
import Label from '@/components/builder/Label'
import { AlignLeft, AlignCenter, AlignRight } from 'react-feather'

const AutoMargin = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [autoMargin, setAutoMargin] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentAutoMargin = extractClass(currentlyEditing.classList, autoMargins())
        if (currentAutoMargin) {
            setAutoMargin(currentAutoMargin)
        }
    }, [currentlyEditing.id])

    const handleAutoMarginUpdate = (value) => {
        setAutoMargin(value ? value : null)
        const updatedClassList = removeAutoMargins(currentlyEditing.classList)
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
                title="Button Alignment"
                value={autoMargin}
                resetStyle={() => handleAutoMarginUpdate()}
            />
            <div className="bg-gray-100 rounded-lg overflow-hidden inline-block">
                <div className="flex flex-row items-center cursor-pointer">
                    <AlignLeft
                        className={`w-11 h-11 p-2 ${
                            autoMargin === 'mr-auto'
                                ? 'text-blue-900 bg-blue-100'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                        onClick={() => handleAutoMarginUpdate('mr-auto')}
                        strokeWidth={1.3}
                    />
                    <AlignCenter
                        className={`w-11 h-11 p-2 ${
                            autoMargin === 'mx-auto'
                                ? 'text-blue-900 bg-blue-100'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                        onClick={() => handleAutoMarginUpdate('mx-auto')}
                        strokeWidth={1.3}
                    />
                    <AlignRight
                        className={`w-11 h-11 p-2 ${
                            autoMargin === 'ml-auto'
                                ? 'text-blue-900 bg-blue-100'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                        onClick={() => handleAutoMarginUpdate('ml-auto')}
                        strokeWidth={1.3}
                    />
                </div>
            </div>
        </div>
    )
}

export default AutoMargin
