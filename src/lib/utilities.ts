import { Block, BlockMap } from '../types'

export const getChildren = (parentId: string, blocks: BlockMap): Block[] => {
    return Object.values(blocks)
        .filter((b) => b.parentId === parentId)
        .sort((a, b) => a.order - b.order)
}
