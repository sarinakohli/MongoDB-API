import mongoose from "mongoose";

//details of orders with required fields and default values
const OrderSchema = new mongoose.Schema(
    {
        Customer: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: [true, "Please provide the Customer ID"],
        },
        Items: 
        [
            {
                Item: 
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Item',
                    required: [true, "Please provide the Item ID"],
                },
                Quantity: 
                {
                    type: Number,
                    required: [true, "Please provide the Quantity of the item"],
                    default: 1
                }
            }
        ],
        TotalPrice: 
        {
            type: Number,
            required: true
        },
        OrderDate: 
        {
            type: Date,
            default: Date.now
        }
    }
);
//order model export
const Order = mongoose.model("Order", OrderSchema);
export default Order;
