const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/config/blog.env" });

// Set up global connections variable
if (!global.connections) global.connections = {};

const connectDB = require("./config/db");
connectDB().then(() => {
    app.use("/api/v1/posts", require("./routes/posts"));
})
// connects to the database

const app = express();
app.use(cors());
app.use(express.json());

module.exports = () => {
    const module = {};

    const port = process.env.app_port || process.env.PORT || 5000;

    module.startServer = () => {

        app.listen(port, () => console.log("blog server running on port ", port));
    }
    module.app = app;

    return module;
}