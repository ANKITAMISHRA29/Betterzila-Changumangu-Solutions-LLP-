const mongoose = require("mongoose");

const database = async () => {
    try {
        await mongoose.connect("mongodb://localhost/task");
        console.log("Connected Successfully");
    } catch (error) {
        console.log(error);
        process.exit(0)
    }
}


module.exports = database;