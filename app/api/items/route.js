import { connectToDB } from "@/utils/database";
import Item from "@/models/items";


// Endpoint to get a list of items that belongs to the categories in the request body
export const POST = async (req) => {
    const { categories } = await req.json();
    try {
        await connectToDB();

        const items = await Item.find({ categories: { $in: [categories] } })
        
        return new Response(JSON.stringify(items), {status: 200})

    } catch (error) {
        console.log(error)
    }
}


// Endpoint to get the 50 first items in the database
export const GET = async (req) => {
    try {
        await connectToDB();
        console.log("get 50 item")

        const items = await Item.find().limit(50)
        
        return new Response(JSON.stringify(items), {status: 200})

    } catch (error) {
        console.log(error)
    }
}