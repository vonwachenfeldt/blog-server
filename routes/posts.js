const Post = require("../modules/Post");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });

    res.json({ success: true, data: posts }); //res.json ~= res.send
});

router.get("/:title", async (req, res) => {
    var title = req.params.title;
    title = decodeURIComponent(title);
    const posts = await Post.find({ title: title }).sort({ createdAt: -1 });
    res.json({ success: true, data: posts })
});

router.post("/", async (req, res) => {
    try {
        var data = req.body;

        var titleFormatted = capitalize(data.title);
        var contentFormatted = data.content;
        var tagFormatted = capitalize(data.tag);
        var imageFormatted = data.image;

        titleFormatted = titleFormatted.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        contentFormatted = contentFormatted.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        tagFormatted = tagFormatted.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        imageFormatted = imageFormatted.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

        const post = await Post.create({

            title: titleFormatted,
            content: contentFormatted,
            tag: tagFormatted,
            image: imageFormatted
        })

        console.log("Post added", titleFormatted);
        res.json({
            success: true,
            data: post
        });
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            error: error.errmsg || errorToJson(error).message
        })
    }
});

const capitalize = string => string[0].toUpperCase() + string.slice(1);

// Convert the error to JSON
const errorToJson = error => JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)));

module.exports = router;