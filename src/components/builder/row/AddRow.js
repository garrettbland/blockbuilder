import { useDispatch } from 'react-redux'
import { APPEND_ROW, SET_CUSTOM_MODAL } from '@/redux/constants'
import CloseButton from '@/components/builder/CloseButton'

const availableColumns = [1, 2, 3, 4, 5, 6]

const AddRow = ({ block }) => {
    const dispatch = useDispatch()

    const handleSelect = (columns) => {
        dispatch({
            type: APPEND_ROW,
            payload: {
                id: block.id,
                columns: parseInt(columns),
            },
        })
        closeModal()
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
                    <div className="antialiased font-semibold">Choose column layout</div>
                </div>
                <CloseButton onClick={() => closeModal()} />
            </div>
            <div className="grid grid-cols-1 gap-4 p-4">
                {availableColumns.map((columns) => (
                    <div
                        onClick={() => handleSelect(columns)}
                        className={`grid grid-cols-${columns} gap-4 group cursor-pointer rounded-lg`}
                    >
                        {[...Array(columns)].map(() => (
                            <div className="h-12 col-span-1 rounded-lg bg-gray-300 group-hover:bg-blue-400"></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddRow
