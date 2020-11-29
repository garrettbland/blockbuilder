import PropTypes from 'prop-types'
import { useState } from 'react'
import CloseButton from './CloseButton'

const Tabs = ({ tabComponents }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    return (
        <div>
            <div className="flex flex-row items-center justify-between p-4">
                <div className="flex flex-row items-center transition duration-300 ease-in-out text-gray-700">
                    {tabComponents.map(({ title }, index) => (
                        <button
                            onClick={() => setCurrentTabIndex(index)}
                            key={index}
                            className={`cursor-pointer antialiased font-semibold rounded-lg px-3 py-1 focus:outline-none ${
                                currentTabIndex === index ? 'bg-gray-200' : 'hover:text-gray-900'
                            }`}
                        >
                            <div>{title}</div>
                        </button>
                    ))}
                </div>
                <CloseButton />
            </div>
            <div className="relative h-80 overflow-y-scroll shadow-inner">
                {tabComponents.map(({ component }, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full transition duration-150 p-4 ${
                            currentTabIndex === index
                                ? 'opacity-100 z-10'
                                : 'h-0 opacity-0 overflow-hidden z-0'
                        }`}
                    >
                        {component}
                    </div>
                ))}
            </div>
        </div>
    )
}

Tabs.propTypes = {
    tabComponents: PropTypes.array.isRequired,
}

export default Tabs
