import React, { useState, useEffect } from 'react'
import { useStore } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateBoxShadows, removeBoxShadows } from '@/utils/shadow'
import Label from '@/components/builder/Label'

const BoxShadow = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
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
        useStore.getState().updateEditing(re } from '@/store/useStore'

import { extractClass } from '@/utils/tools'
import { generateBoxShadows))
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
