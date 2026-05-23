import { Block, BlockMap } from '../types'

/**
 * Gets all blocks with type 'section' and sorted by order
 */
export const getSections = (blocks: BlockMap): Block[] => {
    return Object.values(blocks)
        .filter((b) => b.type === 'section')
        .sort((a, b) => a.order - b.order)
}

/**
 * Gets the parent block. Null if no parent
 */
export const getParent = (block: Block, blocks: BlockMap): Block | null => {
    if (!block.parentId) return null
    return blocks[block.parentId] ?? null
}

/**
 * Gets all children from block with parentId, sorted by order
 */
const getChildren = (parentId: string, blocks: BlockMap): BlockMap => {
    return Object.values(blocks)
        .filter((b) => b.parentId === parentId)
        .sort((a, b) => a.order - b.order)
        .reduce((acc, block) => {
            acc[block.id] = block
            return acc
        }, {} as BlockMap)
}
