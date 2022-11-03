const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const bodyParser = require("body-parser")

app.use(bodyParser.json());

const route = require(`./routes/booksdb`);

app.use("/book", route);

const server = app.listen(3000, () => {
    console.log(`server has started succesfully on port number ${server.address().port}`)
});

module.exports = server;
