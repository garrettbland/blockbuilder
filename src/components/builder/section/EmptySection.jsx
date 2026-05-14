import React from 'react'
import { useDispatch } from 'react-redux'
import { SET_CUSTOM_MODAL, ADD_ROW } from '@/redux/constants'
import AddRow from '@/components/builder/row/AddRow'
import { PlusCircle } from 'react-feather'

const EmptySection = ({ data: block }) => {
    const dispatch = useDispatch()

    const handleRowAdd = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: true,
                component: <AddRow block={block} type={ADD_ROW} />,
            },
        })
    }

    return (
        <div
            onClick={() => handleRowAdd()}
            className="mx-auto max-w-xl flex justify-center items-center bg-white rounded-lg shadow-xl border-4 border-gray-300 py-2 hover:border-blue-400 cursor-pointer relative z-50 opacity-70 hover:opacity-100"
        >
            <div className="flex flex-row items-center text-base text-gray-700 pr-2 hover:border-gray-300">
                <PlusCircle strokeWidth={1.3} className="w-10 h-10 text-black p-2" />
                <div>Add Columns</div>
            </div>
        </div>
    )
}

export default EmptySection
