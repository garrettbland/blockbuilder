import { useDispatch, useSelector } from 'react-redux'
import { Save } from 'react-feather'
import { SET_CUSTOM_MODAL } from '@/redux/constants'

const ActionButton = () => {
    const blocks = useSelector((state) => state.blocks)
    const dispatch = useDispatch()

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
            <div className="flex justify-end p-5">
                <button
                    onClick={() => handleExport()}
                    className="w-16 h-16 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center focus:outline-none"
                >
                    <Save size={32} strokeWidth={1} />
                </button>
            </div>
        </div>
    )
}

const CodePreview = ({ blocks }) => {
    const SerializeBlock = (block) => {
        return `<div>test</div>`
    }

    const SerializeBlocks = (blocks) => {
        console.log(
            blocks.map((block, index) => {
                SerializeBlock(block)
            })
        )
        return `
            <html>
                <head>
                    <title>Website</title>
                </head>
                <body>
                    ${blocks
                        .map((block, index) => {
                            return SerializeBlock(block)
                        })
                        .join('')}
                </body>
            </html>
        `
    }

    return (
        <div className="p-4">
            <pre className="bg-blueGray-800 text-white p-4 rounded">
                <code>{SerializeBlocks(blocks)}</code>
            </pre>
        </div>
    )
}

export default ActionButton
