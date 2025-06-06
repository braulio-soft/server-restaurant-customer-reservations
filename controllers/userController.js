const userModel = require('../models/userModel')

const getUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await userModel.createUser(name);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) return res.status(404).json({ mensaje: 'Not Found' });
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getUsers,
    createUser,
    getUserById
}