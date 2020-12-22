import React, { useEffect, useState, useRef } from 'react'
import { returnFound } from 'find-and'
import { useDispatch, useSelector } from 'react-redux'
import {
    SET_EDITING,
    DUPLICATE_BLOCK,
    SET_MODAL_VISIBILITY,
    APPEND_CONTENT,
} from '@/redux/constants'
import { Settings, PlusCircle, Copy } from 'react-feather'

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

    const handleAdd = (event, block) => {
        // will stop any synthetic events from happening after this one
        // example, will not fire edit block
        event.stopPropagation()

        const content_type = window.prompt('What type of content? Text or Image or Link')
        const availableTypes = ['img', 'text', 'link']
        if (availableTypes.includes(content_type)) {
            dispatch({
                type: APPEND_CONTENT,
                payload: {
                    id: block.id,
                    type: content_type,
                },
            })
        } else {
            alert('content type not allowed')
        }
    }

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
                className={`absolute top-0 left-0 h-full w-full ${showTool ? 'block' : 'hidden'}`}
            >
                <div className="flex items-center justify-center h-full w-full text-base text-gray-700 relative z-50 cursor-pointer">
                    <div className="flex flex-row items-center bg-white rounded-lg shadow ">
                        <Settings strokeWidth={1.3} className="w-10 h-10 hover:text-gray-900 p-2" />
                        <PlusCircle
                            strokeWidth={1.3}
                            className="w-10 h-10 hover:text-gray-900 p-2"
                            onClick={(event) => handleAdd(event, block)}
                        />
                        <Copy
                            strokeWidth={1.3}
                            className="w-10 h-10 hover:text-gray-900 p-2"
                            onClick={(event) => DuplicateBlock(event)}
                        />
                        {/* Edit | <AddContentButton block={block} /> |{' '}
                        <button onClick={(event) => DuplicateBlock(event)}>Duplicate</button> */}
                    </div>
                </div>
            </div>
            {showTool && (
                <>
                    <div className="absolute left-0 top-0 bg-orange-500 w-1 h-full z-40"></div>
                    <div className="absolute right-0 top-0 bg-orange-500 w-1 h-full z-40"></div>
                    <div className="absolute left-0 top-0 bg-orange-500 w-full h-1 z-40"></div>
                    <div className="absolute left-0 bottom-0 bg-orange-500 w-full h-1 z-40"></div>
                </>
            )}
            <p dangerouslySetInnerHTML={{ __html: block.data }}></p>
        </div>
    )
}

export default Text
