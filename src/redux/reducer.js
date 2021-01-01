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
    custom_modal: {
        visible: false,
        component: null,
    },
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
                        shape: 'basic_slant',
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
                                    data: [
                                        {
                                            type: 'paragraph',
                                            children: [{ text: 'A line of text in a paragraph.' }],
                                        },
                                    ],
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
            console.log(action.payload)
            return {
                ...state,
                custom_modal: {
                    component: action.payload.component
                        ? action.payload.component
                        : state.custom_modal.component,
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
