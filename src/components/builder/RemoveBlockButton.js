import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_EDITING, REMOVE_BLOCK, SET_MODAL_VISIBILITY } from '@/redux/constants'

const RemoveBlockButton = ({ title = 'Remove Element' }) => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const dispatch = useDispatch()

    const RemoveBlock = () => {
        dispatch({
            type: SET_MODAL_VISIBILITY,
            payload: false,
        })

        dispatch({
            type: REMOVE_BLOCK,
            payload: currentlyEditing,
        })

        /**
         * We set this timeout to match the transition
         * duration in the modal. If we don't do this,
         * then the z-index changes instantly when closing
         * and flahes but will fade in.
         */
        setTimeout(() => {
            dispatch({
                type: SET_EDITING,
            })
        }, 200)
    }

    return (
        <div>
            <button
                onClick={() => RemoveBlock()}
                className="rounded-lg px-2 py-2 bg-gray-200 focus:outline-none text-gray-700 hover:bg-gray-300"
            >
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    fill="none"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    className="w-5 h-5"
                >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
        </div>
    )
}

export default RemoveBlockButton
