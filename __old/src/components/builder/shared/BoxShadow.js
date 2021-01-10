import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import { extractClass } from '@/utils/tools'
import { generateBoxShadows, removeBoxShadows } from '@/utils/shadow'
import Label from '@/components/builder/Label'

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
        setBoxShadow(index ? generateBoxShadows()[index] : null)
        const updatedClassList = removeBoxShadows(currentlyEditing.classList)
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                classList: index
                    ? [...updatedClassList, generateBoxShadows()[index]]
                    : [...updatedClassList],
            },
        })
    }

    return (
        <div>
            <div>
                <Label
                    title="Box Shadow"
                    value={boxShadow}
                    resetStyle={() => handleBoxShadowUpdate()}
                />
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
