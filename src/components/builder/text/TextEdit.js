import React, { useState } from 'react'
import TextContent from './TextContent'
import TextColor from '../shared/TextColor'
import TextAlignment from './TextAlignment'
import FontWeight from '../shared/FontWeight'
import FontSize from '../shared/FontSize'
import LineHeight from './LineHeight'
import MarginTop from '../shared/MarginTop'
import MarginBottom from '../shared/MarginBottom'

const TextEdit = () => {
    const tabComponents = [
        {
            title: 'Content',
            component: (
                <>
                    <TextContent />
                    <TextAlignment />
                </>
            ),
        },
        {
            title: 'Color',
            component: <TextColor />,
        },
        {
            title: 'Font',
            component: (
                <>
                    <FontWeight />
                    <FontSize />
                    <LineHeight />
                </>
            ),
        },
        {
            title: 'Spacing',
            component: (
                <>
                    <MarginTop />
                    <MarginBottom />
                </>
            ),
        },
    ]

    return <Tabs tabComponents={tabComponents} />
}

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
            <div className="relative z-20 h-full max-h-80 overflow-y-scroll">
                {tabComponents.map(({ component }, index) => (
                    <div
                        key={index}
                        className={` ${currentTabIndex === index ? 'block w-full' : 'hidden'}`}
                    >
                        {component}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TextEdit
