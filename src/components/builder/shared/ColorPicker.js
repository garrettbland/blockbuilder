import React from 'react'
import { generateColors } from '@/utils/colors'

const ColorPicker = ({ currentColor, onClick }) => {
    /**
     * Takes on current color to show selected and a 'onClick' callback function
     * Will return the root color. Parent component will be responsible for adding on
     * desired prefix (aka "bg-" or "text-")
     */
    return (
        <div className="grid grid-cols-10 gap-2">
            {generateColors().map((color) => {
                if (color.includes('white') || color.includes('black')) {
                    return (
                        <div key={color} className="col-span-5">
                            <div
                                onClick={() => onClick(color)}
                                className={`h-12 w-full ${
                                    color ? `bg-${color}` : 'border-2'
                                } border cursor-pointer`}
                            >
                                {color === currentColor ? 'Selected' : null}
                            </div>
                        </div>
                    )
                }
                return (
                    <div
                        key={color}
                        onClick={() => onClick(color)}
                        className={`h-12 ${
                            color ? `bg-${color}` : 'border-2'
                        } border cursor-pointer`}
                    >
                        {color === currentColor ? 'Selected' : null}
                    </div>
                )
            })}
        </div>
    )
}

export default ColorPicker
