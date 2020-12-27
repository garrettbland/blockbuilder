import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import Label from '@/components/builder/Label'
const findAnd = require('find-and')

const DividerRemove = ({ position }) => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const [currentlyEditingChild, setCurrentlyEditingChild] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        const currentlyEditingChildIndex = currentlyEditing.data.findIndex(
            (block) => block.type === `section-divider-${position}`
        )
        if (currentlyEditingChildIndex !== -1) {
            setCurrentlyEditingChild(currentlyEditing.data[currentlyEditingChildIndex])
        } else {
            /**
             * No child
             */
            setCurrentlyEditingChild({})
        }
    }, [currentlyEditing])

    const handleSectionDividerRemove = () => {
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                data: findAnd.removeObject(currentlyEditing.data, {
                    id: currentlyEditingChild.id,
                }),
            },
        })
    }

    if (currentlyEditingChild && currentlyEditingChild.data) {
        return (
            <div>
                <div>
                    <Label title="Remove Divider" showClass={false} />
                    <button
                        className="rounded-lg text-base font-medium py-2 px-8 bg-gradient-to-b from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white focus:outline-none"
                        onClick={() => handleSectionDividerRemove()}
                    >
                        Remove Section Divider
                    </button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default DividerRemove
