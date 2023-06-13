import { connectToDB } from "@/utils/database";
import Credentials from "@/models/credentials";
import bcrypt from 'bcrypt';



// Endpoint register a new use in the database
export const POST = async (req) => {
    const { email, password } = await req.json();
    try {
        await connectToDB();
        const saltRounds = 10;
        const myPlaintextPassword = password;


        const emailExists = await Credentials.find({email: email})

        console.log(emailExists)

        if(emailExists[0]){
            return new Response(JSON.stringify("Email already in the DB"), {status: 500})
        }

        bcrypt.hash(myPlaintextPassword, saltRounds, async function(err, hash) {
            // Store hash in your password DB.
            const newUser = new Credentials ({
                email: email,
                hashPassword: hash
            })
            await newUser.save();
        });
        
        return new Response(JSON.stringify("User successfully created"), {status: 200})

    } catch (error) {
        return new Response(JSON.stringify("Error while creating user"), {status: 500})
    }
}
