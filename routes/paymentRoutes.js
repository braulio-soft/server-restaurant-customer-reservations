const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
//const reservationController = require('../controllers/reservationController');
/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Get all payments
 *     responses:
 *       200:
 *         description: List of Payments
 */
router.get('/', paymentController.getPayments);
/**
 * @swagger
 * /payments/{id}:
 *   get:
 *     summary: Get a payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Payment ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment found
 *       404:
 *         description: Payment not found
 */
router.get('/:id', paymentController.getPaymentById);
/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create a new payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Payment created
 */
router.post('/', paymentController.createPayment);

//router.post('/:id/reservations', reservationController.createReservation);
//router.delete('/:paymentId/reservations/:id', reservationController.deleteReservation);

module.exports = router