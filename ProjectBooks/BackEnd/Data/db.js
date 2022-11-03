
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Books", {
    useNewUrlParser: true
}).then(() => console.log("Connected to MongoDB")).catch(err => console.error(err));

const booksSchema = new mongoose.Schema({
    Title: {
        type: String,
        require: true
    },
    Series: {
        type: String,
        require: true
    },
    Price: {
        type: Number,
        require: true
    }
});

const BookModel = mongoose.model("book", booksSchema);

module.exports = BookModel;