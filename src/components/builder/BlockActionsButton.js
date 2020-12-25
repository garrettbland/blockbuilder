import { useDispatch } from 'react-redux'
import { DUPLICATE_BLOCK, APPEND_CONTENT } from '@/redux/constants'
import { Settings, PlusCircle, Copy } from 'react-feather'

const BlockActionsButton = ({ block }) => {
    const dispatch = useDispatch()

    const handleAdd = (event, block) => {
        // will stop any synthetic events from happening after this one
        // example, will not fire edit block
        event.stopPropagation()

        const content_type = window.prompt('What type of content? Text or Image or Link')
        const availableTypes = ['img', 'text', 'link']
        if (availableTypes.includes(content_type)) {
            dispatch({
                type: APPEND_CONTENT,
                payload: {
                    id: block.id,
                    type: content_type,
                },
            })
        } else {
            alert('content type not allowed')
        }
    }

    const DuplicateBlock = (event, block) => {
        // will stop any synthetic events from happening after this one
        // example, will not fire edit block
        event.stopPropagation()

        dispatch({
            type: DUPLICATE_BLOCK,
            payload: block,
        })
    }

    return (
        <div className="flex flex-row items-center bg-white rounded-lg shadow-xl border border-gray-200 text-base text-gray-700 cursor-pointer">
            <Settings strokeWidth={1.3} className="w-10 h-10 hover:text-gray-900 p-2" />
            <PlusCircle
                strokeWidth={1.3}
                className="w-10 h-10 hover:text-gray-900 p-2"
                onClick={(event) => handleAdd(event, block)}
            />
            <Copy
                strokeWidth={1.3}
                className="w-10 h-10 hover:text-gray-900 p-2"
                onClick={(event) => DuplicateBlock(event, block)}
            />
        </div>
    )
}

export default BlockActionsButton
