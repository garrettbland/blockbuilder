import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-smooth-dnd'
import { SWAP_BLOCKS, SET_CUSTOM_MODAL } from '@/redux/constants'
import Builder from './Builder'
import NewSection from './section/NewSection'
import Modal from './Modal'
import CustomModal from './CustomModal'
import ActionButton from './ActionButton'

const BuilderWrapper = () => {
    const blocks = useSelector((state) => state.blocks)
    const dispatch = useDispatch()

    const swapSections = ({ removedIndex, addedIndex }) => {
        dispatch({
            type: SWAP_BLOCKS,
            payload: {
                removedIndex,
                addedIndex,
            },
        })
    }

    /**
     * Putting here for beta build
     * Sets initial modal
     */
    useEffect(() => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: true,
                component: <BetaModal />,
                maxWidth: 'max-w-3xl',
            },
        })
    }, [])

    return (
        <div>
            <Modal />
            <CustomModal />
            <div className="z-20 relative">
                <Container
                    onDrop={(dropResult) => swapSections(dropResult)}
                    dragHandleSelector="#section-drag-handle"
                    dragClass="shadow-2xl opacity-75 overflow-hidden"
                >
                    <Builder data={blocks} />
                </Container>
                <NewSection />
            </div>
            <ActionButton />
        </div>
    )
}

const BetaModal = () => {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: false,
            },
        })
    }

    return (
        <div>
            <div className="p-4">
                <p className="text-3xl font-black pb-3">Welcome to Block Builder</p>
                <p className="text-gray-800 leading-tight text-xl pb-5">
                    Block builder is a visual website builder made to quickly design websites. This
                    is still very much in development, so thank you for trying it out. ❤️
                </p>
                <p className="text-gray-800 leading-tight text-xl pb-5">
                    Please click around and explore. It's developed in React and TailwindCSS incase
                    you're curious.
                </p>
                <p className="text-gray-800 leading-tight text-xl pb-5">
                    You can save your work by pressing the big blue save button in the corner to get
                    a live preview. If you have any feedback and have a moment, drop me a note at{' '}
                    <a className="text-blue-500 hover:underline" href="mailto:garrettbland@hey.com">
                        garrettbland@hey.com
                    </a>
                </p>
                <p className="text-gray-800 leading-tight text-xl pb-12">Enjoy! (Hopefully 😀)</p>
                <button onClick={() => handleClose()} className="text-gray-700 hover:underline">
                    Close and start building
                </button>
            </div>
        </div>
    )
}

export default BuilderWrapper
