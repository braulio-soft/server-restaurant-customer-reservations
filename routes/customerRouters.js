const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const reservationController = require('../controllers/reservationController');
/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all costumers
 *     responses:
 *       200:
 *         description: List of Costumers
 */
router.get('/', customerController.getCustomers);
/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: Get a customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Customer ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer found
 *       404:
 *         description: Customer not found
 */
router.get('/:id', customerController.getCustomerById);
/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a new customer
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
 *         description: Customer created
 */
router.post('/', customerController.createCustomer);
/**
 * @swagger
 * /customers/{id}/reservations:
 *   post:
 *     summary: Create a reservation for a customer
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               partyCount:
 *                 type: integer
 *               restaurantId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reservation created
 */
router.post('/:id/reservations', reservationController.createReservation);
/**
 * @swagger
 * /customers/{customerId}/reservations/{id}:
 *   delete:
 *     summary: Delete a reservation for a customer
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Reservation deleted
 *       404:
 *         description: Customer or reservation not found
 */
router.delete('/:customerId/reservations/:id', reservationController.deleteReservation);

module.exports = router