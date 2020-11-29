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
            <button onClick={() => RemoveBlock()}>{title}</button>
        </div>
    )
}

export default RemoveBlockButton
