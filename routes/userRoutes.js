const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const reservationController = require('../controllers/reservationController');
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of Users
 */
router.get('/', userController.getUsers);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
router.get('/:id', userController.getUserById);
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
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
 *         description: User created
 */
router.post('/', userController.createUser);
/**
 * @swagger
 * /users/{id}/reservations:
 *   post:
 *     summary: Create a reservation for a user
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

//router.post('/:id/reservations', reservationController.createReservation);
/**
 * @swagger
 * /users/{userId}/reservations/{id}:
 *   delete:
 *     summary: Delete a reservation for a user
 *     parameters:
 *       - in: path
 *         name: userId
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
 *         description: User or reservation not found
 */
//router.delete('/:userId/reservations/:id', reservationController.deleteReservation);

module.exports = router