import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
import Label from '@/components/builder/Label'
import { defaultBlocks } from '@/utils/blocks'

const DividerAdd = ({ position }) => {
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

    const handleSectionDividerAdd = () => {
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                data: [
                    defaultBlocks(
                        position === 'top' ? 'sectionDividerTop' : 'sectionDividerBottom'
                    ),
                    ...currentlyEditing.data,
                ],
            },
        })
    }

    if (currentlyEditingChild && currentlyEditingChild.data) {
        return null
    } else {
        return (
            <div>
                <div>
                    <Label title="Add Divider" showClass={false} />
                    <button
                        className="rounded-lg text-base font-medium py-2 px-8 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white focus:outline-none"
                        onClick={() => handleSectionDividerAdd()}
                    >
                        Add Section Divider
                    </button>
                </div>
            </div>
        )
    }
}

export default DividerAdd
