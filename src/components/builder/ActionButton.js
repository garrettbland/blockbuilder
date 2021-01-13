import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Save, Settings, Loader } from 'react-feather'
import { SET_CUSTOM_MODAL } from '@/redux/constants'
import { useParams, navigate, Link } from '@reach/router'
import firebase from '@/src/firebase'
import EmailCapture from '@/components/EmailCapture'
import BetaMessage from '@/components/BetaMessage'

const ActionButton = () => {
    const blocks = useSelector((state) => state.blocks)
    const dispatch = useDispatch()
    const params = useParams()
    const [isLoading, setLoading] = useState(false)

    const handleSettingsClick = () => {
        dispatch({
            type: SET_CUSTOM_MODAL,
            payload: {
                visible: true,
                component: <BetaMessage />,
                maxWidth: 'max-w-3xl',
            },
        })
    }

    const handleExport = () => {
        setLoading(true)
        uploadToFirebase().then((data) => {
            setLoading(false)

            if (data.error) {
                console.error(data.message)
                alert('Uh oh. :/ Something went wrong. Forgive me, its still a work in progress.')
            } else {
                dispatch({
                    type: SET_CUSTOM_MODAL,
                    payload: {
                        visible: true,
                        component: <URLPreview pageId={data.page_id} />,
                        maxWidth: 'max-w-3xl',
                    },
                })
            }
        })
    }

    const uploadToFirebase = async () => {
        try {
            /**
             * Add blocks to firebase and generate UUID
             */

            const document = await firebase
                .firestore()
                .collection('beta')
                .add({
                    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
                    blocks,
                })

            return {
                page_id: document.id,
                type: 'create',
                successful: true,
            }
        } catch (err) {
            return {
                error: true,
                message: err,
            }
        }
    }

    return (
        <div className="fixed bottom-0 inset-x-0 z-20">
            <div className="flex justify-end items-center p-5 space-x-3">
                <button
                    onClick={() => handleSettingsClick()}
                    className="w-10 h-10 bg-gradient-to-b from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white rounded-full shadow-xl flex items-center justify-center focus:outline-none"
                >
                    <Settings size={32} strokeWidth={1} />
                </button>
                <button
                    onClick={() => handleExport()}
                    className="w-16 h-16 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-full shadow-xl flex items-center justify-center focus:outline-none"
                >
                    {isLoading && <Loader size={32} strokeWidth={2} className="animate-spin" />}
                    {!isLoading && <Save size={32} strokeWidth={1} />}
                </button>
            </div>
        </div>
    )
}

const URLPreview = ({ pageId }) => {
    return (
        <div className="p-4 flex items-center justify-center">
            <div className="my-12">
                <p className="font-bold text-lg tet-black text-center">Page Saved Successfully</p>
                <p className="text-gray-800 text-center">
                    Your page was created and can be shared and viewed below.
                </p>
                <div className="mt-6">
                    <p className="text-gray-600 text-center font-bold">Public Page URL</p>
                    <p className="text-center">
                        <a
                            className="text-blue-500 hover:underline"
                            href={`/pages/${pageId}`}
                            target="_blank"
                        >
                            https://blockbuilder.app/pages/{pageId}
                        </a>
                    </p>
                </div>
                <div className="mt-12">
                    <EmailCapture />
                </div>
            </div>
        </div>
    )
}

const CodePreview = ({ blocks }) => {
    /**
     * Takes in an blocks array and recursivley builds the site
     * and adds in buttons
     * @param {Array} data
     */
    const Builder = (data) => {
        return data
            .map((block) => {
                switch (block.type) {
                    case 'section': {
                        return `
                            <section class="${block.classList.join(' ')}">
                                ${block.data.length > 0 ? Builder(block.data) : ''}
                            </section>
                        `
                    }
                    case 'section-background': {
                        return `<div class="${block.classList.join(' ')}"></div>`
                    }
                    case 'section-divider-top': {
                        return `<div class="${block.classList.join(' ')}"></div>`
                    }
                    case 'section-divider-bottom': {
                        return `<div class="${block.classList.join(' ')}"></div>`
                    }
                    case 'row': {
                        if (Array.isArray(block.data) && block.data.length > 0) {
                            return `
                        <div class="${block.classList.join(' ')}">
                            ${Builder(block.data)}
                        </div>
                    `
                        }
                    }
                    case 'column': {
                        if (Array.isArray(block.data) && block.data.length > 0) {
                            return `
                        <div class="${block.classList.join(' ')}">
                            ${Builder(block.data)}
                        </div>
                    `
                        }
                    }
                    case 'text': {
                        return `
                        <div class="${block.classList.join(' ')}">text content</div>
                    `
                    }
                    case 'image': {
                        return `
                        <img class="${block.classList.join(' ')}" src="${block.data.src}" alt="${
                            block.data.alt
                        }"/>
                    `
                    }
                    case 'link': {
                        return `
                        <a class="${block.classList.join(' ')}" href="${block.data.href}" target="${
                            block.data.target
                        }">
                            ${block.data.title}
                        </a>
                    `
                    }
                }
            })
            .join(' ')
    }

    const SerializeBlocks = (blocks) => {
        return `
            <html>
                <head>
                    <title>Website</title>
                </head>
                <body>
                    ${Builder(blocks).trim()}
                </body>
            </html>
        `
    }

    return (
        <div className="p-4">
            <div className="bg-blueGray-800 text-white p-4 rounded font-mono">
                {SerializeBlocks(blocks)}
            </div>
        </div>
    )
}

const SettingsModal = () => {
    const params = useParams()
    return (
        <div className="p-4 flex items-center justify-center">
            <div className="my-12">
                <p className="font-bold text-lg tet-black text-center">Coming Soon</p>
                <p className="text-gray-800 text-center px-12">
                    This is where editing whole page level options will go. For example, typeface,
                    title, meta descriptions, favicons, etc.
                </p>
                <div className="my-6">
                    <p className="text-gray-600 text-center font-bold">Public Page URL</p>
                    <p className="text-gray-800 text-center">
                        Make sure to hit the save button in the bottom right corner to preview live
                        page
                    </p>
                </div>
                <div className="mt-12">
                    <EmailCapture />
                </div>
            </div>
        </div>
    )
}

export default ActionButton
