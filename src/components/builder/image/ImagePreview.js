import { useSelector } from 'react-redux'

const ImagePreview = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    return (
        <div>
            <img className="w-64 h-auto" src={currentlyEditing.data.src} />
        </div>
    )
}

export default ImagePreview
