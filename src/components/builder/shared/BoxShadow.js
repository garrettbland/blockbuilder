import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { generateBoxShadows, removeBoxShadows } from '@/utils/shadow'

const BoxShadow = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [boxShadow, setBoxShadow] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const currentBoxShadow = extractClass(currentlyEditing.classList, generateBoxShadows())
        if (currentBoxShadow) {
            setBoxShadow(currentBoxShadow)
        }
    }, [currentlyEditing.id])

    const handleBoxShadowUpdate = (index) => {
        setBoxShadow(generateBoxShadows()[index])
        const updatedClassList = removeBoxShadows(currentlyEditing.classList)
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: [...updatedClassList, generateBoxShadows()[index]],
            },
        })
    }

    return (
        <div>
            <div>
                {boxShadow ? boxShadow : 'Default'}
                <input
                    type="range"
                    min="0"
                    max={generateBoxShadows().length - 1}
                    value={generateBoxShadows().findIndex((item) => item === boxShadow)}
                    onChange={(event) => handleBoxShadowUpdate(event.target.value)}
                />
            </div>
        </div>
    )
}

export default BoxShadow
