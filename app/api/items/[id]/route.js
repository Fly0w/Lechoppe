import { connectToDB } from "@/utils/database";
import Item from "@/models/items";


// Endpoint to get one item info
export const GET = async (req, { params }) => {
    try {
        await connectToDB();

        const itemInfo = await Item.find({_id : params.id})
        
        return new Response(JSON.stringify(itemInfo), {status: 200})

    } catch (error) {
        console.log(error)
    }
}