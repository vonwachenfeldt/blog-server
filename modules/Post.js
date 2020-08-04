const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    content: {
        type: String,
        unique: true,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    pass: {
        type: String,
        required: true
    }
})

module.exports = connections.blogServer.model("Post", PostSchema);