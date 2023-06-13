import { Schema, model, models } from 'mongoose';

const CredentialsSchema = new Schema({
    email: {
        type: String
    },   
    hashPassword : {
        type : String
    } 
});

const Credentials = models.Credentials || model("Credentials", CredentialsSchema);

export default Credentials;