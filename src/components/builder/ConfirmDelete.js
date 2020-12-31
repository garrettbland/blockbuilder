import { useDispatch } from 'react-redux'
import {
    APPEND_ROW,
    SET_CUSTOM_MODAL,
    SET_MODAL_VISIBILITY,
    REMOVE_BLOCK,
    SET_EDITING,
} from '@/redux/constants'
import CloseButton from '@/components/builder/CloseButton'

const ConfirmDelete = ({ currentlyEditing }) => {
    const dispatch = useDispatch()

    const confirmDelete = () => {
        dispatch({
            type: SET_MODAL_VISIBILITY,
            payload: false,
        })

        dispatch({
            type: REMOVE_BLOCK,
            payload: currentlyEditing,
        })

        closeModal()

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

    const closeModal = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: false,
            },
        })
    }

    return (
        <div>
            <div className="flex flex-row items-center justify-between p-4">
                <div className="flex flex-row items-center transition duration-300 ease-in-out text-gray-700">
                    <div className="antialiased font-semibold">
                        Are you sure you want to remove this?
                    </div>
                </div>
                <CloseButton onClick={() => closeModal()} />
            </div>
            <div className="grid grid-cols-4 gap-4 p-4">
                <button
                    className="col-span-2 rounded-lg text-base bg-gradient-to-b from-gray-200 to-gray-300 font-medium py-2 px-8 focus:outline-none"
                    onClick={() => closeModal()}
                >
                    Cancel
                </button>
                <button
                    className="col-span-2 rounded-lg text-base font-medium py-2 px-8 bg-gradient-to-b from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white focus:outline-none"
                    onClick={() => confirmDelete()}
                >
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default ConfirmDelete
