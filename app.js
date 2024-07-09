const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());



app.get("/", (req,res) =>{
    res.send("Hii")
})
// Auth Routes 
const authRoute = require('./Routes/authRoutes');
app.use('/auth',authRoute)

//  Users Routes 

const userRoute = require('./Routes/userRoutes');
app.use('/api/users',userRoute)

// Start the server



module.exports = app;
