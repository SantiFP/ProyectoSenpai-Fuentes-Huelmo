const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movyapp');

const cors = require('cors');

app.use(cors());




const data = mongoose.model('movies', {id:String, title:String});


app.get('/movies', async (request,response) => {
    const movies = await data.find({}); 
    response.json(movies)

})
app.listen('5001', () =>{
    console.log("Server working")
})

