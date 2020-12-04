const Label = ({ title, value, defaultValue = 'n/a', showClass = true }) => (
    <div class="uppercase text-sm text-gray-800 tracking-wide font-semibold mb-2">
        {title}{' '}
        {showClass && (
            <>
                ({' '}
                <span class="lowercase text-green-500 font-mono">
                    {value ? `.${value}` : defaultValue}
                </span>
                )
            </>
        )}
    </div>
)

export default Label
