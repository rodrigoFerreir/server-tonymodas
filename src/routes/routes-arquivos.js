const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');

const Post = require('../models/Post');

routes.post('/post', multer(multerConfig).single('file'), async (req, res)=> {console.log(req.file);
    const post = await Post.crate({
        name:req.file.originalname,
        size:req.file.size,
        key:req.file.filename,
        url:'',
    });

    return res.json(post);
});
module.exports = routes;