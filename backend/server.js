require('dotenv').config()
const mongoose = require('mongoose');
const cors = require("cors");
const express = require('express');

// creating the express app
const app = express();

(async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    } 
})();

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(cors());
app.use(express.json());


// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'});
});

app.use('/api/meals', require('./routes/meals'));
app.use("/api/tracker", require("./routes/logs"));
app.use("/api/loggings", require("./routes/tracker"));
app.use("/api/setGoal", require("./routes/setGoal"));
app.use("/api/returnGoal", require("./routes/returnGoal"));

// listen for requests
// access the port specified in .env
app.listen(process.env.PORT, () =>{
    console.log('listening on port', process.env.PORT);
});

process.env;