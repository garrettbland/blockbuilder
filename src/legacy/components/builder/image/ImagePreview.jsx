import React from 'react'
import { useStore } from '@/store/useStore'
import Label from '@/components/builder/Label'

const ImagePreview = () => {
    const currentlyEditing = useStore((state) => state.currentlyEditing)
    return (
        <div>
            <Label title="Image Preview" showClass={false} />
            <img className="w-48 h-auto" src={currentlyEditing.data.src} />
        </div>
    )
}

export default ImagePreview
