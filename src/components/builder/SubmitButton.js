import { useDispatch, useSelector } from 'react-redux'
import { SET_EDITING, SET_MODAL_VISIBILITY, UPDATE_BLOCK } from '@/redux/constants'

const SubmitButton = ({ title = 'Submit' }) => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch({
            type: SET_MODAL_VISIBILITY,
            payload: false,
        })

        dispatch({
            type: UPDATE_BLOCK,
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
            <button className="bg-green-500 text-white px-4 py-2" onClick={() => handleSubmit()}>
                {title}
            </button>
        </div>
    )
}

export default SubmitButton
