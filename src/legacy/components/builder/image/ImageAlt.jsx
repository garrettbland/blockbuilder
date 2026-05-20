import React from 'react'
import { useStore } from '@/store/useStore'

import Label from '@/components/builder/Label'

const ImageAlt = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const dispatch = useDispatch()

    const handleTextChange = (newAlt) => {
        useStore.getState().updateEditing(re'

import Label from '@/components/builder/Label'

const ImageAlt = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    const dispatch = useDispatch()

    const handleTextChange = (newAlt) => {
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                data: {
                    ...currentlyEditing.data,
                    alt: newAlt,
                },
            },))
    }

    return (
        <div>
            <Label title="Alt text" showClass={false} />
            <input
                value={currentlyEditing.data.alt ? currentlyEditing.data.alt : ''}
                onChange={(event) => handleTextChange(event.target.value)}
                className="border-2 px-4 py-2 rounded"
            />
        </div>
    )
}

export default ImageAlt
