const express = require("express")
const dotenv = require('dotenv')
const cors = require("cors")
const mongoose = require("mongoose")
dotenv.config()

const app = express()
app.use(cors())
mongoose.connect(process.env.MONGO_URL).then((data)=>{
    console.log("db connect successfully")
}).catch((e)=>{
    console.log(e)
    console.log("db connection have problem")
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});