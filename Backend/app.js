require ("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());


// simple logger
if(process.env.NODE_ENV){
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});
}

app.get("/", (req, res) => {
    res.json({message: "Hello World AMr"})
});

const connectedDB = require("./Config/db");
connectedDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
