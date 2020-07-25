const mongoose = require("mongoose");

const connectDB = async () => {
    const conn = await mongoose.createConnection(process.env.BLOGMONGOURI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })

    global.connections.blogServer = conn;

    console.log("BLOG connected");
}

module.exports = connectDB;