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
        const {
            first_name,
            last_name,
            email,
            password,
            phone_number,
            age } = req.body;
        const user = await userModel.createUser(first_name, last_name, email, password, phone_number, age);
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