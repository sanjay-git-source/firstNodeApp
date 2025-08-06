const express = require("express");
const dbConnection = require("./src/config/connectDB");
const userRouter = require("./src/routes/userRoute");
const app = express();
app.use(express.json())


app.use('/',userRouter)

app.listen(4000,()=>{
    dbConnection();
    console.log('index');  
})

//mongodb://localhost:27017/