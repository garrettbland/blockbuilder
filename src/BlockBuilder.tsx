import { render, RenderRoots } from './lib/renderer'
import { BlockMap } from './types'
import { AdminBar } from './ui/AdminBar'
import { useStore } from './store/useStore'
import { useEffect } from 'react'
import { Modal } from './ui/Modal'

export const BlockBuilder = ({ initialBlocks }: { initialBlocks: BlockMap }) => {
    const setInitialBlocks = useStore((state) => state.setInitialBlocks)
    const blocks = useStore((state) => state.blocks)
    const isReady = useStore((state) => state.isReady)
    const addSection = useStore((state) => state.addSection)

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
                <RenderRoots blocks={blocks} />
            </div>
            <div className="h-32 bg-gray-100 shadow-inner flex justify-center items-center">
                <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={addSection}>
                    Add new section
                </button>
            </div>
        </>
    )
}
