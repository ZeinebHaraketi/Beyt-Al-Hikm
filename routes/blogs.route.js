const express= require('express');
const {  AddBlog,  FindAllBlogs, FindSingleBlog,UpdateBlog,DeleteBlog} = require('../controllers/blogs.controller');
const router= express.Router()

/* add blog */
router.post('/blogs', AddBlog)

/* find all blogs */
router.get('/blogs', FindAllBlogs)

/* find single blog */
router.get('/blogs/:id', FindSingleBlog)

/* update blog */
router.put('/blogs/:id', UpdateBlog)

/* delete blog */
router.delete('/blogs/:id', DeleteBlog)


module.exports= router;