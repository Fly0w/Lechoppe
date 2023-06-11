import { connectToDB } from "@/utils/database";
import Item from "@/models/items";

// Endpoint to Delete a review to an item
export const PATCH = async (req, { params }) => {
    const { reviewId } = await req.json();
    try {
        await connectToDB();

        //We are looking for the ID of the review that we want to delete
        const updatedItem = await Item.findOne({ _id: params.id }); 

        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }

        updatedItem.reviews.pull({_id: reviewId});

        updatedItem.save();

        return new Response(JSON.stringify(updatedItem), {status: 200})

    } catch (error) {
        return new Response("Error while deleting review", {status: 500})
    }
}