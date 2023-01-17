const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")


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

app.use("/v1/auth", authRoute)
app.use("/v1/user", userRoute)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Starting with port ${PORT}`)
})