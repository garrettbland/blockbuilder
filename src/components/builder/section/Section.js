import React, { useEffect, useState, useRef } from 'react'
import { Draggable } from 'react-smooth-dnd'
import { returnFound } from 'find-and'
import { useSelector, useDispatch } from 'react-redux'
import { SET_EDITING, ADD_SECTION, DUPLICATE_BLOCK, SET_MODAL_VISIBILITY } from '@/redux/constants'

const Section = ({ block, children }) => {
    const [showTool, setShowTool] = useState(false)
    const sectionRef = useRef()
    const blocks = useSelector((state) => state.blocks)
    const dispatch = useDispatch()

    useEffect(() => {
        const section = sectionRef.current

        section.addEventListener('mouseenter', (event) => {
            setShowTool(true)
        })
        section.addEventListener('mouseleave', (event) => {
            setShowTool(false)
        })
        return () => {
            section.removeEventListener('mouseenter', () => {})
            section.removeEventListener('mouseleave', () => {})
        }
    }, [])

    const AddSection = () => {
        dispatch({
            type: ADD_SECTION,
            payload: {
                id: block.id,
            },
        })
    }

    const DuplicateBlock = () => {
        dispatch({
            type: DUPLICATE_BLOCK,
            payload: block,
        })
    }

    return (
        <Draggable>
            <div data-type="section" ref={sectionRef} className={[...block.classList].join(' ')}>
                <div
                    className={`absolute top-0 left-0 flex flex-row z-50 ${
                        showTool ? 'block' : 'hidden'
                    }`}
                >
                    <button
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
                        className={`bg-red-500`}
                    >
                        Section Tools
                    </button>
                    <div className="bg-gray-600 text-white cursor-pointer" id="section-drag-handle">
                        Drag
                    </div>
                    <button
                        onClick={() => DuplicateBlock()}
                        className="bg-pink-500 text-white cursor-pointer"
                    >
                        Duplicate
                    </button>
                </div>
                {showTool && (
                    <>
                        <div className="absolute left-0 top-0 bg-orange-500 w-1 h-full z-50"></div>
                        <div className="absolute right-0 top-0 bg-orange-500 w-1 h-full z-50"></div>
                        <div className="absolute left-0 top-0 bg-orange-500 w-full h-1 z-50"></div>
                        <div className="absolute left-0 bottom-0 bg-orange-500 w-full h-1 z-50"></div>
                    </>
                )}
                {children}
                <div
                    className={`absolute bottom-0 left-0 w-full flex items-center justify-center z-50 ${
                        showTool ? 'block' : 'hidden'
                    }`}
                >
                    <button
                        onClick={() => AddSection()}
                        className="bg-red-500 opacity-50 hover:opacity-100 rounded-t px-6 py-1"
                    >
                        Add Section
                    </button>
                </div>
            </div>
        </Draggable>
    )
}

export default Section
