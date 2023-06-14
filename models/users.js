import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    username:{
        type: String,
        required: [true, "Username is required"]
    },
    email:{
        type: String,
        required: [true, "Email is required"]
    },
    access: {
        type: String,
        required: [true, "Access type is required"]
    },
    image: {
        type: String,
    },
    orders: {
        type: [String], //Orders will be searched by their Ids
    },    
    basket: {
        type: [{
            item: {
                type: String,
                required: [true, "Item ID is required"]
            },
            quantity: {
                type : Number,
                required: [true, "Quantity is required"]
            },
        }],
    }
});

const User = models.User || model("User", UserSchema);

export default User;