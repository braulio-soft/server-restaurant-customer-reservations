const pool = require('../config/db');

const getReservations = async () => {
    const res = await pool.query('SELECT * FROM reservation');
    return res.rows;
}

const createReservation = async (customerId, partyCount, restaurantId) => {
    const res = await pool.query('INSERT INTO reservation (customer_id,party_count,restaurant_id) VALUES ($1,$2,$3) RETURNING *', [customerId, partyCount, restaurantId]);
    return res.rows[0];
}

const deleteReservation = async (id) => {
    const res = await pool.query('DELETE FROM reservation WHERE id = $1 ', [id]);
}

module.exports = {
    getReservations,
    createReservation,
    deleteReservation
}