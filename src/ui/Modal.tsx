import { useStore } from '../store/useStore'

export const Modal = () => {
    const modal = useStore((state) => state.modal)
    const closeModal = useStore((state) => state.closeModal)

    if (!modal.isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={closeModal} />

            {/* Panel */}
            <div className="relative z-10 bg-white rounded-lg shadow-xl w-full max-w-md p-6">
                {modal.title && <h2 className="text-lg font-semibold mb-4">{modal.title}</h2>}

                <div className="mb-6">{modal.content}</div>

                {(modal.onConfirm || modal.onCancel) && (
                    <div className="flex justify-end gap-2">
                        {modal.onCancel && (
                            <button
                                className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
                                onClick={() => {
                                    modal.onCancel?.()
                                    closeModal()
                                }}
                            >
                                Cancel
                            </button>
                        )}
                        {modal.onConfirm && (
                            <button
                                className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
                                onClick={() => {
                                    modal.onConfirm?.()
                                    closeModal()
                                }}
                            >
                                Confirm
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
