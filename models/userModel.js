const pool = require('../config/db');
const bcrypt = require('bcrypt');

const getUsers = async () => {
    const res = await pool.query('SELECT id, first_name, last_name, email, phone_number, age, created_at,updated_at,cart_id FROM users');
    return res.rows;
}

//TODO: Fix details in body request for create user with required values . 
const createUser = async (first_name, last_name, email, password, phone_number, age) => {
    const now = new Date();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const res = await pool.query('INSERT INTO users (first_name, last_name, email, password, phone_number, age ,created_at) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *', [first_name, last_name, email, hashedPassword, phone_number, age, now]);
    return res.rows[0];
}

const getUserById = async (id) => {
    const res = await pool.query('SELECT * FROM users where id = $1 ', [id])
    const user = res.rows[0];
    if (user) {
        delete user.password; 
    }
    return user;
}

module.exports = {
    getUsers,
    createUser,
    getUserById
}