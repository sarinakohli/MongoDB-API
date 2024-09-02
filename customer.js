import mongoose from "mongoose";

//personal details of customers with required fields and default values
const CustomerSchema = new mongoose.Schema(
    {
        Title: 
        {
            type: String,
            options: ["Mx", "Ms", "Mr", "Mrs", "Miss", "Dr", "Other"], 
        },
        FirstName:
        {
            type: String,
            required: [true, "Please enter Item's FirstName"],
        },
        Surname:
        {
            type: String,
            required: [true, "Please enter Item's Surname"],
        
        },
        Mobile:
        {
            type: Number,
            required: [true, "Please enter Item's Mobile"],
            default: 0
        },
        Email:
        {
            type: String,
            required: [true, "Please enter Item's Email"],
        },
        HomeAddress1:
        {
            type: String,
            required: [true, "Please enter Item's HomeAddress"],
        },
        HomeAddress2:
        {
            type: String,
        },
        HomeTown:
        {
            type: String,
            required: [true, "Please enter Item's HomeTown"],
        },
        HomeCountyCity:
        {
            type: String,
            required: [true, "Please enter Item's HomeCountyCity"],
        },
        HomeEircode:
        {
            type: String,
        },
        ShipAddress1:
        {
            type: String,
            required: [true, "Please enter Item's ShipAddress"],
        },
        ShipAddress2:
        {
            type: String,
        },
        ShipTown:
        {
            type: String,
            required: [true, "Please enter Item's ShipTown"],
        },
        ShipCountyCity:
        {
            type: String,
            required: [true, "Please enter Item's ShipCountyCity"],
        },
        ShipEircode:
        {
            type: String,
        }
    },
    {
        timestamps: true
    }
);
//customer model export
const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer; 