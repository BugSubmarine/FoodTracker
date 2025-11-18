require('dotenv').config();

const express = require('express');

// creating the express app
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'});
});

// listen for requests
// access the port specified in .env
app.listen(process.env.PORT, () =>{
    console.log('listening on port', process.env.PORT);
});

process.env;