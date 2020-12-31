import * as contentful from "contentful"

const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESTOKEN
})

const SetContentFulData = async (type, order) => {
    const entries = await client.getEntries({
        content_type: type,
        order: order
    })
    if (entries.items) return entries.items

}

export default SetContentFulData