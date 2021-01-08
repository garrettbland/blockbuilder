const Page = () => {
    return (
        <div>
            <div>Fetch firebase page</div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()

    // Pass data to the page via props
    // return { props: { data } }

    return {
        props: {
            id: context.params.id,
        },
    }
}

export default Page
