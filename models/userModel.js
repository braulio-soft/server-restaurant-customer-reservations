const pool = require('../config/db');

const getUsers = async () => {
    const res = await pool.query('SELECT * FROM users');
    return res.rows;
}

//TODO: Fix details in body request for create user with required values . 
const createUser = async (name) => {
    const res = await pool.query('INSERT INTO users (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
}

const getUserById = async (id) => {
    const res = await pool.query('SELECT * FROM users where id = $1 ', [id])
    return res.rows[0];
}

module.exports = {
    getUsers,
    createUser,
    getUserById
}