import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '../../../redux/constants'
import BorderRadius from '../shared/BorderRadius'
import BoxShadow from '../shared/BoxShadow'
import BackgroundColor from '../shared/BackgroundColor'
import RemoveBlockButton from '../RemoveBlockButton'
import AutoMargin from '../shared/AutoMargin'
import FontSize from '../shared/FontSize'
import FontWeight from '../shared/FontWeight'
import TextColor from '../shared/TextColor'
import MarginTop from '../shared/MarginTop'
import MarginBottom from '../shared/MarginBottom'

const LinkEdit = () => {
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
            <label>Title</label>
            <input
                value={currentlyEditing.data.title}
                onChange={(event) => handleTextChange(event.target.value)}
                className="border-2 px-4 py-2 rounded"
            />
            <label>Link</label>
            <input
                defaultValue={currentlyEditing.data.href}
                className="border-2 px-4 py-2 rounded"
            />
            <BackgroundColor />
            <BorderRadius />
            <BoxShadow />
            <FontSize />
            <AutoMargin />
            <FontWeight />
            <TextColor />
            <MarginTop />
            <MarginBottom />
            <RemoveBlockButton />
        </div>
    )
}

export default LinkEdit