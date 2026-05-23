import { useEffect } from 'react'
import {
    type BlockMap,
    type Block,
    type HeadingData,
    type ParagraphData,
    type ImageData,
    type ButtonData,
} from '../types'

import { textRenderer } from './textRenderer'
import { useStore } from '../store/useStore'
import { HeadingEditor } from '../components/Heading'
import { getSections } from './utilities'

export const RenderBlocks = ({
    blocks,
    parentId = null,
}: {
    blocks: BlockMap
    parentId?: string | null
}) => {
    return Object.entries(blocks)
        .filter(([, b]) => b.parentId === parentId) // only renders blocks with specific parent id. For root blocks, parentId is null
        .sort(([, a], [, b]) => (a.order ?? 0) - (b.order ?? 0)) // sorts blocks by order
        .map(([id, block]) => {
            if (block.visible === false) return null

            switch (block.type) {
                case 'section': {
                    return (
                        <section
                            id={id}
                            className={block.class?.join(' ') || ''}
                            style={block?.styles}
                        >
                            <RenderBlocks blocks={blocks} parentId={id} />
                        </section>
                    )
                }
                case 'div': {
                    return (
                        <div id={id} className={block.class?.join(' ') || ''} style={block?.styles}>
                            <RenderBlocks blocks={blocks} parentId={id} />
                        </div>
                    )
                }
                case 'heading': {
                    const data = block.data as HeadingData
                    return (
                        <h1 className={block.class?.join(' ') || ''} style={block?.styles}>
                            {data.content}
                        </h1>
                    )
                }
                case 'paragraph': {
                    const data = block.data as ParagraphData
                    /**
                     * editorjs stuff
                     */
                    return (
                        <p className={block.class?.join(' ') || ''} style={block?.styles}>
                            {textRenderer(data.content.blocks)}
                        </p>
                    )
                }
                case 'image': {
                    const data = block.data as ImageData
                    return (
                        <img
                            src={data.src}
                            alt={data.alt}
                            className={block.class?.join(' ') || ''}
                            style={block?.styles}
                        />
                    )
                }

                case 'button': {
                    const data = block.data as ButtonData
                    return (
                        <a
                            href={data.href}
                            target={data.target}
                            className={block.class?.join(' ') || ''}
                            style={block?.styles}
                        >
                            {data.label}
                        </a>
                    )
                }

                default:
                    return <div>Unsupported block type: {block.type}</div>
            }
        })
}

/**
 * Renders the initial root blocks (with no parentId) and orders
 */
export const RenderSections = ({ blocks }: { blocks: BlockMap }) => {
    return getSections(blocks).map((b) => <RenderBlockElement block={b} blocks={blocks} />)
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
