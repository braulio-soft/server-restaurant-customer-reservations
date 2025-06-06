const pool = require('../config/db');

const getPlans = async () => {
    const res = await pool.query('SELECT * FROM plans');
    return res.rows;
}

//TODO: Fix details in body request for create plan with required values . 
const createPlan = async (name) => {
    const res = await pool.query('INSERT INTO plans (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
}

const getPlanById = async (id) => {
    const res = await pool.query('SELECT * FROM plans where id = $1 ', [id])
    return res.rows[0];
}

module.exports = {
    getPlans,
    createPlan,
    getPlanById
}