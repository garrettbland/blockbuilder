import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'
// import { ReactTrixRTEInput } from 'react-trix-rte'
//import dynamic from 'next/dynamic'

/**
 * Working on this crazy dynamic imports issue...
 */

// const Trix = dynamic(() => import('react-trix-rte').then((module) => module.ReactTrixRTEInput), {
//     ssr: false,
// })

// const Trix = dynamic(() => import('react-trix-rte').then((module) => module.ReactTrixRTEInput), {
//     ssr: false,
// })

const TextContent = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const dispatch = useDispatch()

    const handleTextChange = (event, newValue) => {
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                data: newValue,
            },
        })
    }

    return (
        <div>
            {/* <Trix defaultValue={currentlyEditing.data} onChange={handleTextChange} /> */}
            <div>Editor goes here</div>
        </div>
    )
}

export default TextContent
