// var admin = require('firebase-admin')

import React, { useEffect, useState } from 'react'
// import Head from 'next/head'
import firebase from '@/src/firebase'
// import { useRouter } from 'next/router'
import { SerializeToHtml } from '@/utils/serialize'
import { useParams } from '@reach/router'

const Page = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [blocks, setBlocks] = useState([])
    const params = useParams()
    const id = params.pageId

    useEffect(() => {
        /**
         * Load blocks on page load
         */
        if (id) {
            fetchBlocks().then(({ blocks }) => {
                setBlocks(blocks)
                setIsLoading(false)
            })
        }
    }, [id])

    const fetchBlocks = async () => {
        try {
            const document = await firebase.firestore().collection('beta').doc(id).get()
            if (!document.exists) {
                console.log('doc doesnt exist')
                return {
                    error: true,
                }
            } else {
                return {
                    blocks: document.data().blocks,
                }
            }
        } catch (err) {
            console.log(err)
            return {
                error: true,
            }
        }
    }

    if (isLoading) {
        return (
            <div className="my-12">
                <div className="max-w-xl mx-auto text-center text-lg text-gray-800">Loading...</div>
            </div>
        )
    }

    return (
        <div>
            {!isLoading && (
                <div>
                    <div dangerouslySetInnerHTML={{ __html: SerializeToHtml(blocks) }}></div>
                    <pre>
                        <code>{JSON.stringify(blocks, null, 4)}</code>
                    </pre>
                </div>
            )}
        </div>
    )
}

export default Page
