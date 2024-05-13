const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT ||  8000
const cors = require('cors')
const {MONGOURI} = require("./config/keys")

app.use(cors({
    origin: 'http://localhost:8000' 
  }));

mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("Connected to Mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("Error Connecting: ",err)
}) 

require('./models/user')
require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))

if(process.env.NODE_ENV=="production"){
    app.use(express.static('nonews/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'nonews','build','index.html'))
    })
}
app.listen(PORT,()=>{
    console.log("Server is running on",PORT)
})