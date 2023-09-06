const express = require("express")
const publicRoutes = require("./routes/public.routes")
require("./config/dbConfig").getDbConnection()

const authMiddlerware = require("./middleware/auth.middleware")
const cors = require("cors")

const app = express()

//middlerware 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


//public
app.use(publicRoutes)



app.listen(9999)
console.log("server started 9999");