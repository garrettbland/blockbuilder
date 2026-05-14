import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CUSTOM_MODAL } from '@/redux/constants'

const CustomModal = () => {
    const custom_modal = useSelector((state) => state.custom_modal)
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
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: false,
            },
        })

        setTimeout(() => {
            dispatch({
                type: SET_CUSTOM_MODAL,
                payload: {
                    component: null,
                    maxWidth: null,
                },
            })
        }, 200)
    }

    return (
        <div
            ref={overlayNode}
            className={`fixed h-screen w-screen bg-opacity-50 bg-black transition duration-200 overflow-y-scroll z-40 ${
                custom_modal.visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ backdropFilter: `blur(10px)` }}
        >
            <div
                ref={modalNode}
                className={`bg-white ${
                    custom_modal.maxWidth ? custom_modal.maxWidth : 'max-w-xl'
                } mx-auto rounded-lg overflow-hidden my-12 transition duration-150 ease-in-out transform ${
                    custom_modal.visible ? '' : '-translate-y-2'
                }`}
            >
                <div>{custom_modal.component}</div>
            </div>
        </div>
    )
}

export default CustomModal
