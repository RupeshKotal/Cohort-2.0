const express = require("express")
const {userRoutes} = require("./Routes/indexUserRoutes")
const app = express()
app.use(express.json())

app.use('/paytm/',userRoutes)

app.listen(3000)