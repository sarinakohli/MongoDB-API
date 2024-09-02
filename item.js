import mongoose from "mongoose";

//details of items with required fields and default values
const ItemSchema = new mongoose.Schema(
    {
        Manufacturer: 
        {
            type: String, 
            required: [true, "Please enter Item's Manufacturer"],
        },
        Model:
        {
            type: String,
            options: ["iPhone 11", "iPhone 13", "Samsung S20", "iPhone X", "Samsung S21", "iPhone 12", "Samsung Galaxy", "iPhone 6", "iPhone 8", "iPhone XS"],
            required: [true, "Please enter Item's Model"],
        },
        Price:
        {
            type: Number,
            required: [true, "Please enter Item's Price"],
            default: 0
        },
    },
    {
        timestamps: true
    }
);
//item model export
const Item = mongoose.model("Item", ItemSchema);
export default Item; 