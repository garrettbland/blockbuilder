import 'blockbuilder/styles.css'
import { BlockBuilder, BlockMap } from 'blockbuilder'

const demoBlocks: BlockMap = {
    '0': {
        id: 'abc123',
        type: 'div',
        parentId: null,
        order: 0,
        class: ['bg-blue-100', 'p-4'],
        // styles: {
        //     border: '0px solid blue',
        // },
    },
    '1': {
        id: 'fsdanj490dsf',
        type: 'heading',
        parentId: 'abc123',
        order: 0,
        class: ['text-2xl', 'font-bold'],
        data: {
            type: 'heading',
            level: 1,
            content: 'Hello World!!!',
        },
    },
    '3232': {
        id: 'fsdanj49sssss0dsf',
        type: 'button',
        parentId: 'abc123',
        order: 0,
        class: ['bg-orange-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-orange-600'],
        data: {
            type: 'button',
            label: 'Click Me',
            href: '#',
            target: '_self',
        },
    },
    '2': {
        id: 'fdsaf333333',
        type: 'heading',
        parentId: 'abc123',
        order: 1,
        class: ['text-4xl', 'font-bold', 'bg-red-100'],
        data: {
            type: 'heading',
            level: 1,
            content: 'More text',
        },
    },
    '3': {
        id: 'dfsfds',
        type: 'heading',
        parentId: 'ddd993jd',
        class: ['text-2xl', 'font-bold', 'bg-green-100'],
        data: {
            type: 'heading',
            level: 1,
            content: 'More text',
        },
    },
    '4': {
        id: 'ddd993jd',
        type: 'div',
        parentId: 'abc123',
        order: 1,
        class: ['bg-pink-100', 'p-12'],
    },
    '5': {
        id: '329023902390',
        type: 'image',
        parentId: 'ddd993jd',

        class: ['w-32', 'h-32', 'object-cover'],
        data: {
            type: 'image',
            src: 'https://placehold.co/600x400/png',
            alt: 'Placeholder Image',
        },
    },
    '6': {
        id: 'dsf902390ds',
        type: 'paragraph',
        parentId: 'ddd993jd',
        class: ['text-black'],
        data: {
            type: 'paragraph',
            content: {
                time: 1696228090471,
                blocks: [
                    {
                        id: '329dk3',
                        type: 'paragraph',
                        data: {
                            text: 'This is a paragraph block <a href="#" class="text-blue-500 hover:underline">click here</a> with <b>bold</b> and <i>italic</i> text.',
                        },
                    },
                    {
                        id: '1yKeXKxN7-',
                        type: 'header',
                        data: {
                            text: 'here is an example with a link <a href="#">click here</a>',
                            level: 3,
                        },
                    },
                    {
                        id: 'os_YI4eub4',
                        type: 'list',
                        data: {
                            type: 'unordered',
                            items: [
                                'It is a block-style editor',
                                'It returns clean data output in JSON',
                                'Designed to be extendable and pluggable',
                            ],
                        },
                    },
                ],
                version: '2.28.0',
            },
        },
    },
}

export default function App() {
    return (
        <div>
            <BlockBuilder initialBlocks={demoBlocks} />
        </div>
    )
}
