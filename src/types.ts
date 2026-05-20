import { OutputData as EditorJSOutput } from '@editorjs/editorjs'

/**
 * Structural block types — no data, just wrap children
 */
export type LayoutType = 'section' | 'container' | 'row' | 'column' | 'grid' | 'div'

/**
 * Content block types — carry BlockData
 */
export type ContentType =
    | 'heading'
    | 'paragraph'
    | 'image'
    | 'button'
    | 'video'
    | 'divider'
    | 'spacer'
    | 'icon'
    | 'list'
    | 'embed'

export type BlockType = LayoutType | ContentType

// --- Data interfaces ---

interface HeadingData {
    type: 'heading'
    level: 1 | 2 | 3 | 4 | 5 | 6
    content: string
}

interface ParagraphData {
    type: 'paragraph'
    content: EditorJSOutput
}

interface ImageData {
    type: 'image'
    src: string
    alt?: string
    caption?: string
    width?: number
    height?: number
    objectFit?: 'cover' | 'contain' | 'fill'
}

interface ButtonData {
    type: 'button'
    label: string
    href?: string
    target?: '_blank' | '_self'
    variant?: 'primary' | 'secondary' | 'ghost'
    action?: string
}

interface VideoData {
    type: 'video'
    src: string
    poster?: string
    autoplay?: boolean
    controls?: boolean
}

interface DividerData {
    type: 'divider'
}

interface SpacerData {
    type: 'spacer'
    height?: number
}

export type BlockData =
    | HeadingData
    | ParagraphData
    | ImageData
    | ButtonData
    | VideoData
    | DividerData
    | SpacerData

// --- Block ---

export interface Block {
    id: string
    parentId: string | null
    order: number
    type: BlockType
    class?: string[]
    styles?: Record<string, string>
    data?: BlockData
    visible?: boolean
    locked?: boolean
}

/**
 * The structure of a page is a map of blocks, not nested objects
 */
export type BlockMap = Record<string, Block>
