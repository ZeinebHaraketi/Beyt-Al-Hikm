const { users, default: usersModels } = require("../models/users.models");
const Users = require("../models/users.models.js");
const ValidateEvent = require('../validation/users.validation.js');


const AddUser = async (req, res) => {
    try {
       
                    await Users.create(req.body)
                    res.status(200).json({ message: "User added with success" })
                

            
            
        }


     catch (error) {
        console.log(error.message);
    }
}
const FindAllUsers = async (req, res) => {
    try {
        const data = await Users.find();
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
}
const FindSingleUser = async (req, res) => {
    try {
        const data = await Users.findOne({ _id: req.params.id });
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
}
const UpdateUser = async (req, res) => {
    const { errors, isValid } = ValidateEvent(req.body);
    try {
        if (!isValid) {
            res.status(400).json(errors);
        } else {
            const data = await Users.findOneAndUpdate({ _id: req.params.id },
                req.body,
                { new: true });
            res.status(202).json(data);
        }
    } catch (error) {
        console.log(error.message);
    }

}
const DeleteUser = async (req, res) => {
    try {
        await Users.deleteOne({ _id: req.params.id });
        res.status(203).json({ message: "User deleted with success" });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    AddUser,
    FindAllUsers,
    FindSingleUser,
    UpdateUser,
    DeleteUser
}