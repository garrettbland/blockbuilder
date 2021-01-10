import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_CONTENT, SET_CUSTOM_MODAL } from '@/redux/constants'
import { PlusCircle } from 'react-feather'
import AddContent from '@/components/builder/AddContent'

const EmptyColumn = ({ data: block }) => {
    const dispatch = useDispatch()

    const handleAddContent = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: true,
                component: <AddContent block={block} type={ADD_CONTENT} />,
                maxWidth: null,
            },
        })
    }

    return (
        <div
            onClick={() => handleAddContent()}
            className="flex justify-center items-center bg-white rounded-lg shadow-xl border-4 border-gray-300 py-2 hover:border-blue-400 cursor-pointer opacity-70 hover:opacity-100"
        >
            <div className="flex flex-row items-center text-base text-gray-700 pr-2 hover:border-gray-300 ">
                <PlusCircle strokeWidth={1.3} className="w-10 h-10 text-black p-2" />
                <div>Content</div>
            </div>
        </div>
    )
}

export default EmptyColumn
