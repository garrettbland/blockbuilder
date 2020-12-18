import React, { useEffect, useState, useRef } from 'react'
import { returnFound } from 'find-and'
import { useDispatch, useSelector } from 'react-redux'
import { SET_EDITING, DUPLICATE_BLOCK, SET_MODAL_VISIBILITY } from '@/redux/constants'
import AddContentButton from '../AddContentButton'

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

    const DuplicateBlock = (event) => {
        // will stop any synthetic events from happening after this one
        // example, will not fire edit block
        event.stopPropagation()
        dispatch({
            type: DUPLICATE_BLOCK,
            payload: block,
        })
    }

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
                className={`w-full h-full absolute top-0 left-0 z-20 ${
                    showTool ? 'block' : 'hidden'
                }`}
            >
                <div className="flex items-center justify-center h-full w-full">
                    Edit | <AddContentButton block={block} /> |{' '}
                    <button onClick={(event) => DuplicateBlock(event)}>Duplicate</button>
                </div>
            </div>
            {showTool && (
                <>
                    <div className="absolute left-0 top-0 bg-orange-500 w-1 h-full z-50"></div>
                    <div className="absolute right-0 top-0 bg-orange-500 w-1 h-full z-50"></div>
                    <div className="absolute left-0 top-0 bg-orange-500 w-full h-1 z-50"></div>
                    <div className="absolute left-0 bottom-0 bg-orange-500 w-full h-1 z-50"></div>
                </>
            )}
            <a className={block.classList.join(' ')} href={block.data.href}>
                {block.data.title}
            </a>
        </div>
    )
}

export default Link
