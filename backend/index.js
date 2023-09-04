const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()

mongoose.connect('mongodb+srv://rohitmongoaccount:mongo123@cluster0.8pjfi8d.mongodb.net/internshala?retryWrites=true&w=majority')
const productSchema = new mongoose.Schema({})
const product = mongoose.model('users', productSchema)
// const data = await product.find()
// console.warn(data)
app.use(cors());

// connectDB()
app.get('/list', async (req, res) => {
    const data = await product.find()

    res.send(data)
})


app.listen(5000)