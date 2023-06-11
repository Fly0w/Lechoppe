import { Schema, model, models } from 'mongoose';

const ItemSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name is required"]
    },
    description:{
        type: String,
        required: [true, "Description is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    categories: {
        type: String,
        required: [true, "Categories are required"]
    },
    reviews: {
        type: [{
            creator: {
                type: String,
                required: true
              },
            text: {
                type: String,
                required: true
              },
            date: {
                type: String,
                required: true
              }
        }],
    },    
    urls: {
        type: [{
            title: String,
            src: String,
            alt: String
        }],
        required: [true, "URL is required"]
    }
});

const Item = models.Item || model("Item", ItemSchema);

export default Item;