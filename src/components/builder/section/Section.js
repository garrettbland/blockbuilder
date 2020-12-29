import React, { useEffect, useState, useRef } from 'react'
import { Draggable } from 'react-smooth-dnd'
import { returnFound } from 'find-and'
import { useSelector, useDispatch } from 'react-redux'
import { SET_EDITING, ADD_SECTION, DUPLICATE_BLOCK, SET_MODAL_VISIBILITY } from '@/redux/constants'
import { Settings, Copy, Move, PlusCircle } from 'react-feather'

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

    const handleSettingsClick = () => {
        dispatch({
            type: SET_MODAL_VISIBILITY,
            payload: true,
        })
        dispatch({
            type: SET_EDITING,
            payload: returnFound(blocks, { id: block.id }),
        })
    }

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
                    className={`absolute top-0 left-0 flex flex-row w-full h-full z-50 pointer-events-none ${
                        showTool ? 'block' : 'hidden'
                    }`}
                >
                    <div className="absolute top-0 left-0 flex flex-row items-center rounded-br-lg bg-orange-300 pointer-events-auto">
                        <Settings
                            onClick={() => handleSettingsClick()}
                            strokeWidth={1.3}
                            className="w-10 h-10 text-black transform transition duration-150 ease-in-out hover:scale-110 p-2 cursor-pointer"
                        />
                        <Move
                            strokeWidth={1.3}
                            id="section-drag-handle"
                            className="w-10 h-10 text-black transform transition duration-150 ease-in-out hover:scale-110 p-2 cursor-move"
                        />
                        <Copy
                            strokeWidth={1.3}
                            className="w-10 h-10 text-black transform transition duration-150 ease-in-out hover:scale-110 p-2 cursor-pointer"
                            onClick={() => DuplicateBlock()}
                        />
                        <PlusCircle
                            strokeWidth={1.3}
                            className="w-10 h-10 text-black transform transition duration-150 ease-in-out hover:scale-110 p-2 cursor-pointer"
                            onClick={() => AddSection()}
                        />
                    </div>
                </div>
                {showTool && (
                    <>
                        <div className="absolute left-0 top-0 bg-orange-300  w-1 h-full pb-5 z-40"></div>
                        <div className="absolute right-0 top-0 bg-orange-300  w-1 h-full z-40"></div>
                        <div className="absolute left-0 top-0 bg-orange-300  w-full h-1 z-40"></div>
                        <div className="absolute left-0 bottom-0 bg-orange-300  w-full h-1 z-40"></div>
                    </>
                )}
                {children}
            </div>
        </Draggable>
    )
}

export default Section
