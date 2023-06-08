import { connectToDB } from "@/utils/database";
import Item from "@/models/items";

// Endpoint to add a review to an item
export const PATCH = async (req, { params }) => {
    const { creator, text} = await req.json();
    try {
        await connectToDB();

        const reviewItem = await Item.find({_id : params.id})

        console.log(creator, text)
        //If the Item doesn't exist
        if (!reviewItem) {
            return new Response("Item not found", {status: 404})
        }

        reviewItem[0].reviews.push({
            creator: creator,
            text: text
        });

      
        await reviewItem[0].save();

        return new Response(JSON.stringify(reviewItem), {status: 200})

    } catch (error) {
        return new Response("Error while adding review", {status: 500})
    }
}