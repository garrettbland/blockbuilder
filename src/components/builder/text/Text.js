import React, { useEffect, useState, useRef } from 'react'
import { returnFound } from 'find-and'
import { useDispatch, useSelector } from 'react-redux'
import { SET_EDITING, DUPLICATE_BLOCK, SET_MODAL_VISIBILITY } from '@/redux/constants'
import AddContentButton from '../AddContentButton'

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
                className={`absolute top-0 left-0 text-black p-1 h-full text-lg w-full ${
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
            <p dangerouslySetInnerHTML={{ __html: block.data }}></p>
        </div>
    )
}

export default Text
