import PropTypes from 'prop-types'
import { useState } from 'react'

const Tabs = ({ tabComponents }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    return (
        <div className="relative overflow-y-scroll">
            <div className="sticky flex flex-row items-center space-x-3">
                {tabComponents.map(({ title }, index) => (
                    <button
                        onClick={() => setCurrentTabIndex(index)}
                        key={index}
                        className="bg-blue-500"
                    >
                        <div>{title}</div>
                    </button>
                ))}
            </div>
            <div className="relative h-80 overflow-y-scroll">
                {tabComponents.map(({ component }, index) => (
                    <div
                        key={index}
                        className={` ${currentTabIndex === index ? 'w-full' : 'hidden'}`}
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
