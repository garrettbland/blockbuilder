import { useDispatch } from 'react-redux'
import { SET_EDITING, SET_MODAL_VISIBILITY } from '@/redux/constants'

const CloseButton = ({ onClick }) => {
    const dispatch = useDispatch()

    const handleClose = () => {
        if (onClick) {
            onClick()
        } else {
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
    }

    return (
        <div>
            <button
                onClick={() => handleClose()}
                className="rounded-lg px-2 py-2 bg-gradient-to-b from-red-400 to-red-500 text-red-50 focus:outline-none hover:from-red-500 hover:to-red-600"
            >
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    )
}

export default CloseButton
