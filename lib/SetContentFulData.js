import { createClient } from "contentful"

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESTOKEN
})

const SetContentFulData = async (type, order) => {
    try {

        const entries = await client.getEntries({
            content_type: type,
            order: order
        })

        if (entries.items) return entries.items

    } catch (error) {

        console.log(error)
    }

}

export default SetContentFulData