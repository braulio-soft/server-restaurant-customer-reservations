const pool = require('../config/db');

const getPayments = async () => {
    const res = await pool.query('SELECT * FROM payments');
    return res.rows;
}

//TODO: Fix details in body request for create payment with required values . 
const createPayment = async (name) => {
    const res = await pool.query('INSERT INTO payments (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
}

const getPaymentById = async (id) => {
    const res = await pool.query('SELECT * FROM payments where id = $1 ', [id])
    return res.rows[0];
}

module.exports = {
    getPayments,
    createPayment,
    getPaymentById
}