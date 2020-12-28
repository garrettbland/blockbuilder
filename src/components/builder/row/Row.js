import React, { useEffect, useState, useRef } from 'react'
import { returnFound } from 'find-and'
import { useDispatch, useSelector } from 'react-redux'
import { SET_EDITING, APPEND_ROW, DUPLICATE_BLOCK, SET_MODAL_VISIBILITY } from '@/redux/constants'
import { Settings, Copy } from 'react-feather'

const Row = ({ block, children }) => {
    const [showTool, setShowTool] = useState(false)
    const rowRef = useRef()
    const blocks = useSelector((state) => state.blocks)
    const dispatch = useDispatch()

    useEffect(() => {
        const row = rowRef.current

        row.addEventListener('mouseenter', (event) => {
            setShowTool(true)
        })
        row.addEventListener('mouseleave', (event) => {
            setShowTool(false)
        })
        return () => {
            row.removeEventListener('mouseenter', () => {})
            row.removeEventListener('mouseleave', () => {})
        }
    })

    const AddRow = () => {
        const columns = window.prompt('How many columns?')
        const availableColumns = [1, 2, 3, 4, 5, 6]
        if (availableColumns.includes(parseInt(columns))) {
            dispatch({
                type: APPEND_ROW,
                payload: {
                    id: block.id,
                    columns: parseInt(columns),
                },
            })
        } else {
            alert('Number not allowed')
        }
    }

    const DuplicateBlock = () => {
        dispatch({
            type: DUPLICATE_BLOCK,
            payload: block,
        })
    }

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

    return (
        <div data-type="row" ref={rowRef} className={[...block.classList].join(' ')}>
            <div
                className={`absolute top-0 left-0 flex flex-row w-full h-full ${
                    showTool
                        ? 'block ring-4 ring-orange-600 ring-opacity-70 rounded-lg overflow-hidden'
                        : 'hidden'
                }`}
            >
                <div className="absolute top-0 left-0 flex flex-row items-center bg-orange-600 bg-opacity-70 rounded-br-lg">
                    <Settings
                        onClick={() => handleSettingsClick()}
                        strokeWidth={1.3}
                        className="w-10 h-10 text-orange-900 hover:text-black p-2 cursor-pointer"
                    />
                    <Copy
                        strokeWidth={1.3}
                        className="w-10 h-10 text-orange-900 hover:text-black p-2 cursor-pointer"
                        onClick={() => DuplicateBlock()}
                    />
                </div>
            </div>
            {children}
            <div
                className={`absolute bottom-0 left-0 w-full h-0 bg-orange-500 flex items-center justify-center z-30 ${
                    showTool ? 'block' : 'hidden'
                }`}
            >
                <button
                    onClick={() => AddRow()}
                    className="w-10 h-10 bg-red-500 opacity-50 hover:opacity-100 rounded-full"
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default Row
