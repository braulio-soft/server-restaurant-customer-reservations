const pool = require('../config/db');

const getItems = async () => {
    const res = await pool.query('SELECT * FROM items');
    return res.rows;
}

//TODO: Fix details in body request for create item with required values . 
const createItem = async (name) => {
    const res = await pool.query('INSERT INTO items (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
}

const getItemById = async (id) => {
    const res = await pool.query('SELECT * FROM items where id = $1 ', [id])
    return res.rows[0];
}

module.exports = {
    getItems,
    createItem,
    getItemById
}