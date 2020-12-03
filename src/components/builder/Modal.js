import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_EDITING, SET_MODAL_VISIBILITY, UPDATE_BLOCK } from '@/redux/constants'
import RemoveBlockButton from './RemoveBlockButton'
import SubmitButton from './SubmitButton'
import SectionEdit from './section/SectionEdit'
import TextEdit from './text/TextEdit'
import ImageEdit from './image/ImageEdit'
import LinkEdit from './link/LinkEdit'
import RowEdit from './row/RowEdit'

const Modal = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const is_modal_visible = useSelector((state) => state.is_modal_visible)
    const dispatch = useDispatch()
    const overlayNode = useRef()
    const modalNode = useRef()

    useEffect(() => {
        /**
         * Event listener when mounted to listen for mousedown
         * for overlay
         */
        overlayNode.current.addEventListener('mousedown', handleClick)

        /**
         * Return function to be called on component unmount
         */
        return () => {
            overlayNode?.current?.removeEventListener('mousedown', handleClick)
        }
    }, [])

    const handleClick = (event) => {
        if (modalNode.current && modalNode.current.contains(event.target)) {
            /**
             * Do nothing since click is inside sidbar
             */
            return
        }

        /**
         * Handle outside sideBar node click
         */
        dispatch({
            type: SET_MODAL_VISIBILITY,
            payload: false,
        })

        /**
         * We set this timeout to match the transition
         * duration in the modal. If we don't do this,
         * then the z-index changes instantly when closing
         * and flahes but will fade in.
         */
        setTimeout(() => {
            dispatch({
                type: SET_EDITING,
            })
        }, 200)
    }

    return (
        <div
            ref={overlayNode}
            className={`fixed h-screen w-screen bg-opacity-50 bg-black transition duration-200 overflow-y-scroll ${
                is_modal_visible ? 'opacity-100' : 'opacity-0'
            } ${currentlyEditing && currentlyEditing.id ? 'z-30' : 'z-0'}`}
            style={{ backdropFilter: `blur(10px)` }}
        >
            <div
                ref={modalNode}
                className={`bg-white max-w-4xl mx-auto rounded-lg my-12 transition duration-150 ease-in-out transform ${
                    is_modal_visible ? '' : '-translate-y-2'
                }`}
            >
                {currentlyEditing && currentlyEditing.id && (
                    <>
                        <div className="max-h-96">
                            {currentlyEditing.type === 'section' && <SectionEdit />}
                            {currentlyEditing.type === 'row' && <RowEdit />}
                            {currentlyEditing.type === 'text' && <TextEdit />}
                            {currentlyEditing.type === 'image' && <ImageEdit />}
                            {currentlyEditing.type === 'link' && <LinkEdit />}
                        </div>
                        <div className="flex justify-between items-end p-4">
                            <RemoveBlockButton title="Remove Block" />
                            <SubmitButton title="Submit" />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Modal
