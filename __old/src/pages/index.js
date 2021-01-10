import { useEffect } from 'react'
import { useRouter } from 'next/router'
import BuilderWrapper from '@/components/builder/BuilderWrapper'

const Home = () => {
    const router = useRouter()

    useEffect(() => {
        if (router?.query?.page_id !== undefined) {
            console.log(`Page id exists...${router.query.page_id}`)
        }
    }, [router.query.page_id])

    return <BuilderWrapper />
}

export default Home
