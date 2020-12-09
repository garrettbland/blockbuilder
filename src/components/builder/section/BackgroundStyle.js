import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
const findAnd = require('find-and')
import { defaultBlocks } from '@/utils/blocks'
import { backgroundAttachments, removeBackgroundAttachments } from '@/utils/background'
import { extractClass } from '@/utils/tools'
import Label from '@/components/builder/Label'

const BackgroundStyle = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [backgroundAttachment, setBackgroundAttachment] = useState('')
    const [currentlyEditingChild, setCurrentlyEditingChild] = useState({})
    const [blurDisabled, setBlurDisabled] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const currentlyEditingChildIndex = currentlyEditing.data.findIndex(
            (block) => block.type === 'section-background'
        )
        if (currentlyEditingChildIndex !== -1) {
            setCurrentlyEditingChild(currentlyEditing.data[currentlyEditingChildIndex])
            const currentBackgroundAttachment = extractClass(
                currentlyEditing.data[currentlyEditingChildIndex].classList,
                backgroundAttachments()
            )
            if (currentBackgroundAttachment) {
                setBackgroundAttachment(currentBackgroundAttachment)
                setCurrentlyEditingChild({
                    ...currentlyEditing.data[currentlyEditingChildIndex],
                    blur: 0,
                })
                setBlurDisabled(currentBackgroundAttachment === 'bg-fixed' ? true : false)
            }
        } else {
            /**
             * No bg child
             */
            setCurrentlyEditingChild({})
        }
    }, [currentlyEditing])

    const handleBackgroundUpdate = (key, value) => {
        setCurrentlyEditingChild({
            ...currentlyEditingChild,
            data: {
                ...currentlyEditingChild.data,
                [key]: value,
            },
        })

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
                            [key]: value,
                        },
                    }
                ),
            },
        })
    }

    const handleBackgroundStyleAdd = () => {
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                data: [defaultBlocks('sectionBackground'), ...currentlyEditing.data],
            },
        })
    }

    const handleBackgroundStyleRemove = () => {
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                data: findAnd.removeObject(currentlyEditing.data, { id: currentlyEditingChild.id }),
            },
        })
    }

    const handleBackgroundAttachmentUpdate = (value) => {
        setBackgroundAttachment(value)
        setBlurDisabled(value === 'bg-fixed' ? true : false)
        const updatedClassList = removeBackgroundAttachments(currentlyEditingChild.classList)
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
                            blur: value === 'bg-fixed' ? 0 : currentlyEditingChild.data.blur,
                        },
                        classList: [...updatedClassList, value],
                    }
                ),
            },
        })
    }

    if (currentlyEditingChild && currentlyEditingChild.data) {
        return (
            <div className="space-y-6">
                <div>
                    <Label
                        title="Blur Radius"
                        showClass={false}
                        customValue={`${currentlyEditingChild.data.blur}px`}
                        disabled={backgroundAttachment === 'bg-fixed' ? true : false}
                    />
                    <div className={blurDisabled ? `opacity-40 cursor-not-allowed` : ''}>
                        <input
                            type="range"
                            min="0"
                            max={blurDisabled ? 0 : 20}
                            value={currentlyEditingChild.data.blur}
                            onChange={(event) => handleBackgroundUpdate('blur', event.target.value)}
                            className={blurDisabled ? `pointer-events-none` : ''}
                        />
                    </div>
                </div>
                <div>
                    <Label title="Background Positioning" value={backgroundAttachment} />
                    <div className="w-1/2 grid gap-4 grid-cols-2">
                        <div
                            onClick={() => handleBackgroundAttachmentUpdate('bg-local')}
                            className={`col-span-1 flex flex-row items-center p-3 rounded-lg border-2 ${
                                backgroundAttachment === 'bg-local'
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                            } hover:border-green-500 cursor-pointer`}
                        >
                            <div className="w-10">
                                <div
                                    className={`w-8 h-8 rounded-full ${
                                        backgroundAttachment === 'bg-local'
                                            ? 'bg-green-500 shadow'
                                            : 'bg-gray-300 shadow-inner'
                                    } shadow flex items-center justify-center`}
                                >
                                    {backgroundAttachment === 'bg-local' && (
                                        <svg
                                            className="text-white"
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
                                    )}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div
                                    className={`uppercase text-sm ${
                                        backgroundAttachment === 'bg-local'
                                            ? 'text-gray-800'
                                            : 'text-gray-600'
                                    } tracking-wide font-medium`}
                                >
                                    Regular
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => handleBackgroundAttachmentUpdate('bg-fixed')}
                            className={`col-span-1 flex flex-row items-center p-3 rounded-lg border-2 ${
                                backgroundAttachment === 'bg-fixed'
                                    ? 'border-green-500'
                                    : 'border-gray-300'
                            } hover:border-green-500 cursor-pointer`}
                        >
                            <div className="w-10">
                                <div
                                    className={`w-8 h-8 rounded-full ${
                                        backgroundAttachment === 'bg-fixed'
                                            ? 'bg-green-500 shadow'
                                            : 'bg-gray-300 shadow-inner'
                                    } shadow flex items-center justify-center`}
                                >
                                    {backgroundAttachment === 'bg-fixed' && (
                                        <svg
                                            className="text-white"
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
                                    )}
                                </div>
                            </div>
                            <div className="flex-1">
                                <div
                                    className={`uppercase text-sm ${
                                        backgroundAttachment === 'bg-fixed'
                                            ? 'text-gray-800'
                                            : 'text-gray-600'
                                    } tracking-wide font-medium`}
                                >
                                    Fixed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-48">
                    <div>Degree</div>
                    <input
                        value={currentlyEditingChild.data.degree}
                        onChange={(event) => handleBackgroundUpdate('degree', event.target.value)}
                        className="border-2 px-4 py-2 rounded"
                    />
                </div>
                <div>
                    <div>Gradient Type (linear or radial)</div>
                    <input
                        value={currentlyEditingChild.data.gradient_type}
                        onChange={(event) =>
                            handleBackgroundUpdate('gradient_type', event.target.value)
                        }
                        className="border-2 px-4 py-2 rounded"
                    />
                </div>
                <div>
                    <div>Background Photo URL</div>
                    <input
                        value={currentlyEditingChild.data.src}
                        onChange={(event) => handleBackgroundUpdate('src', event.target.value)}
                        className="border-2 px-4 py-2 rounded"
                    />
                </div>
                <div>
                    <div>Color Start</div>
                    <input
                        value={currentlyEditingChild.data.color_start}
                        onChange={(event) =>
                            handleBackgroundUpdate('color_start', event.target.value)
                        }
                        className="border-2 px-4 py-2 rounded"
                    />
                </div>
                <div>
                    <div>Color End</div>
                    <input
                        value={currentlyEditingChild.data.color_end}
                        onChange={(event) =>
                            handleBackgroundUpdate('color_end', event.target.value)
                        }
                        className="border-2 px-4 py-2 rounded"
                    />
                </div>
                <button onClick={() => handleBackgroundStyleRemove()}>
                    Remove Background Styling
                </button>
            </div>
        )
    }

    return (
        <div>
            No background image set...
            <button onClick={() => handleBackgroundStyleAdd()}>Click here to set</button>
        </div>
    )
}

export default BackgroundStyle
