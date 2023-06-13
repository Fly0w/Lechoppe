import { connectToDB } from "@/utils/database";
import Item from "@/models/items";


// Endpoint to get a list of items that belongs to the categories in the request body
export const POST = async (req) => {
    const { categories, number } = await req.json();
    try {
        await connectToDB();

        if(categories === "All"){
            const items = await Item.find().limit(number)
            return new Response(JSON.stringify(items), {status: 200})
        }
        
        const items = await Item.find({ categories: { $regex: categories } }).limit(number)

        return new Response(JSON.stringify(items), {status: 200})

    } catch (error) {
        console.log(error)
    }
}
