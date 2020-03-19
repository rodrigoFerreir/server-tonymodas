const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    creatAt:{
        type: Date,
        default:Date.now,
    },
});
module.exports = mongoose.model("Post", PostSchema);