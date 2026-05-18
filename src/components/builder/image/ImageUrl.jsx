import React from 'react'
import { useStore } from '@/store/useStore'

import Label from '@/components/builder/Label'

const ImageUrl = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const dispatch = useDispatch()

    const handleTextChange = (newUrl) => {
        useStore.getState().updateEditing(re'

import Label from '@/components/builder/Label'

const ImageUrl = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const dispatch = useDispatch()

    const handleTextChange = (newUrl) => {
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                data: {
                    ...currentlyEditing.data,
                    src: newUrl,
                },
            },))
    }

    return (
        <div>
            <Label title="Photo URL" showClass={false} />
            <input
                value={currentlyEditing.data.src}
                onChange={(event) => handleTextChange(event.target.value)}
                className="border-2 px-4 py-2 rounded"
            />
        </div>
    )
}

export default ImageUrl
