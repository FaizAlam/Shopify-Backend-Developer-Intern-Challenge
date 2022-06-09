const express = require('express')
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
homeRoute = require('./routes/homeRoute')
editRoute = require('./routes/editRoute')
deleteRoute = require('./routes/deleteRoute');
const app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const mongoURI = process.env.URI;
mongoose.connect(mongoURI).then(() => console.log("Connected !"), );



// route to retrieve all the products and add a new product in the inventory
app.use('/product', homeRoute);

// route to edit product details
app.use('/edit', editRoute);

// route to delete a product, retrieve deleted products, undelete a product 
app.use('/delete', deleteRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server started at " + PORT));