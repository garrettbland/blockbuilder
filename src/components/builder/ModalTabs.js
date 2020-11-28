import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SET_EDITING } from '@/redux/constants'

const Tabs = ({ tabComponents }) => {
    const dispatch = useDispatch()
    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center space-x-3">
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
                <button
                    className="bg-red-500 text-white px-4 py-2"
                    onClick={() => dispatch({ type: SET_EDITING })}
                >
                    Close
                </button>
            </div>
            <div className="relative h-80 overflow-y-scroll">
                {tabComponents.map(({ component }, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full transition duration-150 ${
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
