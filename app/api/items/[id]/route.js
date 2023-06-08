import { connectToDB } from "@/utils/database";
import Item from "@/models/items";


// Endpoint to get one item info
export const GET = async (req, { params }) => {
    try {
        await connectToDB();

        const itemInfo = await Item.find({_id : params.id})
        
        return new Response(JSON.stringify(itemInfo), {status: 200})

    } catch (error) {
        return new Response("Error while getting item", {status: 500})
    }
}


// Endpoint to edit an item
export const PATCH = async (req, { params }) => {
    const { itemName, urls, categories, price, description } = await req.json();
    try {
        await connectToDB();

        const existingItem = await Item.find({_id : params.id})

        //If the Item doesn't exist
        if (!existingItem) {
            return new Response("Item not found", {status: 404})
        }

        existingItem[0].name = itemName;
        existingItem[0].urls = urls;
        existingItem[0].categories = categories;
        existingItem[0].price = price;
        existingItem[0].description = description;
      
        await existingItem[0].save();

        return new Response(JSON.stringify(existingItem), {status: 200})

    } catch (error) {
        return new Response("Error while Editing item", {status: 500})
    }
}


// Endpoint to delete an item
export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();

        await Item.findByIdAndRemove(params.id);
        
        return new Response("Item successfully deleted", {status: 200})

    } catch (error) {
        return new Response("Error while deleting item", {status: 500})
    }
}

