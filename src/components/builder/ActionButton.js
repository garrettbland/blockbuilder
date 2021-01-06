import { useDispatch, useSelector } from 'react-redux'
import { Save, Settings } from 'react-feather'
import { SET_CUSTOM_MODAL } from '@/redux/constants'

const ActionButton = () => {
    const blocks = useSelector((state) => state.blocks)
    const dispatch = useDispatch()

    const handleSettingsClick = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: true,
                component: <SettingsModal />,
                maxWidth: null,
            },
        })
    }

    const handleExport = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: true,
                component: <CodePreview blocks={blocks} />,
                maxWidth: 'max-w-5xl',
            },
        })
    }

    return (
        <div className="fixed bottom-0 inset-x-0 z-20">
            <div className="flex justify-end items-center p-5 space-x-3">
                <button
                    onClick={() => handleSettingsClick()}
                    className="w-10 h-10 bg-gradient-to-b from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-full shadow-xl flex items-center justify-center focus:outline-none"
                >
                    <Settings size={32} strokeWidth={1} />
                </button>
                <button
                    onClick={() => handleExport()}
                    className="w-16 h-16 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-full shadow-xl flex items-center justify-center focus:outline-none"
                >
                    <Save size={32} strokeWidth={1} />
                </button>
            </div>
        </div>
    )
}

const CodePreview = ({ blocks }) => {
    /**
     * Takes in an blocks array and recursivley builds the site
     * and adds in buttons
     * @param {Array} data
     */
    const Builder = (data) => {
        return data
            .map((block) => {
                switch (block.type) {
                    case 'section': {
                        return `
                            <section class="${block.classList.join(' ')}">
                                ${block.data.length > 0 ? Builder(block.data) : ''}
                            </section>
                        `
                    }
                    case 'section-background': {
                        return `<div class="${block.classList.join(' ')}"></div>`
                    }
                    case 'section-divider-top': {
                        return `<div class="${block.classList.join(' ')}"></div>`
                    }
                    case 'section-divider-bottom': {
                        return `<div class="${block.classList.join(' ')}"></div>`
                    }
                    case 'row': {
                        if (Array.isArray(block.data) && block.data.length > 0) {
                            return `
                        <div class="${block.classList.join(' ')}">
                            ${Builder(block.data)}
                        </div>
                    `
                        }
                    }
                    case 'column': {
                        console.log(block.data)
                        if (Array.isArray(block.data) && block.data.length > 0) {
                            return `
                        <div class="${block.classList.join(' ')}">
                            ${Builder(block.data)}
                        </div>
                    `
                        }
                    }
                    case 'text': {
                        return `
                        <div class="${block.classList.join(' ')}">text content</div>
                    `
                    }
                    case 'image': {
                        return `
                        <img class="${block.classList.join(' ')}" src="${block.data.src}" alt="${
                            block.data.alt
                        }"/>
                    `
                    }
                    case 'link': {
                        return `
                        <a class="${block.classList.join(' ')}" href="${block.data.href}" target="${
                            block.data.target
                        }">
                            ${block.data.title}
                        </a>
                    `
                    }
                }
            })
            .join(' ')
    }

    const SerializeBlocks = (blocks) => {
        return `
            <html>
                <head>
                    <title>Website</title>
                </head>
                <body>
                    ${Builder(blocks).trim()}
                </body>
            </html>
        `
    }

    return (
        <div className="p-4">
            <div className="bg-blueGray-800 text-white p-4 rounded font-mono">
                {SerializeBlocks(blocks)}
            </div>
        </div>
    )
}

const SettingsModal = () => {
    return (
        <div className="p-4 flex items-center justify-center">
            <div className="my-12">
                <p className="font-bold text-lg tet-black text-center">Coming Soon</p>
                <p className="text-gray-800 text-center">
                    This is where editing whole page level options will go. For example, typeface,
                    title, meta descriptions, etc.
                </p>
            </div>
        </div>
    )
}

export default ActionButton
