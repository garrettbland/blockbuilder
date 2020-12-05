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
                className={`h-12 w-full col-span-1 bg-white border cursor-pointer`}
            >
                {'white' === currentColor ? 'Selected' : null}
            </div>
            <div
                onClick={() => onClick(`black`)}
                className={`h-12 w-full col-span-1 bg-black border cursor-pointer`}
            >
                {'black' === currentColor ? 'Selected' : null}
            </div>
            {showTransparent && (
                <div
                    onClick={() => onClick(`transparent`)}
                    className={`h-12 w-full col-span-1 bg-transparent border cursor-pointer`}
                >
                    {'transparent' === currentColor ? 'Selected' : null}
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
                        className={`h-12 ${`bg-${color}`} border cursor-pointer`}
                    >
                        {color === currentColor ? 'Selected' : null}
                    </div>
                )
            })}
        </div>
    )
}

export default ColorPicker
