import { useDispatch } from 'react-redux'
import { APPEND_CONTENT, SET_CUSTOM_MODAL } from '@/redux/constants'
import CloseButton from '@/components/builder/CloseButton'
import { FileText, Image, MousePointer } from 'react-feather'

const AddContent = ({ block, type = APPEND_CONTENT }) => {
    const dispatch = useDispatch()

    const handleSelect = (content_type) => {
        dispatch({
            type: type,
            payload: {
                id: block.id,
                type: content_type,
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
                    <div className="antialiased font-semibold">Choose type of content</div>
                </div>
                <CloseButton onClick={() => closeModal()} />
            </div>
            <div className="grid grid-cols-1 gap-4 p-4">
                <div className="grid grid-cols-2 gap-4">
                    <div
                        onClick={() => handleSelect('text')}
                        className="col-span-1 rounded-lg bg-gray-300 py-5 text-center flex justify-center hover:bg-blue-400 cursor-pointer group"
                    >
                        <div>
                            <FileText
                                strokeWidth={1.3}
                                className="w-14 h-14 p-2 text-gray-900 group-hover:text-white"
                            />
                            <div className="text-gray-700 group-hover:text-white font-medium">
                                Text
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => handleSelect('img')}
                        className="col-span-1 rounded-lg bg-gray-300 py-5 text-center flex justify-center hover:bg-blue-400 cursor-pointer group"
                    >
                        <div>
                            <Image
                                strokeWidth={1.3}
                                className="w-14 h-14 p-2 text-gray-900 group-hover:text-white"
                            />
                            <div className="text-gray-700 group-hover:text-white font-medium">
                                Image
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => handleSelect('link')}
                        className="col-span-1 rounded-lg bg-gray-300 py-5 text-center flex justify-center hover:bg-blue-400 cursor-pointer group"
                    >
                        <div>
                            <MousePointer
                                strokeWidth={1.3}
                                className="w-14 h-14 p-2 text-gray-900 group-hover:text-white"
                            />
                            <div className="text-gray-700 group-hover:text-white font-medium">
                                Button
                            </div>
                        </div>
                    </div>
                </div>
                {/* {availableColumns.map((columns) => (
                    <div
                        onClick={() => handleSelect(columns)}
                        className={`grid grid-cols-${columns} gap-4 group cursor-pointer rounded-lg`}
                    >
                        {[...Array(columns)].map(() => (
                            <div className="h-12 col-span-1 rounded-lg bg-gray-300 group-hover:bg-blue-400"></div>
                        ))}
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default AddContent
