const express = require("express")
const morgan = require("morgan")
const { join } = require("path")

const app = express()

app.use(morgan("dev1"))

app.get("/", (req, res, next) => {
    try{
        res.sendFile(join(__dirname, "./browser/home.html"))
    }catch(err){
        next(err)
    }

})

app.get("/about", (req, res, next) => {
    try{
        res.sendFile(join(__dirname, "./browser/about.html"))
    }catch(err){
        next(err)

    }

})

app.get("/quotes", (req, res, next) => {
    try{
        res.sendFile(join(__dirname, "./browser/quotes.html"))
    }catch(err){
        next(err)
    }
})

//handle 404
app.use((req, res, next) => {
    try{
        res.status(404).send("404 Page Not Found")
    }catch(err){
        next(err)
    }
})

//error handler
app.use((err, req, res, next) => {
    res.status(500)
    res.json({ msg: "Server Error!", err })
})

app.listen(3000, () => console.log("Server is listening on port 3000..."))
