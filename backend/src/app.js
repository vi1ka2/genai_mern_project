const express = require("express")
const aiRoutes = require('./routes/ai.routes')
const cors =  require('cors')
const app = express()

app.get("/", (req, res)=>{
    res.send("Welcome ")
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/ai', aiRoutes);

module.exports = app