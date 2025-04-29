const pool = require('../config/db');

const getRestaurants = async () => {
    const res = await pool.query('SELECT * FROM restaurant');
    return res.rows;
}

const createRestaurant = async (name) => {
    const res = await pool.query('INSERT INTO restaurant (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
}

const getRestaurantById = async (id) => {
    const res = await pool.query('SELECT * FROM restaurant where id = $1', [id])
    return res.rows[0];
}

module.exports = {
    getRestaurants,
    createRestaurant,
    getRestaurantById
}