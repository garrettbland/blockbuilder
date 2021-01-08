var admin = require('firebase-admin')
import Head from 'next/head'
import { SerializeToHtml } from '@/utils/serialize'

const Page = ({ blocks, id, error = false }) => {
    console.log(blocks)
    if (error) {
        return <div>Something went wrong on our end</div>
    }

    return (
        <div>
            <Head>
                <title>Block Builder</title>
            </Head>
            <div>
                {/* <div>Fetch firebase page for {id}</div>
                <pre>
                    <code>{JSON.stringify(blocks, null, 4)}</code>
                </pre> */}
                <div dangerouslySetInnerHTML={{ __html: SerializeToHtml(blocks) }}></div>
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    try {
        const serviceAccount = require('@/src/firebase-admin.json')
        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
            })
        }

        /**
         * Get the id from the URL /pages/[id]
         */
        const document = await admin.firestore().collection('beta').doc(context.params.id).get()

        if (!document.exists) {
            return {
                notFound: true,
            }
        } else {
            return {
                props: {
                    id: context.params.id,
                    blocks: document.data().blocks,
                },
            }
        }
    } catch (err) {
        console.log(err)
        return {
            props: {
                error: true,
            },
        }
    }
}

export default Page
