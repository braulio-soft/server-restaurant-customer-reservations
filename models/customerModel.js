const pool = require('../config/db');

const getCustomers = async () => {
    const res = await pool.query('SELECT * FROM customer');
    return res.rows;
}

const createCustomer = async (name) => {
    const res = await pool.query('INSERT INTO customer (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
}

const getCostumerById = async (id) => {
    const res = await pool.query('SELECT * FROM customer where id = $1 ', [id])
    return res.rows[0];
}

module.exports = {
    getCustomers,
    createCustomer,
    getCostumerById
}