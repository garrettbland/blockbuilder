import React from 'react'
import { useDispatch } from 'react-redux'
import { SET_CUSTOM_MODAL } from '@/redux/constants'
import EmailCapture from './EmailCapture'

const BetaMessage = () => {
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
                <p className="text-3xl font-bold pb-4">Welcome to Block Builder</p>
                <p className="text-gray-800 leading-tight text-xl pb-5">
                    Block builder is a visual website builder made to quickly design websites. This
                    is still very much in development, so thank you for trying it out. ❤️
                </p>
                <p className="text-gray-800 leading-tight text-xl pb-5">
                    Please click around and explore. It's being developed in React and TailwindCSS
                    incase you're curious.
                </p>
                <p className="text-gray-800 leading-tight text-xl pb-5">
                    You can save your work by pressing the big blue save button in the bottom right
                    corner to get a live preview. If you have any feedback and have a moment, drop
                    me a note at{' '}
                    <a className="text-blue-500 hover:underline" href="mailto:garrettbland@hey.com">
                        garrettbland@hey.com
                    </a>
                </p>
                <p className="text-gray-800 leading-tight text-xl pb-12">Enjoy! 🍻</p>
                <button onClick={() => handleClose()} className="text-gray-700 hover:underline">
                    Close and start building
                </button>
            </div>
        </div>
    )
}

export default BetaMessage
