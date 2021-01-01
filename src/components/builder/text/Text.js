import React, { useEffect, useState, useRef } from 'react'
import { returnFound } from 'find-and'
import { useDispatch, useSelector } from 'react-redux'
import { SET_EDITING, SET_MODAL_VISIBILITY } from '@/redux/constants'
import BlockActionsButton from '../BlockActionsButton'

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
            <div>
                {block.data[0].children[0].text === '' && (
                    <div className="text-lg text-transparent">Empty text...</div>
                )}
                {block.data.map((item, index) => {
                    switch (item.type) {
                        case 'paragraph': {
                            return item.children.map((child, childIndex) => {
                                return <p key={childIndex}>{child.text}</p>
                            })
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
