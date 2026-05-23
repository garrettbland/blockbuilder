import { Block, BlockMap } from '../types'
import { nanoid } from 'nanoid'

const DEFAULT_CLASSES = ['bg-pink-900', 'p-4']

export const createEmptySection = () => {
    return {
        id: nanoid(),
        parentId: null,
        order: 0,
        type: 'section',
        class: DEFAULT_CLASSES,
    }
    return (blocks: BlockMap) => {
        return (position: 'start' | 'end' = 'end'): Block => {
            const sectionCount = Object.values(blocks).filter((b) => b.parentId === null).length

            const id = nanoid()
            return {
                id,
                parentId: null,
                order: 0,
                type: 'section',
                class: DEFAULT_CLASSES,
            }
        }
    }
}

// createEmptySection()(BlocksMap)('addToEnd')

// 1. findSections() -> returns all blocks with type 'section' | "123", "322"
// 2. findChildren(parentId) -> returns all blocks with parentId | "123" -> "456", "45678"
// 3. getParent(childId) -> returns the block with the specified childId's parentId
// 4. getOlderSibling()
// 5. getYoungerSibling()

// {
//     '123': {
//         type: 'section'
//     },
//     '322': {
//         type: 'section'
//     },
//     '456': {
//         type: 'row',
//         parentId: '123'
//     },
//     '45678': {
//         type: 'row',
//         parentId: '123'
//     },
//     '789': {
//         type: 'column',
//         parentId: '456'
//     }
// }
