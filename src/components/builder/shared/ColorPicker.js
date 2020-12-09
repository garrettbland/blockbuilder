import React from 'react'
import { generateColors } from '@/utils/colors'

const ColorPicker = ({ currentColor, onClick, showTransparent = true }) => {
    /**
     * Takes on current color to show selected and a 'onClick' callback function
     * Will return the root color. Parent component will be responsible for adding on
     * desired prefix (aka "bg-" or "text-")
     */

    return (
        <div className="grid grid-cols-10 gap-2">
            <div
                onClick={() => onClick(`white`)}
                className={`h-12 w-full col-span-1 cursor-pointer rounded-lg bg-white flex items-center justify-center hover:ring-2 hover:ring-green-500 hover:ring-offset-1 ${
                    'white' === currentColor ? 'ring-2 ring-green-500 ring-offset-1' : 'shadow'
                }`}
            >
                {'white' === currentColor ? (
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
                onClick={() => onClick(`black`)}
                className={`h-12 w-full col-span-1 cursor-pointer rounded-lg bg-black flex items-center justify-center hover:ring-2 hover:ring-green-500 hover:ring-offset-1 ${
                    'black' === currentColor ? 'ring-2 ring-green-500 ring-offset-1' : 'shadow'
                }`}
            >
                {'black' === currentColor ? (
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
            {showTransparent && (
                <div
                    onClick={() => onClick(`transparent`)}
                    className={`h-12 w-full col-span-1 cursor-pointer rounded-lg checkered-background flex items-center justify-center hover:ring-2 hover:ring-green-500 hover:ring-offset-1 ${
                        'transparent' === currentColor
                            ? 'ring-2 ring-green-500 ring-offset-1'
                            : 'shadow'
                    }`}
                >
                    {'transparent' === currentColor ? (
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
            )}
            <div className={showTransparent ? 'col-span-7' : 'col-span-8'}></div>
            {generateColors().map((color) => {
                if (color.includes('white') || color.includes('black')) {
                    return null
                }
                return (
                    <div
                        key={color}
                        onClick={() => onClick(color)}
                        className={`h-12 ${`bg-${color}`} cursor-pointer rounded-lg flex items-center justify-center hover:ring-2 hover:ring-green-500 hover:ring-offset-1 ${
                            color === currentColor
                                ? 'ring-2 ring-green-500 ring-offset-1'
                                : 'shadow'
                        }`}
                    >
                        {color === currentColor ? (
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
    )
}

export default ColorPicker
