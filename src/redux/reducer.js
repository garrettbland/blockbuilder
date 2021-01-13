import {
    UPDATE_BLOCK,
    SET_EDITING,
    SET_MODAL_VISIBILITY,
    UPDATE_EDITING,
    ADD_SECTION,
    ADD_ROW,
    APPEND_ROW,
    REMOVE_BLOCK,
    SWAP_BLOCKS,
    ADD_CONTENT,
    APPEND_CONTENT,
    DUPLICATE_BLOCK,
    SET_CUSTOM_MODAL,
} from './constants'
import { v4 as uuidv4 } from 'uuid'
import { defaultBlocks } from '@/utils/blocks'
const findAnd = require('find-and')

/**
 * Define initial state for app
 */
/**
 * Blocks array describing website
 * Still expirimenting with how I want blocks
 * to be setup.
 */
let initialState = {
    currentlyEditing: null,
    is_modal_visible: false,
    custom_modal: {
        visible: false,
        component: null,
    },
    blocks: [
        {
            id: uuidv4(),
            type: 'section',
            tag: 'section',
            classList: ['relative', 'overflow-hidden', 'pb-72', 'pt-28'],
            data: [
                {
                    id: uuidv4(),
                    type: 'section-background',
                    tag: 'div',
                    classList: [
                        'absolute',
                        'top-0',
                        'left-0',
                        'w-full',
                        'h-full',
                        'bg-cover',
                        'bg-center',
                    ],
                    data: {
                        degree: 180,
                        gradient_type: 'linear',
                        color_start: 'rgba(255, 255, 255, 0.1)',
                        color_end: 'rgba(0, 0, 0, 0.15)',
                        blur: 0,
                        src: '',
                    },
                },
                {
                    id: uuidv4(),
                    type: 'section-divider-bottom',
                    tag: 'div',
                    classList: ['absolute', 'bottom-0', 'left-0', 'w-full', 'h-64', 'text-white'],
                    data: {
                        shape: 'default',
                    },
                },
                {
                    id: uuidv4(),
                    type: 'row',
                    tag: 'div',
                    classList: [
                        'mx-auto',
                        'grid',
                        'grid-cols-1',
                        'md:grid-cols-2',
                        'gap-8',
                        'relative',
                        'z-40',
                        'px-8',
                        'pt-8',
                        'pb-8',
                        'max-w-6xl',
                    ],
                    data: [
                        {
                            id: uuidv4(),
                            type: 'column',
                            tag: 'div',
                            classList: ['col-span-1'],
                            data: [
                                {
                                    id: uuidv4(),
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'pb-5',
                                        'font-extrabold',
                                        'leading-none',
                                        'text-4xl',
                                        'text-black',
                                    ],
                                    data: {
                                        editor: 'slate',
                                        data: [
                                            {
                                                type: 'paragraph',
                                                children: [
                                                    {
                                                        text:
                                                            'A visual website builder made to quickly design websites',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                                {
                                    id: uuidv4(),
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'text-xl',
                                        'font-normal',
                                        'text-blueGray-800',
                                    ],
                                    data: {
                                        editor: 'slate',
                                        data: [
                                            {
                                                type: 'paragraph',
                                                children: [
                                                    {
                                                        text:
                                                            'Block Builder is an online website builder to quick design, develop, and deploy modern websites. It offers a straight forward experience to create websites visually.',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                                {
                                    id: uuidv4(),
                                    type: 'link',
                                    tag: 'a',
                                    classList: [
                                        'px-4',
                                        'py-2',
                                        'text-white',
                                        'inline-block',
                                        'mt-5',
                                        'bg-violet-700',
                                        'rounded-lg',
                                        'shadow-lg',
                                    ],
                                    data: {
                                        target: '_self',
                                        href: '#',
                                        title: 'Try Today',
                                    },
                                },
                            ],
                        },
                        {
                            id: uuidv4(),
                            type: 'column',
                            tag: 'div',
                            classList: ['col-span-1'],
                            data: [
                                {
                                    id: uuidv4(),
                                    type: 'image',
                                    tag: 'img',
                                    classList: ['w-full'],
                                    data: {
                                        src:
                                            'https://isometric.online/wp-content/uploads/2019/08/Business_SVG.svg',
                                        alt: 'Highway Photo',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: uuidv4(),
            type: 'section',
            tag: 'section',
            classList: ['relative', 'pt-12', 'pb-12', 'overflow-hidden'],
            data: [
                {
                    id: uuidv4(),
                    type: 'row',
                    tag: 'div',
                    classList: [
                        'mx-auto',
                        'grid',
                        'grid-cols-1',
                        'md:grid-cols-1',
                        'gap-8',
                        'relative',
                        'z-40',
                        'px-8',
                        'pt-8',
                        'pb-8',
                        'max-w-5xl',
                    ],
                    data: [
                        {
                            id: uuidv4(),
                            type: 'column',
                            tag: 'div',
                            classList: ['col-span-1'],
                            data: [
                                {
                                    id: uuidv4(),
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-black',
                                        'text-md',
                                        'text-center',
                                        'font-light',
                                        'text-5xl',
                                        'pb-2',
                                    ],
                                    data: {
                                        editor: 'slate',
                                        data: [
                                            {
                                                type: 'paragraph',
                                                children: [
                                                    {
                                                        text: 'Content Types',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                                {
                                    id: uuidv4(),
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'text-center',
                                        'font-normal',
                                        'text-xl',
                                        'text-coolGray-500',
                                    ],
                                    data: {
                                        editor: 'slate',
                                        data: [
                                            {
                                                type: 'paragraph',
                                                children: [
                                                    {
                                                        text:
                                                            'Currently there are three main content types available (with many more on the way). They are "text", "image", and "button". See the example below. Click on any to bring up the editing window and change the values. ',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    type: 'row',
                    tag: 'div',
                    classList: [
                        'max-w-4xl',
                        'mx-auto',
                        'grid',
                        'grid-cols-1',
                        'md:grid-cols-3',
                        'gap-8',
                        'relative',
                        'z-40',
                        'px-8',
                        'pt-8',
                        'pb-8',
                        'rounded-md',
                    ],
                    data: [
                        {
                            id: uuidv4(),
                            type: 'column',
                            tag: 'div',
                            classList: ['col-span-1'],
                            data: [
                                {
                                    id: uuidv4(),
                                    type: 'text',
                                    tag: 'p',
                                    classList: ['text-black', 'text-md', 'text-center'],
                                    data: {
                                        editor: 'slate',
                                        data: [
                                            {
                                                type: 'paragraph',
                                                children: [
                                                    {
                                                        text: 'Default text',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                        {
                            id: uuidv4(),
                            type: 'column',
                            tag: 'div',
                            classList: ['col-span-1'],
                            data: [
                                {
                                    id: uuidv4(),
                                    type: 'image',
                                    tag: 'img',
                                    classList: ['w-full', 'rounded-md', 'shadow-xl'],
                                    data: {
                                        src:
                                            'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                                        alt: 'Highway Photo',
                                    },
                                },
                            ],
                        },
                        {
                            id: uuidv4(),
                            type: 'column',
                            tag: 'div',
                            classList: ['col-span-1'],
                            data: [
                                {
                                    id: uuidv4(),
                                    type: 'link',
                                    tag: 'a',
                                    classList: [
                                        'px-4',
                                        'py-2',
                                        'bg-green-500',
                                        'text-white',
                                        'rounded',
                                        'inline-block',
                                        'mx-auto',
                                        'shadow-md',
                                    ],
                                    data: {
                                        target: '_self',
                                        href: '#',
                                        title: 'Button',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: uuidv4(),
            type: 'section',
            tag: 'section',
            classList: ['relative', 'overflow-hidden', 'pt-64', 'pb-64'],
            data: [
                {
                    id: uuidv4(),
                    type: 'section-background',
                    tag: 'div',
                    classList: [
                        'absolute',
                        'top-0',
                        'left-0',
                        'w-full',
                        'h-full',
                        'bg-cover',
                        'bg-center',
                    ],
                    data: {
                        degree: 180,
                        gradient_type: 'linear',
                        color_start: 'rgba(0, 0, 0, 0.1)',
                        color_end: 'rgba(0, 0, 0, 0.1)',
                        blur: '6',
                        src:
                            'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80',
                    },
                },
                {
                    id: uuidv4(),
                    type: 'row',
                    tag: 'div',
                    classList: [
                        'mx-auto',
                        'grid',
                        'grid-cols-1',
                        'md:grid-cols-1',
                        'gap-8',
                        'relative',
                        'z-40',
                        'px-8',
                        'pt-8',
                        'pb-8',
                        'max-w-5xl',
                    ],
                    data: [
                        {
                            id: uuidv4(),
                            type: 'column',
                            tag: 'div',
                            classList: ['col-span-1'],
                            data: [
                                {
                                    id: uuidv4(),
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'text-center',
                                        'pb-2',
                                        'font-black',
                                        'text-7xl',
                                        'text-white',
                                    ],
                                    data: {
                                        editor: 'slate',
                                        data: [
                                            {
                                                type: 'paragraph',
                                                children: [
                                                    {
                                                        text: 'Background Blur Example',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                                {
                                    id: uuidv4(),
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'text-center',
                                        'font-normal',
                                        'text-2xl',
                                        'text-white',
                                    ],
                                    data: {
                                        editor: 'slate',
                                        data: [
                                            {
                                                type: 'paragraph',
                                                children: [
                                                    {
                                                        text:
                                                            'This background has a blur filter applied to it combined with a linear gradient. Try clicking on the section gear icon and go into the "background" tab of the editor and change the blur value to see the effect.',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}

/**
 * Reducer for app to manage global state
 */
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EDITING: {
            return {
                ...state,
                currentlyEditing: action.payload ? action.payload : null,
            }
        }
        case SET_MODAL_VISIBILITY: {
            return {
                ...state,
                is_modal_visible: action.payload ? action.payload : false,
            }
        }
        case SET_CUSTOM_MODAL: {
            return {
                ...state,
                custom_modal: {
                    component: action.payload.component
                        ? action.payload.component
                        : state.custom_modal.component,
                    maxWidth: action.payload.maxWidth
                        ? action.payload.maxWidth
                        : state.custom_modal.maxWidth,
                    ...action.payload,
                },
            }
        }
        case UPDATE_BLOCK: {
            /**
             * Need to update this for classList and stuff other than 'data' key
             */
            return {
                ...state,
                blocks: findAnd.changeProps(
                    state.blocks,
                    { id: action.payload.id },
                    { ...action.payload }
                ),
            }
        }
        case UPDATE_EDITING: {
            return {
                ...state,
                currentlyEditing: action.payload,
            }
        }
        case ADD_SECTION: {
            /**
             * If not payload is supplied, add the new section to the parent blocks array
             */
            if (!action.payload) {
                return {
                    ...state,
                    blocks: [...state.blocks, defaultBlocks('section')],
                }
            }

            return {
                ...state,
                blocks: findAnd.insertObjectAfter(
                    state.blocks,
                    { id: action.payload.id },
                    defaultBlocks('section')
                ),
            }
        }
        case ADD_ROW: {
            /**
             * Find the parent section
             */
            const currentSection = findAnd.returnFound(state.blocks, { id: action.payload.id })

            return {
                ...state,
                blocks: findAnd.changeProps(
                    state.blocks,
                    { id: action.payload.id },
                    {
                        data: [
                            ...currentSection.data,
                            defaultBlocks('row', action.payload.columns),
                        ],
                    }
                ),
            }
        }
        case APPEND_ROW: {
            return {
                ...state,
                blocks: findAnd.insertObjectAfter(
                    state.blocks,
                    { id: action.payload.id },
                    defaultBlocks('row', action.payload.columns)
                ),
            }
        }
        case REMOVE_BLOCK: {
            return {
                ...state,
                blocks: findAnd.removeObject(state.blocks, { id: action.payload.id }),
            }
        }
        case SWAP_BLOCKS: {
            const array_move = (arr, old_index, new_index) => {
                if (new_index >= arr.length) {
                    var k = new_index - arr.length + 1
                    while (k--) {
                        arr.push(undefined)
                    }
                }
                arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
                return arr
            }

            const updated_blocks_order = array_move(
                state.blocks,
                action.payload.removedIndex,
                action.payload.addedIndex
            )

            return {
                ...state,
                blocks: [...updated_blocks_order],
            }
        }
        case ADD_CONTENT: {
            /**
             * Find the parent section
             */
            const currentColumn = findAnd.returnFound(state.blocks, { id: action.payload.id })

            return {
                ...state,
                blocks: findAnd.changeProps(
                    state.blocks,
                    { id: action.payload.id },
                    {
                        data: [...currentColumn.data, defaultBlocks(action.payload.type)],
                    }
                ),
            }
        }
        case APPEND_CONTENT: {
            return {
                ...state,
                blocks: findAnd.insertObjectAfter(
                    state.blocks,
                    { id: action.payload.id },
                    defaultBlocks(action.payload.type)
                ),
            }
        }
        case DUPLICATE_BLOCK: {
            const UpdateIds = (items) => {
                return items.map((item) => {
                    return {
                        ...item,
                        id: uuidv4(),
                        data: Array.isArray(item.data) ? UpdateIds(item.data) : item.data,
                    }
                })
            }

            return {
                ...state,
                blocks: findAnd.insertObjectAfter(
                    state.blocks,
                    { id: action.payload.id },
                    {
                        ...action.payload,
                        id: uuidv4(),
                        data: action.payload.data
                            ? Array.isArray(action.payload.data)
                                ? UpdateIds(action.payload.data)
                                : action.payload.data
                            : null,
                    }
                ),
            }
        }
        default:
            return state
    }
}

export default rootReducer
