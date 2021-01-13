import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-smooth-dnd'
import { SWAP_BLOCKS, SET_CUSTOM_MODAL } from '@/redux/constants'
import Builder from './Builder'
import NewSection from './section/NewSection'
import Modal from './Modal'
import CustomModal from './CustomModal'
import ActionButton from './ActionButton'
import BetaMessage from '@/components/BetaMessage'

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
                component: <BetaMessage />,
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

export default BuilderWrapper
