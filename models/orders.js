import { Schema, model, models } from 'mongoose';

const OrderSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    content: {
        type: [{
            item: {
                type: String,
                required: true
            },
            quantity: {
                type : Number,
                required: true
            },
        }],
        required: true
    },
    status:{
        type: String,
        required: true
    }
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;