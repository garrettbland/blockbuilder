import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    SET_EDITING,
    REMOVE_BLOCK,
    SET_MODAL_VISIBILITY,
    SET_CUSTOM_MODAL,
} from '@/redux/constants'
import ConfirmDelete from '@/components/builder/ConfirmDelete'
import { Trash2 } from 'react-feather'

const RemoveBlockButton = ({ title = 'Remove Element' }) => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: true,
                component: <ConfirmDelete currentlyEditing={currentlyEditing} />,
            },
        })
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
