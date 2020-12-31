import React, { useEffect, useState, useRef } from 'react'
import { returnFound } from 'find-and'
import { useDispatch, useSelector } from 'react-redux'
import {
    SET_EDITING,
    APPEND_ROW,
    DUPLICATE_BLOCK,
    SET_MODAL_VISIBILITY,
    SET_CUSTOM_MODAL,
} from '@/redux/constants'
import { Settings, Copy, PlusCircle } from 'react-feather'
import AddRow from './AddRow'
import CustomModal from '@/components/builder/CustomModal'

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

    const handleAddRow = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: true,
                component: <AddRow block={block} />,
            },
        })
        // const columns = window.prompt('How many columns?')
        // const availableColumns = [1, 2, 3, 4, 5, 6]
        // if (availableColumns.includes(parseInt(columns))) {
        //     dispatch({
        //         type: APPEND_ROW,
        //         payload: {
        //             id: block.id,
        //             columns: parseInt(columns),
        //         },
        //     })
        // } else {
        //     alert('Number not allowed')
        // }
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
                className={`absolute top-0 left-0 flex flex-row w-full h-full pointer-events-none ${
                    showTool
                        ? 'block ring-4 ring-green-600 ring-opacity-50 rounded overflow-hidden'
                        : 'hidden'
                }`}
            >
                <div className="absolute top-0 left-0 flex flex-row items-center bg-green-600 bg-opacity-50 rounded-br-lg pointer-events-auto">
                    <Settings
                        onClick={() => handleSettingsClick()}
                        strokeWidth={1.3}
                        className="w-10 h-10 text-black transform transition duration-150 ease-in-out hover:scale-110 p-2 cursor-pointer"
                    />
                    <Copy
                        strokeWidth={1.3}
                        className="w-10 h-10 text-black transform transition duration-150 ease-in-out hover:scale-110 p-2 cursor-pointer"
                        onClick={() => DuplicateBlock()}
                    />
                    <PlusCircle
                        strokeWidth={1.3}
                        className="w-10 h-10 text-black transform transition duration-150 ease-in-out hover:scale-110 p-2 cursor-pointer"
                        onClick={() => handleAddRow()}
                    />
                </div>
            </div>
            {children}
        </div>
    )
}

export default Row
