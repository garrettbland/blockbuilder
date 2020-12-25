import React, { useEffect, useState, useRef } from 'react'
import { returnFound } from 'find-and'
import { useDispatch, useSelector } from 'react-redux'
import { SET_EDITING, SET_MODAL_VISIBILITY } from '@/redux/constants'
import BlockActionsButton from '../BlockActionsButton'

const Link = ({ block }) => {
    const [showTool, setShowTool] = useState(false)
    const linkRef = useRef()
    const blocks = useSelector((state) => state.blocks)
    const dispatch = useDispatch()

    useEffect(() => {
        const link = linkRef.current

        link.addEventListener('mouseenter', (event) => {
            setShowTool(true)
        })
        link.addEventListener('mouseleave', (event) => {
            setShowTool(false)
        })
    })

    return (
        <div ref={linkRef} className="relative z-10 flex">
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
            <a className={block.classList.join(' ')} href={block.data.href}>
                {block.data.title}
            </a>
        </div>
    )
}

export default Link
