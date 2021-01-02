import React, { useEffect, useState, useRef } from 'react'
import { returnFound } from 'find-and'
import { useDispatch, useSelector } from 'react-redux'
import { SET_EDITING, SET_MODAL_VISIBILITY } from '@/redux/constants'
import BlockActionsButton from '../BlockActionsButton'
import { chdir } from 'process'

const Text = ({ block }) => {
    const [showTool, setShowTool] = useState(false)
    const textRef = useRef()
    const blocks = useSelector((state) => state.blocks)
    const dispatch = useDispatch()

    useEffect(() => {
        const text = textRef.current

        text.addEventListener('mouseenter', (event) => {
            setShowTool(true)
        })
        text.addEventListener('mouseleave', (event) => {
            setShowTool(false)
        })
        return () => {
            text.removeEventListener('mouseenter', () => {})
            text.removeEventListener('mouseleave', () => {})
        }
    })

    return (
        <div data-type="text" ref={textRef} className={[...block.classList, 'relative'].join(' ')}>
            <div
                onClick={() => {
                    dispatch({
                        type: SET_MODAL_VISIBILITY,
                        payload: true,
                    })
                    dispatch({
                        type: SET_EDITING,
                        payload: returnFound(blocks, { id: block.id }),
                    })
                }}
                className={`absolute top-0 left-0 h-full w-full cursor-pointer ${
                    showTool ? 'block ring-4 rounded' : 'hidden'
                }`}
            >
                <div className="flex items-center justify-center h-full w-full relative z-50">
                    <BlockActionsButton block={block} />
                </div>
            </div>
            <div className="text-sm w-full">
                <pre>
                    <code>{JSON.stringify(block.data, null, 2)}</code>
                </pre>
            </div>
            <div>
                {block.data[0].children[0].text === '' && (
                    <div className="text-lg text-transparent">Empty text...</div>
                )}
                {block.data.map((item, index) => {
                    switch (item.type) {
                        case 'paragraph': {
                            return (
                                <p>
                                    {item.children.map((child, childIndex) => {
                                        switch (child.type) {
                                            case 'link': {
                                                return <a href="#">{child.children[0].text}</a>
                                            }
                                            default: {
                                                return (
                                                    <span
                                                        style={`${child.italic ? 'italic' : ''} ${
                                                            child.bold ? 'bold' : ''
                                                        }`}
                                                    >
                                                        {child.text}
                                                    </span>
                                                )
                                            }
                                        }
                                    })}
                                </p>
                            )
                        }
                        default: {
                            return null
                        }
                    }
                })}
            </div>
        </div>
    )
}

export default Text
