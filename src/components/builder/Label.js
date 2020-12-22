const Label = ({
    title,
    value,
    defaultValue = 'n/a',
    showClass = true,
    customValue,
    disabled = false,
}) => (
    <div
        className={`uppercase text-sm text-gray-800 tracking-wide font-semibold mb-2 ${
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
)

export default Label
