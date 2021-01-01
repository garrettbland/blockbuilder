import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_EDITING } from '@/redux/constants'

// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

// import dynamic from 'next/dynamic'
// const TrixEditor = dynamic(() => import('@/components/builder/TrixEditor'), {
//     ssr: false,
// })

const TextContent = () => {
    const currentlyEditing = useSelector((state) => state.currentlyEditing)
    const dispatch = useDispatch()
    // Create a Slate editor object that won't change across renders.
    const editor = useMemo(() => withReact(createEditor()), [])

    // Keep track of state for the value of the editor.
    // const [value, setValue] = useState([
    //     {
    //         type: 'paragraph',
    //         children: [{ text: 'A line of text in a paragraph.' }],
    //     },
    // ])

    const handleTextChange = (newValue) => {
        dispatch({
            type: UPDATE_EDITING,
            payload: {
                ...currentlyEditing,
                data: newValue,
            },
        })
    }

    return (
        <div>
            <div>
                <Slate
                    editor={editor}
                    value={currentlyEditing.data}
                    onChange={(newValue) => handleTextChange(newValue)}
                >
                    <div>
                        <button>Bold</button>
                        <button>Italic</button>
                        <button>Link</button>
                    </div>
                    <div className="border-2 border-gray-200 p-2 rounded">
                        <Editable
                            style={{ minHeight: '6rem' }}
                            placeholder="Enter some text…"
                            spellCheck
                            autoFocus
                            onKeyDown={(event) => {
                                console.log(event.key)
                            }}
                        />
                    </div>
                </Slate>
            </div>
        </div>
    )
}

export default TextContent
