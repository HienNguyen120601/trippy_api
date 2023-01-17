const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

const authRoute = require("./routes/auth")

const app = express()



mongoose.connect("mongodb+srv://c2star07:hiennguyen123@cluster0.n0rogqq.mongodb.net/trippy?retryWrites=true&w=majority")
    .then(() => {
        console.log('Success connected database')
    })
    .catch(() => {
        console.log("Something went wrong")
    })

app.use(cors())
app.use(cookieParser())
app.use(express.json())

//router
app.use("/", () => {
    res.send("Chin chào !! This is api design and coding by Nguyên :3 .If you see this message. Have a good day moaz moaz :3")
})
app.use("/v1/auth", authRoute)


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Starting with port ${PORT}`)
})