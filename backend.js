/*
The approach I took for this database model was to create serparate files for each model.
I imported each to this backend script and then developed a CRUD functionality for each. 
I added a menu to the server with links to each of the models on http://localhost:3000.
I've connected the server to the mongoDB database using mongoose.
*/

//all imports
import express from 'express';
import mongoose from 'mongoose';
import Item from './item.js';
import Customer from './customer.js';
import Order from './order.js';

const app = express();

app.use(express.json());   
app.use(express.urlencoded({extended: true})); 

app.get('/',(req, res) =>
{
   const message = 
   `<style>
        body
        {
            font-family: 'Roboto', sans-serif;
        }
   </style>
   <h1>Hello from Nodd API Server</h1>
   <p>Please use the following endpoints to interact with the server:</p>
   <ul>
       <li><a href="/api/items">/api/items</a></li>
       <li><a href="/api/customers">/api/customers</a></li>
       <li><a href="/api/orders">/api/orders</a></li>
   </ul>
   `;
   res.send(message);
});
//get all items
app.get('/api/items', async (req, res) =>
{
    try
    {
        const items = await Item.find();
        res.json(items);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//get all customers
app.get('/api/customers', async (req, res) =>
{
    try
    {
        const customers = await Customer.find();
        res.json(customers);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//get all orders
app.get('/api/orders', async (req, res) =>
{
    try
    {
        const orders = await Order.find();
        res.json(orders);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//get items by id
app.get('/api/item/:id', async (req, res) =>
{
    try
    {
        const item = await Item.findById(req.params.id);
        res.json(item);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//get customers by id
app.get('/api/customer/:id', async (req, res) =>
{
    try
    {
        const customer = await Customer.findById(req.params.id);
        res.json(customer);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//get orders by id
app.get('/api/order/:id', async (req, res) =>
{
    try
    {
        const order = await Order.findById(req.params.id);
        res.json(order);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//create new item
app.post('/api/items', async (req, res) => 
{
   try
   {
    const item = await Item.create(req.body);
    res.status(200).json(item);
   }
   catch(error)
   {
    res.status(500).json({message: error.message});
   }
});
//create new customer
app.post('/api/customers', async (req, res) => 
{
   try
   {
    const customer = await Customer.create(req.body);
    res.status(200).json(customer);
   }
   catch(error)
   {
    res.status(500).json({message: error.message});
   }
});
//create new order
app.post('/api/orders', async (req, res) => 
{
   try
   {
    const order = await Order.create(req.body);
    res.status(200).json(order);
   }
   catch(error)
   {
    res.status(500).json({message: error.message});
   }
});
//update item
app.put('/api/item/:id', async (req, res) =>
{
    try
    {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body);
        
        if(!item)
        {
            return res.status(404).json({message: "Item not found"});
        }

        const UpdatedItem = await Item.findById(req.params.id); 
        res.status(200).json(UpdatedItem);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//update customer
app.put('/api/customer/:id', async (req, res) =>
{
    try
    {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body);
        
        if(!customer)
        {
            return res.status(404).json({message: "Customer not found"});
        }

        const UpdatedCustomer = await Customer.findById(req.params.id); 
        res.status(200).json(UpdatedCustomer);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//update order
app.put('/api/order/:id', async (req, res) =>
{
    try
    {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body);
        
        if(!order)
        {
            return res.status(404).json({message: "Order not found"});
        }

        const UpdatedOrder = await Order.findById(req.params.id); 
        res.status(200).json(UpdatedOrder);
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//delete item
app.delete('/api/item/:id', async (req, res) =>
{
    try
    {
        const item = await Item.findByIdAndDelete(req.params.id);
        if(!item)
        {
            return res.status(404).json({message: "Item not found"});
        }
        res.status(200).json("Item Deleted Successfully");
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//delete customer
app.delete('/api/customer/:id', async (req, res) =>
{
    try
    {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if(!customer)
        {
            return res.status(404).json({message: "Customer not found"});
        }
        res.status(200).json("Customer Deleted Successfully");
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//delete order
app.delete('/api/order/:id', async (req, res) =>
{
    try
    {
        const order = await Order.findByIdAndDelete(req.params.id);
        if(!order)
        {
            return res.status(404).json({message: "Order not found"});
        }
        res.status(200).json("Order Deleted Successfully");
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});
//connect to database
mongoose.connect("mongodb+srv://kohlisarina:QTnAju4RZoD2b3QD@backend.1fgkw99.mongodb.net/API-Database?retryWrites=true&w=majority&appName=Backend")
.then(() => 
{
    console.log("Connected to Database!");
    app.listen(3000, function ()
    {
        console.log(`Server running on port: http://localhost:3000`); 
    });
})
.catch(() =>
{
    console.log("Connection Failed!");
});