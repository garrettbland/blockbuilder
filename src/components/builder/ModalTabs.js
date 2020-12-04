import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import CloseButton from './CloseButton'

const Tabs = ({ tabComponents }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    /**
     * Set an array of objects with the classList key
     * corrosponding to the tabComponents argument. This is
     * setup so we can add/remove classes from individual tabs.
     * Currently its setup so tab transitions aren't jumpy and we
     * change the classlist after a timeout when the tab index updates
     */
    const [tabClasses, setTabClasses] = useState(
        tabComponents.map((index) => {
            if (currentTabIndex === index) {
                return {
                    classList: 'h-auto',
                }
            } else {
                return {
                    classList: '',
                }
            }
        })
    )

    useEffect(() => {
        /**
         * Each time the tab index changes, update tabClasses and
         * add a classname of 'h-0' to the hidden classes after 150ms
         * This is to avoid weird jumping on tab transitions
         */
        setTimeout(() => {
            setTabClasses(
                tabClasses.map((item, index) => {
                    if (currentTabIndex === index) {
                        return {
                            classList: 'h-auto',
                        }
                    } else {
                        return {
                            classList: 'h-0',
                        }
                    }
                })
            )
        }, 150)
    }, [currentTabIndex])

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
            <div className="relative h-96 overflow-y-scroll shadow-inner">
                {tabComponents.map(({ component }, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full transition duration-150 p-4 mb-20 ${
                            currentTabIndex === index
                                ? 'opacity-100 z-10'
                                : `opacity-0 overflow-hidden z-0`
                        } ${tabClasses[index].classList}`}
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
