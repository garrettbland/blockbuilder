import React, { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'
import store from '@/redux/store'
// import { Container } from 'react-smooth-dnd'

import Builder from './Builder'
import NewSection from './section/NewSection'
import Modal from './Modal'
import CustomModal from './CustomModal'
import ActionButton from './ActionButton'
import BetaMessage from '@/components/BetaMessage'

const BuilderContent = () => {
    const blocks = useStore((state) => state.blocks)
    const dispatch = useDispatch()

    const swapSections = ({ removedIndex, addedIndex }) => {
        useStore.getState().swapBlocks(Selector))
    }

    /**
     * Putting here for beta build
     * Sets initial modal
     */
    useEffect(() => {
        useStore.getState().setCustomModal(tor))
    }, [])

    return (
        <div>
            <Modal />
            <CustomModal />
            <div className="z-20 relative">
                {/* <Container
                    onDrop={(dropResult) => swapSections(dropResult)}
                    dragHandleSelector="#section-drag-handle"
                    dragClass="shadow-2xl opacity-75 overflow-hidden"
                >
                    <Builder data={blocks} />
                </Container> */}
                <Builder data={blocks} />
                <NewSection />
            </div>
            <ActionButton />
        </div>
    )
}

const BuilderWrapper = () => {
    return (
        <Provider store={store}>
            <BuilderContent />
        </Provider>
    )
}

export default BuilderWrapper
