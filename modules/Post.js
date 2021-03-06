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
    image: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = connections.blogServer.model("Post", PostSchema);