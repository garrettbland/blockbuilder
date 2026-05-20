import { type Block, type HeadingData } from '../types'
import { useStore } from '../store/useStore'
import { useState } from 'react'

type HeadingBlock = Block & {
    data: HeadingData
}

export const HeadingEditor = ({
    block,
    onSave,
}: {
    block: Block
    onSave: (data: HeadingData) => void
}) => {
    const headingBlock = block as HeadingBlock

    const [currentText, setCurrentText] = useState(headingBlock.data.content || '')
    return (
        <div>
            <h1>Heading Editor</h1>
            <p>Here you can edit the heading block...</p>
            <input
                type="text"
                placeholder="Heading text"
                className="border p-2 w-full"
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => onSave({ type: 'heading', level: 1, content: currentText })}
            >
                Save
            </button>
        </div>
    )
}
