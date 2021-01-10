import React, { useEffect, useState } from 'react'
import { generateColors } from '@/utils/colors'
import { useDispatch } from 'react-redux'
import { SET_CUSTOM_MODAL } from '@/redux/constants'
import CloseButton from '@/components/builder/CloseButton'

const ColorPicker = ({ currentColor, onClick, showTransparent = true }) => {
    /**
     * Takes on current color to show selected and a 'onClick' callback function
     * Will return the root color. Parent component will be responsible for adding on
     * desired prefix (aka "bg-" or "text-")
     */

    const dispatch = useDispatch()

    const handleModalOpen = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: true,
                component: <ColorPalette currentColor={currentColor} onClick={onClick} />,
                maxWidth: 'max-w-3xl',
            },
        })
    }

    return (
        <div>
            <button
                onClick={() => handleModalOpen()}
                className={`${
                    currentColor ? currentColor.replace('text-', 'bg-') : 'checkered-background'
                } w-24 h-12 rounded-lg cursor-pointer hover:ring-2 hover:ring-green-500 ring-offset-1 focus:outline-none shadow`}
            ></button>
        </div>
    )
}

const ColorPalette = ({ currentColor, onClick }) => {
    const dispatch = useDispatch()
    const [color, setColor] = useState(null)

    useEffect(() => {
        setColor(currentColor ? currentColor.replace('bg-', '').replace('text-', '') : null)
    }, [currentColor])

    const handleColorChange = (color) => {
        setColor(color)
        onClick(color)
        closeModal()
    }

    const closeModal = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: false,
            },
        })
    }

    return (
        <div>
            <div className="flex flex-row items-center justify-between p-4">
                <div className="flex flex-row items-center transition duration-300 ease-in-out text-gray-700">
                    <div className="antialiased font-semibold">Choose color</div>
                </div>
                <CloseButton onClick={() => closeModal()} />
            </div>

            <div className="grid grid-cols-10 gap-2 px-4 pb-4">
                <div
                    onClick={() => handleColorChange(`white`)}
                    className={`h-12 w-full col-span-5 cursor-pointer rounded-lg bg-white flex items-center justify-center hover:ring-2 hover:ring-green-500 hover:ring-offset-1 ${
                        'white' === color ? 'ring-2 ring-green-500 ring-offset-1' : 'shadow'
                    }`}
                >
                    {'white' === color ? (
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
                    ) : null}
                </div>
                <div
                    onClick={() => handleColorChange(`black`)}
                    className={`h-12 w-full col-span-5 cursor-pointer rounded-lg bg-black flex items-center justify-center hover:ring-2 hover:ring-green-500 hover:ring-offset-1 ${
                        'black' === color ? 'ring-2 ring-green-500 ring-offset-1' : 'shadow'
                    }`}
                >
                    {'black' === color ? (
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
                    ) : null}
                </div>
                {generateColors().map((item) => {
                    if (item.includes('white') || item.includes('black')) {
                        return null
                    }
                    return (
                        <div
                            key={item}
                            onClick={() => handleColorChange(item)}
                            className={`h-12 ${`bg-${item}`} cursor-pointer rounded-lg flex items-center justify-center hover:ring-2 hover:ring-green-500 hover:ring-offset-1 ${
                                item === color ? 'ring-2 ring-green-500 ring-offset-1' : 'shadow'
                            }`}
                        >
                            {item === color ? (
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
                            ) : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ColorPicker
