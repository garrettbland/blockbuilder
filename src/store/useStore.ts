import { create } from 'zustand'
import { Block, type BlockMap } from '../types'

interface ModalState {
    isOpen: boolean
    title?: string
    content: React.ReactNode | null
    onConfirm?: () => void
    onCancel?: () => void
}

interface StoreState {
    /**
     * ========================
     * State
     * ========================
     */
    isReady: boolean
    currentlyEditing: string | null
    blocks: BlockMap

    /**
     * ========================
     * Modal
     * ========================
     */
    modal: ModalState
    openModal: (options: Omit<ModalState, 'isOpen'>) => void
    closeModal: () => void

    /**
     * ========================
     * Actions
     * ========================
     */
    setInitialBlocks: (blocks: BlockMap) => void
    setEditing: (blockId: string) => void
    addSection: () => void
}

const initialBlocksMap: BlockMap = {}

export const useStore = create<StoreState>((set, get) => ({
    /**
     * ========================
     * State
     * ========================
     */
    isReady: false,
    currentlyEditing: null,
    blocks: initialBlocksMap,

    /**
     * ========================
     * Modal State and Actions
     * ========================
     */
    modal: {
        isOpen: false,
        content: null,
    },

    openModal: (options) => set({ modal: { isOpen: true, ...options } }),
    closeModal: () => set({ modal: { isOpen: false, content: null } }),

    /**
     * ========================
     * Actions
     * ========================
     */

    /**
     * Sets blocks
     */
    setInitialBlocks: (initialBlockMap: BlockMap) => {
        console.log('Setting initial blocks:', initialBlockMap)
        set({ blocks: initialBlockMap, isReady: true })
    },

    /**
     * Sets the currently editing block ID
     */
    setEditing: (blockId: string) => set({ currentlyEditing: blockId }),

    /**
     * Adds a new section block to the blocks map
     */
    addSection: () => {
        console.log('Adding new section block...')
        set((currentState: StoreState) => {
            const id = Date.now().toString()
            const sectionCount = Object.values(currentState.blocks).filter(
                (b) => b.parentId === null
            ).length

            const newBlock: Block = {
                id,
                parentId: null,
                order: sectionCount,
                type: 'section',
                class: ['bg-pink-900', 'p-4'],
            }

            // const newBlocks = {
            //     ...currentState.blocks,
            //     [id]: {
            //         id,
            //         parentId: null,
            //         order: sectionCount,
            //         type: LayoutType['section'],
            //         class: ['bg-pink-900', 'p-4'],
            //     },
            // }
            return { blocks: { ...currentState.blocks, [id]: newBlock } }
        })
    },
}))
