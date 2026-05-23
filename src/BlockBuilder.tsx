import { RenderBlocks } from './lib/Renderer'
import { BlockMap } from './types'
import { AdminBar } from './ui/AdminBar'
import { useStore } from './store/useStore'
import { useEffect } from 'react'
import { Modal } from './ui/Modal'

export const BlockBuilder = ({ initialBlocks }: { initialBlocks: BlockMap }) => {
    /**
     * Blocks are stored in a flat map in zustand state
     */
    const blocks = useStore((state) => state.blocks)
    const isReady = useStore((state) => state.isReady)

    /**
     * Sets the initial blocks on load
     */
    const setInitialBlocks = useStore((state) => state.setInitialBlocks)

    /**
     * Adds section at the end of the page
     */
    const addSection = useStore((state) => state.addSection)

    /**
     * On load, set the initial blocks from props. This simulates loading from an API or local storage
     */
    useEffect(() => {
        setInitialBlocks(initialBlocks)
    }, [])

    if (!isReady) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Modal />
            <AdminBar blocks={blocks} />
            <div>
                <RenderBlocks blocks={blocks} />
            </div>
            <div className="h-32 bg-gray-100 shadow-inner flex justify-center items-center">
                <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={addSection}>
                    Add new section
                </button>
            </div>
        </>
    )
}
