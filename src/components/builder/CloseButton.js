import { useDispatch } from 'react-redux'
import { SET_EDITING, SET_MODAL_VISIBILITY } from '@/redux/constants'

const CloseButton = () => {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch({
            type: SET_MODAL_VISIBILITY,
            payload: false,
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
            <button className="bg-red-500 text-white px-4 py-2" onClick={() => handleClose()}>
                Close
            </button>
        </div>
    )
}

export default CloseButton
