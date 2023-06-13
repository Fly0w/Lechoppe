import { connectToDB } from "@/utils/database";
import Credentials from "@/models/credentials";
import bcrypt from 'bcrypt';



// Endpoint check if the user's credentials are correct
export const POST = async (req) => {
    const { email, password } = await req.json();
    
    try {
        await connectToDB();
        const myPlaintextPassword = password;

        const userCredentials = await Credentials.findOne({email: email})

        if(!userCredentials){
            return new Response(JSON.stringify("Couldn't find email in database"), {status: 500})
        }

        const isPasswordValid = await bcrypt.compare(myPlaintextPassword, userCredentials.hashPassword);

        console.log(isPasswordValid)

        if(isPasswordValid == true){
            return new Response(JSON.stringify("You are successfully logged in"), {status: 200})
        } else {
            return new Response(JSON.stringify("Invalid credentials"), {status: 500})
        }

    } catch (error) {
        return new Response(JSON.stringify("Error while checking credentials"), {status: 500})
    }
}
