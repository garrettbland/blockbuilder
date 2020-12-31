import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_SECTION } from '@/redux/constants'
import { PlusCircle } from 'react-feather'

const NewSection = () => {
    const dispatch = useDispatch()

    const AddSection = () => {
        dispatch({
            type: ADD_SECTION,
        })
    }

    return (
        <div className="py-24 bg-gray-100 shadow-inner flex justify-center">
            <button
                className="mx-auto rounded-lg text-base font-medium py-2 px-8 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white focus:outline-none shadow-lg"
                onClick={() => AddSection()}
            >
                Add New Section
            </button>
        </div>
    )

    return (
        <div className="py-12">
            <div
                onClick={() => AddSection()}
                className="mx-auto max-w-md flex justify-center items-center bg-white rounded-lg shadow-xl border-4 border-gray-300 py-2 hover:border-blue-400 cursor-pointer opacity-70 hover:opacity-100"
            >
                <div className="flex flex-row items-center text-base text-gray-700 pr-2 hover:border-gray-300">
                    <PlusCircle strokeWidth={1.3} className="w-10 h-10 text-black p-2" />
                    <div>Add Section</div>
                </div>
            </div>
        </div>
    )
}

export default NewSection
