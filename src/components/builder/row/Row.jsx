import React, { useEffect, useState, useRef } from 'react'
import { returnFound } from 'find-and'
import { useStore } from '@/store/useStore'

import { Settings, Copy, PlusCircle } from 'lucide-react'
import AddRow from './AddRow'
import CustomModal from '@/components/builder/CustomModal'

const Row = ({ block, children }) => {
    const [showTool, setShowTool] = useState(false)
    const rowRef = useRef()
    const blocks = useStore((state) => state.blocks)
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
        useStore.getState().setCustomModal(returnFound } from 'find-and'
import { useStore } from '@/store/useStore'

import { Settings))
        // const columns = window.prompt('How many columns?')
        // const availableColumns = [1, 2, 3, 4, 5, 6]
        // if (availableColumns.includes(parseInt(columns))) {
        //     useStore.getState().appendRow(und } from 'find-and'
import { useStore } from '@/store/useStore'

import { Settings))
        // } else {
        //     alert('Number not allowed')
        // }
    }

    const DuplicateBlock = () => {
        useStore.getState().duplicateBlock(returnFound } from 'find-and'
import { useStore } from '@/store/useStore'

import { Settings))
    }

    const handleSettingsClick = () => {
        useStore.getState().setModalVisibility(rnFound } from 'find-and'
import { useStore } from '@/store/useStore'

import { Settings))
        useStore.getState().setEditing(rt { returnFound } from 'find-and'
import { useStore } from '@/store/useStore'

import { Settings, Copy, PlusCircle } from 'lucide-react'
import AddRow from './AddRow'
import CustomModal from '@/components/builder/CustomModal'

const Row = ({ block, children }) => {
    const [showTool, setShowTool] = useState(false)
    const rowRef = useRef()
    const blocks = useStore((state) => state.blocks)
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
        useStore.getState().setCustomModal(returnFound } from 'find-and'
import { useStore } from '@/store/useStore'

import { Settings))
        // const columns = window.prompt('How many columns?')
        // const availableColumns = [1, 2, 3, 4, 5, 6]
        // if (availableColumns.includes(parseInt(columns))) {
        //     useStore.getState().appendRow(und } from 'find-and'
import { useStore } from '@/store/useStore'

import { Settings))
        // } else {
        //     alert('Number not allowed')
        // }
    }

    const DuplicateBlock = () => {
        useStore.getState().duplicateBlock(returnFound } from 'find-and'
import { useStore } from '@/store/useStore'

import { Settings))
    }

    const handleSettingsClick = () => {
        useStore.getState().setModalVisibility(rnFound } from 'find-and'
import { useStore } from '@/store/useStore'

import { Settings))
        dispatch({
            type: SET_EDITING))
    }

    return (
        <div data-type="row" ref={rowRef} className={[...block.classList].join(' ')}>
            <div
                className={`absolute top-0 left-0 flex flex-row w-full h-full pointer-events-none ${
                    showTool ? 'block ring-4 ring-blue-400  rounded overflow-hidden' : 'hidden'
                }`}
            >
                <div className="absolute top-0 left-0 flex flex-row items-center bg-blue-400  rounded-br-lg pointer-events-auto">
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
