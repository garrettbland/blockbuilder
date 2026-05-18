import React from 'react'
import { useStore } from '@/store/useStore'

import ConfirmDelete from '@/components/builder/ConfirmDelete'
import { Trash2 } from 'lucide-react'

const RemoveBlockButton = ({ title = 'Remove Element' }) => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const dispatch = useDispatch()

    const handleRemove = () => {
        useStore.getState().setCustomModal('

import ConfirmDelete from '@/components/builder/ConfirmDelete'
import { Trash2 } from 'lucide-react'

const RemoveBlockButton = ({ title = 'Remove Element' }) => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: true,
                component: <ConfirmDelete currentlyEditing={currentlyEditing} />,
                maxWidth: null,
            },))
    }

    return (
        <div>
            <button
                onClick={() => handleRemove()}
                className="rounded-lg px-2 py-2 bg-gray-200 focus:outline-none text-gray-700 hover:bg-gray-300"
            >
                <Trash2 strokeWidth="2.2" className="w-5 h-5" />
            </button>
        </div>
    )
}

export default RemoveBlockButton
