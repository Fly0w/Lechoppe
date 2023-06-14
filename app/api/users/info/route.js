import { connectToDB } from "@/utils/database";
import Credentials from "@/models/credentials";
import User from "@/models/users";

// Endpoint check if the user's credentials are correct
export const POST = async (req) => {
    const { email } = await req.json();
    
    try {
        await connectToDB();
        const userInfo = await User.findOne({email: email})

        if(!userInfo){
            return new Response(JSON.stringify("No account registered with this email"), {status: 500})
        }

        console.log(userInfo)

        return new Response(JSON.stringify(userInfo), {status: 200})

    } catch (error) {
        return new Response(JSON.stringify("Error while sending user Info"), {status: 500})
    }
}
