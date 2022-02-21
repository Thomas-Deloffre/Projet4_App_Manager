
const express=require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const uri = "mongodb+srv://Thomas:<password>@cluster0.xnted.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

dotenv.config();

mongoose.connect(uri, () => {
  console.log("Connected to MongoDb");
});


app.listen(8800, () => {
  console.log("backend is working")
})
