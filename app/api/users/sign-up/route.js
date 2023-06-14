import { connectToDB } from "@/utils/database";
import Credentials from "@/models/credentials";
import User from "@/models/users";
import bcrypt from 'bcrypt';

// Endpoint register a new user in the database
export const POST = async (req) => {
    const { email, username, password } = await req.json();
    try {
        await connectToDB();
        const saltRounds = 10;

        const emailExists = await Credentials.findOne({email: email})

        if(emailExists){
            return new Response(JSON.stringify("An account with this email already exists. Try logging in."), {status: 500})
        }

        // Create an entry for new credentials
        bcrypt.hash(password, saltRounds, async function(err, hash) {
            // Store hash in your password DB.
            const newCred = new Credentials ({
                email: email,
                hashPassword: hash
            })
            await newCred.save();
        });

        //Create an entry for new user
        const newUser = new User({
            username: username,
            email: email,
            access: "user",
            image: "",
        })

        console.log(newUser);

        try {
            await newUser.save();
        } catch (error) {
            console.log(error);
        }
        
        return new Response(JSON.stringify(`Welcome ${username}`), {status: 200})

    } catch (error) {
        return new Response(JSON.stringify("Error while creating user"), {status: 500})
    }
}
