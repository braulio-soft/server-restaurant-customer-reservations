const itemModel = require('../models/itemModel')

const getItems = async (req, res) => {
    try {
        const items = await itemModel.getItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createItem = async (req, res) => {
    try {
        const { name } = req.body;
        const item = await itemModel.createItem(name);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

const getItemById = async (req, res) => {
    try {
        const item = await itemModel.getItemById(req.params.id);
        if (!item) return res.status(404).json({ mensaje: 'Not Found' });
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getItems,
    createItem,
    getItemById
}