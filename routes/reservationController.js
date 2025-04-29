const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Get all reservations
 *     responses:
 *       200:
 *         description: List of reservations
 */
router.get('/', reservationController.getReservations);

module.exports = router