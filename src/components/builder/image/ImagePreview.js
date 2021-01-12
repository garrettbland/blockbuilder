import React from 'react'
import { useSelector } from 'react-redux'
import Label from '@/components/builder/Label'

const ImagePreview = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    return (
        <div>
            <Label title="Image Preview" showClass={false} />
            <img className="w-48 h-auto" src={currentlyEditing.data.src} />
        </div>
    )
}

export default ImagePreview
