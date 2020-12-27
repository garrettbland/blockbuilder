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
} from './constants'
const findAnd = require('find-and')
import { v4 as uuidv4 } from 'uuid'
import { defaultBlocks } from '@/utils/blocks'

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
    blocks: [
        {
            id: 'a94a8ce9-8d7c-4559-bdf9-030ec14f7bfe',
            type: 'section',
            tag: 'section',
            classList: ['relative', 'py-12', 'bg-blueGray-100'],
            data: [
                {
                    id: 'b322b4f7-3ed3-4032-a0a5-cf1825972df2',
                    type: 'section-divider-bottom',
                    tag: 'div',
                    classList: [
                        'absolute',
                        'bottom-0',
                        'left-0',
                        'w-full',
                        'h-64',
                        'text-transparent',
                        'text-white',
                    ],
                    data: {
                        wave: 'default',
                    },
                },
                {
                    id: '2d14809a-503d-47f7-9b3a-58fa8ce12332',
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
                        color_start: 'rgba(255, 255, 255, 0)',
                        color_end: 'rgba(255, 255, 255, 0)',
                        blur: '10',
                        src:
                            'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80',
                    },
                },
                {
                    id: '7c17ba2c-7d34-4af5-b75c-415375ef54c4',
                    type: 'row',
                    tag: 'div',
                    classList: [
                        'mx-auto',
                        'flex',
                        'flex-wrap',
                        'p-4',
                        'relative',
                        'z-40',
                        'pt-8',
                        'pb-48',
                        'max-w-4xl',
                    ],
                    data: [
                        {
                            id: '8d0ee26b-e98b-4f17-960d-624db4a8d014',
                            type: 'column',
                            tag: 'div',
                            classList: ['w-full', 'md:w-full', 'p-4'],
                            data: [
                                {
                                    id: 'ea0d606e-d574-4732-9aaf-cac139ea4bd5',
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'text-center',
                                        'font-extrabold',
                                        'text-6xl',
                                        'leading-none',
                                        'text-blue-900',
                                    ],
                                    data: 'Block Builder is a tool to visually build websites',
                                },
                                {
                                    id: 'e9972648-a007-42cf-9b64-0222473b048d',
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'mt-6',
                                        'leading-tight',
                                        'text-center',
                                        'text-blueGray-600',
                                        'font-light',
                                        'text-2xl',
                                    ],
                                    data:
                                        'Designing websites is hard. Block Builder is a design tool to help you build websites with a safety net. It gives you all the control you expect, but abstracts the complicated parts away.',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'cc04f976-2532-414b-8270-15169f09a88e',
            type: 'section',
            tag: 'section',
            classList: ['relative', 'py-12'],
            data: [
                {
                    id: '8835a23b-708d-4115-b7e6-7bea48d82ea4',
                    type: 'row',
                    tag: 'div',
                    classList: [
                        'max-w-4xl',
                        'mx-auto',
                        'flex',
                        'flex-wrap',
                        'p-4',
                        'mt-12',
                        'mb-12',
                        'relative',
                        'z-40',
                    ],
                    data: [
                        {
                            id: '21751d8d-ffa4-4508-822f-6e8303aec1bf',
                            type: 'column',
                            tag: 'div',
                            classList: ['w-full', 'md:w-1/2', 'p-4'],
                            data: [
                                {
                                    id: '42205de1-d8ae-4c93-bd5a-f52299f4d541',
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'text-blueGray-900',
                                        'leading-none',
                                        'text-2xl',
                                        'font-extrabold',
                                        'mb-3',
                                    ],
                                    data: 'Build whatever you want',
                                },
                                {
                                    id: '52407c3f-87bc-42b8-a36e-02a05e930d71',
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'text-blueGray-600',
                                        'leading-normal',
                                        'mb-6',
                                    ],
                                    data:
                                        'Edit completely everything. Add shadows, edit colors, give a pop of gradient, change font size, weight, and color, anything. Everything you see now, was designed with Block Builder',
                                },
                                {
                                    id: 'c5bbfa6a-1b1e-45b1-a808-5d119415755a',
                                    type: 'link',
                                    tag: 'a',
                                    classList: [
                                        'px-4',
                                        'py-2',
                                        'inline-block',
                                        'bg-indigo-800',
                                        'text-indigo-50',
                                        'shadow-lg',
                                        'rounded-lg',
                                        'text-base',
                                        'font-normal',
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
                            id: 'a505420e-4e46-4c82-be50-028700851068',
                            type: 'column',
                            tag: 'div',
                            classList: ['w-full', 'md:w-1/2', 'p-4'],
                            data: [
                                {
                                    id: 'd477f6b1-9847-49bd-b0ed-0300fc851ae5',
                                    type: 'image',
                                    tag: 'img',
                                    classList: ['w-full', 'rounded-md', 'shadow-lg'],
                                    data: {
                                        src:
                                            'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1353&amp;q=80',
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
            id: '0342f60c-6050-484c-aaa0-d38151bbc255',
            type: 'section',
            tag: 'section',
            classList: ['relative', 'py-12'],
            data: [
                {
                    id: '6c924da6-7589-40fe-9f47-7f8ab88cfe5b',
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
                        degree: '90',
                        gradient_type: 'linear',
                        color_start: '#EC4899',
                        color_end: '#3B82F6',
                        blur: 0,
                        src:
                            'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1500&amp;q=80',
                    },
                },
                {
                    id: '3727858e-0dbc-43fe-9e57-4fbe32a53815',
                    type: 'row',
                    tag: 'div',
                    classList: [
                        'max-w-4xl',
                        'mx-auto',
                        'flex',
                        'flex-wrap',
                        'p-4',
                        'mt-12',
                        'mb-12',
                        'relative',
                        'z-40',
                        'bg-white',
                        'shadow-md',
                        'rounded-lg',
                        'bg-opacity-30',
                    ],
                    data: [
                        {
                            id: '9e416ba4-f3a9-4b93-a6cc-2a19d04286ff',
                            type: 'column',
                            tag: 'div',
                            classList: ['w-full', 'md:w-1/3', 'p-4'],
                            data: [
                                {
                                    id: '15b14d00-3fc5-4f9c-919b-a032e8840e68',
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'leading-6',
                                        'text-white',
                                        'text-center',
                                    ],
                                    data:
                                        '<strong>Built with Tailwind</strong></br>All code is exportable using Tailwind CSS and HTML',
                                },
                            ],
                        },
                        {
                            id: '169ddf3c-5bc1-4478-a5e9-ce4c6dd5da64',
                            type: 'column',
                            tag: 'div',
                            classList: ['w-full', 'md:w-1/3', 'p-4'],
                            data: [
                                {
                                    id: 'eedd06e2-c7b2-4057-a551-992dbc9295ff',
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'leading-6',
                                        'text-white',
                                        'text-center',
                                    ],
                                    data:
                                        '<strong>Built with Tailwind</strong></br>All code is exportable using Tailwind CSS and HTML',
                                },
                            ],
                        },
                        {
                            id: 'f651ed6a-9de3-4eb8-af69-1a8d196b8549',
                            type: 'column',
                            tag: 'div',
                            classList: ['w-full', 'md:w-1/3', 'p-4'],
                            data: [
                                {
                                    id: 'b899f5ad-79c1-4721-8017-18446ee8bee3',
                                    type: 'text',
                                    tag: 'p',
                                    classList: [
                                        'text-md',
                                        'leading-6',
                                        'text-white',
                                        'text-center',
                                    ],
                                    data:
                                        '<strong>Built with Tailwind</strong></br>All code is exportable using Tailwind CSS and HTML',
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
            return {
                ...state,
                blocks: findAnd.insertObjectAfter(
                    state.blocks,
                    { id: action.payload.id },
                    {
                        ...action.payload,
                        id: uuidv4(),
                    }
                ),
            }
        }
        default:
            return state
    }
}

export default rootReducer
