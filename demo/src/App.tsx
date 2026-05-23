import 'blockbuilder/styles.css'
import { BlockBuilder, BlockMap } from 'blockbuilder'

const demoBlocks: BlockMap = {
    '1': {
        id: '1',
        parentId: null,
        type: 'section',
        class: ['bg-gray-200', 'p-4'],
        order: 0,
    },
    '2': {
        id: '2',
        parentId: '1',
        type: 'heading',
        data: {
            content: 'Hello World',
        },
        class: ['text-2xl', 'font-bold'],
        order: 0,
    },
    '3': {
        id: '3',
        parentId: '1',
        type: 'paragraph',
        data: {
            content: {
                blocks: [
                    {
                        type: 'paragraph',
                        data: {
                            text: 'This is a sample paragraph block. You can edit this content in the editor.',
                        },
                    },
                ],
            },
        },
        class: ['mt-2'],
        order: 1,
    },
    '4': {
        id: '4',
        parentId: '1',
        type: 'div',
        class: ['bg-blue-200', 'p-4', 'mt-4', 'h-32'],
        order: 2,
    },
}

export default function App() {
    return (
        <div>
            <BlockBuilder initialBlocks={demoBlocks} />
        </div>
    )
}
