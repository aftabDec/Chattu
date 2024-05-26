const express = require('express');
const env = require("dotenv");
const routerAuth = require('./routes/authroute.js');
const MessageRouter = require('./routes/MessageRoute.js');
const connectDb = require('./db/connectMDB.js');
const cookieParse = require('cookie-parser')
const cors = require('cors'); // Import the cors middleware
const { app,server } = require("./socket.js") 


const port = process.env.PORT || 5000;

// env config here
env.config();
app.use(express.json())
app.use(cookieParse())

// Use cors middleware to enable CORS

// handling cors policy
const corsOptions = {
    origin: 'http://localhost:5173',
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
   credentials: true,
   
}

app.use(cors(corsOptions))

app.use("/message", MessageRouter);

app.use("/api/auth", routerAuth);




server.listen(port, () => {
    connectDb()
    console.log(`Server is running on port ${port}`);
});
