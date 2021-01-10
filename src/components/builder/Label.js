import React from 'react'

const Label = ({
    title,
    value,
    defaultValue = 'n/a',
    showClass = true,
    customValue,
    disabled = false,
    resetStyle,
}) => (
    <div className="flex flex-row items-center mb-2 space-x-2">
        <div
            className={`uppercase text-sm text-gray-800 tracking-wide font-semibold ${
                disabled ? 'line-through' : ''
            }`}
        >
            {title}{' '}
            {showClass && (
                <>
                    ({' '}
                    <span className="lowercase text-green-500 font-mono">
                        {value ? `.${value}` : defaultValue}
                    </span>
                    )
                </>
            )}
            {!showClass && customValue && (
                <>
                    ( <span className="lowercase text-green-500 font-mono">{customValue}</span>)
                </>
            )}
        </div>
        {resetStyle && (
            <button
                onClick={() => resetStyle()}
                className="text-sm px-2 py-px bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none"
            >
                Reset Style
            </button>
        )}
    </div>
)

export default Label
