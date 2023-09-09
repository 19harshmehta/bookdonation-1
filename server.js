const express = require("express")
const publicRoutes = require("./app/src/routes/public.routes")
const adminRoutes= require("./app/src/routes/admin.routes")
require("./app/src/config/dbConfig").getDbConnection()

const cors = require("cors")
const req = require("express/lib/request")

const app = express()

//middlerware 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


//public
app.use(publicRoutes)

//admin
app.use(adminRoutes)

app.listen(9999)
console.log("server started 9999");
