const express = require("express")
const {userRoutes,accountRoutes} = require("./Routes/mainRouter")

const app = express()
app.use(express.json())

app.use('/paytm/',userRoutes)
app.use("/paytmAcc",accountRoutes)

app.listen(3000)