import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import Label from '@/components/builder/Label'

const LinkTitle = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const dispatch = useDispatch()

    const handleTextChange = (newValue) => {
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                data: {
                    ...currentlyEditing.data,
                    title: newValue,
                },
            },
        })
    }

    return (
        <div className="flex flex-col">
            <Label title="Link Title" showClass={false} />
            <input
                value={currentlyEditing.data.title}
                onChange={(event) => handleTextChange(event.target.value)}
                className="border-2 px-4 py-2 rounded"
            />
        </div>
    )
}

export default LinkTitle
