import { connectToDB } from "@/utils/database";
import Item from "@/models/items";

/* Endpoint for creating a new item */

export const POST = async (req) => {
    const { itemName, urls, categories, price, description } = await req.json();
    try {
        await connectToDB();

        console.log("ok api")

        const newItem = new Item({
            urls: urls,
            name: itemName,
            description: description,
            price: price,
            categories: categories,
            reviews: [],
          });

        // console.log(newItem)

        await newItem.save();

        return new Response(JSON.stringify(newItem), {status:201})
    } catch (error) {
        return new Response("Failed to create a new Item", { status: 500 })
    }
}