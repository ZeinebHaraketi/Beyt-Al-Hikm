const { blogs, default: blogsModels } = require("../models/blogs.models");
const Blogs = require("../models/blogs.models.js");
const ValidateEvent = require('../validation/blogs.validation.js');


const AddBlog = async (req, res) => {
    try {
       
                    await Blogs.create(req.body)
                    res.status(200).json({ message: "Blog added with success" })
                

            
            
        }


     catch (error) {
        console.log(error.message);
    }
}
const FindAllBlogs = async (req, res) => {
    try {
        const data = await Blogs.find();
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
}
const FindSingleBlog = async (req, res) => {
    try {
        const data = await Blogs.findOne({ _id: req.params.id });
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
}
const UpdateBlog = async (req, res) => {
    const { errors, isValid } = ValidateEvent(req.body);
    try {
        if (!isValid) {
            res.status(400).json(errors);
        } else {
            const data = await Blogs.findOneAndUpdate({ _id: req.params.id },
                req.body,
                { new: true });
            res.status(202).json(data);
        }
    } catch (error) {
        console.log(error.message);
    }

}
const DeleteBlog = async (req, res) => {
    try {
        await Blogs.deleteOne({ _id: req.params.id });
        res.status(203).json({ message: "Blog deleted with success" });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    AddBlog,
    FindAllBlogs,
    FindSingleBlog,
    UpdateBlog,
    DeleteBlog
}