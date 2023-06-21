import { connectToDB } from "@/utils/database";
import User from "@/models/users";

// Endpoint check if the user's credentials are correct
export const POST = async (req) => {
    const { email } = await req.json();
    
    try {
        await connectToDB();
        const userInfo = await User.findOne({ email: email })

        console.log(userInfo)

        if(!userInfo){
            return new Response("User not found", {status: 404})
        }

        return new Response(JSON.stringify(userInfo), {status: 500})

    } catch (error) {
        return new Response("Error while sending user Info", {status: 500})
    }
}

