import { type BlockMap } from '../types'
import { useState } from 'react'

export const AdminBar = ({ blocks }: { blocks: BlockMap }) => {
    const [showBlocks, setShowBlocks] = useState(false)

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-400  flex items-center px-2">
            <button onClick={() => setShowBlocks(!showBlocks)}>
                {showBlocks ? 'Hide Blocks' : 'Show Blocks'}
            </button>
            <div>
                {showBlocks && (
                    <pre className="text-xs overflow-scroll h-64">
                        {JSON.stringify(blocks, null, 2)}
                    </pre>
                )}
            </div>
        </div>
    )
}
