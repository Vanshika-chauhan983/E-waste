const express = require('express');
const dotenv =  require('dotenv');
const userApis = require("./route/user_route");


dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    res.send("hello");
})

app.use(userApis);

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})


