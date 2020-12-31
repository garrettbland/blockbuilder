import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_CONTENT } from '@/redux/constants'
import { PlusCircle } from 'react-feather'

const EmptyColumn = ({ data: block }) => {
    const dispatch = useDispatch()

    const AddContent = () => {
        const content_type = window.prompt('What type of content? Text or Image')
        const availableTypes = ['img', 'text', 'link']
        if (availableTypes.includes(content_type)) {
            dispatch({
                type: ADD_CONTENT,
                payload: {
                    id: block.id,
                    type: content_type,
                },
            })
        } else {
            alert('content type not allowed')
        }
    }

    return (
        <div
            onClick={() => AddContent()}
            className="flex justify-center items-center bg-white rounded-lg shadow-xl border-4 border-gray-300 py-2 hover:border-blue-400 cursor-pointer"
        >
            <div className="flex flex-row items-center text-base text-gray-700 pr-2 hover:border-gray-300">
                <PlusCircle strokeWidth={1.3} className="w-10 h-10 text-black p-2" />
                <div>Content</div>
            </div>
        </div>
    )
}

export default EmptyColumn
