import { useEffect, useMemo, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { Bold, Italic, Link, Underline } from 'react-feather'

import isUrl from 'is-url'
import { Slate, Editable, withReact, useSlate } from 'slate-react'
import { Node, Transforms, Editor, Range, createEditor, Element as SlateElement } from 'slate'
import { withHistory } from 'slate-history'

// import dynamic from 'next/dynamic'
// const TrixEditor = dynamic(() => import('@/components/builder/TrixEditor'), {
//     ssr: false,
// })

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const TextContent = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const dispatch = useDispatch()
    // Create a Slate editor object that won't change across renders.
    const renderElement = useCallback((props) => <Element {...props} />, [])
    const renderLeaf = useCallback((props) => <Leaf {...props} />, [])
    const editor = useMemo(() => withLinks(withHistory(withReact(createEditor()))), [])

    // Keep track of state for the value of the editor.
    // const [value, setValue] = useState([
    //     {
    //         type: 'paragraph',
    //         children: [{ text: 'A line of text in a paragraph.' }],
    //     },
    // ])

    const handleTextChange = (newValue) => {
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                content: {
                    ...currentlyEditing.content,
                    data: newValue,
                },
            },
        })
    }

    return (
        <div>
            <div>
                <Slate
                    editor={editor}
                    value={currentlyEditing.content.data}
                    onChange={(newValue) => handleTextChange(newValue)}
                >
                    <div className="mb-1 inline-block">
                        <div className="flex flex-row cursor-pointer items-center rounded overflow-hidden bg-gray-100">
                            <MarkButton
                                format="bold"
                                icon={<Bold strokeWidth="2.7" size="18" className="w-8 h-8 p-2" />}
                            />
                            <MarkButton
                                format="italic"
                                icon={
                                    <Italic strokeWidth="2.7" size="18" className="w-8 h-8 p-2" />
                                }
                            />
                            <MarkButton
                                format="underline"
                                icon={
                                    <Underline
                                        strokeWidth="2.7"
                                        size="18"
                                        className="w-8 h-8 p-2"
                                    />
                                }
                            />
                            <LinkButton
                                icon={<Link strokeWidth="2.7" size="18" className="w-8 h-8 p-2" />}
                            />
                            {/* <BlockButton format="numbered-list" icon="format_list_numbered" />
                        <BlockButton format="bulleted-list" icon="format_list_bulleted" /> */}
                        </div>
                    </div>
                    <div>
                        <Editable
                            className="p-2 rounded border-2 border-gray-200 focus:border-blue-500"
                            style={{ minHeight: '6rem' }}
                            placeholder="Enter some text…"
                            spellCheck
                            renderElement={renderElement}
                            renderLeaf={renderLeaf}
                        />
                    </div>
                </Slate>
            </div>
        </div>
    )
}

const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format)
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: (n) =>
            LIST_TYPES.includes(!Editor.isEditor(n) && SlateElement.isElement(n) && n.type),
        split: true,
    })
    const newProperties = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
    Transforms.setNodes(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    })

    return !!match
}

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
    switch (element.type) {
        case 'link':
            return (
                <a {...attributes} href={element.url}>
                    {children}
                </a>
            )
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>
        case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>
        case 'heading-one':
            return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
            return <h2 {...attributes}>{children}</h2>
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'numbered-list':
            return <ol {...attributes}>{children}</ol>
        default:
            return <p {...attributes}>{children}</p>
    }
}

const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.code) {
        children = <code>{children}</code>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
        <button
            className={isBlockActive(editor, format) ? 'text-blue-500' : ''}
            // active={isBlockActive(editor, format)}
            onMouseDown={(event) => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        >
            {icon}
        </button>
    )
}

const MarkButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
        <button
            className={
                isMarkActive(editor, format) ? 'text-blue-500' : 'text-gray-600 hover:text-gray-900'
            }
            // active={isMarkActive(editor, format)}
            onMouseDown={(event) => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        >
            {icon}
        </button>
    )
}

const LinkButton = ({ icon }) => {
    const editor = useSlate()
    return (
        <button
            className={isLinkActive(editor) ? 'text-blue-500' : 'text-gray-600 hover:text-gray-900'}
            // active={isLinkActive(editor)}
            onMouseDown={(event) => {
                event.preventDefault()
                const url = window.prompt('Enter the URL of the link:')
                if (!url) return
                insertLink(editor, url)
            }}
        >
            {icon}
        </button>
    )
}

const withLinks = (editor) => {
    const { insertData, insertText, isInline } = editor

    editor.isInline = (element) => {
        return element.type === 'link' ? true : isInline(element)
    }

    editor.insertText = (text) => {
        if (text && isUrl(text)) {
            wrapLink(editor, text)
        } else {
            insertText(text)
        }
    }

    editor.insertData = (data) => {
        const text = data.getData('text/plain')

        if (text && isUrl(text)) {
            wrapLink(editor, text)
        } else {
            insertData(data)
        }
    }

    return editor
}

const insertLink = (editor, url) => {
    if (editor.selection) {
        wrapLink(editor, url)
    }
}

const isLinkActive = (editor) => {
    const [link] = Editor.nodes(editor, {
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link',
    })
    return !!link
}

const unwrapLink = (editor) => {
    Transforms.unwrapNodes(editor, {
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === 'link',
    })
}

const wrapLink = (editor, url) => {
    if (isLinkActive(editor)) {
        unwrapLink(editor)
    }

    const { selection } = editor
    const isCollapsed = selection && Range.isCollapsed(selection)
    const link = {
        type: 'link',
        url,
        children: isCollapsed ? [{ text: url }] : [],
    }

    if (isCollapsed) {
        Transforms.insertNodes(editor, link)
    } else {
        Transforms.wrapNodes(editor, link, { split: true })
        Transforms.collapse(editor, { edge: 'end' })
    }
}

export default TextContent
