import { connectToDB } from "@/utils/database";
import User from "@/models/users";


// Endpoint to get one user info
export const GET = async (req, { params }) => {
    try {
        await connectToDB();

        const UserInfo = await User.findOne({_id : params.id})
        
        return new Response(JSON.stringify(UserInfo), {status: 200})

    } catch (error) {
        return new Response("Error while getting User", {status: 500})
    }
}


// Endpoint to edit a user
export const PATCH = async (req, { params }) => {
    const {  } = await req.json();
    try {
        await connectToDB();

        const existingUser = await User.findOne({_id : params.id})

        //If the User doesn't exist
        if (!existingUser) {
            return new Response("User not found", {status: 404})
        }

        //modif
        //modif 
      
        await existingUser.save();

        return new Response(JSON.stringify(existingUser), {status: 200})

    } catch (error) {
        return new Response("Error while Editing User", {status: 500})
    }
}


// Endpoint to delete a user
export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();

        await User.findByIdAndRemove(params.id);
        
        return new Response("User successfully deleted", {status: 200})

    } catch (error) {
        return new Response("Error while deleting User", {status: 500})
    }
}

