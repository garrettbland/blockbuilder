import { useEffect } from 'react'
import { type BlockMap, type Block } from '../types'
import { getChildren } from './utilities'
import { textRenderer } from './textRenderer'
import { useStore } from '../store/useStore'
import { HeadingEditor } from '../components/Heading'

/**
 * Renders the initial root blocks (with no parentId) and orders
 */
export const RenderRoots = ({ blocks }: { blocks: BlockMap }) => {
    const roots = Object.values(blocks)
        .filter((b) => b.parentId === null)
        .sort((a, b) => a.order - b.order)

    return roots.map((b) => <RenderBlockElement block={b} blocks={blocks} />)
}

export const RenderBlockElement = ({ block, blocks }: { block: Block; blocks: BlockMap }) => {
    const openModal = useStore((state) => state.openModal)
    const closeModal = useStore((state) => state.closeModal)
    const updateBlock = useStore((state) => state.updateBlock)

    if (block.visible === false) return null
    if (block.data) {
        switch (block.data.type) {
            case 'heading':
                return (
                    <h1
                        className={block.class?.join(' ') || ''}
                        style={block?.styles}
                        onClick={() => {
                            openModal({
                                title: 'Edit Heading',
                                content: (
                                    <HeadingEditor
                                        block={block}
                                        onSave={(data) => {
                                            console.log(data)
                                            updateBlock(block.id, { data })
                                            closeModal()
                                        }}
                                    />
                                ),
                                onConfirm: () => console.log('Save heading changes...'),
                            })
                        }}
                    >
                        {block.data.content}
                    </h1>
                )
            case 'paragraph':
                /**
                 * editorjs stuff
                 */
                return (
                    <p className={block.class?.join(' ') || ''} style={block?.styles}>
                        {textRenderer(block.data.content.blocks)}
                    </p>
                )
            case 'image':
                return (
                    <img
                        src={block.data.src}
                        alt={block.data.alt}
                        className={block.class?.join(' ') || ''}
                        style={block?.styles}
                    />
                )
            case 'button':
                return (
                    <a
                        href={block.data.href}
                        target={block.data.target}
                        className={block.class?.join(' ') || ''}
                        style={block?.styles}
                    >
                        {block.data.label}
                    </a>
                )
        }
    }

    /**
     * Layout block
     */
    switch (block.type) {
        case 'section':
            return (
                <section
                    id={block.id}
                    className={block.class?.join(' ') || ''}
                    style={block?.styles}
                >
                    section
                </section>
            )
        case 'div':
            return (
                <div id={block.id} className={block.class?.join(' ') || ''} style={block?.styles}>
                    {getChildren(block.id, blocks).map((child) => (
                        <RenderBlockElement block={child} blocks={blocks} />
                    ))}
                </div>
            )
    }
}
