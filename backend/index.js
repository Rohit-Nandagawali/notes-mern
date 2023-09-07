const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()

mongoose.connect('mongodb+srv://rohitmongoaccount:mongo123@cluster0.8pjfi8d.mongodb.net/Notes-web-app?retryWrites=true&w=majority')
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
}, {
    timestamps: true
})
const Note = mongoose.model('notes', noteSchema)
app.use(cors());
app.use(express.json());

// connectDB()

// put API

app.post('/new', async (req, res) => {
    let data = new Note(req.body)
    let result = await data.save()
    res.send(result)
})

// update API
app.put('/update/:_id', async (req, res) => {
    console.log(req.params);

    let result = await Note.updateOne(req.params, req.body)
    res.send(req.body)
})

// delete API
app.delete('/delete/:_id', async (req, res) => {
    let data = new Note(req.params)
    let result = await data.deleteOne(req.params)
    res.send("delete")
})


// List API
app.get('/list', async (req, res) => {
    const data = await Note.find()
    res.send(data)
})

// search API
app.get('/search/:key', async (req, res) => {
    const data = await Note.find({
        "$or": [
            { title: { $regex: req.params.key } },
            { description: { $regex: req.params.key } },
            // { updatedAt: { $regex: req.params.key } },
        ]
    })
    res.send(data)
})


app.listen(5000)